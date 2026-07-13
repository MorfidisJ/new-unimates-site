import { useState } from 'react';
import {
  ExternalLink,
  Check,
  Copy,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Palette,
  BookOpen,
  MapPin,
  Lightbulb,
  PartyPopper
} from 'lucide-react';

function DiscordIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export default function DiscordCommunitySection() {
  const [copied, setCopied] = useState(false);
  const discordUrl = 'https://discord.gg/huHkhT5cwd';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(discordUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 relative z-10">
      <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border border-zinc-200/80 p-8 sm:p-14 lg:p-16 shadow-xl overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#df4f00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Editorial Story */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200/80 text-violet-700 text-xs sm:text-sm font-bold tracking-wide shadow-2xs">
              <DiscordIcon className="w-4 h-4 text-violet-600" />
              <span>Official Student Community Space</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-display leading-[1.12]">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-[#df4f00]">
                The Living Room
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Step inside our official student server. Whether you want to connect with peers in your city, share aesthetic room inspiration, get university survival tips, or give early feature ideas directly to our founders—you belong here.
            </p>

            {/* Editorial Feature Highlights based on real server spaces */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-left">
              <div className="flex items-start gap-3 bg-zinc-50 border border-zinc-200/70 rounded-2xl p-4">
                <div className="w-8 h-8 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">📍 city-chat</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Connect with students across Ioannina and Greek university cities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-zinc-50 border border-zinc-200/70 rounded-2xl p-4">
                <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">🎨 mood-boards</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Share dorm decoration ideas, study setups &amp; aesthetic room layouts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-zinc-50 border border-zinc-200/70 rounded-2xl p-4">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">📚 uni-survival</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Exam tips, campus guides, lecture notes &amp; student life hacks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-zinc-50 border border-zinc-200/70 rounded-2xl p-4">
                <div className="w-8 h-8 rounded-xl bg-[#df4f00]/10 text-[#df4f00] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">✨ feature-ideas</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Help shape the future of UniMates with direct founder feedback.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0a1628] hover:bg-[#df4f00] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <DiscordIcon className="w-5 h-5" />
                <span>Join Official Discord Server</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyLink}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-zinc-800 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Invite Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-500" />
                    <span>Copy Invite Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Clean Editorial Spaces Showcase matching real server */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-zinc-50/90 border border-zinc-200/80 p-6 sm:p-8 shadow-sm space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center text-white shadow-sm">
                    <DiscordIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-zinc-900">
                      UniMates Server Spaces
                    </h4>
                    <p className="text-xs text-zinc-500 font-medium">
                      Student-led rooms designed for connection
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Active Now
                </span>
              </div>

              {/* Space 1: THE LIVING ROOM */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    🛋️ THE LIVING ROOM
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="bg-white rounded-2xl p-4 border border-zinc-200/70 shadow-2xs space-y-1.5 hover:border-violet-300 transition-all">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                      <MapPin className="w-4 h-4 text-violet-600" />
                      <span>📍 • city-chat</span>
                    </div>
                    <p className="text-xs text-zinc-500">
                      Find students living or moving to your university city.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-zinc-200/70 shadow-2xs space-y-1.5 hover:border-violet-300 transition-all">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                      <MessageCircle className="w-4 h-4 text-purple-600" />
                      <span>💬 • general-chat</span>
                    </div>
                    <p className="text-xs text-zinc-500">
                      Daily student banter, introductions &amp; campus life chat.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-zinc-200/70 shadow-2xs space-y-1.5 hover:border-violet-300 transition-all">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                      <Palette className="w-4 h-4 text-pink-600" />
                      <span>🎨 • mood-boards</span>
                    </div>
                    <p className="text-xs text-zinc-500">
                      Room decor setups, desk aesthetics &amp; design vibes.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-zinc-200/70 shadow-2xs space-y-1.5 hover:border-violet-300 transition-all">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      <span>📚 • uni-survival</span>
                    </div>
                    <p className="text-xs text-zinc-500">
                      Study tips, exam guides &amp; university survival hacks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Space 2: BETA FEEDBACK & EVENTS */}
              <div className="space-y-3 pt-2 border-t border-zinc-200/70">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#df4f00]">
                    🛠️ BETA FEEDBACK &amp; ROADMAP
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-400">Founder Room</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="bg-white rounded-2xl p-3.5 border border-zinc-200/70 shadow-2xs flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#df4f00] shrink-0" />
                    <span className="text-xs font-bold text-zinc-800">✨ • feature-ideas</span>
                  </div>

                  <div className="bg-white rounded-2xl p-3.5 border border-zinc-200/70 shadow-2xs flex items-center gap-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-xs font-bold text-zinc-800">💡 • feature-roadmap</span>
                  </div>

                  <div className="bg-white rounded-2xl p-3.5 border border-zinc-200/70 shadow-2xs flex items-center gap-2.5">
                    <PartyPopper className="w-4 h-4 text-pink-500 shrink-0" />
                    <span className="text-xs font-bold text-zinc-800">🎉 • events-promos</span>
                  </div>
                </div>
              </div>

              {/* Footer Banner Inside Card */}
              <div className="bg-violet-50 border border-violet-200/70 rounded-2xl p-4 flex items-center justify-between gap-4">
                <div className="text-xs text-violet-900 font-medium">
                  Ready to join <strong className="font-bold">THE LIVING ROOM</strong>?
                </div>
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs shrink-0 transition-colors shadow-2xs"
                >
                  Enter Server →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
