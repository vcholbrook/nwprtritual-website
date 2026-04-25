import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const sessions = [
  {
    number: 'Session One',
    title: 'Your Data Decoded',
    duration: '30 min with Chris',
    description: 'A one-on-one with Chris, Halo founder, walking through your genetic profile and bloodwork. What your markers mean, how they connect to how you feel, and what they suggest for your body specifically. You leave with a personalized protocol: nutrition, movement, and supplements built on your actual biology.',
    color: 'border-nwprt-sky/60',
  },
  {
    number: 'Session Two',
    title: 'Your Body Explained',
    duration: '30-45 min with the MD',
    description: 'A one-on-one with the affiliated functional medicine doctor, a women\'s health specialist who has already reviewed your bloodwork panel before you sit down. Your hormone levels, metabolic markers, and what they mean for how you actually feel day to day. Clear, honest answers to the questions your regular doctor has never had time to fully address.',
    color: 'border-nwprt-yellow/80',
  },
  {
    number: 'Session Three',
    title: 'Your Deep Dive',
    duration: '30 min - Your choice',
    description: 'You select your specialist based on the health areas you submitted in your intake form. Your expert is fully prepared for your conversation before you arrive.',
    color: 'border-nwprt-pink/60',
    options: ['Nutrition and longevity', 'Fitness and movement', 'Mental clarity and stress', 'Sleep optimization'],
  },
];

export function DeepDive() {
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
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-nwprt-navy/80 mb-12">
            <p>
              You are not sitting in a lecture designed for someone else - you are in a room with experts who already know your biology.
            </p>
          </div>

          {/* Before You Arrive */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-nwprt-navy p-8 border-l-4 border-nwprt-yellow">
              <div className="caption text-nwprt-yellow mb-3">Before You Arrive</div>
              <h3 className="display text-2xl text-nwprt-cream mb-4">Your Genetic Kit</h3>
              <p className="text-sm leading-relaxed text-nwprt-cream/80">
                A few weeks before you arrive, a Halo genetic kit is shipped to your home. A simple saliva swab under five minutes and a prepaid return envelope. By the time you walk through the door, the experts already know your biology.
              </p>
            </div>
            <div className="bg-white border border-nwprt-navy/15 p-8 border-l-4 border-nwprt-sky/60">
              <div className="caption text-nwprt-navy/60 mb-3">Also Before Arrival</div>
              <h3 className="display text-2xl text-nwprt-navy mb-4">Your Bloodwork</h3>
              <p className="text-sm leading-relaxed text-nwprt-navy/75">
                Your bloodwork is coordinated before arrival through a private MD link. You either upload recent labs or complete a new panel at a lab near you. This is not a standard annual physical - it is a comprehensive functional medicine panel.
              </p>
            </div>
          </div>

          {/* Three Sessions */}
          <div className="space-y-6">
            {sessions.map((session, index) => (
              <motion.div
                key={session.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`bg-white border border-nwprt-navy/10 p-6 md:p-8 border-l-4 ${session.color}`}
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  <div>
                    <div className="caption text-nwprt-navy/50 mb-2">{session.number}</div>
                    <h3 className="display text-xl md:text-2xl text-nwprt-navy mb-2">{session.title}</h3>
                    <div className="text-xs text-nwprt-navy/50">{session.duration}</div>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-nwprt-navy/75 mb-4">
                      {session.description}
                    </p>
                    {session.options && (
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {session.options.map((option) => (
                          <div
                            key={option}
                            className="text-xs px-3 py-2 bg-nwprt-off-white text-nwprt-navy/60 border border-nwprt-navy/10"
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-nwprt-navy p-6 border-l-4 border-nwprt-sky/60">
            <p className="text-sm text-nwprt-cream/75 leading-relaxed">
              Additional sessions are available to purchase during the program. Many women find one conversation opens three more questions they want answered.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}