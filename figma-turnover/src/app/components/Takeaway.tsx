import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const timeline = [
  {
    time: 'Morning',
    title: 'Final Movement and Reflection',
    description: 'One last sunrise session. Gentle movement. Space to let the four days settle before you return to your life.',
  },
  {
    time: 'Before Checkout',
    title: 'Your 90-Day Roadmap',
    description: 'A personal walkthrough of your blueprint. What to prioritize first. What to do in week one, month one, month three. You leave knowing exactly where to start - not overwhelmed with ten things, clear on one.',
  },
  {
    time: 'Within 48 Hours',
    title: 'The Follow-Up',
    description: 'A personal follow-up email with everything covered, links to book continued consultations, and information on return visits. The program ends. The relationship does not.',
  },
];

export function Takeaway() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-nwprt-navy text-nwprt-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="caption text-nwprt-cream/50 mb-3">Day Four - Integration</div>
          <h2 className="display text-4xl md:text-6xl mb-6">What You Leave With</h2>
          <div className="rule bg-nwprt-cream opacity-40 mb-8" />
          <p className="text-lg md:text-xl text-nwprt-cream/80 leading-relaxed max-w-3xl">
            The program does not end when you check out. Day Four is about making sure everything you learned has somewhere to go. You leave with more than a good experience - you leave with a plan.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6 mb-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="grid md:grid-cols-[140px_1fr] gap-6 pb-6 border-b border-nwprt-cream/15 last:border-b-0"
            >
              <div className="caption text-nwprt-yellow">{item.time}</div>
              <div>
                <h3 className="display text-xl text-nwprt-cream mb-2">{item.title}</h3>
                <p className="text-sm text-nwprt-cream/70 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What You Get */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-nwprt-cream/[0.03] border border-nwprt-cream/15 p-8 border-l-4 border-nwprt-sky/60"
          >
            <div className="caption text-nwprt-cream/60 mb-4">In the Halo App</div>
            <ul className="space-y-3">
              {[
                'Complete genetic report - yours permanently',
                'Personalized supplement and nutrition protocol',
                'Track your progress long after you leave',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-nwprt-sky text-sm mt-1">-</span>
                  <span className="text-sm text-nwprt-cream/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-nwprt-cream/[0.03] border border-nwprt-cream/15 p-8 border-l-4 border-nwprt-yellow/80"
          >
            <div className="caption text-nwprt-cream/60 mb-4">In Your Hands</div>
            <ul className="space-y-3">
              {[
                'Printed protocol summary - clean and actionable',
                'Recipe guide aligned to your genetics',
                'Practitioner referral list for continued support',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-nwprt-yellow text-sm mt-1">-</span>
                  <span className="text-sm text-nwprt-cream/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-nwprt-cream/[0.03] p-8 md:p-12 text-center border-l-4 border-nwprt-yellow"
        >
          <p className="accent-italic text-2xl md:text-3xl text-nwprt-cream leading-relaxed max-w-2xl mx-auto mb-4">
            You leave Sunday with the answers you didn't have before, a body that feels seen, and a roadmap for the journey ahead.
          </p>
          <div className="rule-yellow mx-auto mb-4" />
          <div className="caption text-nwprt-sky/80">NWPRT Ritual - Newport Beach</div>
        </motion.div>
      </div>
    </section>
  );
}
