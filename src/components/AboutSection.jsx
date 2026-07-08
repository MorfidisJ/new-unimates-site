import { motion } from 'motion/react';
import { HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0a1628] text-white relative z-20 overflow-hidden my-12 rounded-[3rem] mx-4 sm:mx-6 max-w-7xl xl:mx-auto">
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#df4f00]/20 border border-[#df4f00]/40 flex items-center justify-center text-[#df4f00] mx-auto mb-8 shadow-xl">
            <HeartHandshake className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
            Our Mission
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 leading-tight font-display tracking-tight text-white">
            We're helping students build a home, not just find a house.
          </h2>

          <p className="text-zinc-400 mt-8 text-lg sm:text-xl leading-relaxed font-normal max-w-3xl mx-auto">
            UniMates is on a mission to transform student living. We believe finding the right flatmate should be creative, safe, and fun. Our platform connects students through personality, interests, and community—creating lasting friendships along the way.
          </p>
        </motion.div>
      </div>

      {/* Subtle ambient lighting background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#df4f00]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
