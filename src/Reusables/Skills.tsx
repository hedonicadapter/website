import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import debounce from 'lodash/debounce';
import Tooltip from './Tooltip';
import '../styles/Skills.css';

type SkillsProps = {
  skills: Array<{
    icon: JSX.Element;
    title: string;
    rating?: string;
    opacity?: number;
  }>;
  vertical?: boolean;
  tooltips?: boolean;
  cardHovered?: boolean;
};

export const Skills = ({
  skills,
  vertical = false,
  tooltips = false,
  cardHovered = false,
}: SkillsProps) => {
  const SkillComponent = ({ skill }: any) => {
    const [skillHovered, setSkillHovered] = useState(false);

    return (
      <motion.div
        className='skill-icon-and-name'
        onMouseOver={() => setSkillHovered(true)}
        onMouseLeave={() => setSkillHovered(false)}
      >
        {skill.icon}

        {tooltips && (
          <Tooltip text={skill.title} show={skillHovered} vertical={vertical} />
        )}
        <AnimatePresence>
          {!skillHovered && cardHovered && skill.rating && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 130, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`skillbar rating-${skill.rating}`}
              transition={{ duration: 0.15 }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {skillHovered && skill.rating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div>{skill.title}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div
      className={vertical ? 'column' : 'row'}
      style={{ gap: vertical ? 1 : 6 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          <SkillComponent skill={skill} />
        </motion.div>
      ))}
    </div>
  );
};
