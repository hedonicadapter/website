import { AnimationControls, motion } from 'framer-motion';
import { useEffect } from 'react';

type SmallArrowProps = {
  leftToRight?: boolean;
  hovered: boolean;
  expanded: boolean;
  animationController?: AnimationControls;
};

const SmallArrow = ({
  leftToRight = false,
  hovered,
  expanded,
  animationController,
}: SmallArrowProps) => {
  useEffect(() => {
    expanded &&
      animationController &&
      animationController.start({
        width: 'auto',
        opacity: 1,
        transition: {
          delay: 0.25,
          duration: 0.5,
          ease: [0.1, 0.98, 0, 0.99],
          // origin: 1,
        },
      });
  }, [expanded, animationController]);

  return (
    <motion.div
      animate={{ x: hovered ? (leftToRight ? 10 : -10) : 0 }}
      whileHover={{
        x: leftToRight ? 10 : -10,
        cursor: 'pointer',
        transition: { duration: 0.1 },
      }}
    >
      <motion.div
        initial={{
          width: 0,
          x: 0,
          opacity: 1,
        }}
        animate={animationController && animationController}
        transition={{
          delay: 0.15,
          duration: 1.85,
          ease: [0.1, 0.98, 0, 0.99],
          // origin: 1,
        }}
        className='small-arrow-container'
      >
        <div className='small-arrow'>
          <div
            className='small-arrow-line'
            style={leftToRight ? { height: 3 } : { height: 2 }}
          />
          <div
            className='small-arrow-point'
            style={
              leftToRight
                ? {
                    borderWidth: '3px 3px 0 0',
                    float: 'right',
                    marginTop: -11,
                    height: 17,
                    width: 17,
                  }
                : {
                    borderWidth: '0 0 2px 2px',
                    marginTop: -6,
                    height: 8,
                    width: 8,
                  }
            }
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SmallArrow;
