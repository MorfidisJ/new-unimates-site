import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkUnderneath, setIsDarkUnderneath] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerEl = document.getElementById('main-navbar-header');
      if (!headerEl) return;
      const rect = headerEl.getBoundingClientRect();
      const checkY = rect.top + rect.height / 2;

      const darkElements = document.querySelectorAll('[data-theme="dark"], .bg-\\[\\#0a1628\\], [class*="bg-[#0a1628]"]');
      let isOverDark = false;

      darkElements.forEach((el) => {
        const elRect = el.getBoundingClientRect();
        if (checkY >= elRect.top && checkY <= elRect.bottom) {
          isOverDark = true;
        }
      });

      setIsDarkUnderneath(isOverDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const links = [
    { name: 'Why UniMates', href: '#features' },
    { name: 'App Screens', href: '#screens' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About & Team', href: '#about' },
  ];

  return (
    <header id="main-navbar-header" className="fixed top-3 sm:top-5 inset-x-4 sm:inset-x-8 max-w-5xl mx-auto z-50">
      {/* SVG Optical Magnifying Lens Filter */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="liquid-magnify" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.008" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="24" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Ultra-Clear Magnifying Apple VisionOS Liquid Glass Pill */}
      <div className={`relative rounded-full border backdrop-blur-md backdrop-saturate-[2.5] backdrop-contrast-110 transition-all duration-500 group overflow-hidden ${
        isDarkUnderneath
          ? 'border-white/30 bg-black/40 hover:bg-black/55 shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)] text-white'
          : 'border-white/80 bg-white/10 hover:bg-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(255,255,255,0.45),inset_4px_0_12px_rgba(255,140,80,0.25),inset_-4px_0_12px_rgba(100,180,255,0.25)] text-zinc-900'
      }`}>
        
        {/* Crystal-clear dispersion & glint highlights */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#df4f00]/10 via-transparent to-blue-500/10 opacity-35 pointer-events-none" />
        <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none" />
        <div className="absolute top-1 inset-x-14 h-[2px] bg-gradient-to-r from-transparent via-[#df4f00]/40 to-transparent blur-sm opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

        <nav className="relative z-10 px-5 sm:px-7 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df4f00] rounded-full group/logo">
            <div className="relative">
              <img src="/assets/images/simple_logo.png" alt="UniMates Logo" className="h-9 w-auto drop-shadow-sm group-hover/logo:scale-105 transition-transform" />
            </div>
            <span className={`font-display font-bold text-lg tracking-tight hidden sm:inline-block transition-colors duration-300 ${
              isDarkUnderneath ? 'text-white' : 'text-zinc-900'
            }`}>UniMates</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#df4f00] rounded-full px-4 py-1.5 ${
                  isDarkUnderneath
                    ? 'text-zinc-200 hover:text-white hover:bg-white/15'
                    : 'text-zinc-700 hover:text-[#df4f00] hover:bg-white/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://linktr.ee/unimatesteam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#df4f00] to-[#ff6314] text-white rounded-full font-semibold text-xs sm:text-sm shadow-md shadow-[#df4f00]/20 hover:shadow-lg hover:shadow-[#df4f00]/35 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df4f00]"
            >
              <span>Download App</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`md:hidden p-2 rounded-full border border-transparent transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#df4f00] ${
              isDarkUnderneath
                ? 'text-white hover:bg-white/15 hover:border-white/30'
                : 'text-zinc-700 hover:bg-white/50 hover:border-white/50'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Floating Glass Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-3 inset-x-0 rounded-3xl border border-white/60 bg-white/40 backdrop-blur-2xl shadow-xl p-5 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-zinc-800 hover:text-[#df4f00] py-2.5 px-4 rounded-2xl hover:bg-white/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://linktr.ee/unimatesteam"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full py-3 bg-gradient-to-r from-[#df4f00] to-[#ff6314] text-white text-center rounded-full font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Download App</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
