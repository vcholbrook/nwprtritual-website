import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function WhatIsRitual() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-white text-nwprt-navy py-20 md:py-28">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="caption text-nwprt-navy/50 mb-3">The premise</div>
          <h2 className="display text-4xl md:text-6xl text-nwprt-navy mb-6">What is NWPRT Ritual?</h2>
          <div className="rule bg-nwprt-navy mb-10 opacity-40" />

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-nwprt-navy/80">
            <p>
              NWPRT Ritual is a four-day immersive retreat in Newport Beach, California, built exclusively for women who are ready to finally understand how their bodies are wired — knowledge that gives you the power to optimize this phase of life with intention, not guesswork.
            </p>
            <p>
              You arrive on a Thursday afternoon, and something shifts the moment you step out of the car. The salt air. The light. For the first time in longer than you can remember, you exhale.
            </p>
            <p>
              It's a full reset, grounded in your DNA, your bloodwork, and your wearable data — and led by functional medicine practitioners who read your labs before they meet you, and build the next four days around what they find.
            </p>
            <p>
              You move through four expert-led pods, where every recommendation is anchored to your specific biology — no generic protocols, no one-size-fits-all wellness scripts. Between pods, the days have their own rhythm: movement, nutrition, coastal time, and nurturing your physical and mental health in ways that you can actually carry home with you.
            </p>
            <p>
              You leave on Sunday with answers you didn't have before, a body that feels seen, a 90-day personalized roadmap, and a lifetime blueprint for your health that you can carry into every conversation with every provider, for the rest of your life.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-12">
            <div className="rule bg-nwprt-navy opacity-40 mb-8" />
            <div className="bg-white border border-nwprt-navy/15 py-8 px-6 md:px-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {[
                  { label: 'Duration', value: '4 Days - 3 Nights' },
                  { label: 'Investment', value: 'TBD' },
                  { label: 'Application', value: 'By Selection' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="text-center border-l-2 border-nwprt-yellow/60 pl-4"
                  >
                    <div className="caption text-nwprt-navy/50 mb-2">{stat.label}</div>
                    <div className="display text-xl md:text-2xl text-nwprt-navy">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-nwprt-navy/50 text-center mt-4 italic">
                Pricing currently being finalized based on our partner commitments
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}