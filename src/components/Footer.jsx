import { Share2, Mail, ExternalLink, Heart } from 'lucide-react';

// Brand Social SVGs
function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

function YouTubeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6H9.2v-7.6H6.46M7.83 6.5a1.64 1.64 0 0 0-1.64 1.64 1.64 1.64 0 0 0 1.64 1.64 1.64 1.64 0 0 0 1.64-1.64 1.64 1.64 0 0 0-1.64-1.64Z" />
    </svg>
  );
}

function DiscordIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/unimates.info',
    icon: InstagramIcon,
    hoverBg: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]'
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@unimatesapp',
    icon: TikTokIcon,
    hoverBg: 'hover:bg-black hover:border-zinc-700'
  },
  {
    name: 'Discord Student Server',
    href: 'https://discord.gg/huHkhT5cwd',
    icon: DiscordIcon,
    hoverBg: 'hover:bg-[#5865F2]'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCMKHVISj443ioGYAZYRUrTQ',
    icon: YouTubeIcon,
    hoverBg: 'hover:bg-[#FF0000]'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/unimatesapp',
    icon: LinkedInIcon,
    hoverBg: 'hover:bg-[#0A66C2]'
  },
  {
    name: 'Linktree / All Links',
    href: 'https://linktr.ee/unimatesteam',
    icon: Share2,
    hoverBg: 'hover:bg-[#df4f00]'
  },
  {
    name: 'Email Support',
    href: 'mailto:info@unimates.net',
    icon: Mail,
    hoverBg: 'hover:bg-[#df4f00]'
  }
];

export default function Footer() {
  return (
    <footer data-theme="dark" className="bg-[#0a1628] text-white pt-16 pb-12 border-t border-[#132644] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#132644]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/logo.png"
                alt="UniMates Logo"
                className="h-10 w-auto brightness-200"
              />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                UniMates
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              The #1 roommate matching app for youth. Swipe right for compatible flatmates, safe
              student accommodations, and thriving university communities.
            </p>

            {/* Complete Social Links Row */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                Join Our Student Community
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {SOCIAL_LINKS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      aria-label={item.name}
                      title={item.name}
                      className={`w-10 h-10 rounded-full bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm ${item.hoverBg}`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base text-white tracking-wide">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Why UniMates
                </a>
              </li>
              <li>
                <a href="/#screens" className="hover:text-white transition-colors">
                  App Characteristics
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Funnel */}
          <div>
            <h4 className="font-display font-bold text-base text-white tracking-wide">
              Get Started
            </h4>
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
                <a
                  href="/support"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/support');
                    window.dispatchEvent(new Event('navigate'));
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/privacy-policy');
                    window.dispatchEvent(new Event('navigate'));
                  }}
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
