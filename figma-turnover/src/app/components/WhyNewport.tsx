import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import beachImage from '../../imports/nwprt-beachlife.jpg';

const locations = [
  {
    title: 'Newport Harbor',
    description: 'One of the finest small boat harbors in the world. 9,000+ vessels. The yacht dinner backdrop that makes Saturday evening unforgettable.',
  },
  {
    title: 'Crystal Cove',
    description: 'Historic 1920s coastal cottages, 3.2 miles of natural seashore. Once the Hollywood elite getaway. Still magical.',
  },
  {
    title: 'Pacific Coast Highway',
    description: 'The iconic coastal ride. Saturday morning on bikes. Salt air, ocean views, 24 women finding their current.',
  },
  {
    title: 'Fashion Island',
    description: 'Open-air luxury at the heart of Newport. The backdrop for the lifestyle you\'ve earned and are learning to inhabit fully.',
  },
  {
    title: 'Balboa Island',
    description: '2.6 miles of waterfront charm. Boutiques, dining, the ferry. The kind of afternoon that makes everything feel possible.',
  },
  {
    title: 'The Pacific',
    description: 'Dolphins. Gray whales. 8 miles of coastline. A constant reminder: tides shift. So do we.',
  },
];

export function WhyNewport() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative bg-white text-nwprt-navy py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={beachImage}
          alt="Newport Beach lifestyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <div className="caption text-nwprt-navy/50 mb-3">The setting</div>
          <h2 className="display text-4xl md:text-6xl text-nwprt-navy mb-6">Why Newport</h2>
          <div className="rule bg-nwprt-navy opacity-40 mb-8" />
          <p className="text-base md:text-lg text-nwprt-navy/70 leading-relaxed">
            Newport Beach isn't just a setting. It's a state of mind. One of the world's
            great small boat harbors. Eight miles of Pacific coastline. The kind of place that makes slowing
            down feel like the most natural thing in the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-nwprt-navy/15">
          {locations.map((location, index) => (
            <motion.div
              key={location.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="bg-white/90 backdrop-blur-sm p-7 hover:bg-white transition-colors border border-nwprt-navy/10"
            >
              <h3 className="display text-xl md:text-2xl text-nwprt-navy mb-3">{location.title}</h3>
              <p className="text-sm leading-relaxed text-nwprt-navy/70">{location.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
