import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Brain, Palette, MessageCircle, Zap, Star, ChevronRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

// Animated chatbot preview
function ChatPreview({ dark }) {
  const messages = [
    { role: 'ai', text: "Hello! I'm QuickRaina. Tell me about a dream you'd like to visualize." },
    { role: 'user', text: "I dreamed of floating through a glowing purple galaxy..." },
    { role: 'ai', text: "Fascinating! I'm sensing cosmic energy and a feeling of boundless freedom. Were there any stars or beings around you?" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      className={`rounded-2xl p-1 ${dark ? 'bg-gradient-to-br from-violet-500/20 to-cyan-500/10' : 'bg-gradient-to-br from-violet-100 to-cyan-50'}`}
    >
      <div className={`rounded-xl overflow-hidden ${dark ? 'bg-[#12121a]' : 'bg-white'} shadow-2xl`}>
        {/* Header */}
        <div className={`flex items-center gap-3 px-5 py-4 border-b ${dark ? 'border-white/10' : 'border-slate-100'}`}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex items-center gap-2 ml-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className={`text-xs font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>QuickRaina</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        {/* Messages */}
        <div className="p-5 space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.3 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-br-sm'
                    : dark
                    ? 'bg-white/8 text-slate-300 rounded-bl-sm border border-white/10'
                    : 'bg-slate-100 text-slate-700 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex justify-start"
          >
            <div className={`px-4 py-3 rounded-2xl rounded-bl-sm ${dark ? 'bg-white/8 border border-white/10' : 'bg-slate-100'}`}>
              <div className="flex gap-1 items-center h-4">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full typing-dot ${dark ? 'bg-violet-400' : 'bg-violet-500'}`}
                    style={{ animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Input */}
        <div className={`px-5 py-4 border-t ${dark ? 'border-white/10' : 'border-slate-100'}`}>
          <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${dark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
            <span className={`text-sm flex-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Describe your dream...</span>
            <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const features = [
  {
    icon: Brain,
    title: 'AI Dream Analysis',
    desc: 'Advanced neural networks interpret the hidden meanings and emotional undertones within your dreams.',
    color: 'from-violet-500 to-purple-600',
    glow: 'shadow-[0_0_30px_rgba(124,58,237,0.3)]',
  },
  {
    icon: Palette,
    title: 'Visual Generation',
    desc: 'Transform abstract dream narratives into stunning, high-fidelity visual artwork in seconds.',
    color: 'from-cyan-500 to-blue-600',
    glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
  },
  {
    icon: MessageCircle,
    title: 'Conversational Refinement',
    desc: 'Engage in natural dialogue with QuickRaina to refine and perfect your dream visualization.',
    color: 'from-pink-500 to-rose-600',
    glow: 'shadow-[0_0_30px_rgba(236,72,153,0.3)]',
  },
];

const stats = [
  { value: '50K+', label: 'Dreams Visualized' },
  { value: '98%', label: 'User Satisfaction' },
  { value: '2.1s', label: 'Avg. Response Time' },
  { value: '150+', label: 'Countries' },
];

export default function Home() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/15 blur-[100px] float-anim" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] float-anim" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-[120px]" />
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(${dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-violet-500/10 border border-violet-500/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span className="text-xs font-semibold text-violet-400 tracking-wide uppercase">AI Dream Visualization</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}
            >
              Turn Your{' '}
              <span className="gradient-text">Dreams</span>
              {' '}into Visual{' '}
              <span className={dark ? 'text-slate-200' : 'text-slate-700'}>Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg leading-relaxed mb-10 ${dark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              QuickRaina uses advanced artificial intelligence to interpret your dreams and transform them into breathtaking visual artwork. Just describe what you dreamed — we'll handle the rest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                to="/signup"
                id="hero-cta"
                className="group flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/how-it-works"
                className={`flex items-center gap-2 px-7 py-4 rounded-2xl border font-semibold text-base hover:scale-105 transition-all duration-300 ${
                  dark ? 'border-white/20 text-white hover:bg-white/5' : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-4 gap-4"
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold gradient-text">{value}</div>
                  <div className={`text-xs mt-0.5 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Chat Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 to-cyan-500/10 rounded-3xl blur-2xl" />
            <div className="relative">
              <ChatPreview dark={dark} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <Zap className="w-3 h-3" />
              POWERFUL FEATURES
            </span>
            <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-5 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Everything you need to{' '}
              <span className="gradient-text">unlock your dreams</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Our suite of AI-powered tools makes dream visualization accessible, intuitive, and endlessly creative.
            </p>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {features.map(({ icon: Icon, title, desc, color, glow }) => (
              <StaggerItem key={title}>
                <div
                  className={`relative group p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:${glow} ${
                    dark ? 'bg-[#12121a] border-white/8 hover:border-violet-500/30' : 'bg-white border-slate-200 hover:border-violet-300 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`font-display text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/3 to-cyan-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className={`py-24 ${dark ? 'bg-[#0d0d16]' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
              <span className="gradient-text">Three steps</span> to your dream
            </h2>
            <p className={`text-lg ${dark ? 'text-slate-400' : 'text-slate-600'}`}>From thought to visual in under a minute.</p>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
            {[
              { step: '01', title: 'Describe Your Dream', desc: 'Tell QuickRaina about your dream in natural language — no special vocabulary needed.' },
              { step: '02', title: 'AI Asks & Refines', desc: 'Our AI engages in a thoughtful dialogue to capture every nuance and detail.' },
              { step: '03', title: 'Visual Magic Happens', desc: 'Watch as your dream transforms into a stunning visual representation in real time.' },
            ].map(({ step, title, desc }) => (
              <StaggerItem key={step}>
                <div className="text-center">
                  <div className="font-display text-6xl font-black gradient-text mb-4">{step}</div>
                  <h3 className={`text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.4} className="mt-12 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors"
            >
              See the full process <ChevronRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Loved by <span className="gradient-text">dreamers worldwide</span>
            </h2>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {[
              { name: 'Aria Chen', role: 'Digital Artist', text: 'QuickRaina turned my recurring dream into the most beautiful piece of art I\'ve ever seen. It literally made me cry.', rating: 5 },
              { name: 'Marcus Rivera', role: 'Therapist', text: 'I use QuickRaina with my clients to help them externalize their subconscious. The results are consistently profound.', rating: 5 },
              { name: 'Priya Nair', role: 'Creative Writer', text: 'The AI doesn\'t just generate images — it understands the emotional core of your dreams. Truly remarkable technology.', rating: 5 },
            ].map(({ name, role, text, rating }) => (
              <StaggerItem key={name}>
                <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-slate-300' : 'text-slate-700'}`}>"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold">
                      {name[0]}
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>{name}</div>
                      <div className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{role}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 to-transparent" />
              <div className="relative px-10 py-16 text-center text-white">
                <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
                <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">Ready to explore your dreams?</h2>
                <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">Join thousands of dreamers who've already unlocked the power of AI visualization.</p>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-violet-700 font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  Start Visualizing Free <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PublicLayout>
  );
}
