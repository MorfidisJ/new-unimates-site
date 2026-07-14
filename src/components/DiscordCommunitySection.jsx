import { useState } from 'react';
import {
  Check,
  Copy,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Palette,
  BookOpen,
  MapPin,
  Home,
  Users,
  ShieldCheck
} from 'lucide-react';

function DiscordIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function DiscordCommunitySection() {
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [copiedFb, setCopiedFb] = useState(false);

  const discordUrl = 'https://discord.gg/huHkhT5cwd';
  const facebookUrl = 'https://www.facebook.com/groups/2500842557035055/';

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordUrl);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  const handleCopyFb = () => {
    navigator.clipboard.writeText(facebookUrl);
    setCopiedFb(true);
    setTimeout(() => setCopiedFb(false), 2000);
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-xs sm:text-sm font-bold tracking-wide shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#df4f00]" />
          <span>Official Student Communities</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-display leading-[1.12]">
          Join Our Official{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-[#1877F2]">
            Student Network
          </span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
          Whether you want real-time campus chat on Discord or verified roommate listings on Facebook, connect with students across Greece.
        </p>
      </div>

      {/* Bento Box Grid of Two */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Bento Box 1: Discord Server */}
        <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border border-zinc-200/80 hover:border-violet-300 p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/15 transition-all duration-500" />

          <div className="space-y-6 relative z-10">
            {/* Card Header */}
            <div className="flex items-center justify-between gap-4 pb-5 border-b border-zinc-200/70">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#5865F2] text-white flex items-center justify-center shadow-md shrink-0">
                  <DiscordIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-lg text-zinc-900">
                      UniMates Community
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-[#5865F2]/10 text-[#5865F2] font-bold text-[10px] uppercase tracking-wider whitespace-nowrap">
                      Official Server
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 font-medium mt-0.5">
                    Discord • The Living Room
                  </p>
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2.5">
              <h4 className="text-2xl font-bold font-display text-zinc-900">
                Real-Time Campus Chat &amp; Hangouts
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Step inside our official student server. Connect with peers in your university city, share aesthetic room decor inspiration, get campus survival hacks, and discuss ideas with our founders.
              </p>
            </div>

            {/* Bento Inner Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-3.5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <MapPin className="w-4 h-4 text-violet-600" />
                  <span>📍 city-chat</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Connect with students across Greek university cities.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-3.5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <Palette className="w-4 h-4 text-pink-600" />
                  <span>🎨 mood-boards</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Share dorm decor ideas &amp; aesthetic room layouts.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-3.5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>📚 uni-survival</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Exam tips, lecture notes &amp; student life hacks.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-3.5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <MessageCircle className="w-4 h-4 text-purple-600" />
                  <span>💬 general-chat</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Daily student banter &amp; new peer introductions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center gap-3 relative z-10">
            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 px-6 py-3.5 rounded-2xl bg-[#0a1628] hover:bg-[#5865F2] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <DiscordIcon className="w-4 h-4" />
              <span>Join Discord Server</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyDiscord}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-zinc-700 font-semibold text-xs transition-all flex items-center justify-center gap-2 shrink-0"
            >
              {copiedDiscord ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-500" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bento Box 2: Facebook Group */}
        <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border border-zinc-200/80 hover:border-blue-300 p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/15 transition-all duration-500" />

          <div className="space-y-6 relative z-10">
            {/* Card Header */}
            <div className="flex items-center justify-between gap-4 pb-5 border-b border-zinc-200/70">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shadow-md shrink-0">
                  <FacebookIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-lg text-zinc-900">
                      Συγκατοίκηση Ελλάδα
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-[#1877F2]/10 text-[#1877F2] font-bold text-[10px] uppercase tracking-wider whitespace-nowrap">
                      Official Group
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 font-medium mt-0.5">
                    Facebook • UniMates Greece
                  </p>
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2.5">
              <h4 className="text-2xl font-bold font-display text-zinc-900">
                Verified Roommates &amp; Housing Posts
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Η επίσημη κοινότητα του UniMates! Ψάχνεις συγκατοίκο; Connect with verified students looking for apartments and roommates across Greek universities without agency fees.
              </p>
            </div>

            {/* Bento Inner Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-3.5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <Home className="w-4 h-4 text-[#1877F2]" />
                  <span>🏡 Roommate Search</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Post &amp; discover verified students searching for flats.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-3.5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>🤝 Direct Contact</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Chat directly with peers—zero broker or agency costs.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-3.5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <MapPin className="w-4 h-4 text-[#df4f00]" />
                  <span>📍 Greek Uni Cities</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Active in Ioannina, Athens, Thessaloniki &amp; Patras.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-3.5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <ShieldCheck className="w-4 h-4 text-violet-600" />
                  <span>🛡️ Safe Community</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Moderated student space for a trusted experience.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center gap-3 relative z-10">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 px-6 py-3.5 rounded-2xl bg-[#1877F2] hover:bg-[#1558B0] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Join Facebook Group</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyFb}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-zinc-700 font-semibold text-xs transition-all flex items-center justify-center gap-2 shrink-0"
            >
              {copiedFb ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-500" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

