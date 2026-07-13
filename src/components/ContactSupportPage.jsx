import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  HelpCircle,
  ChevronDown,
  Search,
  MapPin,
  Clock,
  Send,
  User,
  Building2,
  AlertCircle,
  FileText,
  CheckCircle2,
  Download
} from 'lucide-react';
import SoftAurora from './SoftAurora';
import Seo from './Seo';
import Footer from './Footer';
import DiscordCommunitySection from './DiscordCommunitySection';

const FAQ_ITEMS = [
  {
    id: 'verify',
    category: 'Account & Verification',
    question: 'How does UniMates verify that users are real university students?',
    answer:
      'We require university email verification or student ID authentication during onboarding. Profiles display a "University Verified" badge only after confirming their active enrolment status, ensuring a secure and trusted student community.'
  },
  {
    id: 'matching',
    category: 'Roommate Matching',
    question: 'How does the AI roommate matching algorithm work?',
    answer:
      'Our intelligent matching engine analyzes your lifestyle preferences, study habits, sleep schedules, cleanliness expectations, and campus location. You get compatibility percentage scores with each potential flatmate before swiping right.'
  },
  {
    id: 'free',
    category: 'General',
    question: 'Is UniMates free to download and use?',
    answer:
      'Yes! Core roommate discovery, swiping, student verification, and messaging are 100% free for university students.'
  },
  {
    id: 'safety',
    category: 'Safety & Privacy',
    question: 'How do I report a suspicious profile or safety concern?',
    answer:
      'Your safety is our top priority. You can instantly report or block any user directly from their profile card or chat screen. Our moderation team reviews reports within 24 hours. For urgent safety inquiries, email info@unimates.net.'
  },
  {
    id: 'cities',
    category: 'Locations',
    question: 'Which cities and universities does UniMates support?',
    answer:
      'UniMates originated in Ioannina, Greece (University of Ioannina) and is rapidly expanding across major university cities in Greece and Europe. You can select your university and city directly in the app.'
  },
  {
    id: 'delete',
    category: 'Account & Verification',
    question: 'How can I delete my account or request a copy of my personal data?',
    answer:
      'You can request complete account deletion or export your data directly from app settings or by contacting our Data Protection team at info@unimates.net. Visit our Privacy Policy page for full GDPR details.'
  }
];

const SUPPORT_CHANNELS = [
  {
    id: 'general',
    title: 'Student Community & Support',
    description: 'Questions about roommate matching, app verification, or technical assistance.',
    email: 'info@unimates.net',
    badge: 'Fastest Response',
    icon: MessageSquare,
    accent: 'from-[#df4f00] to-amber-600'
  },
  {
    id: 'privacy',
    title: 'Data Protection & Privacy',
    description: 'GDPR inquiries, account data export, or privacy rights questions.',
    email: 'info@unimates.net',
    badge: 'GDPR Dedicated',
    icon: ShieldCheck,
    accent: 'from-violet-600 to-purple-600',
    link: '/privacy-policy',
    linkText: 'View Privacy Policy'
  },
  {
    id: 'partnerships',
    title: 'University Clubs & Ambassadorships',
    description: 'Student societies, event partnerships, or becoming a UniMates Campus Ambassador.',
    email: 'info@unimates.net',
    badge: 'Growth & Events',
    icon: Sparkles,
    accent: 'from-pink-600 to-rose-600'
  }
];

