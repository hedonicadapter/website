import { motion } from 'framer-motion';
import { TimelineEvent } from '../Globals';
import '../styles/Timeline.css';

type DotsProps = {
  timelineEvent: TimelineEvent;
  hovered: boolean;
};
const Dots = ({ timelineEvent, hovered }: DotsProps) => {
  return (
    <li>
      <motion.div className='column no-select timeline-dot-container'>
        <motion.div
          className='timeline-dot'
          animate={
            hovered
              ? {
                  width: 20,
                  height: 20,
                  marginTop: -2,
                }
              : {
                  width: 14,
                  height: 14,
                  marginTop: 1,
                }
          }
        />
        <motion.div
          animate={
            hovered
              ? { fontSize: '1.2em', color: 'white', marginTop: -4 }
              : { fontSize: '1.1em', opacity: 0 }
          }
          transition={{ duration: 0.15 }}
        >
          {timelineEvent.title}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.75 }}
        >
          {hovered && (
            <motion.div
              layoutId='outline'
              transition={{ type: 'spring', stiffness: 1000, damping: 70 }}
              className='text-box-triangle'
            />
          )}
        </motion.div>
      </motion.div>
    </li>
  );
};

type TimelineProps = {
  timelineEvents: TimelineEvent[];
  hovered: number;
  setHovered: (index: number) => void;
};
const Timeline = ({ timelineEvents, hovered, setHovered }: TimelineProps) => {
  const dotsContainerVariants = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.25,
        staggerChildren: 0.15,
      },
    },
  };

  const dotVariants = {
    hide: {
      opacity: 0,
      scale: 0,
      transition: { type: 'spring', mass: 0.7, duration: 0.15 },
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', mass: 0.7, duration: 0.15 },
    },
  };

  return (
    <motion.div
      variants={dotsContainerVariants}
      initial='hide'
      animate='show'
      className='row timeline'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { ease: 'linear', delay: 0.25, duration: 0.45 },
        }}
        className='timeline-dots-line'
      ></motion.div>
      <ul>
        {timelineEvents.map((timelineEvent, index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            style={{ cursor: 'pointer' }}
            onHoverStart={() => setHovered(index)}
          >
            <Dots timelineEvent={timelineEvent} hovered={hovered === index} />
          </motion.div>
        ))}
      </ul>
    </motion.div>
  );
};

export default Timeline;
