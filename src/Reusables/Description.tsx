import { motion } from 'framer-motion';
import Links from './Links';
import '../styles/Description.css';

type DescriptionProps = {
  descriptionText: string;
  arrowUnderneath?: boolean;
  links: Array<{
    title: string;
    url: string;
  }>;
  hovered: boolean;
  expanded: boolean;
  setExpanded: (bool: boolean) => void;
};

const Description = ({
  descriptionText,
  arrowUnderneath,
  links,
  hovered,
  expanded,
  setExpanded,
}: DescriptionProps) => {
  return (
    <div
      onClick={() => setExpanded(true)}
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
      <motion.div animate={hovered ? { x: 10 } : { x: 0 }}>
        <motion.div
          className={!arrowUnderneath ? 'arrow' : 'arrow-underneath'}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.25, duration: 1, easing: 'easeOut' }}
        >
          <div
            className={
              !arrowUnderneath ? 'arrow-line' : 'arrow-line-underneath'
            }
          />
          <div
            className={
              !arrowUnderneath ? 'arrow-point' : 'arrow-point-underneath'
            }
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Description;
