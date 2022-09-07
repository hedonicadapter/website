import { AnimatePresence, AnimationControls, motion } from 'framer-motion';

type SmallArrowProps = {
  leftToRight?: boolean;
  expandOnClick: boolean;
  hovered: boolean;
  expanded: boolean;
  setExpanded: (bool: boolean) => void;
  animationController?: AnimationControls;
};

const SmallArrow = ({
  leftToRight = false,
  expandOnClick,
  hovered,
  expanded,
  setExpanded,
  animationController,
}: SmallArrowProps) => (
  <motion.div
    animate={{ x: hovered ? (leftToRight ? 10 : -10) : 0 }}
    whileHover={{
      x: leftToRight ? 10 : -10,
      cursor: 'pointer',
      transition: { duration: 0.1 },
    }}
  >
    <motion.div
      initial={{ width: 0 }}
      animate={
        animationController ? animationController : { width: 'auto', x: 0 }
      }
      exit={{ width: 0, x: leftToRight ? -100 : 100 }}
      transition={{
        // delay: 0.95,
        duration: 0.5,
        ease: [0.1, 0.98, 0, 0.99],
        origin: 1,
      }}
      className='small-arrow-container'
      onClick={() => setExpanded(!expanded)}
    >
      <div className='small-arrow'>
        <div className='small-arrow-line' />
        <div
          className='small-arrow-point'
          style={
            leftToRight
              ? { borderWidth: '2px 2px 0 0', float: 'right' }
              : { borderWidth: '0 0 2px 2px' }
          }
        />
      </div>
    </motion.div>
  </motion.div>
);

export default SmallArrow;
