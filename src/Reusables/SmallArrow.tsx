import { AnimatePresence, motion } from 'framer-motion';

type SmallArrowProps = {
  expandOnClick: boolean;
  hovered: boolean;
  expanded: boolean;
  setExpanded: (bool: boolean) => void;
};

const SmallArrow = ({
  expandOnClick,
  hovered,
  expanded,
  setExpanded,
}: SmallArrowProps) => (
  <AnimatePresence>
    {expanded && (
      <motion.div
        animate={{ x: hovered ? -10 : 0 }}
        whileHover={{
          x: -10,
          cursor: 'pointer',
          transition: { duration: 0.1 },
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 'auto' }}
          exit={{ width: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.5,
            ease: [0.1, 0.98, 0, 0.99],
          }}
          className='small-arrow-container'
          onClick={() => setExpanded(!expanded)}
        >
          <div className='small-arrow'>
            <div className='small-arrow-line' />
            <div className='small-arrow-point' />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default SmallArrow;
