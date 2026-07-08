import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Sparkles, Gamepad2, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

const PROFILES = [
  { 
    name: 'Alex Chen', 
    meta: 'Fine Arts · 2nd Year', 
    tags: ['Creative', 'Night owl', 'Coffee lover'],
    gradient: 'from-amber-500 via-orange-600 to-red-600',
    icon: Sparkles,
    bio: 'Looking for someone who enjoys late night studio sessions and strong espresso.',
    match: '98% Match'
  },
  { 
    name: 'Maya Singh', 
    meta: 'Computer Science · 3rd Year', 
    tags: ['Tech', 'Gaming', 'Organized'],
    gradient: 'from-blue-600 via-indigo-600 to-purple-700',
    icon: Gamepad2,
    bio: 'Clean kitchen is a must! I game with headphones on, very chill and quiet during exams.',
    match: '95% Match'
  },
  { 
    name: 'Jamie Wilson', 
    meta: 'Environmental Science · 1st Year', 
    tags: ['Eco-friendly', 'Yoga', 'Cooking'],
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    icon: Heart,
    bio: 'Plant parent & vegetarian chef. Looking to share homemade meals and weekend hikes!',
    match: '92% Match'
  },
];

export default function SwipeDeck() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const current = PROFILES[index % PROFILES.length];
  const next = PROFILES[(index + 1) % PROFILES.length];

  const handleNext = () => setIndex((i) => i + 1);

  return (
    <div className="relative h-[420px] w-full max-w-[340px] mx-auto touch-pan-y py-4">
      {/* Background card preview (stack effect) */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-zinc-200/60 shadow-lg transform translate-y-3 scale-95 border border-zinc-300/40 overflow-hidden transition-all duration-300">
        <div className="p-6 flex flex-col justify-end h-full opacity-40">
          <p className="text-xs uppercase tracking-wide text-zinc-500 font-medium">{next.meta}</p>
          <h4 className="text-xl font-semibold text-zinc-900 mt-1">{next.name}</h4>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0 rounded-[2.5rem] bg-white shadow-2xl border border-zinc-100 p-7 flex flex-col justify-between cursor-grab active:cursor-grabbing select-none overflow-hidden group"
          drag={prefersReducedMotion ? false : 'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(_, info) => {
            setIsDragging(false);
            if (Math.abs(info.offset.x) > 100) setIndex((i) => i + 1);
          }}
          initial={{ scale: 0.92, opacity: 0, y: 15 }}
          animate={
            isDragging
              ? { scale: 1.02, opacity: 1, y: 0 }
              : {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  x: prefersReducedMotion ? 0 : [0, 24, -4, 12, 0],
                  rotate: prefersReducedMotion ? 0 : [0, 3.5, -0.5, 1.5, 0],
                }
          }
          exit={{
            x: 340,
            opacity: 0,
            rotate: 15,
            transition: { duration: prefersReducedMotion ? 0.15 : 0.35 },
          }}
          whileDrag={{ rotate: 6, scale: 1.02 }}
          transition={{
            scale: { type: 'spring', damping: 20, stiffness: 200 },
            opacity: { duration: 0.2 },
            y: { duration: 0.2 },
            x: {
              repeat: Infinity,
              repeatDelay: 2.5,
              duration: 1.1,
              ease: 'easeInOut',
            },
            rotate: {
              repeat: Infinity,
              repeatDelay: 2.5,
              duration: 1.1,
              ease: 'easeInOut',
            },
          }}
        >
          {/* Top Header / Match badge */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {current.match}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#df4f00] bg-[#df4f00]/10 px-2.5 py-1 rounded-full border border-[#df4f00]/30 animate-bounce shadow-sm">
              <span>Swipe right</span>
              <span className="text-sm">👉</span>
            </span>
          </div>

          {/* Visual Avatar Banner */}
          <div className={`w-full h-32 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center relative overflow-hidden shadow-inner my-3`}>
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <current.icon className="w-8 h-8" />
            </div>
          </div>

          {/* Card Info */}
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-[#df4f00]">{current.meta}</p>
            <h3 className="text-2xl font-bold text-zinc-900 mt-0.5 tracking-tight">{current.name}</h3>
            <p className="text-xs text-zinc-600 mt-2 line-clamp-2 leading-relaxed">{current.bio}</p>
            
            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-100">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-[#df4f00]/10 text-[#df4f00] border border-[#df4f00]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Non-mouse users and reduced-motion users still need a way to advance */}
      <button
        onClick={handleNext}
        className="sr-only focus:not-sr-only focus:absolute focus:-bottom-12 focus:left-1/2 focus:-translate-x-1/2 px-4 py-2 bg-zinc-900 text-white rounded-full text-sm font-medium shadow-lg flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df4f00] z-30"
      >
        <span>Next profile</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
