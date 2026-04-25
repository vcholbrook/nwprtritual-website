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
    url: 'https://www.nwprt.co',
  },
  {
    name: 'Halo',
    subtitle: 'The Science',
    description: 'Genomics, biomarkers, and wearables blended with functional medicine. Your complete biological picture: decoded, actionable, and finally yours.',
    logo: haloLogo,
    hasImage: true,
    url: 'https://gethalohealth.com/nwprt',
  },
  {
    name: 'Ritual',
    subtitle: 'The Container',
    description: 'Where Halo\'s science and Newport\'s lifestyle collide. Four days that become the foundation for everything that follows.',
    hasImage: false,
    url: null,
  },
];

const journey = [
  {
    location: 'Newport Beach',
    subtitle: 'The Foundation',
    description: 'Where it all begins. Four days that set the foundation for everything that follows.'
  },
  {
    location: 'Napa Valley / La Jolla',
    subtitle: 'The Reset',
    description: 'Seasonal retreats in wine country vineyards and coastal sanctuaries. Your next level of depth.'
  },
  {
    location: 'Croatia',
    subtitle: 'The Odyssey',
    description: 'The Adriatic. Island-hopping. The retreat experience you\'ve been building toward.'
  },
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
          {brands.map((brand, index) => {
            const CardContent = (
              <>
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
              </>
            );

            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {brand.url ? (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-nwprt-cream/15 bg-nwprt-cream/[0.03] p-8 hover:bg-nwprt-cream/[0.06] transition-colors relative"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div className="border border-nwprt-cream/15 bg-nwprt-cream/[0.03] p-8 hover:bg-nwprt-cream/[0.06] transition-colors relative">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <div className="accent-italic text-2xl md:text-3xl text-nwprt-cream mb-4">The Journey</div>
            <p className="text-nwprt-cream/70 max-w-2xl mx-auto">
              This retreat is just the beginning. What happens next is where transformation deepens.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">
            {journey.map((stop, index) => (
              <motion.div
                key={stop.location}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                className="flex items-center gap-6 md:gap-8"
              >
                <div className="bg-nwprt-cream/[0.03] border border-nwprt-cream/15 p-8 text-center max-w-xs">
                  <div className="display text-xl md:text-2xl text-nwprt-cream mb-2">{stop.location}</div>
                  <div className="caption text-nwprt-yellow mb-4">{stop.subtitle}</div>
                  <p className="text-sm text-nwprt-cream/70 leading-relaxed">{stop.description}</p>
                </div>
                {index < journey.length - 1 && (
                  <span className="accent-italic text-nwprt-cream/40 text-3xl hidden md:block">→</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
