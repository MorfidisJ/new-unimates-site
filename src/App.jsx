import { useState, useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import TextReveal from './components/TextReveal';
import MagneticButton from './components/MagneticButton';
import SwipeDeck from './components/SwipeDeck';
import FeatureBento from './components/FeatureBento';
import AppCarousel from './components/AppCarousel';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import TeamGrid from './components/TeamGrid';
import PressArticles from './components/PressArticles';
import InstagramFeed from './components/InstagramFeed';
import PressMarquee from './components/PressMarquee';
import Footer from './components/Footer';
import SoftAurora from './components/SoftAurora';
import TrueFocus from './components/TrueFocus';
import Seo from './components/Seo';
import SecretLinktree from './components/SecretLinktree';
import { Download, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [searchParams, setSearchParams] = useState(() => new URLSearchParams(window.location.search));

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const secretPaths = ['/links', '/linktree', '/unimatesteam', '/connect', '/bio', '/socials'];
  const normalizedPath = currentPath.toLowerCase().replace(/\/$/, '') || '/';
  const isSecretPage =
    secretPaths.includes(normalizedPath) ||
    secretPaths.some((path) => normalizedPath.startsWith(path + '/')) ||
    ['links', 'linktree', 'unimatesteam', 'connect', 'bio'].includes(
      searchParams.get('page')?.toLowerCase()
    );

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    setSearchParams(new URLSearchParams(''));
  };

  if (isSecretPage) {
    return <SecretLinktree onNavigateHome={navigateToHome} />;
  }

  return (
    <SmoothScroll>
      <Seo
        title="UniMates — #1 Roommate & Flatmate Matching App for Students"
        description="Swipe right for verified university flatmates, safe student accommodations, and thriving youth communities in Ioannina and across Greece."
        keywords="UniMates, flatmate matching, roommate finder, university students, housing Ioannina, Greece student accommodation, roommate app"
        url="https://unimates.net/"
      />
      <div className="min-h-screen flex flex-col bg-[#f9f6f0] text-[#0a1628] selection:bg-[#df4f00] selection:text-white font-sans relative overflow-x-hidden">
        {/* React Bits Idea #2: Soft Aurora Ambient Light Field */}
        <SoftAurora />

        <Navbar />

        {/* Hero Section */}
        <main className="flex-1 pt-28 pb-16 overflow-hidden relative z-10">
          <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy & CTA */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#df4f00]/10 border border-[#df4f00]/20 text-[#df4f00] text-xs sm:text-sm font-bold tracking-wide shadow-sm">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>The #1 Roommate App for Youth</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.08] font-display">
                Swipe <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4f00] via-pink-600 to-violet-600 animate-gradient-x inline-block">Right</span> for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-600 to-[#df4f00] animate-gradient-x inline-block">Right</span> Roommate.
              </h1>

              <p className="text-lg sm:text-xl text-zinc-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Swipe right for verified university flatmates, safe student accommodations, and thriving youth communities in Ioannina and across Greece.
              </p>

              {/* React Bits Idea #1: True Focus Optical Interactive Pillars */}
              <div className="pt-1">
                <TrueFocus
                  sentence="Verified Students • ML Match • Secure Housing • Student Community"
                  separator="•"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                {/* Primary CTA uses MagneticButton */}
                <a
                  href="https://linktr.ee/unimatesteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#df4f00] text-white font-bold text-base shadow-xl shadow-[#df4f00]/25 hover:shadow-[#df4f00]/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Download App</span>
                  <Download className="w-5 h-5" />
                </a>

                {/* Secondary CTA uses MagneticButton */}
                <MagneticButton href="#how-it-works" className="w-full sm:w-auto text-center">
                  How It Works
                </MagneticButton>
              </div>

              {/* Trust badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-zinc-500 border-t border-zinc-200/60">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>University Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#df4f00]" />
                  <span>AI-Powered Matching</span>
                </div>
              </div>
            </div>

            {/* Right Centerpiece: Signature SwipeDeck */}
            <div className="lg:col-span-5 flex justify-center py-6">
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#df4f00]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
                <SwipeDeck />
              </div>
            </div>
          </div>

          {/* Press Marquee & Backers placed right under Hero section */}
          <PressMarquee />

          {/* Bento Grid Features */}
          <section id="features" className="py-24 max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#df4f00]/10 text-[#df4f00] border border-[#df4f00]/20">
                Why UniMates?
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mt-3 font-display tracking-tight">
                Everything You Need for Student Living
              </h2>
              <p className="text-zinc-600 mt-4 text-base md:text-lg">
                We're creating a community where students connect, create, and thrive together.
              </p>
            </div>

            <FeatureBento />
          </section>

          {/* Our App Characteristics Carousel */}
          <section id="screens" className="py-12 bg-white/50 border-y border-zinc-200/60">
            <AppCarousel />
          </section>

          {/* How It Works */}
          <HowItWorks />

          {/* About Section */}
          <AboutSection />

          {/* Team Grid */}
          <TeamGrid />

          {/* Press Articles & Media Coverage */}
          <PressArticles />

          {/* Instagram Community Feed */}
          <InstagramFeed />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
