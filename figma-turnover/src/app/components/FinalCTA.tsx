import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function FinalCTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative bg-nwprt-navy text-nwprt-cream py-32 md:py-40 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="caption text-nwprt-yellow mb-8 tracking-[0.3em]">
            NWPRT Ritual - Newport Beach
          </div>

          <h2 className="accent-italic text-5xl md:text-7xl leading-[1.05] mb-8">
            Your tide<br />is turning.
          </h2>

          <div className="rule-yellow mx-auto my-10" />

          <p className="accent-italic text-lg md:text-xl text-nwprt-cream/60 mb-12">
            24 women. 4 days. One turning point.
          </p>

          <motion.a
            href="https://gethalohealth.com/connect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-nwprt-yellow text-nwprt-navy caption px-10 py-4 tracking-[0.2em] hover:bg-nwprt-cream transition-colors duration-300"
          >
            Apply for Your Spot
          </motion.a>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-16 caption text-nwprt-cream/40">
            <span>Thursday-Sunday</span>
            <span>·</span>
            <span>Newport Beach, CA</span>
            <span>·</span>
            <span>Pricing TBD</span>
            <span>·</span>
            <span>By Application Only</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
