import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';

const scheduleData = [
  {
    day: 'Thursday',
    subtitle: 'Arrive & exhale',
    items: [
      { time: '12-3PM', description: 'Arrivals & check in - gift bag waiting in room' },
      { time: '1-2:30PM', description: 'Group 1 - pre-selected at application', badge: { text: 'Spa Pass', color: 'bg-nwprt-pink/40' } },
      { time: '3-4PM', description: 'Welcome, meet the group & mocktail' },
      { time: '5-6PM', description: 'Sunset breathwork', badge: { text: 'The Shore', color: 'bg-nwprt-cream text-nwprt-navy' } },
      { time: '6-7PM', description: 'Welcome dinner - farm to table' },
      { time: '7:30-8:30PM', description: 'Opening circle - why you\'re here, no topic off limits' },
    ],
  },
  {
    day: 'Friday',
    subtitle: 'Go deep',
    items: [
      { time: '6:30-7:30AM', description: 'Morning movement - Fitness Lead', badge: { text: 'The Current', color: 'bg-nwprt-olive/15' } },
      { time: '8:45-9:30AM', description: 'Halo Founder - your data decoded', badge: { text: 'The Signal', color: 'bg-nwprt-navy/10' } },
      { time: '9:45-11:15AM', description: 'Pod Rotations - Round 1' },
      { time: '11:30AM-1PM', description: 'Pod Rotations - Round 2' },
      { time: '1-2PM', description: 'Lunch & Learn - Nutrition Lead', badge: { text: 'The Tide', color: 'bg-nwprt-sky/30' } },
      { time: '2-3:30PM', description: 'Pod Rotations - Round 3' },
      { time: '3:30-5PM', description: 'Individual touchpoints + Spa Pass Group 2' },
      { time: '5:30-7PM', description: 'Interactive cooking class - Newport Chef + Nutrition Lead', badge: { text: 'The Current', color: 'bg-nwprt-olive/15' } },
      { time: '7-7:30PM', description: 'Dinner - eat what was cooked' },
      { time: '7:30-8:30PM', description: 'Sound bath - integrate, receive, restore', badge: { text: 'The Shore', color: 'bg-nwprt-cream text-nwprt-navy' } },
    ],
  },
  {
    day: 'Saturday',
    subtitle: 'Experience Newport',
    items: [
      { time: '6:30-7:30AM', description: 'Morning fitness (ie: Coastal bike, paddleboard)', badge: { text: 'The Current', color: 'bg-nwprt-olive/15' } },
      { time: '9-10:30AM', description: 'Pod Rotations - Round 4, Final rotation' },
      { time: '10:30AM-12PM', description: 'Individual touchpoints + Wellness Lounge + Spa Pass Group 3' },
      { time: '12-1PM', description: 'Lunch' },
      { time: '1-1:30PM', description: 'Light walk - on property or coastal' },
      { time: '1:30-3PM', description: 'Group painting with local Newport artist' },
      { time: '3:15-4:15PM', description: 'Guest speaker / educational programming', badge: { text: 'The Tide', color: 'bg-nwprt-sky/30' } },
      { time: '4:15-5:30PM', description: 'Free time - get ready' },
      { time: '5:30-8:30PM', description: 'Yacht dinner - signature Newport evening' },
    ],
  },
  {
    day: 'Sunday',
    subtitle: 'Integrate & send off',
    items: [
      { time: '6:30-7:30AM', description: 'Sunrise walk & gentle yoga - Fitness Lead', badge: { text: 'The Current', color: 'bg-nwprt-olive/15' } },
      { time: '7:30-8:30AM', description: 'Coffee & breakfast + Spa Pass Group 4' },
      { time: '8:30-8:45AM', description: 'Short group meditation - opening The Shore' },
      { time: '8:45-9:30AM', description: 'Q&A with experts - open, honest, no topic off limits', badge: { text: 'The Shore', color: 'bg-nwprt-cream text-nwprt-navy' } },
      { time: '9:30-10AM', description: 'I Am - personal intention recording exercise' },
      { time: '10-10:30AM', description: 'Letter to your future self - sealed, mailed at 30 days' },
      { time: '10:30AM-12PM', description: 'Send off brunch - 90-day roadmap in hand' },
    ],
  },
];

