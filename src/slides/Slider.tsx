import { motion } from 'framer-motion';
import { ProjectsSlide } from './ProjectsSlide';
import { AboutSlide } from './AboutSlide';
import { ContactSlide } from './ContactSlide';
import Background from '../Reusables/Background';

type SliderProps = { expanded: number };
const Slider = ({ expanded }: SliderProps) => {
  return (
    <div>
      <motion.div
        className={`row ${
          expanded === 0 ? 'slide-transformer0' : 'slide-transformer1'
        }`}
        style={{
          position: 'relative',
          transition: '0.4s ease',
          WebkitTransition: '0.4s ease',
        }}
      >
        <ProjectsSlide />
        <AboutSlide contactSlide={expanded === 2} />
        <ContactSlide />
        <Background />
      </motion.div>
    </div>
  );
};
