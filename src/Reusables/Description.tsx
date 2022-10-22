import { AnimationControls, motion, useAnimationControls } from 'framer-motion';
import Links from './Links';
import '../styles/Description.css';
import { arrowTransition } from '../Globals';
import SmallArrow from './SmallArrow';
import ExpansionWrapper from './ExpansionWrapper';
import { ReactNode, useEffect } from 'react';

type DescriptionProps = {
  descriptionText: string | ReactNode | null;
  arrowUnderneath?: boolean;
  links: Array<{
    title: string;
    url: string;
  }>;
  hovered: boolean;
  setHovered: (bool: boolean) => void;
  expanded: boolean;
  animationController: AnimationControls;
};

const Description = ({
  descriptionText,
  arrowUnderneath,
  links,
  hovered,
  setHovered,
  expanded,
  animationController,
}: DescriptionProps) => {
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div
        onClick={() => {
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
          <h2
            className='description no-select'
            style={{ fontSize: !arrowUnderneath ? '2.1em' : '' }}
          >
            {descriptionText}
          </h2>
          <Links align='left' links={links} />
        </motion.div>
        <motion.div
          initial={'hide'}
          animate={expanded ? 'hide' : 'show'}
          exit={'hide'}
          variants={{
            show: { opacity: 1, transition: { delay: 0, duration: 0.25 } },
            hide: { opacity: 0, transition: { delay: 0.15, duration: 0.25 } },
          }}
          style={{
            width: '70%',
            paddingTop: arrowUnderneath ? 8 : 0,
          }}
        >
          <SmallArrow
            leftToRight={true}
            hovered={hovered}
            expanded={!expanded}
            animationController={animationController}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
