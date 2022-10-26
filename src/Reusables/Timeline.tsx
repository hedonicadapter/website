import { AnimatePresence, motion } from 'framer-motion';
import { TimelineEvent } from '../Globals';
import '../styles/Timeline.css';

type DotsProps = {
  timelineEvent: TimelineEvent;
  hovered: boolean;
  clicked: boolean;
  firstOrLast: boolean;
};
const Dots = ({ timelineEvent, hovered, clicked, firstOrLast }: DotsProps) => {
  return (
    <li>
      <motion.div className='column no-select timeline-dot-container'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.75 }}
          className='text-box-triangle-container'
        >
          <AnimatePresence>
            {clicked && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.35 }}
              >
                {hovered && (
                  <motion.div
                    layoutId='outline'
                    transition={{
                      type: 'spring',
                      stiffness: 1000,
                      damping: 70,
                    }}
                    className='text-box-triangle'
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
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
                  width: firstOrLast ? 16 : 14,
                  height: firstOrLast ? 16 : 14,
                  marginTop: 1,
                }
          }
        />
        <div
          style={{
            position: 'relative',
            width: 80,
          }}
        >
          <motion.div
            animate={
              hovered || firstOrLast
                ? {
                    fontSize: '1.2em',
                    color: 'white',
                    marginTop: -4,
                    opacity: 1,
                  }
                : { fontSize: '1.1em', opacity: 0 }
            }
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              width: 80,
              height: 50,
              margin: '0 auto',
              textAlign: 'center',
              zIndex: firstOrLast ? 0 : 1,
              background: firstOrLast
                ? ''
                : 'radial-gradient(circle, rgba(32, 28, 28, 1) 35%, rgba(0,0,0,0) 100%)',
            }}
          >
            {timelineEvent.title}
          </motion.div>
        </div>
      </motion.div>
    </li>
  );
};

const dotsContainerVariants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.15,
      staggerChildren: 0.1,
    },
  },
};

const dotVariants = {
  hide: {
    opacity: 0,
    scale: 0,
    transition: { type: 'spring', mass: 0.5, duration: 0.15 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', mass: 0.5, duration: 0.15 },
  },
};

type TimelineProps = {
  timelineEvents: TimelineEvent[];
  hovered: number;
  setHovered: (index: number) => void;
  timelineItemClicked: number | boolean;
  timelineItemClickHandler: (index: number) => void;
};
const Timeline = ({
  timelineEvents,
  hovered,
  setHovered,
  timelineItemClicked,
  timelineItemClickHandler,
}: TimelineProps) => {
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
      />
      <ul>
        {timelineEvents.map((timelineEvent, index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            style={{ cursor: 'pointer' }}
            onHoverStart={() => setHovered(index)}
            onClick={() => timelineItemClickHandler(index)}
          >
            <Dots
              timelineEvent={timelineEvent}
              hovered={hovered === index}
              clicked={timelineItemClicked !== false}
              firstOrLast={index === 0 || index === timelineEvents.length - 1}
            />
          </motion.div>
        ))}
      </ul>
    </motion.div>
  );
};

export default Timeline;
