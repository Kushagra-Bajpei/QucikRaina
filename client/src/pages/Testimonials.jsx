import { Star, Quote } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const testimonials = [
  {
    name: 'Aria Chen',
    role: 'Digital Artist',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'QuickRaina turned my recurring dream into the most beautiful piece of art I\'ve ever seen. I\'ve been having this dream for 10 years — seeing it visualized literally made me cry. The AI captured emotions I didn\'t even know I had.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Marcus Rivera',
    role: 'Psychotherapist',
    location: 'New York, NY',
    rating: 5,
    text: 'I use QuickRaina in my practice to help clients externalize and examine their subconscious imagery. The results are consistently profound and often lead to genuine therapeutic breakthroughs. It\'s now an essential tool in my toolkit.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Priya Nair',
    role: 'Creative Writer',
    location: 'London, UK',
    rating: 5,
    text: 'The AI doesn\'t just generate images — it actually understands the emotional core of what you experienced. I\'ve used it to generate cover art for my novels. Every single piece has been gorgeous and conceptually spot-on.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Takeshi Yamamoto',
    role: 'Neuroscience Researcher',
    location: 'Tokyo, Japan',
    rating: 5,
    text: 'As a neuroscientist who studies dreaming, I was skeptical. But QuickRaina\'s interpretation model shows a surprisingly sophisticated understanding of dream symbolism. The visual outputs often reveal patterns I haven\'t consciously noticed.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Sofia Andrade',
    role: 'Interior Designer',
    location: 'São Paulo, Brazil',
    rating: 5,
    text: 'I use QuickRaina for creative inspiration. Whenever I\'m stuck on a project, I describe a dream and let the AI show me color palettes and spatial concepts I\'d never have consciously arrived at. It\'s transformed my design process.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'James Whitfield',
    role: 'Film Director',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Three scenes in my latest film came directly from QuickRaina visualizations. I described dreams from my journal and the AI gave me visual language I couldn\'t articulate myself. It\'s become an integral part of pre-production.',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    name: 'Layla Hassan',
    role: 'UX Designer',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'The interface is as beautiful as the output it creates. Everything about QuickRaina feels intentional and premium. The conversational flow is natural, and the results consistently exceed my expectations.',
    color: 'from-fuchsia-500 to-pink-600',
  },
  {
    name: 'Raj Patel',
    role: 'Meditation Coach',
    location: 'Mumbai, India',
    rating: 5,
    text: 'I integrate QuickRaina visualizations into guided meditation sessions. Participants connect much more deeply when they can see an interpretation of their dream state. It\'s a genuine bridge between the inner and outer world.',
    color: 'from-red-500 to-rose-600',
  },
  {
    name: 'Emma Schneider',
    role: 'Graphic Novelist',
    location: 'Berlin, Germany',
    rating: 5,
    text: 'I\'ve been using QuickRaina for six months and my creative work has never been more vivid or authentic. It pulls imagery from places in my imagination I didn\'t even know existed. Absolutely indispensable.',
    color: 'from-sky-500 to-cyan-600',
  },
];

export default function Testimonials() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-6">
              <Star className="w-3 h-3 fill-current" />
              Real stories from real dreamers
            </span>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              What our <span className="gradient-text">dreamers</span> say
            </h1>
            <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              From therapists to artists, filmmakers to designers — QuickRaina is changing how people understand and express their inner worlds.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div>
                <div className="font-display text-4xl font-bold gradient-text">4.9</div>
                <div className="flex gap-0.5 justify-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className={`text-xs mt-1 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>Average Rating</div>
              </div>
              <div className={`w-px h-12 ${dark ? 'bg-white/10' : 'bg-slate-200'}`} />
              <div>
                <div className="font-display text-4xl font-bold gradient-text">50K+</div>
                <div className={`text-xs mt-1 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>Verified Reviews</div>
              </div>
              <div className={`w-px h-12 ${dark ? 'bg-white/10' : 'bg-slate-200'}`} />
              <div>
                <div className="font-display text-4xl font-bold gradient-text">150+</div>
                <div className={`text-xs mt-1 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>Countries</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6" staggerDelay={0.08}>
            {testimonials.map(({ name, role, location, rating, text, color }) => (
              <StaggerItem key={name} className="break-inside-avoid">
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    dark ? 'bg-[#12121a] border-white/8 hover:border-violet-500/30' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <Quote className="w-5 h-5 text-violet-400 mb-4 opacity-60" />
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${dark ? 'text-slate-300' : 'text-slate-700'}`}>"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0`}>
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>{name}</div>
                      <div className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{role}</div>
                      <div className={`text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>{location}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </PublicLayout>
  );
}
