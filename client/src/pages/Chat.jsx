import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Send, Plus, Menu, X, Moon, Sun, LogOut,
  MessageSquare, Trash2, ChevronDown, Copy, Check, User, Mic
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';
import { generateAIResponse, formatTimestamp, generateId } from '../utils/chatUtils';

const INITIAL_HISTORY = [
  { id: generateId(), title: 'Flying over neon city', preview: 'I was soaring above a city...', date: 'Yesterday' },
  { id: generateId(), title: 'Ocean of mirrors', preview: 'The water reflected everything...', date: 'Yesterday' },
  { id: generateId(), title: 'Forest of crystal trees', preview: 'Each tree was made of glass...', date: '2 days ago' },
  { id: generateId(), title: 'Meeting my future self', preview: 'I saw myself but older...', date: '3 days ago' },
];

const WELCOME_MSG = {
  id: 'welcome',
  role: 'ai',
  text: "Hello, dreamer! ✨ I'm QuickRaina, your AI dream visualization companion. Tell me about a dream you'd like to explore, and I'll help bring it to life. What did you dream about?",
  timestamp: new Date(),
};

function TypingIndicator({ dark }) {
  return (
    <div className="flex items-end gap-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg">
        <Sparkles className="w-4 h-4 text-white" />
      </div>
      <div className={`px-5 py-4 rounded-2xl rounded-bl-sm ${dark ? 'bg-[#1a1a2e] border border-white/8' : 'bg-slate-100'}`}>
        <div className="flex gap-1.5 items-center h-4">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-violet-400"
              style={{ animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatMessage({ msg, dark }) {
  const [copied, setCopied] = useState(false);
  const isUser = msg.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(msg.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`flex items-end gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      {/* Avatar */}
      {isUser ? (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${dark ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-600'}`}>
          <User className="w-4 h-4" />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/25">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      )}

      {/* Bubble */}
      <div className={`group flex flex-col max-w-[75%] sm:max-w-[65%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`relative px-5 py-3.5 rounded-2xl leading-relaxed text-sm ${
            isUser
              ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-br-sm shadow-lg shadow-violet-500/20'
              : dark
              ? 'bg-[#1a1a2e] text-slate-200 rounded-bl-sm border border-white/8'
              : 'bg-slate-100 text-slate-800 rounded-bl-sm'
          }`}
        >
          {msg.text}
          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={`absolute -top-2 ${isUser ? '-left-2' : '-right-2'} opacity-0 group-hover:opacity-100 transition-all duration-200 w-6 h-6 rounded-md flex items-center justify-center ${dark ? 'bg-[#0a0a0f] border border-white/10 text-slate-400' : 'bg-white border border-slate-200 text-slate-500'} shadow-sm hover:scale-110`}
          >
            {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
          </button>
        </div>
        <span className={`text-xs mt-1 px-1 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
          {formatTimestamp(msg.timestamp)}
        </span>
      </div>
    </motion.div>
  );
}

export default function Chat() {
  const { dark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [messages, setMessages] = useState([WELCOME_MSG]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatHistory, setChatHistory] = useState(INITIAL_HISTORY);
  const [activeChatId, setActiveChatId] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isTyping) return;
    setInput('');

    const userMsg = { id: generateId(), role: 'user', text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const aiText = await generateAIResponse(text);
      const aiMsg = { id: generateId(), role: 'ai', text: aiText, timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = () => {
    if (messages.length > 1) {
      const firstUserMsg = messages.find(m => m.role === 'user');
      if (firstUserMsg) {
        setChatHistory(prev => [{
          id: generateId(),
          title: firstUserMsg.text.slice(0, 40) + (firstUserMsg.text.length > 40 ? '...' : ''),
          preview: firstUserMsg.text,
          date: 'Today',
        }, ...prev]);
      }
    }
    setMessages([{ ...WELCOME_MSG, id: generateId(), timestamp: new Date() }]);
    setActiveChatId(null);
    setInput('');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const suggestedPrompts = [
    "I was flying over a glowing purple galaxy...",
    "I dreamed of a forest made of crystal...",
    "There was an endless ocean of liquid silver...",
  ];

  if (!user) return null;

  return (
    <div className={`flex h-screen overflow-hidden ${dark ? 'bg-[#0a0a0f]' : 'bg-slate-50'}`}>
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`flex flex-col w-72 flex-shrink-0 border-r h-full z-30 ${
              dark ? 'bg-[#0d0d16] border-white/10' : 'bg-white border-slate-200'
            }`}
          >
            {/* Sidebar Header */}
            <div className={`flex items-center justify-between px-4 py-4 border-b ${dark ? 'border-white/10' : 'border-slate-100'}`}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.4)]">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-display font-bold text-lg gradient-text">QuickRaina</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className={`p-1.5 rounded-lg ${dark ? 'text-slate-500 hover:text-white hover:bg-white/10' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'} transition-all`}>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* New Chat */}
            <div className="px-3 pt-4 pb-2">
              <button
                id="new-chat-btn"
                onClick={handleNewChat}
                className="w-full flex items-center gap-2 px-4 py-3 rounded-xl border bg-gradient-to-r from-violet-600/10 to-cyan-500/10 border-violet-500/20 text-violet-400 text-sm font-semibold hover:border-violet-500/40 hover:from-violet-600/20 hover:to-cyan-500/20 transition-all duration-300 group"
              >
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                New Dream Chat
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto px-3 py-2">
              <div className={`text-xs font-semibold uppercase tracking-wide px-2 py-2 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                Recent Dreams
              </div>
              <div className="space-y-1">
                {chatHistory.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setActiveChatId(chat.id)}
                    className={`w-full text-left px-3 py-3 rounded-xl group transition-all flex items-start gap-2 ${
                      activeChatId === chat.id
                        ? 'bg-violet-500/10 border border-violet-500/20'
                        : dark ? 'hover:bg-white/5' : 'hover:bg-slate-50'
                    }`}
                  >
                    <MessageSquare className={`w-4 h-4 mt-0.5 flex-shrink-0 ${activeChatId === chat.id ? 'text-violet-400' : dark ? 'text-slate-600' : 'text-slate-400'}`} />
                    <div className="min-w-0 flex-1">
                      <div className={`text-xs font-medium truncate ${dark ? (activeChatId === chat.id ? 'text-white' : 'text-slate-300') : 'text-slate-700'}`}>
                        {chat.title}
                      </div>
                      <div className={`text-xs mt-0.5 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>{chat.date}</div>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setChatHistory(prev => prev.filter(c => c.id !== chat.id)); }}
                      className="opacity-0 group-hover:opacity-100 p-0.5 rounded text-slate-600 hover:text-red-400 transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className={`border-t px-3 py-4 space-y-1 ${dark ? 'border-white/10' : 'border-slate-100'}`}>
              <button
                onClick={toggleTheme}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${dark ? 'text-slate-400 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {dark ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-500/10 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Chat Header */}
        <div className={`flex items-center justify-between px-4 py-3.5 border-b flex-shrink-0 ${dark ? 'bg-[#0d0d16] border-white/10' : 'bg-white border-slate-200'}`}>
          <div className="flex items-center gap-3">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className={`p-2 rounded-lg ${dark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'} transition-all`}
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0d0d16]" />
              </div>
              <div>
                <div className={`text-sm font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>QuickRaina</div>
                <div className="flex items-center gap-1 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className={`hidden sm:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${dark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
              <User className="w-3 h-3" />
              {user?.name}
            </div>
            <button onClick={toggleTheme} className={`p-2 rounded-lg transition-all ${dark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'}`}>
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-5" ref={messagesEndRef}>
          <div className="max-w-3xl mx-auto space-y-5">
            <AnimatePresence>
              {messages.map(msg => (
                <ChatMessage key={msg.id} msg={msg} dark={dark} />
              ))}
            </AnimatePresence>

            {isTyping && <TypingIndicator dark={dark} />}
            <div ref={messagesEndRef} />

            {/* Suggested prompts */}
            {messages.length === 1 && !isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4"
              >
                {suggestedPrompts.map(prompt => (
                  <button
                    key={prompt}
                    onClick={() => setInput(prompt)}
                    className={`text-left p-4 rounded-xl border text-sm transition-all hover:-translate-y-0.5 duration-200 ${
                      dark ? 'bg-[#12121a] border-white/8 text-slate-400 hover:border-violet-500/30 hover:text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-violet-300 hover:text-slate-900 shadow-sm'
                    }`}
                  >
                    "{prompt}"
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className={`flex-shrink-0 border-t px-4 py-4 ${dark ? 'bg-[#0d0d16] border-white/10' : 'bg-white border-slate-200'}`}>
          <div className="max-w-3xl mx-auto">
            <div className={`relative flex items-end gap-3 p-2 rounded-2xl border transition-all duration-300 ${
              dark ? 'bg-white/5 border-white/10 focus-within:border-violet-500/50 focus-within:shadow-[0_0_20px_rgba(124,58,237,0.15)]' : 'bg-slate-50 border-slate-200 focus-within:border-violet-300 focus-within:shadow-[0_0_20px_rgba(124,58,237,0.08)]'
            }`}>
              <textarea
                ref={textareaRef}
                id="chat-input"
                value={input}
                onChange={e => {
                  setInput(e.target.value);
                  e.target.style.height = 'auto';
                  e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                }}
                onKeyDown={handleKeyDown}
                placeholder="Describe your dream..."
                rows={1}
                disabled={isTyping}
                className={`flex-1 bg-transparent outline-none resize-none text-sm px-2 py-2 max-h-[120px] ${dark ? 'text-white placeholder-slate-600' : 'text-slate-900 placeholder-slate-400'} disabled:opacity-50`}
                style={{ height: '40px' }}
              />
              <div className="flex items-center gap-1.5 pb-1">
                <button
                  className={`p-2 rounded-lg transition-colors ${dark ? 'text-slate-600 hover:text-slate-400' : 'text-slate-400 hover:text-slate-600'}`}
                  title="Voice input (coming soon)"
                >
                  <Mic className="w-4 h-4" />
                </button>
                <motion.button
                  id="send-btn"
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  whileHover={{ scale: input.trim() ? 1.05 : 1 }}
                  whileTap={{ scale: input.trim() ? 0.95 : 1 }}
                  className={`p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    input.trim() && !isTyping
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40'
                      : dark ? 'bg-white/5 text-slate-600' : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
            <p className={`text-center text-xs mt-2 ${dark ? 'text-slate-700' : 'text-slate-400'}`}>
              Press Enter to send · Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
