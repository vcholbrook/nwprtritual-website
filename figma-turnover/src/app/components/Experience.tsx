import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import heroImage from '../../imports/nwprt-eden.jpg';

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-nwprt-navy text-nwprt-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="grid lg:grid-cols-[70%_30%] gap-12 lg:gap-16 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="caption text-nwprt-cream/50 mb-3">Chapter one</div>
            <h2 className="display text-4xl md:text-6xl mb-6">The Experience</h2>
            <div className="rule bg-nwprt-cream mb-10 opacity-40" />

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-nwprt-cream/85">
              <p>
                You arrive on a Thursday afternoon and something happens the moment you step out of the car.
                The salt air, the light, the sound of the ocean. And for the first time in longer than you can
                remember, you exhale. This isn't a conference, it isn't a spa day, and it isn't
                another thing on your to-do list.
              </p>
              <p>
                For four days, the only person you are responsible for is yourself. What makes this different
                is that everything - the advice, the experts, the movement, the food, the recommendations
                you leave with - is tailored specifically to <span className="accent-italic text-nwprt-cream">you</span>.
                Your DNA. Your bloodwork. Your wearable data.
              </p>
              <p>
                Newport Beach isn't just a backdrop. It's intentional. You leave Sunday with answers
                you didn't have before, a body that feels seen, and a roadmap for the journey ahead.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Walking the Newport Beach pier"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { number: '4', label: 'Days of Transformation', isText: true },
            { number: '1', label: 'Woman at the Center - You', isText: true },
            { number: 'infinity', label: 'Lifelong Tools', isText: false },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="border-l-2 border-nwprt-cream/30 pl-5"
            >
              {stat.isText ? (
                <div className="display text-5xl md:text-6xl text-nwprt-cream mb-2">{stat.number}</div>
              ) : (
                <div className="mb-2">
                  <svg
                    viewBox="0 0 200 100"
                    className="w-20 h-10 md:w-28 md:h-14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 50C10 30 25 20 40 20C55 20 65 30 80 50C95 70 105 80 120 80C135 80 150 70 150 50C150 30 135 20 120 20C105 20 95 30 80 50C65 70 55 80 40 80C25 80 10 70 10 50Z"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-nwprt-cream"
                    />
                  </svg>
                </div>
              )}
              <div className="caption text-nwprt-cream/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
