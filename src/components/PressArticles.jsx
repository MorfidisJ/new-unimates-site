import { motion } from 'motion/react';
import { Newspaper, ExternalLink, Sparkles, ArrowUpRight, Award, TrendingUp } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    outlet: 'Καθημερινή',
    logo: '/assets/images/kathimerini-removebg-preview.png',
    scale: 'scale-125',
    tag: 'National Spotlight',
    title: 'Φυτώριο startuppers τα Γιάννενα: Η ανάδειξη της UniMates από το οικοσύστημα καινοτομίας',
    description: 'Featured in Kathimerini’s economic section exploring how Ioannina has become a major startup incubator and spotlighting UniMates as a leading tech success story in student housing.',
    url: 'https://www.kathimerini.gr/economy/564137956/fytorio-startuppers-ta-giannena/',
    featured: true,
    date: 'National Economy News'
  },
  {
    id: 2,
    outlet: 'EpirusGate',
    logo: '/assets/images/epirusgate-removebg-preview.png',
    scale: 'scale-[1.85]',
    tag: 'Award Winners',
    title: 'Φοιτητές, startuppers και ήδη βραβευμένοι: Η ομάδα των UniMates μας συστήνει την έξυπνη συγκατοίκηση',
    description: 'Celebrating local Epirus startup success as our award-winning student team introduces smart co-living and roommate matching from Ioannina across Greece.',
    url: 'https://epirusgate.gr/foitites-startuppers-kai-idi-vravevmenoi-i-omada-ton-unimates-mas-systinei-tin-exypni-sygkatoikisi/',
    featured: false,
    date: 'Epirus Innovation'
  },
  {
    id: 3,
    outlet: 'CSE UOI',
    logo: '/assets/images/cseuoi-removebg-preview.png',
    scale: 'scale-125',
    tag: 'Academic Distinction',
    title: 'Διάκριση ομάδας φοιτητών του Τμήματος Πληροφορικής & Τηλεπικοινωνιών για την ίδρυση της UniMates',
    description: 'Official academic distinction from the University of Ioannina Department of Computer Science and Engineering recognizing our founding team’s technological innovation.',
    url: 'https://www.cse.uoi.gr/%ce%b4%ce%b9%ce%ac%ce%ba%cf%81%ce%b9%cf%83%ce%b7-%ce%bf%ce%bc%ce%ac%ce%b4%ce%b1%cf%82-%cf%86%ce%bf%ce%b9%cf%84%ce%b7%cf%84%cf%8e%ce%bd-%cf%84%ce%bf%cf%85-%cf%84%ce%bc%ce%b7%cf%85%cf%80/',
    featured: false,
    date: 'University Distinction'
  },
  {
    id: 4,
    outlet: 'Voria.gr',
    logo: '/assets/images/voriagr-removebg-preview.png',
    scale: 'scale-[1.85]',
    tag: 'Student Inspiration',
    title: 'UniMates: Η φοιτητικής έμπνευσης εφαρμογή για την εύρεση του ιδανικού συγκατοίκου',
    description: 'A student-inspired application solving the search for the ideal flatmate. Voria.gr examines how AI compatibility and verified student profiles eliminate housing anxiety.',
    url: 'https://www.voria.gr/article/unimates-i-foititikis-empneysis-efarmogi-gia-tin-eyresi-toy-idanikoy-sygkatoikoy',
    featured: false,
    date: 'Northern Greece Tech'
  },
  {
    id: 5,
    outlet: 'C.Ioannina',
    logo: '/assets/images/c.ioanninaLogo.png',
    scale: 'scale-[1.45]',
    tag: 'Startup Story',
    title: 'UniMates: A Startup Born in Ioannina Redefining Student Housing',
    description: 'C.Ioannina highlights the entrepreneurial journey of how our student team turned a personal campus housing struggle into a nationwide Greek startup success.',
    url: 'https://www.c-ioannina.com/stories/unimates-a-startup-born-in-ioannina/',
    featured: false,
    date: 'Founder Spotlight'
  },
  {
    id: 6,
    outlet: 'Startupper.gr',
    logo: '/assets/images/startupper-removebg-preview.png',
    scale: 'scale-[1.85]',
    tag: 'GSEA Winners 2026',
    title: 'GSEA Greece 2026: Αυτοί είναι οι 3 νικητές φοιτητικής επιχειρηματικότητας',
    description: 'Startupper.gr covers our major award victory at the Global Student Entrepreneur Awards (GSEA) Greece for building Greece’s #1 roommate matching platform.',
    url: 'https://startupper.gr/news/237745/gsea-greece-2026-aftoi-einai-oi-3-nikites-foititikis-epicheirimatikotitas/',
    featured: false,
    date: 'Entrepreneurship Awards'
  },
  {
    id: 7,
    outlet: 'NewMoney.gr',
    logo: '/assets/images/newmoney-removebg-preview.png',
    scale: 'scale-[1.95]',
    tag: 'New Wave Startups',
    title: 'Τι φέρνει η νέα γενιά των startups από τα Γιάννενα: Logistics, AI λογισμικό και η καινοτομία της UniMates',
    description: 'Newmoney analyzes the new wave of technological entrepreneurship emerging from Ioannina, featuring UniMates as a pioneer in AI-powered youth co-living.',
    url: 'https://www.newmoney.gr/roh/palmos-oikonomias/epixeiriseis/ti-ferni-i-nea-genia-ton-startups-apo-ta-giannena-logistics-ai-logismiko-igia-chrimatoikonomika-pics/amp/',
    featured: false,
    date: 'Tech & Business News'
  }
];

