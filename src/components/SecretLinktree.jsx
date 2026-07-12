import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import liquidGL from 'liquid-gl';
import {
  Share2,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Check,
  Mail,
  Download,
  Globe,
  Newspaper,
  Users,
  QrCode,
  X,
  ArrowLeft,
  Heart,
  Search,
  CheckCircle2,
  Copy,
  MoreVertical
} from 'lucide-react';
import SoftAurora from './SoftAurora';
import Seo from './Seo';

// High-fidelity brand social SVGs
function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

function DiscordIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6H9.2v-7.6H6.46M7.83 6.5a1.64 1.64 0 0 0-1.64 1.64 1.64 1.64 0 0 0 1.64 1.64 1.64 1.64 0 0 0 1.64-1.64 1.64 1.64 0 0 0-1.64-1.64Z" />
    </svg>
  );
}

// Social icon bar items
const SOCIAL_ICONS = [
  {
    name: 'Instagram',
    handle: '@unimates.app',
    url: 'https://www.instagram.com/unimates.app/',
    icon: InstagramIcon,
    color: 'hover:text-pink-600 hover:bg-pink-500/10 hover:border-pink-500/30'
  },
  {
    name: 'TikTok',
    handle: '@unimatesapp',
    url: 'https://tiktok.com/@unimatesapp',
    icon: TikTokIcon,
    color: 'hover:text-zinc-900 hover:bg-zinc-900/10 hover:border-zinc-900/30'
  },
  {
    name: 'Discord',
    handle: 'Student Hub',
    url: 'https://discord.gg/huHkhT5cwd',
    icon: DiscordIcon,
    color: 'hover:text-indigo-600 hover:bg-indigo-500/10 hover:border-indigo-500/30'
  },
  {
    name: 'YouTube',
    handle: 'UniMates Series',
    url: 'https://www.youtube.com/channel/UCMKHVISj443ioGYAZYRUrTQ',
    icon: YouTubeIcon,
    color: 'hover:text-red-600 hover:bg-red-500/10 hover:border-red-500/30'
  },
  {
    name: 'LinkedIn',
    handle: 'UniMates Company',
    url: 'https://www.linkedin.com/company/unimatesapp',
    icon: LinkedInIcon,
    color: 'hover:text-blue-600 hover:bg-blue-500/10 hover:border-blue-500/30'
  },
  {
    name: 'Email Support',
    handle: 'info@unimates.net',
    url: 'mailto:info@unimates.net',
    icon: Mail,
    color: 'hover:text-[#df4f00] hover:bg-[#df4f00]/10 hover:border-[#df4f00]/30'
  }
];

function GooglePlayIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.496 1.496 0 0 1-.21-.784V2.598c0-.292.082-.564.21-.784zM15.206 13.414l2.068 2.068-11.83 6.848 9.762-8.916zM4.155 1.156l11.05 6.39-2.068 2.068-8.982-8.458zM18.683 10.198l2.512 1.455a1.053 1.053 0 0 1 0 1.832l-2.512 1.455-1.414-1.414 1.414-3.328z" />
    </svg>
  );
}

function AppStoreIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.64-.78 1.08-1.86.96-2.95-.93.04-2.07.62-2.73 1.4-.58.68-.99 1.78-.85 2.85 1.04.08 2.12-.53 2.62-1.3" />
    </svg>
  );
}

// Only the two primary App buttons
const LINKTREE_ITEMS = [
  {
    id: 'android-app',
    title: 'UniMates app for Android',
    url: 'https://unimates.net/#download',
    isPrimary: true,
    icon: GooglePlayIcon,
    badge: 'ANDROID',
    comingSoon: false
  },
  {
    id: 'ios-app',
    title: 'UniMates app for iOS (coming soon 🤫 )',
    url: '#',
    isPrimary: false,
    icon: AppStoreIcon,
    badge: 'IOS',
    comingSoon: true
  }
];

