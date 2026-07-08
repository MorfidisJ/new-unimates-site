import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, User, Users, Home, Settings } from 'lucide-react';

const SCREENS = [
  { id: 'find', label: 'Find Roommates', icon: Sparkles, image: '/assets/images/findroommates.jpg', desc: 'Swipe through verified student profiles matched to your lifestyle.' },
  { id: 'profile', label: 'My Profile', icon: User, image: '/assets/images/myprofile.jpg', desc: 'Showcase your personality with mood boards, tags, and habits.' },
  { id: 'matches', label: 'My Matches', icon: Users, image: '/assets/images/mymatches.jpg', desc: 'Chat instantly with compatible flatmates and break the ice.' },
  { id: 'hunting', label: 'House Hunting', icon: Home, image: '/assets/images/househuntingjpg.jpg', desc: 'Coordinate move-ins and browse student-friendly accommodations.' },
  { id: 'settings', label: 'Settings', icon: Settings, image: '/assets/images/settings.jpg', desc: 'Customize your search criteria, notifications, and verification.' },
];

export default function AppCarousel() {
  const [activeTab, setActiveTab] = useState(0);
  const current = SCREENS[activeTab];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#df4f00]/10 text-[#df4f00] border border-[#df4f00]/20">
          Interactive Demo
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mt-3 font-display tracking-tight">
          Our App Characteristics 💯
        </h2>
        <p className="text-zinc-600 mt-4 text-base md:text-lg">
          Experience the sleek, mobile-first interface built specifically for student living.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Navigation Tabs (Left / Top) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {SCREENS.map((screen, idx) => {
            const Icon = screen.icon;
            const isActive = idx === activeTab;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 border cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#df4f00] ${
                  isActive
                    ? 'bg-[#0a1628] text-white border-[#132644] shadow-xl scale-[1.02]'
                    : 'bg-white text-zinc-700 border-zinc-200/80 hover:border-[#df4f00]/40 hover:bg-zinc-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  isActive ? 'bg-[#df4f00] text-white' : 'bg-zinc-100 text-zinc-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{screen.label}</h3>
                  <p className={`text-xs mt-1 line-clamp-1 ${isActive ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    {screen.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* iPhone Mockup Frame (Right) */}
        <div className="lg:col-span-7 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            {/* Outer phone casing - modern thin bezel */}
            <div className="w-[300px] sm:w-[330px] h-[640px] sm:h-[680px] bg-[#1c1c21] rounded-[3rem] p-[8px] shadow-2xl border-2 border-zinc-700/80 relative ring-1 ring-white/20">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 inset-x-0 mx-auto w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2.5">
                <div className="w-2 h-2 rounded-full bg-zinc-800/80" />
              </div>

              {/* Screen Content */}
              <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] overflow-hidden relative border border-zinc-800/80">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 flex items-center justify-center bg-black"
                  >
                    <img
                      src={current.image}
                      alt={`${current.label} screen preview`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom home indicator bar */}
                <div className="absolute bottom-2 inset-x-0 mx-auto w-32 h-1 bg-white/40 rounded-full z-30" />
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#df4f00]/20 to-purple-500/20 rounded-[4rem] blur-2xl -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
