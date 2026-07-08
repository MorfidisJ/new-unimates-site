import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.5a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
    </svg>
  );
}

const TEAM = [
  {
    name: 'Thanasis Giannopoulos',
    role: 'Co-Founder & CEO',
    image: '/assets/images/giannopoulos.jpg',
    linkedin: 'https://www.linkedin.com/in/thanasis-giannopoulos-634214336/'
  },
  {
    name: 'Ioannis Vongelis',
    role: 'Co-Founder & COO',
    image: '/assets/images/vongelis1.JPG',
    linkedin: 'https://www.linkedin.com/in/ioannis-vongelis-14095b325/'
  },
  {
    name: 'Thomas Gkountas',
    role: 'Co-Founder & CTO',
    image: '/assets/images/gkountas.jpg',
    linkedin: 'https://www.linkedin.com/in/thomas-gkountas-189346386/'
  },
  {
    name: 'Ioannis Morfidis',
    role: 'Co-Founder & CPO',
    image: '/assets/images/morfidis.png',
    linkedin: 'https://www.linkedin.com/in/ioannis-morfidis-175062342/'
  }
];

export default function TeamGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#df4f00]/10 text-[#df4f00] border border-[#df4f00]/20">
          Built by Students, For Students
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mt-3 font-display tracking-tight">
          Meet the Team
        </h2>
        <p className="text-zinc-600 mt-4 text-base md:text-lg">
          The founders driving the student living revolution from Ioannina across Greece and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-white rounded-[2rem] p-6 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-zinc-100 shadow-inner group-hover:border-[#df4f00]/40 transition-colors">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="font-bold text-lg text-zinc-900 leading-snug">{member.name}</h3>
            <p className="text-xs font-semibold text-[#df4f00] uppercase tracking-wider mt-1">{member.role}</p>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn profile for ${member.name}`}
              className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 hover:bg-[#0077b5] hover:text-white transition-all text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#df4f00]"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>Connect</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
