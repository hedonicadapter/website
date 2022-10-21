import { motion, AnimatePresence } from 'framer-motion';
import { TimelineEvent } from '../Globals';
import '../styles/Textbox.css';

type TextboxProps = {
  timelineEvents: TimelineEvent[];
  hovered: number;
};

const Textbox = ({ timelineEvents, hovered }: TextboxProps) => {
  let hoveredEvent = timelineEvents[hovered];

  return (
    <div className='text-box'>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={hovered}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {hoveredEvent.subTitle && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.1 } }}
            >
              {hoveredEvent.subTitle}
            </motion.h2>
          )}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            style={!hoveredEvent.subTitle ? { paddingTop: 12 } : {}}
          >
            {hoveredEvent.text}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Textbox;
