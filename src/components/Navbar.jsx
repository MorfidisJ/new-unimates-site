import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Why UniMates', href: '#features' },
    { name: 'App Screens', href: '#screens' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About & Team', href: '#about' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/60 transition-colors">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df4f00] rounded-xl">
          <img src="/assets/images/logo.png" alt="UniMates Logo" className="h-10 w-auto" />
          <span className="font-display font-bold text-xl tracking-tight text-zinc-900 hidden sm:inline-block">UniMates</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-[#df4f00] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#df4f00] rounded-lg px-2 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://linktr.ee/unimatesteam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#df4f00] text-white rounded-full font-semibold text-sm shadow-lg shadow-[#df4f00]/20 hover:bg-[#c64600] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df4f00]"
          >
            <span>Download App</span>
            <Download className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden p-2 rounded-xl text-zinc-700 hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#df4f00]"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-200 bg-white px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-zinc-800 hover:text-[#df4f00] py-2 border-b border-zinc-100"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://linktr.ee/unimatesteam"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full py-3 bg-[#df4f00] text-white text-center rounded-full font-bold text-sm shadow-md flex items-center justify-center gap-2"
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
