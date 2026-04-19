import { motion } from 'framer-motion';
import { MessageSquare, Cpu, Image, ChevronRight, Clock, Shield, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Describe Your Dream',
    description:
      'Begin by telling QuickRaina about your dream in your own words. There\'s no right or wrong way — just express what you saw, felt, or experienced. The more detail, the richer the visualization.',
    tips: ['Include colors, shapes, and environments', 'Mention emotions you felt', 'Describe key characters or beings', 'Share the overall mood or atmosphere'],
    color: 'from-violet-500 to-purple-600',
    gradient: 'from-violet-500/10 to-purple-600/5',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Asks Follow-Up Questions',
    description:
      'QuickRaina\'s conversational AI will engage you in a thoughtful dialogue, asking targeted questions to extract deeper details, clarify ambiguous elements, and understand the emotional texture of your dream.',
    tips: ['Answer naturally — no technical language needed', 'The AI adapts to your communication style', 'You can ask clarifying questions too', 'The more you share, the better the output'],
    color: 'from-cyan-500 to-blue-600',
    gradient: 'from-cyan-500/10 to-blue-600/5',
  },
  {
    number: '03',
    icon: Image,
    title: 'AI Generates Visual Output',
    description:
      'Using the refined narrative, QuickRaina generates a stunning visual interpretation of your dream. You\'ll see it come to life in real time, with options to refine, adjust, and explore variations.',
    tips: ['High-resolution output (up to 4K)', 'Multiple style variations available', 'Download or share directly', 'Refine with additional prompts'],
    color: 'from-pink-500 to-rose-600',
    gradient: 'from-pink-500/10 to-rose-600/5',
  },
];

const faqs = [
  { q: 'How long does it take to generate a visualization?', a: 'Most dreams are visualized within 30-60 seconds of completing the conversation. Complex multi-scene dreams may take slightly longer.' },
  { q: 'Is my dream data kept private?', a: 'Absolutely. Your dream data is encrypted, never sold, and you can delete it at any time. We take privacy very seriously.' },
  { q: 'Can I refine or regenerate the output?', a: 'Yes! You can ask QuickRaina to adjust any aspect — color palette, mood, style, or specific elements — as many times as you like.' },
  { q: 'Do I need any artistic skill?', a: 'None at all. QuickRaina handles all the creative interpretation. Your only job is to describe what you experienced.' },
];

export default function HowItWorks() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-6">
              The Process
            </span>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              How <span className="gradient-text">QuickRaina</span> works
            </h1>
            <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              From dream to visual in three intelligent steps. Here's exactly what happens when you describe your dream to QuickRaina.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="py-10 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {steps.map(({ number, icon: Icon, title, description, tips, color, gradient }, idx) => (
            <FadeIn key={number} delay={idx * 0.15}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-3xl border overflow-hidden ${
                  dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />
                <div className="relative p-8 sm:p-10">
                  <div className="flex flex-col sm:flex-row gap-8 items-start">
                    {/* Number + Icon */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-3">
                      <div className="font-display text-6xl font-black gradient-text leading-none">{number}</div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className={`font-display text-2xl sm:text-3xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
                        {title}
                      </h2>
                      <p className={`text-base leading-relaxed mb-6 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {tips.map(tip => (
                          <div key={tip} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                            <span className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className={`py-20 ${dark ? 'bg-[#0d0d16]' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className={`font-display text-4xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
              Why choose <span className="gradient-text">QuickRaina</span>
            </h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-3 gap-6" staggerDelay={0.15}>
            {[
              { icon: Clock, stat: '< 60s', label: 'Generation Time', desc: 'From conversation to visualization in under a minute.' },
              { icon: Shield, stat: '256-bit', label: 'Encryption', desc: 'Your dreams are protected with military-grade encryption.' },
              { icon: Zap, stat: '99.9%', label: 'Uptime', desc: 'Always available when inspiration strikes at 3 AM.' },
            ].map(({ icon: Icon, stat, label, desc }) => (
              <StaggerItem key={label}>
                <div className={`p-8 rounded-2xl border text-center ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-display text-4xl font-bold gradient-text mb-1">{stat}</div>
                  <div className={`font-semibold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>{label}</div>
                  <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className={`font-display text-4xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
          </FadeIn>
          <StaggerChildren className="space-y-4" staggerDelay={0.1}>
            {faqs.map(({ q, a }) => (
              <StaggerItem key={q}>
                <div className={`p-6 rounded-2xl border ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <h3 className={`font-semibold mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>{q}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.5} className="mt-10 text-center">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300"
            >
              Try It Now — It's Free <ChevronRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </PublicLayout>
  );
}