export default function PressArticles() {
  return (
    <section id="press" className="py-24 bg-[#f9f6f0] text-zinc-900 relative z-20 border-t border-zinc-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#df4f00]/10 border border-[#df4f00]/20 text-[#df4f00] text-xs font-bold uppercase tracking-wider">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Press & Media Coverage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-zinc-900">
              Read the Articles That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4f00] via-pink-600 to-purple-600">Showcase Us</span>
            </h2>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              From top national Greek newspapers to university tech hubs, see what leading publications and journalists are reporting about UniMates and the future of student living.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 self-start md:self-end">
            <Award className="w-4 h-4 text-[#df4f00]" />
            <span>Recognized Across Greece</span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                item.featured
                  ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white shadow-2xl hover:shadow-[#df4f00]/20 border border-zinc-700 hover:-translate-y-1.5'
                  : 'bg-white text-zinc-900 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5'
              }`}
            >
              {/* Card Header: Outlet Logo & Tag */}
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className={`h-16 sm:h-20 px-6 py-3 min-w-[170px] sm:min-w-[210px] rounded-2xl flex items-center justify-center overflow-hidden ${
                    item.featured ? 'bg-white shadow-lg' : 'bg-white border border-zinc-200/80 shadow-sm'
                  }`}>
                    <img
                      src={item.logo}
                      alt={item.outlet}
                      className={`max-h-12 sm:max-h-14 max-w-[160px] sm:max-w-[200px] w-auto object-contain transition-transform duration-300 group-hover:scale-110 ${item.scale || 'scale-110'}`}
                      loading="lazy"
                    />
                  </div>

                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    item.featured
                      ? 'bg-[#df4f00] text-white'
                      : 'bg-zinc-100 text-zinc-600 group-hover:bg-[#df4f00]/10 group-hover:text-[#df4f00] transition-colors'
                  }`}>
                    {item.featured && <Sparkles className="w-3 h-3" />}
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Article Title & Description */}
                <div className="space-y-3">
                  <h3 className={`font-bold font-display leading-snug tracking-tight transition-colors ${
                    item.featured
                      ? 'text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-[#df4f00]'
                      : 'text-lg sm:text-xl text-zinc-900 group-hover:text-[#df4f00]'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${
                    item.featured ? 'text-zinc-300 max-w-2xl' : 'text-zinc-600 line-clamp-3'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Read Link */}
              <div className={`pt-8 mt-6 border-t flex items-center justify-between font-bold text-xs uppercase tracking-wider ${
                item.featured ? 'border-zinc-700/80 text-zinc-400' : 'border-zinc-100 text-zinc-500'
              }`}>
                <span>{item.date}</span>

                <span className={`inline-flex items-center gap-1 transition-transform group-hover:translate-x-1 ${
                  item.featured ? 'text-[#df4f00]' : 'text-zinc-900 group-hover:text-[#df4f00]'
                }`}>
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
