import { AnimationControls, motion, useAnimationControls } from 'framer-motion';
import Links from './Links';
import '../styles/Description.css';
import { arrowTransition } from '../Globals';
import SmallArrow from './SmallArrow';
import ExpansionWrapper from './ExpansionWrapper';
import { useEffect } from 'react';

type DescriptionProps = {
  descriptionText: string;
  arrowUnderneath?: boolean;
  links: Array<{
    title: string;
    url: string;
  }>;
  hovered: boolean;
  setHovered: (bool: boolean) => void;
  expanded: boolean;
  setExpanded: (bool: boolean) => void;
  animationController?: AnimationControls;
};

const Description = ({
  descriptionText,
  arrowUnderneath,
  links,
  hovered,
  setHovered,
  expanded,
  setExpanded,
  animationController,
}: DescriptionProps) => {
  const arrowOnClickHandler = async () => {
    if (!animationController) return;

    animationController.start({
      width: 0,
      transition: {
        delay: 0.2,
        duration: 0.25,
        ease: [0.1, 0.98, 0, 0.99],
        origin: 1,
      },
    });

    setExpanded(true);
  };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div
        onClick={() => {
          arrowOnClickHandler();
          setHovered(false);
        }}
        className={
          !arrowUnderneath
            ? 'row description-and-arrow'
            : 'column description-and-arrow-underneath'
        }
      >
        <motion.div
          initial={'hide'}
          animate={expanded ? 'hide' : 'show'}
          exit={'hide'}
          variants={{
            show: { opacity: 1 },
            hide: { opacity: 0 },
          }}
          transition={{ duration: 0.15 }}
        >
          <h2 className='description no-select'>{descriptionText}</h2>
          <Links align='left' links={links} />
        </motion.div>
        <motion.div
          initial={'hide'}
          animate={expanded ? 'hide' : 'show'}
          exit={'hide'}
          variants={{
            show: { opacity: 1, transition: { delay: 0, duration: 0.25 } },
            hide: { opacity: 0, transition: { delay: 0.4, duration: 0.25 } },
          }}
          style={{
            width: '70%',
          }}
        >
          <SmallArrow
            leftToRight={true}
            hovered={hovered}
            expanded={!expanded}
            animationController={animationController}
          />
        </motion.div>

        {/* <motion.div animate={hovered ? { x: 10 } : { x: 0 }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 'auto' }}
          exit={{ width: 0 }}
          className='arrow-container'
          transition={arrowTransition}
        >
          <div className={!arrowUnderneath ? 'arrow' : 'arrow-underneath'} />
          <div
            className={
              !arrowUnderneath ? 'arrow-line' : 'arrow-line-underneath'
            }
          />
          <motion.div
            className={
              !arrowUnderneath ? 'arrow-point' : 'arrow-point-underneath'
            }
          />
        </motion.div>
      </motion.div> */}
      </div>
    </motion.div>
  );
};

export default Description;
