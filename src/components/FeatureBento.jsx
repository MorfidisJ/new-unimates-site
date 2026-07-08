import { useState, useEffect } from 'react';
import { Sparkles, Palette, ShieldCheck, Users, Home, Smartphone, RefreshCw, CheckCircle2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MATCH_EXAMPLES = [
  {
    pair: 'Alexandros & George',
    major: 'Computer Science · Mathematics (UOI)',
    match: '96%',
    tags: ['🌙 Night Owls', '🎧 Quiet Study', '🧹 Extremely Neat'],
    metrics: [
      { label: 'Sleep Schedule & Quiet Hours', score: 98, color: 'bg-emerald-500' },
      { label: 'Cleanliness & Chore Rotation', score: 95, color: 'bg-[#df4f00]' },
      { label: 'Study Habits & Guest Policy', score: 94, color: 'bg-purple-500' },
    ]
  },
  {
    pair: 'Katerina & Vasiliki',
    major: 'Medicine · Biological Applications (UOI)',
    match: '94%',
    tags: ['☀️ Early Risers', '📚 Library Lovers', '🧘 Calm & Peaceful'],
    metrics: [
      { label: 'Sleep Schedule & Quiet Hours', score: 96, color: 'bg-emerald-500' },
      { label: 'Cleanliness & Chore Rotation', score: 92, color: 'bg-[#df4f00]' },
      { label: 'Study Habits & Guest Policy', score: 95, color: 'bg-purple-500' },
    ]
  },
  {
    pair: 'Dimitris & Nikos',
    major: 'Economics · Business Administration (UOI)',
    match: '91%',
    tags: ['☕ Coffee Addicts', '💬 Sociable', '🎧 Music & Podcasts'],
    metrics: [
      { label: 'Sleep Schedule & Quiet Hours', score: 88, color: 'bg-emerald-500' },
      { label: 'Cleanliness & Chore Rotation', score: 90, color: 'bg-[#df4f00]' },
      { label: 'Study Habits & Guest Policy', score: 95, color: 'bg-purple-500' },
    ]
  }
];

function SmartMatchingVisual() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = MATCH_EXAMPLES[activeIdx];

  const nextExample = (e) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % MATCH_EXAMPLES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % MATCH_EXAMPLES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-6 p-5 sm:p-6 rounded-3xl bg-zinc-50/90 border border-zinc-200/80 shadow-inner flex flex-col justify-between relative overflow-hidden group/visual">
      {/* Top Switcher */}
      <div className="flex items-center justify-end pb-3 border-b border-zinc-200/60 mb-4">
        <button
          onClick={nextExample}
          type="button"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#df4f00] bg-[#df4f00]/10 hover:bg-[#df4f00]/20 px-3 py-1 rounded-full transition-colors active:scale-95 cursor-pointer shadow-sm"
        >
          <RefreshCw className="w-3 h-3 animate-spin-slow" />
          <span>Next Simulation</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {/* Matched Pair Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white p-3.5 rounded-2xl border border-zinc-200/60 shadow-sm">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg text-zinc-900">{current.pair}</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-500/15 px-2 py-0.5 rounded-md">
                  <Zap className="w-3 h-3 fill-emerald-600" />
                  {current.match} Match
                </span>
              </div>
              <p className="text-xs text-zinc-500 mt-0.5 font-medium">{current.major}</p>
            </div>
            
            {/* Shared lifestyle tags */}
            <div className="flex flex-wrap gap-1.5">
              {current.tags.map((tag, i) => (
                <span key={i} className="text-[11px] font-semibold text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-lg border border-zinc-200/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Breakdown Progress Bars */}
          <div className="space-y-3 pt-1">
            {current.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-bold text-zinc-700">
                  <span>{m.label}</span>
                  <span className="text-zinc-900">{m.score}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-200/70 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${m.score}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
                    className={`h-full ${m.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const FEATURES = [
  { 
    icon: Sparkles, 
    title: 'Smart Matching', 
    body: 'Our ML-powered matching system connects you with flatmates who share your lifestyle, values, and living preferences for authentic compatibility.', 
    size: 'md:col-span-2 md:row-span-2',
    accent: 'bg-gradient-to-br from-[#df4f00]/10 via-[#df4f00]/5 to-transparent border-[#df4f00]/30 shadow-xl shadow-[#df4f00]/5',
    iconColor: 'text-[#df4f00] bg-[#df4f00]/10 border-[#df4f00]/20',
    badge: 'Core ML Tech'
  },
  { 
    icon: Palette, 
    title: 'Creative Profiles', 
    body: 'Express yourself through multimedia profiles, mood boards, and creative content. Show your personality beyond just text and photos.',
    iconColor: 'text-purple-600 bg-purple-500/10 border-purple-500/20'
  },
  { 
    icon: ShieldCheck, 
    title: 'Verified & Safe', 
    body: 'All users are university-verified with comprehensive safety features, background checks, and 24/7 support for peace of mind.',
    iconColor: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20'
  },
  { 
    icon: Users, 
    title: 'Community Events', 
    body: 'Join creative workshops, social mixers, and skill-sharing sessions to meet potential flatmates and build lasting friendships.',
    iconColor: 'text-blue-600 bg-blue-500/10 border-blue-500/20'
  },
  { 
    icon: Home, 
    title: 'Housing Integration', 
    body: 'Seamlessly compatible with verified student accommodations and coordinate with matched flatmates to secure your perfect shared space.',
    iconColor: 'text-indigo-600 bg-indigo-500/10 border-indigo-500/20'
  },
  { 
    icon: Smartphone, 
    title: 'Mobile-First', 
    body: 'Designed for your lifestyle with a beautiful, responsive interface and easy access to all features on the go.',
    iconColor: 'text-pink-600 bg-pink-500/10 border-pink-500/20'
  },
];

export default function FeatureBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
      {FEATURES.map((f) => {
        const Icon = f.icon;
        const isSmartMatching = f.title === 'Smart Matching';
        return (
          <article
            key={f.title}
            className={`rounded-[2.5rem] bg-white border border-zinc-200/80 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${f.size ?? ''} ${f.accent ?? ''}`}
          >
            <div>
              <div className="flex items-start justify-between">
                <span 
                  aria-hidden="true" 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${f.iconColor}`}
                >
                  <Icon className="w-7 h-7" />
                </span>
                {f.badge && (
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#df4f00] text-white shadow-md shadow-[#df4f00]/20">
                    {f.badge}
                  </span>
                )}
              </div>

              {isSmartMatching && <SmartMatchingVisual />}
            </div>

            <div className={isSmartMatching ? 'mt-4' : 'mt-8'}>
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">{f.title}</h3>
              <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">{f.body}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
