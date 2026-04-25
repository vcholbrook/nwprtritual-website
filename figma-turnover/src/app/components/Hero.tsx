import { motion } from 'motion/react';
import logo from '../../imports/nwprt-logo-navy.png';
import heroImage from '../../imports/nwprt-lifestyle-1.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nwprt-navy text-nwprt-cream">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="NWPRT Lifestyle"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-nwprt-navy/60" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="caption text-nwprt-yellow mb-8">Newport Beach, California</div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <img
              src={logo}
              alt="NWPRT"
              className="w-64 md:w-96 lg:w-[500px] opacity-50"
            />
          </motion.div>

          <div className="accent-italic text-3xl md:text-5xl lg:text-6xl text-nwprt-cream/90 mb-10">Ritual</div>

          <div className="rule-yellow mx-auto mb-12" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="accent-italic text-xl md:text-2xl lg:text-3xl text-nwprt-cream/80 max-w-2xl mx-auto"
          >
            Where Newport meets happiness, health, and longevity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
