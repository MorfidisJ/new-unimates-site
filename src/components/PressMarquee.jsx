import { motion } from 'motion/react';

const LOGOS = [
  { name: 'Καθημερινή', image: '/assets/images/kathimerini-removebg-preview.png', url: 'https://www.kathimerini.gr/', scale: 'scale-110' },
  { name: 'NewMoney', image: '/assets/images/newmoney-removebg-preview.png', url: 'https://www.newmoney.gr/', scale: 'scale-[1.8]' },
  { name: 'Voria.gr', image: '/assets/images/voriagr-removebg-preview.png', url: 'https://www.voria.gr/', scale: 'scale-[1.75]' },
  { name: 'Startupper', image: '/assets/images/startupper-removebg-preview.png', url: 'https://startupper.gr/', scale: 'scale-[1.7]' },
  { name: 'CSE UOI', image: '/assets/images/cseuoi-removebg-preview.png', url: 'https://www.cse.uoi.gr/', scale: 'scale-110' },
  { name: 'EpirusGate', image: '/assets/images/epirusgate-removebg-preview.png', url: 'https://epirusgate.gr/', scale: 'scale-[1.75]' },
  { name: 'C.Ioannina', image: '/assets/images/c.ioanninaLogo.png', url: 'https://www.c-ioannina.com/', scale: 'scale-[1.35]' },
  { name: 'Piraeus Bank', image: '/assets/images/piraeus.png', scale: 'scale-[1.45]' },
  { name: 'MOKE', image: '/assets/images/moke.png', scale: 'scale-[1.4]' },
  { name: 'Point of Synergy', image: '/assets/images/pointofsynergycorrect.png', scale: 'scale-110' },
  { name: 'Hustle Hours', image: '/assets/images/hustlehours.avif', scale: 'scale-[1.3]', invert: true }
];

export default function PressMarquee() {
  return (
    <section className="py-16 bg-white border-y border-zinc-200/60 overflow-hidden relative z-20">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
          Featured in Press & Backed By University Ecosystems
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        {/* Left & Right gradient fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex items-center gap-20 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap py-6 px-8">
          {/* We duplicate the array twice for seamless looping */}
          {[...LOGOS, ...LOGOS, ...LOGOS].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center w-80 sm:w-96 h-32 sm:h-36 shrink-0 px-6">
              <div className={`flex items-center justify-center w-full h-full ${item.scale || 'scale-100'}`}>
                <img
                  src={item.image}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  style={item.invert ? { filter: 'invert(1) brightness(0)' } : {}}
                  className={`w-full h-full max-h-24 sm:max-h-28 max-w-[260px] sm:max-w-[300px] object-contain opacity-95 hover:opacity-100 transition-transform duration-300 hover:scale-110 ${item.invert ? 'invert brightness-0' : ''}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
