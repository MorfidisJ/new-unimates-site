import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Eye,
  Share2,
  Clock,
  CheckCircle2,
  Mail,
  Search,
  ExternalLink,
  MapPin,
  FileText,
  UserCheck,
  Scale,
  Users,
  AlertCircle,
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
  Database,
  Sparkles,
  Download
} from 'lucide-react';
import SoftAurora from './SoftAurora';
import Seo from './Seo';
import Footer from './Footer';

const POLICY_SECTIONS = [
  {
    id: 'collect',
    number: '1',
    title: 'What Information Do We Collect?',
    category: 'Data Collection',
    icon: Database,
    inShort:
      'We collect personal information that you provide to us, including via third-party logins.',
    content: (
      <div className="space-y-4 text-zinc-600 leading-relaxed">
        <p>
          We collect personal information that you voluntarily provide to us when you express an
          interest in obtaining information about us or our products and Services, when you register
          for an account, participate in activities on the Services, or otherwise when you contact
          us.
        </p>
        <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-5 space-y-3">
          <h4 className="font-display font-bold text-zinc-900 text-base">
            Personal Information Provided by You
          </h4>
          <p className="text-sm text-zinc-600">
            The personal information that we collect depends on the context of your interactions
            with us and the Services, the choices you make, and the products and features you use.
            The personal information we collect includes:
          </p>
          <ul className="space-y-2.5 text-sm text-zinc-700">
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#df4f00] mt-1.5 shrink-0" />
              <span>
                <strong className="text-zinc-900">Third-Party Login Data:</strong> When you register
                or log in using Google Login, we collect your username and email address.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#df4f00] mt-1.5 shrink-0" />
              <span>
                <strong className="text-zinc-900">Profile Media:</strong> Photos that you choose to
                upload to your profile.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#df4f00] mt-1.5 shrink-0" />
              <span>
                <strong className="text-zinc-900">Location Data:</strong> Your general location,
                strictly limited to the city you provide.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#df4f00] mt-1.5 shrink-0" />
              <span>
                <strong className="text-zinc-900">Educational Information:</strong> The name of the
                university you attend.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#df4f00] mt-1.5 shrink-0" />
              <span>
                <strong className="text-zinc-900">App Activity:</strong> The answers to the quizzes
                you take within the app.
              </span>
            </li>
          </ul>
        </div>
        <p>
          <strong className="text-zinc-900 font-semibold">Sensitive Information:</strong> We do not
          process sensitive personal information.
        </p>
        <p>
          All personal information that you provide to us must be true, complete, and accurate, and
          you must notify us of any changes to such personal information.
        </p>
      </div>
    )
  },
  {
    id: 'process',
    number: '2',
    title: 'How Do We Process Your Information?',
    category: 'Data Collection',
    icon: UserCheck,
    inShort:
      'We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.',
    content: (
      <div className="space-y-4 text-zinc-600 leading-relaxed">
        <p className="font-medium text-zinc-800">
          We process your personal information for a variety of reasons, depending on how you
          interact with our Services, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
            <h5 className="font-bold text-zinc-900 text-sm mb-1">Account Creation & Auth</h5>
            <p className="text-xs text-zinc-600">
              We process your Google Login data to set up and manage your user account securely.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
            <h5 className="font-bold text-zinc-900 text-sm mb-1">Core Networking Services</h5>
            <p className="text-xs text-zinc-600">
              We use your city, university, and quiz answers to match you with peers and power the
              application&apos;s core functionality.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
            <h5 className="font-bold text-zinc-900 text-sm mb-1">Profile Display</h5>
            <p className="text-xs text-zinc-600">
              Photos, university, city, and relevant quiz insights are displayed on your profile to
              help you connect with other students.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
            <h5 className="font-bold text-zinc-900 text-sm mb-1">Promotional & Updates</h5>
            <p className="text-xs text-zinc-600">
              We may process the personal information you send to us for marketing purposes, if this
              is in accordance with your marketing preferences. You can opt out at any time.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
            <h5 className="font-bold text-zinc-900 text-sm mb-1">Campaign Effectiveness</h5>
            <p className="text-xs text-zinc-600">
              We may process your information to better understand how to provide campaigns that are
              most relevant to you.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
            <h5 className="font-bold text-zinc-900 text-sm mb-1">Vital Interests</h5>
            <p className="text-xs text-zinc-600">
              We may process your information when necessary to save or protect an individual&apos;s
              vital interest, such as to prevent harm.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'legal',
    number: '3',
    title: 'What Legal Bases Do We Rely On?',
    category: 'Your Rights',
    icon: Scale,
    inShort:
      'We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.',
    content: (
      <div className="space-y-4 text-zinc-600 leading-relaxed">
        <p>
          The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid
          legal bases we rely on in order to process your personal information. As such, we may rely
          on the following legal bases to process your personal information:
        </p>
        <ul className="space-y-3 pt-1">
          <li className="bg-zinc-50 border border-zinc-200/70 p-4 rounded-xl">
            <strong className="text-zinc-900 block font-display text-sm mb-1">Consent</strong>
            <span className="text-xs sm:text-sm text-zinc-600">
              We may process your information if you have given us permission (i.e., consent) to use
              your personal information for a specific purpose. You can withdraw your consent at any
              time.
            </span>
          </li>
          <li className="bg-zinc-50 border border-zinc-200/70 p-4 rounded-xl">
            <strong className="text-zinc-900 block font-display text-sm mb-1">
              Legitimate Interests
            </strong>
            <span className="text-xs sm:text-sm text-zinc-600">
              We may process your information when we believe it is reasonably necessary to achieve
              our legitimate business interests and those interests do not outweigh your interests
              and fundamental rights and freedoms.
            </span>
          </li>
          <li className="bg-zinc-50 border border-zinc-200/70 p-4 rounded-xl">
            <strong className="text-zinc-900 block font-display text-sm mb-1">
              Contractual Obligations
            </strong>
            <span className="text-xs sm:text-sm text-zinc-600">
              We process your data to fulfill our Terms of Service and provide the app&apos;s
              networking features to you.
            </span>
          </li>
          <li className="bg-zinc-50 border border-zinc-200/70 p-4 rounded-xl">
            <strong className="text-zinc-900 block font-display text-sm mb-1">
              Legal Obligations
            </strong>
            <span className="text-xs sm:text-sm text-zinc-600">
              We may process your information where we believe it is necessary for compliance with
              our legal obligations.
            </span>
          </li>
          <li className="bg-zinc-50 border border-zinc-200/70 p-4 rounded-xl">
            <strong className="text-zinc-900 block font-display text-sm mb-1">
              Vital Interests
            </strong>
            <span className="text-xs sm:text-sm text-zinc-600">
              We may process your information where we believe it is necessary to protect your vital
              interests or the vital interests of a third party.
            </span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'share',
    number: '4',
    title: 'When and With Whom Do We Share Your Personal Information?',
    category: 'Data Sharing',
    icon: Share2,
    inShort:
      'We may share information in specific situations described in this section and/or with the following third parties.',
    content: (
      <div className="space-y-4 text-zinc-600 leading-relaxed">
        <div className="border-l-4 border-[#df4f00] bg-[#df4f00]/5 p-4 rounded-r-xl">
          <h5 className="font-bold text-zinc-900 text-sm mb-1">Other Users</h5>
          <p className="text-sm text-zinc-700">
            By using UniMates, you understand that your profile information (including your
            username, uploaded photos, city, university, and selected quiz answers) will be shared
            with and visible to other users of the app to facilitate connections.
          </p>
        </div>
        <p>
          <strong className="text-zinc-900 font-semibold">
            Vendors, Consultants, and Other Third-Party Service Providers:
          </strong>{' '}
          We may share your data with third-party vendors, service providers, contractors, or agents
          (&apos;<strong>third parties</strong>&apos;) who perform services for us or on our behalf
          and require access to such information to do that work. We have contracts in place with
          our third parties, which are designed to help safeguard your personal information.
        </p>
        <p>
          <strong className="text-zinc-900 font-semibold">Business Transfers:</strong> We may share
          or transfer your information in connection with, or during negotiations of, any merger,
          sale of company assets, financing, or acquisition of all or a portion of our business to
          another company.
        </p>
      </div>
    )
  },
  {
    id: 'retain',
    number: '5',
    title: 'How Long Do We Keep Your Information?',
    category: 'Security & Retention',
    icon: Clock,
    inShort:
      'We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.',
    content: (
      <div className="space-y-4 text-zinc-600 leading-relaxed">
        <p>
          We will only keep your personal information for as long as it is necessary for the
          purposes set out in this Privacy Notice, unless a longer retention period is required or
          permitted by law. No purpose in this notice will require us keeping your personal
          information for longer than{' '}
          <strong className="text-zinc-900 font-bold bg-amber-100 px-1.5 py-0.5 rounded">
            2 years
          </strong>{' '}
          after account inactivity or deletion.
        </p>
        <p>
          When we have no ongoing legitimate business need to process your personal information, we
          will either delete or anonymise such information, or, if this is not possible, then we
          will securely store your personal information and isolate it from any further processing
          until deletion is possible.
        </p>
      </div>
    )
  },
  {
    id: 'safe',
    number: '6',
    title: 'How Do We Keep Your Information Safe?',
    category: 'Security & Retention',
    icon: Lock,
    inShort:
      'We aim to protect your personal information through a system of organisational and technical security measures.',
    content: (
      <div className="space-y-4 text-zinc-600 leading-relaxed">
        <p>
          We have implemented appropriate and reasonable technical and organisational security
          measures designed to protect the security of any personal information we process. However,
          despite our safeguards and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed to be 100% secure,
          so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised
          third parties will not be able to defeat our security and improperly collect, access,
          steal, or modify your information.
        </p>
        <p>
          Transmission of personal information to and from our Services is at your own risk. You
          should only access the Services within a secure environment.
        </p>
      </div>
    )
  },
  {
    id: 'minors',
    number: '7',
    title: 'Do We Collect Information From Minors?',
    category: 'Data Collection',
    icon: Users,
    inShort: 'We do not knowingly collect data from or market to children under 18 years of age.',
    content: (
      <div className="space-y-4 text-zinc-600 leading-relaxed">
        <p>
          We do not knowingly collect, solicit data from, or market to children under 18 years of
          age. By using the Services, you represent that you are at least 18.
        </p>
        <p>
          If we learn that personal information from users less than 18 years of age has been
          collected, we will deactivate the account and take reasonable measures to promptly delete
          such data from our records. If you become aware of any data we may have collected from
          children under age 18, please contact us at{' '}
          <a
            href="mailto:info@unimates.net"
            className="text-[#df4f00] font-semibold hover:underline inline-flex items-center gap-1"
          >
            info@unimates.net
          </a>
          .
        </p>
      </div>
    )
  },
  {
    id: 'rights',
    number: '8',
    title: 'What Are Your Privacy Rights?',
    category: 'Your Rights',
    icon: ShieldCheck,
    inShort:
      'In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.',
    content: (
      <div className="space-y-4 text-zinc-600 leading-relaxed">
        <p>
          In some regions, you have certain rights under applicable data protection laws. These may
          include the right:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-700">
          <li className="bg-zinc-50 border border-zinc-200/70 p-3 rounded-lg flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>(i) Request access & obtain a copy of your personal data</span>
          </li>
          <li className="bg-zinc-50 border border-zinc-200/70 p-3 rounded-lg flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>(ii) Request rectification or erasure</span>
          </li>
          <li className="bg-zinc-50 border border-zinc-200/70 p-3 rounded-lg flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>(iii) Restrict processing of your personal information</span>
          </li>
          <li className="bg-zinc-50 border border-zinc-200/70 p-3 rounded-lg flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>(iv) Data portability where applicable</span>
          </li>
          <li className="bg-zinc-50 border border-zinc-200/70 p-3 rounded-lg flex items-center gap-2 sm:col-span-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>(v) Protection against purely automated decision-making</span>
          </li>
        </ul>
        <p>
          <strong className="text-zinc-900 font-semibold">Withdrawing your consent:</strong> If we
          are relying on your consent to process your personal information, you have the right to
          withdraw your consent at any time.
        </p>
        <p>
          <strong className="text-zinc-900 font-semibold">Opting out of marketing:</strong> You can
          unsubscribe from our marketing and promotional communications at any time.
        </p>
        <p>
          If you have questions or comments about your privacy rights, you may email us at{' '}
          <a
            href="mailto:info@unimates.net"
            className="text-[#df4f00] font-semibold hover:underline"
          >
            info@unimates.net
          </a>
          .
        </p>
      </div>
    )
  },
  {
    id: 'dnt',
    number: '9',
    title: 'Controls for Do-Not-Track Features',
    category: 'Your Rights',
    icon: Eye,
    inShort: 'We do not currently respond to DNT browser signals.',
    content: (
      <div className="space-y-3 text-zinc-600 leading-relaxed">
        <p>
          Most web browsers and some mobile operating systems and applications include a
          Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your privacy
          preference not to have data about your online browsing activities monitored and collected.
        </p>
        <p>
          At this stage, no uniform technology standard for recognising and implementing DNT signals
          has been finalised. As such, we do not currently respond to DNT browser signals.
        </p>
      </div>
    )
  },
  {
    id: 'updates',
    number: '10',
    title: 'Do We Make Updates to This Notice?',
    category: 'Security & Retention',
    icon: Clock,
    inShort: 'Yes, we will update this notice as necessary to stay compliant with relevant laws.',
    content: (
      <div className="space-y-3 text-zinc-600 leading-relaxed">
        <p>
          We may update this Privacy Notice from time to time. The updated version will be indicated
          by an updated &apos;Revised&apos; date at the top of this Privacy Notice. We encourage you
          to review this Privacy Notice frequently to be informed of how we are protecting your
          information.
        </p>
      </div>
    )
  },
  {
    id: 'contact',
    number: '11',
    title: 'How Can You Contact Us About This Notice?',
    category: 'Your Rights',
    icon: Mail,
    inShort: 'You can reach out via email or postal address in Ioannina, Greece.',
    content: (
      <div className="space-y-4 text-zinc-600 leading-relaxed">
        <p>
          If you have questions or comments about this notice, you may email us at{' '}
          <a
            href="mailto:info@unimates.net"
            className="text-[#df4f00] font-semibold hover:underline"
          >
            info@unimates.net
          </a>{' '}
          or contact us by post at:
        </p>
        <div className="inline-block bg-zinc-50 border border-zinc-200/80 rounded-xl p-4 text-sm font-medium text-zinc-800">
          <strong className="text-zinc-900 block font-display">UniMates</strong>
          <span>Ioannina 45332</span>
          <br />
          <span>Greece</span>
        </div>
      </div>
    )
  },
  {
    id: 'review',
    number: '12',
    title: 'How Can You Review, Update, or Delete Your Data?',
    category: 'Your Rights',
    icon: FileText,
    inShort: 'You have the right to review, rectify, or erase your data upon request.',
    content: (
      <div className="space-y-4 text-zinc-600 leading-relaxed">
        <p>
          Based on the applicable laws of your country, you may have the right to request access to
          the personal information we collect from you, details about how we have processed it,
          correct inaccuracies, or delete your personal information. You may also have the right to
          withdraw your consent to our processing of your personal information.
        </p>
        <p>
          To request to review, update, or delete your personal information, please email:{' '}
          <a
            href="mailto:info@unimates.net"
            className="text-[#df4f00] font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>info@unimates.net</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          .
        </p>
      </div>
    )
  }
];

const SUMMARY_POINTS = [
  {
    title: 'Personal Information Processed',
    desc: 'Includes data from your Google Login (username & email), photos, university, city, and quiz answers.',
    targetId: 'collect',
    badge: 'Section 1'
  },
  {
    title: 'Sensitive Personal Information',
    desc: 'We do not collect or process any sensitive personal information.',
    targetId: 'collect',
    badge: 'Section 1'
  },
  {
    title: 'Information From Third Parties',
    desc: 'We collect basic profile information (username & email) when you choose to log in via Google.',
    targetId: 'collect',
    badge: 'Section 1'
  },
  {
    title: 'Why We Process Your Data',
    desc: 'To provide, improve, and administer our Services, connect you with peers, ensure security, and comply with law.',
    targetId: 'process',
    badge: 'Section 2'
  },
  {
    title: 'Sharing Personal Information',
    desc: 'Shared with other users to power core student networking, and with trusted service providers under strict contracts.',
    targetId: 'share',
    badge: 'Section 4'
  },
  {
    title: 'Information Security & Retention',
    desc: 'Secured with technical/organisational safeguards and retained for no more than 2 years after account inactivity.',
    targetId: 'retain',
    badge: 'Section 5'
  },
  {
    title: 'Your Privacy & GDPR Rights',
    desc: 'Right to access, rectify, restrict, or delete your data under EEA, UK, and Swiss privacy laws.',
    targetId: 'rights',
    badge: 'Section 8'
  },
  {
    title: 'Exercising Your Rights',
    desc: 'The easiest way to review, update, or delete your data is to email our team directly at info@unimates.net.',
    targetId: 'review',
    badge: 'Section 12'
  }
];

const CATEGORIES = [
  'All Topics',
  'Data Collection',
  'Your Rights',
  'Data Sharing',
  'Security & Retention'
];

export default function PrivacyPolicyPage({ onNavigateHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [activeSection, setActiveSection] = useState('collect');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredSections = useMemo(() => {
    return POLICY_SECTIONS.filter((sec) => {
      const matchesCategory =
        selectedCategory === 'All Topics' || sec.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        sec.title.toLowerCase().includes(q) ||
        sec.inShort.toLowerCase().includes(q) ||
        sec.number.includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f6f0] text-[#0a1628] selection:bg-[#df4f00] selection:text-white font-sans relative overflow-x-hidden">
      <Seo
        title="Privacy Policy — UniMates"
        description="Read the UniMates Privacy Policy to understand how we collect, use, and protect your personal data. We are committed to your privacy and GDPR compliance."
        keywords="UniMates privacy policy, data protection, GDPR, student app privacy, personal data"
        url="https://unimates.net/privacy-policy"
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
              UniMates Privacy Center
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:info@unimates.net"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold hover:bg-zinc-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#df4f00]" />
              <span>Contact DPO</span>
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
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#df4f00]/10 border border-[#df4f00]/20 text-[#df4f00] text-xs sm:text-sm font-bold tracking-wide shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>GDPR & UK GDPR Compliant Privacy Notice</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 font-display">
            Privacy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4f00] via-pink-600 to-violet-600">
              Policy
            </span>
          </h1>

          <p className="inline-block px-4 py-1.5 rounded-full bg-white/90 border border-zinc-200 text-xs font-semibold text-zinc-500">
            Last updated: March 3, 2026
          </p>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed text-left sm:text-center bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
            This Privacy Notice for <strong className="text-zinc-900">UniMates</strong> (doing
            business as <strong className="text-zinc-900">UniMates</strong>) (&apos;
            <strong className="text-zinc-900">we</strong>&apos;, &apos;
            <strong className="text-zinc-900">us</strong>&apos;, or &apos;
            <strong className="text-zinc-900">our</strong>&apos;), describes how and why we might
            access, collect, store, use, and/or share (&apos;
            <strong className="text-zinc-900">process</strong>&apos;) your personal information
            when you use our services (&apos;<strong className="text-zinc-900">Services</strong>
            &apos;), including when you:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-white/90 border border-zinc-200/80 p-5 rounded-2xl shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#df4f00]/10 flex items-center justify-center text-[#df4f00] shrink-0 font-bold">
                1
              </div>
              <p className="text-sm text-zinc-600">
                Visit our website at{' '}
                <a href="https://unimates.net" className="text-[#df4f00] font-semibold">
                  unimates.net
                </a>
                , our web application at{' '}
                <a
                  href="https://app.unimates.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#df4f00] font-semibold"
                >
                  app.unimates.net
                </a>
                , or any website of ours that links to this Privacy Notice.
              </p>
            </div>
            <div className="bg-white/90 border border-zinc-200/80 p-5 rounded-2xl shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 shrink-0 font-bold">
                2
              </div>
              <p className="text-sm text-zinc-600">
                Engage with us in other related ways, including any sales, marketing, student
                events, or promotional activations.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#df4f00]/10 via-amber-500/10 to-violet-500/10 border border-[#df4f00]/20 rounded-2xl p-5 text-sm text-zinc-700 text-left flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#df4f00] shrink-0 mt-0.5" />
            <div>
              <strong className="text-zinc-900 font-semibold">Questions or concerns?</strong>{' '}
              Reading this Privacy Notice will help you understand your privacy rights and choices.
              We are responsible for making decisions about how your personal information is
              processed. If you do not agree with our policies and practices, please do not use our
              Services. If you still have any questions or concerns, please contact us at{' '}
              <a
                href="mailto:info@unimates.net"
                className="text-[#df4f00] font-semibold hover:underline"
              >
                info@unimates.net
              </a>
              .
            </div>
          </div>
        </div>

        {/* Summary of Key Points Bento Section */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#df4f00] text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Quick Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-zinc-900">
                Summary of Key Points
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-md">
              Click any topic card below to jump directly to its detailed section in our policy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUMMARY_POINTS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.targetId)}
                className="group text-left bg-white/90 hover:bg-white border border-zinc-200/80 hover:border-[#df4f00] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#df4f00]/10 text-[#df4f00] group-hover:bg-[#df4f00] group-hover:text-white transition-colors">
                      {item.badge}
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#df4f00] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display font-bold text-base text-zinc-900 mb-1.5 group-hover:text-[#df4f00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Search & Filter Bar */}
        <div className="bg-white/90 backdrop-blur-md border border-zinc-200/80 rounded-2xl p-4 sm:p-6 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search privacy topics (e.g. Google Login, retention, delete, GDPR)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200/80 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#df4f00] focus:ring-2 focus:ring-[#df4f00]/15 transition-all"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#df4f00] text-white shadow-md shadow-[#df4f00]/20'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Document Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Table of Contents */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 bg-white/90 backdrop-blur-md border border-zinc-200/80 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200/60">
              <h3 className="font-display font-bold text-zinc-900 text-base">
                Table of Contents
              </h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-600">
                12 Sections
              </span>
            </div>

            <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
              {POLICY_SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#df4f00] text-white font-bold shadow-sm'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                    }`}
                  >
                    <span className="truncate pr-2">
                      {sec.number}. {sec.title}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive
                          ? 'text-white translate-x-0.5'
                          : 'text-zinc-400 group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Support Quick Contact Box */}
            <div className="mt-6 pt-6 border-t border-zinc-200/60">
              <div className="bg-gradient-to-br from-[#df4f00]/5 to-purple-500/5 rounded-xl p-4 border border-[#df4f00]/15 space-y-3">
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs">
                  <HelpCircle className="w-4 h-4 text-[#df4f00]" />
                  <span>Need Data Assistance?</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Our Data Protection Officer is ready to assist with access or deletion requests.
                </p>
                <a
                  href="mailto:info@unimates.net"
                  className="w-full py-2 px-3 rounded-lg bg-[#df4f00] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#c94500] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email info@unimates.net</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Sections */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredSections.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/90 border border-zinc-200/80 rounded-2xl p-12 text-center space-y-4"
                >
                  <Search className="w-10 h-10 text-zinc-300 mx-auto" />
                  <h3 className="font-display font-bold text-lg text-zinc-900">
                    No matching policy sections found
                  </h3>
                  <p className="text-sm text-zinc-500">
                    Try adjusting your keyword query or switch your filter back to &quot;All
                    Topics&quot;.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All Topics');
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#df4f00] text-white text-xs font-bold hover:bg-[#c94500] transition-colors"
                  >
                    Reset Filter
                  </button>
                </motion.div>
              ) : (
                filteredSections.map((sec) => {
                  const Icon = sec.icon || FileText;
                  return (
                    <motion.section
                      key={sec.id}
                      id={sec.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/95 backdrop-blur-md border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-sm scroll-mt-28 space-y-6"
                    >
                      {/* Section Title Header */}
                      <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-100">
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-2xl bg-[#df4f00]/10 flex items-center justify-center text-[#df4f00] shrink-0 font-bold text-base mt-0.5">
                            {sec.number}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#df4f00] uppercase tracking-wider block mb-0.5">
                              {sec.category}
                            </span>
                            <h2 className="text-xl sm:text-2xl font-bold font-display text-zinc-900">
                              {sec.title}
                            </h2>
                          </div>
                        </div>
                        <Icon className="w-6 h-6 text-zinc-300 shrink-0 hidden sm:block" />
                      </div>

                      {/* In Short Summary Box */}
                      <div className="bg-gradient-to-r from-[#df4f00]/5 to-purple-500/5 border-l-4 border-[#df4f00] rounded-r-2xl p-4 sm:p-5">
                        <p className="text-xs sm:text-sm text-zinc-800 font-medium">
                          <strong className="text-[#df4f00] font-bold">In Short: </strong>
                          {sec.inShort}
                        </p>
                      </div>

                      {/* Detailed Content */}
                      <div>{sec.content}</div>
                    </motion.section>
                  );
                })
              )}
            </AnimatePresence>

            {/* Interactive Data Protection Footer Card */}
            <div className="bg-gradient-to-br from-[#0a1628] via-[#132644] to-[#0a1628] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#df4f00]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-2xl space-y-6 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#df4f00]" />
                  <span>Dedicated Support</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display">
                  Questions About This Privacy Policy?
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  We&apos;re here to help! If you have any questions about our privacy practices,
                  GDPR compliance, or wish to review or delete your data, please don&apos;t
                  hesitate to reach out.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                  <a
                    href="mailto:info@unimates.net"
                    className="px-6 py-3 rounded-full bg-[#df4f00] text-white font-bold text-sm hover:bg-[#c94500] transition-all shadow-lg shadow-[#df4f00]/30 inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email info@unimates.net</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all inline-flex items-center gap-2"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
