import { Share2, Mail, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white pt-16 pb-12 border-t border-[#132644] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#132644]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/assets/images/logo.png" alt="UniMates Logo" className="h-10 w-auto brightness-200" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">UniMates</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              The #1 roommate matching app for youth. Swipe right for compatible flatmates, safe student accommodations, and thriving university communities.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linktr.ee/unimatesteam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UniMates Linktree / Social Links"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-[#df4f00] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#df4f00]"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@unimates.net"
                aria-label="Email UniMates contact"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-[#df4f00] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#df4f00]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base text-white tracking-wide">Navigation</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
              <li><a href="#features" className="hover:text-white transition-colors">Why UniMates</a></li>
              <li><a href="#screens" className="hover:text-white transition-colors">App Characteristics</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Legal & Funnel */}
          <div>
            <h4 className="font-display font-bold text-base text-white tracking-wide">Get Started</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
              <li>
                <a
                  href="https://linktr.ee/unimatesteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#df4f00] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Download App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="mailto:info@unimates.net" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="https://unimates.net/Privacy-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} UniMates. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-[#df4f00] fill-[#df4f00]" />
            <span>by the UniMates team.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
