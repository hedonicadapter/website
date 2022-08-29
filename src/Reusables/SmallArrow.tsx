import { motion } from 'framer-motion';

type SmallArrowProps = {
  setExpanded: (bool: boolean) => void;
};

const SmallArrow = ({ setExpanded }: SmallArrowProps) => (
  <motion.div
    whileHover={{ x: -10, cursor: 'pointer', transition: { duration: 0.1 } }}
  >
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 'auto' }}
      exit={{ width: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.5,
        ease: [0.25, 0.75, 0.15, 0.1],
      }}
      className='small-arrow-container'
      onClick={() => setExpanded(false)}
    >
      <div className='small-arrow'>
        <div className='small-arrow-line' />
        <div className='small-arrow-point' />
      </div>
    </motion.div>
  </motion.div>
);

export default SmallArrow;
