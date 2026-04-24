import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import nwprtLogo from '../../imports/nwprt-logo-sm-1.png';
import haloLogo from '../../imports/halo-logo-sm.png';

const brands = [
  {
    name: 'NWPRT',
    subtitle: 'The Lifestyle',
    description: 'The brand that is Newport Beach. In the gift bag, on the morning walk, at the yacht dinner. The visual identity of a life well lived.',
    logo: nwprtLogo,
    hasImage: true,
  },
  {
    name: 'Halo',
    subtitle: 'The Science',
    description: 'Genomics, biomarkers, and wearables blended with functional medicine. Your complete biological picture: decoded, actionable, and finally yours.',
    logo: haloLogo,
    hasImage: true,
  },
  {
    name: 'Ritual',
    subtitle: 'The Container',
    description: 'Where Halo\'s science and Newport\'s lifestyle collide. Four days that become the foundation for everything that follows.',
    hasImage: false,
  },
];

const journey = [
  { location: 'Newport Beach', subtitle: 'The Foundation' },
  { location: 'Napa / La Jolla', subtitle: 'The Reset' },
  { location: 'Croatia', subtitle: 'The Odyssey' },
];

export function Brands() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-nwprt-navy text-nwprt-cream py-20 md:py-28 border-t border-nwprt-cream/10">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="caption text-nwprt-cream/50 mb-3">Behind the ritual</div>
          <h2 className="display text-4xl md:text-6xl mb-6">The Brands</h2>
          <div className="rule bg-nwprt-cream opacity-40" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="border border-nwprt-cream/15 bg-nwprt-cream/[0.03] p-8 hover:bg-nwprt-cream/[0.06] transition-colors relative"
            >
              {/* Logo in top right */}
              <div className="absolute top-6 right-6">
                {brand.hasImage ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-8 md:h-10 w-auto opacity-80"
                  />
                ) : (
                  <div className="accent-italic text-3xl md:text-4xl text-nwprt-cream/40">
                    Ritual
                  </div>
                )}
              </div>

              <h3 className="display text-2xl md:text-3xl mb-2 text-nwprt-cream pr-24">{brand.name}</h3>
              <div className="accent-italic text-nwprt-cream/60 mb-5">{brand.subtitle}</div>
              <p className="text-sm leading-relaxed text-nwprt-cream/70">{brand.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="accent-italic text-xl md:text-2xl text-nwprt-cream/50 mb-8">The Journey</div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {journey.map((stop, index) => (
              <motion.div
                key={stop.location}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                className="flex items-center gap-6 md:gap-8"
              >
                <div className="text-center">
                  <div className="display text-xl md:text-2xl text-nwprt-cream">{stop.location}</div>
                  <div className="caption text-nwprt-cream/50 mt-2">{stop.subtitle}</div>
                </div>
                {index < journey.length - 1 && (
                  <span className="accent-italic text-nwprt-cream/40 text-2xl">→</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
