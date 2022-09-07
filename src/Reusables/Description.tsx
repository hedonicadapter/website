import { AnimationControls, motion } from 'framer-motion';
import Links from './Links';
import '../styles/Description.css';
import { arrowTransition } from '../Globals';
import SmallArrow from './SmallArrow';

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
  arrowAnimationController: AnimationControls;
};

const Description = ({
  descriptionText,
  arrowUnderneath,
  links,
  hovered,
  setHovered,
  expanded,
  setExpanded,
  arrowAnimationController,
}: DescriptionProps) => {
  return (
    <div
      onClick={() => {
        setExpanded(true);
        setHovered(false);
      }}
      className={
        !arrowUnderneath
          ? 'row description-and-arrow'
          : 'column description-and-arrow-underneath'
      }
    >
      <div>
        <motion.h2
          key={expanded ? 1 : 0}
          transition={{ duration: 0.1 }}
          className='description no-select'
        >
          {descriptionText}
        </motion.h2>
        <Links align='left' links={links} />
      </div>

      <div
        style={{
          width: '70%',
        }}
      >
        <SmallArrow
          leftToRight={true}
          expandOnClick={false}
          hovered={hovered}
          expanded={!expanded}
          setExpanded={setExpanded}
          animationController={arrowAnimationController}
        />
      </div>

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
  );
};

export default Description;