const tracks = [
  {
    number: 'Track One',
    title: 'Women\'s Health and Hormones',
    description: 'Perimenopause, hormone balance, HRT, adrenal function. The most in-depth hormone conversation most women have ever had.',
    color: 'border-nwprt-sky/60',
  },
  {
    number: 'Track Two',
    title: 'Nutrition and Longevity',
    description: 'Food as medicine. Anti-inflammatory eating. What your genetics say about your optimal diet.',
    color: 'border-nwprt-yellow/80',
  },
  {
    number: 'Track Three',
    title: 'Fitness and Movement',
    description: 'What your body actually needs at this stage of life. Recovery, strength, zone 2 training. Built around your data.',
    color: 'border-nwprt-pink/60',
  },
  {
    number: 'Track Four',
    title: 'Mental Clarity and Stress',
    description: 'Burnout. Brain fog. Nervous system regulation. The session women say they didn\'t know they needed until they were in it.',
    color: 'border-nwprt-olive/40',
  },
];

export function Agenda() {
  const { ref, isInView } = useInView();
  const [expandedDay, setExpandedDay] = useState<string | null>('Thursday');

  return (
    <section className="bg-white text-nwprt-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Day by Day Schedule */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {scheduleData.map((schedule, colIndex) => (
              <div key={schedule.day} className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: colIndex * 0.1 }}
                >
                  <div
                    onClick={() => setExpandedDay(expandedDay === schedule.day ? null : schedule.day)}
                    className="flex items-baseline gap-4 mb-6 pb-3 border-b border-nwprt-navy/15 cursor-pointer hover:border-nwprt-navy/30 transition-colors"
                  >
                    <h3 className="display text-2xl md:text-3xl text-nwprt-navy">{schedule.day}</h3>
                    <span className="accent-italic text-nwprt-navy/60">{schedule.subtitle}</span>
                  </div>

                  {expandedDay === schedule.day && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="divide-y divide-nwprt-navy/10"
                    >
                      {schedule.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex gap-4 py-3"
                        >
                          <div className="caption text-nwprt-navy/50 w-24 shrink-0 pt-[3px]">{item.time}</div>
                          <div className="text-sm leading-relaxed text-nwprt-navy/85">
                            <div>{item.description}</div>
                            {item.badge && (
                              <span className={`caption inline-block mt-2 px-2 py-1 ${item.badge.color} text-nwprt-navy`}>
                                {item.badge.text}
                              </span>
                            )}
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Pods Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 pt-12 border-t border-nwprt-navy/15"
          >
            <div className="caption text-nwprt-navy mb-3">The Format</div>
            <h3 className="display text-3xl md:text-4xl text-nwprt-navy mb-6">The Pod Model</h3>
            <p className="text-base md:text-lg text-nwprt-navy/75 leading-relaxed mb-8 max-w-3xl">
              A group of like-minded women. Four expert tracks running simultaneously. You choose which pods you attend based on what matters most to you - not what someone else decided you needed. Your pod assignments are confirmed before you arrive so your experts are fully prepared for your conversation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                { number: '4', label: 'Expert Tracks' },
                { number: '4-6', label: 'Per Pod' },
                { number: 'You', label: 'Choose' },
              ].map((stat, i) => (
                <div key={stat.label} className="bg-white p-6 text-center border border-nwprt-navy/10">
                  <div className="display text-4xl md:text-5xl text-nwprt-navy">{stat.number}</div>
                  <div className="caption text-nwprt-navy/50 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tracks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`bg-white border border-nwprt-navy/10 p-6 border-t-2 ${track.color}`}
                >
                  <div className="caption text-nwprt-navy/50 mb-2">{track.number}</div>
                  <h4 className="display text-xl text-nwprt-navy mb-3">{track.title}</h4>
                  <p className="text-sm text-nwprt-navy/70 leading-relaxed">{track.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-nwprt-navy p-6 text-center">
              <p className="accent-italic text-lg md:text-xl text-nwprt-cream">
                Small groups. Prepared experts. Your data already on the table.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}