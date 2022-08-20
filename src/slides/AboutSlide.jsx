import { useState } from 'react';
import { motion } from 'framer-motion';

import { Card } from '../Reusables/Card';
import { SlideWrapper } from '../Reusables/SlideWrapper';
import { Skills } from '../Reusables/Skills';
import { languages } from '../Globals';

export const AboutSlide = () => {
  const [languageHovered, setLanguageHovered] = useState(false);

  return (
    <SlideWrapper>
      <div className='row' style={{ gap: 14 }}>
        <div
          onMouseEnter={() => setLanguageHovered(true)}
          onMouseLeave={() => setLanguageHovered(false)}
        >
          <Card
            // primary={true}
            title='Languages'
            titleElement={
              <motion.div
                animate={languageHovered ? 'show' : 'hide'}
                variants={{
                  show: { height: '165px' },
                  hide: { height: 0 },
                }}
                className='skills-container'
              >
                <Skills skills={languages} cardHovered={languageHovered} />
              </motion.div>
            }
            titleInside={true}
          ></Card>
        </div>
      </div>
    </SlideWrapper>
  );
};
