import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const pricingTiers = [
  {
    title: 'Double Occupancy',
    price: 'TBD',
    subtitle: 'per person - shared room',
    features: [
      'Full retreat program',
      'Shared private room - 3 nights',
      'All meals included',
      'Yacht dinner Saturday',
      'All pod sessions and expert access',
      'Curated gift bag',
      'Spa pass (1 session)',
      '90-day roadmap',
      'Personal hypnosis audio',
    ],
    featured: false,
  },
  {
    title: 'Single Occupancy',
    price: 'TBD',
    subtitle: 'per person - private room',
    features: [
      'Full retreat program',
      'Private room - 3 nights',
      'All meals included',
      'Yacht dinner Saturday',
      'All pod sessions and expert access',
      'Curated gift bag and morning ritual kit',
      'Pre-retreat prep box',
      'Spa pass (1 session)',
      '90-day personalized roadmap',
      'Personal hypnosis audio',
      'Future self letter at 30 days',
    ],
    featured: true,
  },
  {
    title: 'Private Group',
    price: 'TBD',
    subtitle: 'flat fee - 12 women - full buyout',
    features: [
      'Entire retreat exclusively yours',
      'Custom programming for your group',
      'All single occupancy inclusions',
      'Corporate teams, friend groups, wellness communities',
      'You set the price for your group',
    ],
    featured: false,
  },
];

export function Investment() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-nwprt-off-white text-nwprt-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`border p-8 md:p-10 text-center flex flex-col ${
                  tier.featured
                    ? 'bg-nwprt-navy text-nwprt-cream border-nwprt-navy'
                    : 'bg-nwprt-off-white text-nwprt-navy border-nwprt-navy/15'
                }`}
              >
                <div className="caption mb-4 opacity-70">{tier.title}</div>
                <div className={`display ${tier.featured ? 'text-5xl md:text-6xl mb-1 text-nwprt-yellow' : 'text-5xl md:text-6xl mb-1'}`}>
                  {tier.price}
                </div>
                <div className="caption opacity-60 mb-8">{tier.subtitle}</div>
                <ul className="text-left space-y-3 text-sm leading-relaxed">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-3 pb-3 border-b border-current/10 last:border-0 last:pb-0"
                    >
                      <span className={`shrink-0 ${tier.featured ? 'text-nwprt-yellow' : 'text-nwprt-navy/60'}`}>
                        -
                      </span>
                      <span className={tier.featured ? 'text-nwprt-cream/80' : 'text-nwprt-navy/80'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs text-nwprt-navy/50 text-center mt-8 italic max-w-2xl mx-auto"
          >
            Pricing currently being finalized based on our partner commitments
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-8 bg-nwprt-off-white grid md:grid-cols-2 gap-8"
          >
            <div>
              <div className="caption text-nwprt-navy/60 mb-3">Additional Diagnostics & Add-Ons</div>
              <ul className="text-sm text-nwprt-navy/75 leading-relaxed space-y-2">
                <li>- Gut microbiome testing</li>
                <li>- Additional cortisol testing</li>
                <li>- Advanced hormone panels</li>
                <li>- Private chef dinners</li>
                <li>- One-on-one coaching sessions</li>
                <li>- Extended spa treatments</li>
              </ul>
              <p className="text-xs text-nwprt-navy/50 italic mt-3">
                Pricing varies. Reserved at application.
              </p>
            </div>
            <div>
              <div className="caption text-nwprt-navy/60 mb-2">How to apply</div>
              <p className="text-sm text-nwprt-navy/75 leading-relaxed">
                Short application + 15-minute call with Amy. Selection confirmed within 48 hours. Space limited.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}