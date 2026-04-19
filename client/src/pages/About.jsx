import { motion } from 'framer-motion';
import { Heart, Target, Users, Lightbulb, Award, Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const team = [
  { name: 'Aria Solaris', role: 'CEO & Co-Founder', initials: 'AS', color: 'from-violet-500 to-purple-600' },
  { name: 'Kai Nakamura', role: 'CTO & Co-Founder', initials: 'KN', color: 'from-cyan-500 to-blue-600' },
  { name: 'Luna Voss', role: 'Head of Design', initials: 'LV', color: 'from-pink-500 to-rose-600' },
  { name: 'Dex Quill', role: 'Lead AI Engineer', initials: 'DQ', color: 'from-amber-500 to-orange-600' },
];

const values = [
  { icon: Heart, title: 'Human-Centered', desc: 'Every feature is designed with empathy and the human experience at its core.' },
  { icon: Lightbulb, title: 'Innovation First', desc: "We push the boundaries of what's possible with AI and creative technology." },
  { icon: Users, title: 'Community Driven', desc: 'Our dreamers community shapes the product roadmap and future features.' },
  { icon: Target, title: 'Privacy Focused', desc: 'Your dreams are sacred. We never share or sell your personal data.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in AI accuracy and visual quality.' },
  { icon: Globe, title: 'Accessible', desc: "Dream visualization should be available to everyone, everywhere on Earth." },
];

export default function About() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-6">
              Our Story
            </span>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              We believe every dream{' '}
              <span className="gradient-text">deserves to be seen</span>
            </h1>
            <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              QuickRaina was born from a simple question: what if we could see the worlds our minds create while we sleep? We're a team of AI researchers, designers, and dreamers on a mission to bridge the gap between the subconscious and the visual.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className={`py-20 ${dark ? 'bg-[#0d0d16]' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className={`rounded-3xl p-12 ${dark ? 'bg-[#12121a] border border-white/8' : 'bg-white border border-slate-200 shadow-sm'}`}>
                <div className="text-7xl font-black gradient-text font-display mb-4">2024</div>
                <div className={`text-lg font-semibold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>Founded in San Francisco</div>
                <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Started by neurologists and AI researchers who realized dreams were the last unexplored creative frontier.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {[['$4.2M', 'Seed Funding'], ['3', 'AI Patents Filed'], ['12', 'Team Members'], ['50K+', 'Beta Users']].map(([val, label]) => (
                    <div key={label}>
                      <div className="font-display text-3xl font-bold gradient-text">{val}</div>
                      <div className={`text-xs mt-1 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className={`font-display text-4xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className={`text-base leading-relaxed mb-6 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  We exist to make the invisible visible. The human mind is the most complex creative engine in existence — dreams are its uncensored output. QuickRaina gives that output a form.
                </p>
                <p className={`text-base leading-relaxed mb-6 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Our AI combines Jungian dream analysis, generative imagery, and conversational intelligence to create an experience unlike anything else available today.
                </p>
                <p className={`text-base leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  We're not just building a product — we're creating a new medium for self-expression and psychological exploration.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className={`font-display text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
              What we <span className="gradient-text">stand for</span>
            </h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 duration-300 ${
                  dark ? 'bg-[#12121a] border-white/8 hover:border-violet-500/30' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`font-semibold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team */}
      <section className={`py-20 ${dark ? 'bg-[#0d0d16]' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className={`font-display text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Meet the <span className="gradient-text">dreamers</span>
            </h2>
            <p className={`${dark ? 'text-slate-400' : 'text-slate-600'}`}>The people building the future of dream visualization.</p>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {team.map(({ name, role, initials, color }) => (
              <StaggerItem key={name}>
                <div className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 duration-300 ${
                  dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 shadow-lg`}>
                    {initials}
                  </div>
                  <div className={`font-semibold mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>{name}</div>
                  <div className={`text-sm ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{role}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </PublicLayout>
  );
}
