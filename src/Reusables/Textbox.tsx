import { motion, AnimatePresence } from 'framer-motion';
import { TimelineEvent } from '../Globals';
import '../styles/Textbox.css';

type TextboxProps = {
  timelineEvents: TimelineEvent[];
  hasBeenViewed: boolean;
  setHasBeenViewed: (b: boolean) => void;
  hovered: number;
};

const Textbox = ({
  timelineEvents,
  hasBeenViewed,
  setHasBeenViewed,
  hovered,
}: TextboxProps) => {
  let hoveredEvent = timelineEvents[hovered];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.35, duration: 0.75 }}
      className='text-box'
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={hovered}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={
              !hasBeenViewed
                ? {
                    opacity: 1,
                    transition: { ease: 'linear', delay: 1.2, duration: 0.45 },
                  }
                : { opacity: 1, transition: { duration: 0.1 } }
            }
          >
            {hoveredEvent.subTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={
              !hasBeenViewed
                ? {
                    opacity: 1,
                    transition: { ease: 'linear', delay: 1.3, duration: 1.5 },
                  }
                : { opacity: 1, transition: { duration: 0.15 } }
            }
            onAnimationComplete={() => setHasBeenViewed(true)}
          >
            {hoveredEvent.text}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Textbox;
