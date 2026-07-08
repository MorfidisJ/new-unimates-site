import { motion } from 'motion/react';
import { CheckCircle2, ArrowDown } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Create Your Profile',
    subtitle: 'Express yourself through a creative profile that showcases who you are as a person and flatmate.',
    points: [
      'Upload photos of yourself and your interests',
      'Create a mood board that reflects your lifestyle',
      'Share your living preferences and habits'
    ]
  },
  {
    num: '02',
    title: 'Get Matched',
    subtitle: 'Our AI-powered matching system connects you with compatible flatmates based on multiple factors.',
    points: [
      'ML analyzes lifestyle compatibility',
      'Matches based on interests and hobbies',
      'Considers living preferences and habits'
    ]
  },
  {
    num: '03',
    title: 'Connect & Meet',
    subtitle: 'Get to know your potential flatmates through creative profiles and shared interests.',
    points: [
      'Verified profiles for safety and peace of mind',
      'Ice-breaker prompts and conversation starters'
    ]
  },
  {
    num: '04',
    title: 'Meet & Decide',
    subtitle: 'Take the next step in finding your new home and flatmate with integrated tools.',
    points: [
      'Schedule in-person or virtual meetups easily',
      'Use our standard flatmate agreement templates',
      'Access tools for coordinating move-in dates'
    ]
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#df4f00]/10 text-[#df4f00] border border-[#df4f00]/20">
          Simple 4-Step Process
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mt-3 font-display tracking-tight">
          How UniMates Works
        </h2>
        <p className="text-zinc-600 mt-4 text-base md:text-lg">
          Finding your perfect flatmate is easy with our simple, creative journey to the ideal living situation.
        </p>
      </div>

      <div className="relative border-l-2 border-zinc-200 ml-4 sm:ml-8 md:ml-32 md:pl-12 pl-8 space-y-16">
        {STEPS.map((step, idx) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Number marker pill on timeline */}
            <div className="absolute -left-[45px] sm:-left-[49px] md:-left-[85px] top-0 w-12 h-12 rounded-2xl bg-[#0a1628] text-white font-display font-bold text-lg flex items-center justify-center shadow-lg group-hover:bg-[#df4f00] group-hover:scale-110 transition-all duration-300 ring-4 ring-white">
              {step.num}
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">{step.title}</h3>
              <p className="text-zinc-600 mt-2 font-medium text-base leading-relaxed">{step.subtitle}</p>

              <ul className="mt-6 space-y-3">
                {step.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="w-5 h-5 text-[#df4f00] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