// Individual Liquid Glass Linktree Card with Interactive Surface Cursor Spotlight
function LinktreeCard({ item, onComingSoonToast }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleClick = (e) => {
    if (item.comingSoon) {
      e.preventDefault();
      onComingSoonToast?.();
    }
  };

  return (
    <motion.a
      href={item.url}
      target={item.comingSoon ? undefined : '_blank'}
      rel={item.comingSoon ? undefined : 'noopener noreferrer'}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={`group relative block w-full rounded-2xl overflow-hidden transition-all duration-300 ${item.isPrimary
        ? 'border-2 border-[#df4f00]/65 hover:border-[#df4f00] bg-white/85 hover:bg-white/95 shadow-[0_10px_30px_rgba(223,79,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.95)]'
        : 'border border-zinc-200/85 hover:border-[#df4f00]/40 bg-white/75 hover:bg-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]'
        }`}
    >
      <div className="relative w-full rounded-[14px] p-4 sm:p-5 flex items-center justify-between gap-4 overflow-hidden text-zinc-900">
        {/* Curved Top Specular Glint Apple VisionOS effect */}
        <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-80 pointer-events-none" />

        {/* Surface Cursor Spotlight */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(380px circle at ${mouse.x}px ${mouse.y}px, rgba(223, 79, 0, 0.12), transparent 65%)`,
            }}
          />
        )}

        {/* Left: Icon & Content */}
        <div className="flex items-center gap-4 min-w-0 relative z-10">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm ${item.isPrimary
              ? 'bg-[#df4f00]/10 text-[#df4f00] border border-[#df4f00]/25'
              : 'bg-zinc-100 text-zinc-700 border border-zinc-200/80 group-hover:bg-[#df4f00]/10 group-hover:text-[#df4f00]'
              }`}
          >
            <Icon className="w-6 h-6" />
          </div>

          <div className="min-w-0 text-left">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase border ${item.isPrimary
                  ? 'bg-[#df4f00] text-white border-[#df4f00]'
                  : 'bg-zinc-100 text-zinc-600 border-zinc-200/80 group-hover:bg-[#df4f00]/10 group-hover:text-[#df4f00] group-hover:border-[#df4f00]/20'
                  }`}
              >
                {item.badge}
              </span>
              {item.comingSoon && (
                <span className="text-[11px] font-semibold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                  Coming Soon
                </span>
              )}
            </div>

            <h3 className="text-base sm:text-lg font-bold truncate transition-colors font-display text-zinc-900 group-hover:text-[#df4f00]">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Right Action Indicator */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 relative z-10 bg-zinc-100 text-zinc-500 group-hover:bg-[#df4f00] group-hover:text-white">
          <MoreVertical className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>
    </motion.a>
  );
}

export default function SecretLinktree({ onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      try {
        liquidGL({
          target: '.social-liquid-icon',
          snapshot: 'body',
          resolution: 2.0,
          refraction: 0.03,
          bevelDepth: 0.12,
          bevelWidth: 0.22,
          frost: 1,
          shadow: true,
          specular: true,
          reveal: 'fade',
          tilt: true,
          tiltFactor: 12,
          magnify: 1.08,
        });
      } catch (err) {
        console.warn('liquidGL initialization:', err);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  // Trigger toast message
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleShareProfile = () => {
    const currentUrl = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      triggerToast('🔗 Profile URL copied to clipboard!');
    } else {
      triggerToast('🔗 Profile link ready to share!');
    }
  };

  const filteredLinks = LINKTREE_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Links', count: LINKTREE_ITEMS.length },
    { id: 'app', label: 'App & Website', count: LINKTREE_ITEMS.filter((i) => i.category === 'app').length },
    { id: 'social', label: 'Socials', count: LINKTREE_ITEMS.filter((i) => i.category === 'social').length },
    { id: 'community', label: 'Community', count: LINKTREE_ITEMS.filter((i) => i.category === 'community').length },
    { id: 'press', label: 'Press & Team', count: LINKTREE_ITEMS.filter((i) => i.category === 'press').length },
  ];

  return (
    <div className="min-h-screen relative flex flex-col bg-[#f9f6f0] text-[#0a1628] selection:bg-[#df4f00] selection:text-white font-sans overflow-x-hidden">
      {/* SEO metadata for Linktree page */}
      <Seo
        title="UniMates Official Links — @unimatesteam | Socials, App Download & Community"
        description="Official link portal for UniMates — swipe right for verified flatmates, join our student Discord hub, follow on TikTok & Instagram, and download the app."
        keywords="UniMates links, linktree unimatesteam, roommate app links, flatmate matching social links"
        url="https://unimates.net/links"
      />

      {/* Apple VisionOS / React Bits Ambient Aurora Light Field */}
      <SoftAurora />

      {/* Top Secret Navigation Bar */}
      <header className="relative z-30 max-w-2xl mx-auto w-full px-4 pt-6 flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 hover:bg-white/90 backdrop-blur-xl border border-white/80 shadow-sm text-xs font-bold text-zinc-700 hover:text-[#df4f00] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#df4f00]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Website</span>
        </button>

        {/* Secret Badge Indicator */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#df4f00]/10 border border-[#df4f00]/25 text-[#df4f00] text-[11px] font-bold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Official Linktree</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowShareModal(true)}
            aria-label="QR Code & Share"
            className="w-9 h-9 rounded-full bg-white/60 hover:bg-white/90 backdrop-blur-xl border border-white/80 shadow-sm flex items-center justify-center text-zinc-700 hover:text-[#df4f00] transition-all duration-300"
          >
            <QrCode className="w-4 h-4" />
          </button>
          <button
            onClick={handleShareProfile}
            aria-label="Share Linktree Profile"
            className="w-9 h-9 rounded-full bg-white/60 hover:bg-white/90 backdrop-blur-xl border border-white/80 shadow-sm flex items-center justify-center text-zinc-700 hover:text-[#df4f00] transition-all duration-300"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Linktree Profile Area */}
      <main className="relative z-20 flex-1 max-w-2xl mx-auto w-full px-4 pt-8 pb-20">
        {/* Profile Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          {/* Avatar with Specular Ring */}
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-r from-[#df4f00] via-pink-600 to-violet-600 shadow-xl shadow-[#df4f00]/20 mx-auto">
              <div className="w-full h-full rounded-full bg-[#0a1628] flex items-center justify-center overflow-hidden relative">
                <img
                  src="/assets/images/logo.png"
                  alt="UniMates Official Avatar"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain brightness-200"
                />
              </div>
            </div>

            {/* Verified Badge Icon overlay */}
            <div
              title="Verified Official Account"
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#df4f00] text-white border-2 border-[#f9f6f0] flex items-center justify-center shadow-md"
            >
              <CheckCircle2 className="w-5 h-5 fill-white text-[#df4f00]" />
            </div>
          </div>

          {/* Profile Name & Handle */}
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-display">
              UniMates
            </h1>
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>

          {/* Profile Bio */}
          <p className="text-sm sm:text-base text-zinc-600 max-w-md mx-auto mt-3 leading-relaxed font-normal">
            Match with roommates and find homes. Designed for students and professionals redefining next-gen renting in Ioannina & Greece.
          </p>

          {/* Stat Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-semibold text-zinc-700">
            <span className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-zinc-200/80 shadow-xs">
              🎓 University Verified
            </span>
            <span className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-zinc-200/80 shadow-xs">
              🤖 AI Roommate Matching
            </span>
            <span className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-zinc-200/80 shadow-xs">
              🏠 Safe Housing
            </span>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center flex-wrap gap-3 mt-6">
            {SOCIAL_ICONS.map((social) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={`UniMates on ${social.name}`}
                  title={`${social.name} (${social.handle})`}
                  className="group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {/* Layer 1: WebGL liquidGL Target (liquidGL renders the WebGL refracted liquid glass circle here) */}
                  <div className="social-liquid-icon absolute inset-0 rounded-full pointer-events-none" />

                  {/* Layer 2: Visible Apple VisionOS Liquid Glass Rim & Specular Shell */}
                  <div className="absolute inset-0 rounded-full border border-white/85 bg-white/45 group-hover:bg-white/65 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] transition-all duration-300 pointer-events-none overflow-hidden">
                    {/* Curved Crescent Top Specular Glint along top arc of circle */}
                    <div className="absolute -top-3 inset-x-0 h-6 bg-gradient-to-b from-white/90 to-transparent rounded-full opacity-75 pointer-events-none" />
                  </div>

                  {/* Layer 3: Crisp Icon Content */}
                  <div
                    className={`relative z-20 flex items-center justify-center w-full h-full rounded-full transition-colors ${social.color}`}
                  >
                    <SocialIcon className="w-5 h-5 text-zinc-800 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Two Signature App Linktree Cards */}
        <div className="space-y-4 mt-8">
          {LINKTREE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
            >
              <LinktreeCard
                item={item}
                onComingSoonToast={() =>
                  triggerToast('🤫 UniMates app for iOS is currently in private testing and launching soon!')
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Secret Page Bottom Signature Banner */}
        <div className="mt-12 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-zinc-200/80 text-xs font-medium text-zinc-500 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#df4f00]" />
            <span>for students by students</span>
          </div>

          <p className="text-[11px] text-zinc-400 flex items-center justify-center gap-1">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-[#df4f00] fill-[#df4f00]" />
            <span>by UniMates.</span>
          </p>
        </div>
      </main>

      {/* Floating Copy Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-[#0a1628] text-white text-xs font-bold shadow-2xl border border-white/10 flex items-center gap-2"
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QR Code & Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-[#f9f6f0] border border-white/80 shadow-2xl p-6 relative overflow-hidden text-center"
            >
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-4 top-4 p-2 rounded-full bg-zinc-200/60 hover:bg-zinc-300/80 text-zinc-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#df4f00]/15 text-[#df4f00] mb-3">
                <QrCode className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-zinc-900 font-display">
                Share UniMates Linktree
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Scan or share this secret portal with friends & university classmates
              </p>

              {/* Working Scannable QR Code */}
              <div className="my-5 p-4 bg-white rounded-3xl border border-zinc-200 shadow-sm flex flex-col items-center justify-center relative group">
                <div className="relative w-48 h-48 flex items-center justify-center p-2 bg-white rounded-2xl">
                  {/* Actual Working Scannable QR Code for https://unimates.net/links */}
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Funimates.net%2Flinks&color=0a1628&bgcolor=ffffff&ecc=Q"
                    alt="Scan to visit UniMates Linktree (unimates.net/links)"
                    className="w-full h-full object-contain rounded-xl"
                  />

                  {/* Center Brand Badge inside QR Code */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/80 shadow-md flex items-center justify-center p-1">
                      <img
                        src="/assets/images/logo.png"
                        alt="UniMates"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-bold text-zinc-600 tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SCANNABLE PROFILE QR • UNIMATES.NET/LINKS</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleShareProfile();
                    setShowShareModal(false);
                  }}
                  className="flex-1 py-3 rounded-full bg-[#df4f00] text-white text-xs font-bold hover:bg-[#df4f00]/90 transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#df4f00]/20"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Profile URL</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
