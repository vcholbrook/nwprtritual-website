import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function ThisIsPersonal() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-nwprt-navy text-nwprt-cream py-20 md:py-28">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="caption text-nwprt-cream/50 mb-3">Chapter two</div>
          <h2 className="display text-4xl md:text-6xl mb-14">This Is Personal</h2>

          <div className="text-left space-y-8 text-lg leading-relaxed text-nwprt-cream/85 max-w-2xl mx-auto">
            <p>
              You have felt it. The subtle shifts that showed up quietly and then all at once. The energy that
              used to be there. The sleep that is not quite right. The sense that your body is changing and
              nobody around you seems to have real answers, just general advice that was never designed for you
              specifically.
            </p>

            <p className="accent-italic text-2xl md:text-3xl text-nwprt-cream text-center">
              That changes here.
            </p>

            <p>
              NWPRT Ritual was built on a simple but powerful idea: that every woman deserves to understand her
              own biology. Not a textbook version of what women your age typically experience. Not a one-size-fits-all
              supplement protocol or a generic nutrition plan. Your actual data. Your specific hormones. Your unique
              genetic blueprint.
            </p>

            <p className="accent-italic text-xl text-nwprt-cream/70 text-center pt-2">
              This is not wellness in general. This is wellness for women in this season of life.
            </p>
          </div>

          <div className="rule bg-nwprt-cream opacity-40 mx-auto mt-16" />
        </motion.div>
      </div>
    </section>
  );
}
