import { SlideWrapper } from '../Reusables/SlideWrapper';

import Mingler from '../Reusables/Mingler';
import Roubine from '../Reusables/Roubine';
import '../styles/ProjectsSlide.css';

export const ProjectsSlide = () => {
  return (
    <SlideWrapper>
      <div className='column project-slide'>
        <Mingler />
        <Roubine />
      </div>
    </SlideWrapper>
  );
};
