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
              NWPRT Ritual is a 4-day immersive wellness retreat in Newport Beach, California, designed
              exclusively for women who are ready to understand their bodies at the deepest biological level.
            </p>
            <p>
              This isn't a spa weekend or a conference. It's a full reset, grounded in your DNA,
              your bloodwork, your wearable data, and the expertise of functional medicine practitioners who
              actually listen.
            </p>
            <p>
              You'll rotate through four expert-led pods, participate in coastal activities that restore
              your nervous system, and leave Sunday with a 90-day personalized roadmap that finally makes
              sense for <span className="accent-italic">your</span> body.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-12">
            <div className="rule bg-nwprt-navy opacity-40 mb-8" />
            <div className="bg-white border border-nwprt-navy/15 py-8 px-6 md:px-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                {[
                  { label: 'Women', value: '24' },
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
