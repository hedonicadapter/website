import { motion } from 'framer-motion';

import { SlideWrapper } from '../Reusables/SlideWrapper';
import Mingler from '../Reusables/Mingler';
import Roubine from '../Reusables/Roubine';
import '../styles/ProjectsSlide.css';

export const ProjectsSlide = () => {
  return (
    <SlideWrapper>
      <div className='column project-slide'>
        <motion.div layout='position'>
          <Mingler />
        </motion.div>
        <motion.div layout='position'>
          <Roubine />
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