export default function ContactSupportPage({ onNavigateHome }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSubject, setCopiedSubject] = useState(false);

  // Interactive Message Builder State
  const [category, setCategory] = useState('Account & Verification Support');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ search & open states
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('All');
  const [openFaqId, setOpenFaqId] = useState('verify');

  const faqCategories = useMemo(() => {
    const cats = new Set(FAQ_ITEMS.map((item) => item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchCat =
        selectedFaqCategory === 'All' || item.category === selectedFaqCategory;
      const q = faqSearch.toLowerCase().trim();
      const matchQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [faqSearch, selectedFaqCategory]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@unimates.net');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleHomeClick = (e) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`[UniMates Support] ${category} - ${name || 'Student'}`);
    const body = encodeURIComponent(
      `Hello UniMates Support Team,\n\nCategory: ${category}\nName: ${name || 'N/A'}\nEmail: ${
        email || 'N/A'
      }\nUniversity: ${university || 'N/A'}\n\nMessage:\n${message}\n\nThank you!`
    );
    return `mailto:info@unimates.net?subject=${subject}&body=${body}`;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    window.location.href = generateMailtoLink();
    setFormSubmitted(true);
  };

  const handleCopyMessageTemplate = () => {
    const text = `Subject: [UniMates Support] ${category} - ${name || 'Student'}\nTo: info@unimates.net\n\nHello UniMates Support Team,\n\nCategory: ${category}\nName: ${name}\nEmail: ${email}\nUniversity: ${university}\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(text);
    setCopiedSubject(true);
    setTimeout(() => setCopiedSubject(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f6f0] text-[#0a1628] selection:bg-[#df4f00] selection:text-white font-sans relative overflow-x-hidden">
      <Seo
        title="Contact & Support — UniMates"
        description="Get 24/7 assistance from the UniMates team. Whether you need verification help, roommate matching support, or GDPR data requests, we are here for you."
        keywords="UniMates contact, student support, roommate app help, university verification support, Ioannina student app"
        url="https://unimates.net/support"
      />

      <SoftAurora />

      {/* Floating Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-zinc-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a
            href="/"
            onClick={handleHomeClick}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-zinc-200/80 text-zinc-800 font-semibold text-sm shadow-sm hover:shadow-md hover:border-[#df4f00] hover:text-[#df4f00] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </a>

          <div className="flex items-center gap-2.5">
            <img
              src="/assets/images/logo.png"
              alt="UniMates Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="font-display font-bold text-lg hidden sm:inline text-zinc-900">
              UniMates Support Center
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/privacy-policy"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold hover:bg-zinc-200 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#df4f00]" />
              <span>Privacy Center</span>
            </a>
            <a
              href="https://linktr.ee/unimatesteam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#df4f00] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#df4f00]/25 hover:bg-[#c94500] transition-all"
            >
              <span>Get App</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 relative z-10 w-full">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#df4f00]/10 border border-[#df4f00]/20 text-[#df4f00] text-xs sm:text-sm font-bold tracking-wide shadow-sm">
            <HeartHandshake className="w-4 h-4" />
            <span>Dedicated Student Community & Technical Help</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 font-display">
            How Can We Help You{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4f00] via-pink-600 to-violet-600">
              Thrive?
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Whether you need assistance verifying your university status, have questions about our
            roommate matching engine, or want to explore student ambassadorships, our team is ready
            to support you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contact-form"
              className="px-7 py-3.5 rounded-full bg-[#df4f00] text-white font-bold text-sm shadow-xl shadow-[#df4f00]/25 hover:shadow-[#df4f00]/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Support Message</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-full bg-white border border-zinc-200 text-zinc-800 font-semibold text-sm hover:border-[#df4f00] hover:text-[#df4f00] transition-all flex items-center gap-2 shadow-sm"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">info@unimates.net Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Support Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Support Channel Cards Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUPPORT_CHANNELS.map((chan) => {
              const Icon = chan.icon;
              return (
                <div
                  key={chan.id}
                  className="bg-white/90 backdrop-blur-md border border-zinc-200/80 rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#df4f00]/10 flex items-center justify-center text-[#df4f00]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-100 text-zinc-700">
                        {chan.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-zinc-900">{chan.title}</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">{chan.description}</p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
                    <a
                      href={`mailto:${chan.email}`}
                      className="text-[#df4f00] font-bold text-sm hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{chan.email}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {chan.link && (
                      <a
                        href={chan.link}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
                      >
                        {chan.linkText}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Support Form + Office Info Section */}
        <section
          id="contact-form"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20 scroll-mt-28"
        >
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md border border-zinc-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#df4f00]">
                Interactive Support Builder
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-zinc-900">
                Send Us a Direct Message
              </h2>
              <p className="text-sm text-zinc-600">
                Fill in your details and message below. Clicking send will open your default email
                client pre-filled and ready to go.
              </p>
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wide mb-2">
                  Topic / Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-zinc-900 focus:outline-none focus:border-[#df4f00] focus:ring-2 focus:ring-[#df4f00]/15 transition-all"
                >
                  <option value="Account & Verification Support">
                    Account & Verification Support
                  </option>
                  <option value="Roommate Matching Questions">Roommate Matching Questions</option>
                  <option value="Safety & Community Guidelines">Safety & Community Report</option>
                  <option value="Feature Request or Feedback">Feature Request or Feedback</option>
                  <option value="Campus Ambassador & Partnerships">
                    Campus Ambassador & Partnerships
                  </option>
                  <option value="GDPR & Data Protection Request">
                    GDPR & Data Protection Request
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wide mb-2">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Papadopoulou"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#df4f00] focus:ring-2 focus:ring-[#df4f00]/15"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wide mb-2">
                    University Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. elena@uoi.gr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#df4f00] focus:ring-2 focus:ring-[#df4f00]/15"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wide mb-2">
                  University / City (Optional)
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. University of Ioannina, Greece"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#df4f00] focus:ring-2 focus:ring-[#df4f00]/15"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wide mb-2">
                  How Can We Help?
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your question, feature idea, or support inquiry..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#df4f00] focus:ring-2 focus:ring-[#df4f00]/15"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[#df4f00] text-white font-bold text-sm shadow-lg shadow-[#df4f00]/25 hover:bg-[#c94500] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email to Support</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessageTemplate}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {copiedSubject ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Formatted Text</span>
                    </>
                  )}
                </button>
              </div>

              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-800 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="font-bold">Email Client Opened!</strong> If your email client
                    did not open automatically, click &quot;Copy Formatted Text&quot; above and mail
                    us at{' '}
                    <a href="mailto:info@unimates.net" className="font-bold underline">
                      info@unimates.net
                    </a>
                    .
                  </div>
                </motion.div>
              )}
            </form>
          </div>

          {/* Right Column: Office Info & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/95 backdrop-blur-md border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#df4f00]/10 flex items-center justify-center text-[#df4f00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-zinc-900">
                    Headquarters & Location
                  </h3>
                  <p className="text-xs text-zinc-500">UniMates Operations</p>
                </div>
              </div>

              <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#df4f00] mt-0.5 shrink-0" />
                  <div className="text-sm text-zinc-700">
                    <strong className="font-bold text-zinc-900 block">UniMates Greece</strong>
                    <span>Ioannina 45332, Epirus</span>
                    <br />
                    <span>Greece</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-zinc-200/60">
                  <Clock className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                  <div className="text-xs text-zinc-600">
                    <strong className="font-semibold text-zinc-900 block">
                      Support Response Hours
                    </strong>
                    <span>Monday – Friday: 9:00 AM – 6:00 PM EET</span>
                    <br />
                    <span className="text-emerald-600 font-medium">
                      Typical Response Time: Within 24 hours
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-sm text-zinc-900">
                  Why Students Trust Our Support
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real humans reviewing student inquiries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Strict university email verification review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Full GDPR transparency & data portability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Link Card to Privacy Policy */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#132644] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#df4f00]/25 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#df4f00]" />
                  <span>Privacy Notice</span>
                </div>
                <h3 className="text-xl font-bold font-display">
                  Looking for our Privacy Policy?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Learn how we safeguard your personal data, university information, and chat
                  security under EU GDPR.
                </p>
                <a
                  href="/privacy-policy"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#df4f00] hover:underline"
                >
                  <span>Explore Privacy Policy Page</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#df4f00]/10 text-[#df4f00] border border-[#df4f00]/20">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-zinc-900">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-zinc-600">
              Quick answers to the most common questions about UniMates student living and app features.
            </p>
          </div>

          {/* Search and Category Filter for FAQ */}
          <div className="max-w-3xl mx-auto mb-8 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQ (e.g. verify, algorithm, free, safety)..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/90 border border-zinc-200/80 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#df4f00] focus:ring-2 focus:ring-[#df4f00]/15 shadow-sm"
              />
            </div>

            <div className="flex items-center justify-center gap-2 flex-wrap">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFaqCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedFaqCategory === cat
                      ? 'bg-[#df4f00] text-white shadow-sm'
                      : 'bg-white/80 border border-zinc-200/80 text-zinc-600 hover:bg-zinc-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/90 border border-zinc-200 rounded-2xl p-8 text-center text-sm text-zinc-500"
                >
                  No matching FAQs found. Try a different search query or email us directly at{' '}
                  <a href="mailto:info@unimates.net" className="text-[#df4f00] font-bold">
                    info@unimates.net
                  </a>
                  .
                </motion.div>
              ) : (
                filteredFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <motion.div
                      key={faq.id}
                      layout
                      className="bg-white/95 backdrop-blur-md border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-50/80 transition-colors"
                      >
                        <span className="font-display font-bold text-base text-zinc-900">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#df4f00]' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Discord Server Invitation Section */}
        <DiscordCommunitySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
