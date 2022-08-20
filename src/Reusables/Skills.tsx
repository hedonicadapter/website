import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type SkillsProps = {
  skills: Array<{
    icon: JSX.Element;
    title: string;
    rating?: string;
    opacity?: number;
  }>;
  cardHovered?: boolean;
};

export const Skills = ({ skills, cardHovered = false }: SkillsProps) => {
  const SkillComponent = ({ skill }: any) => {
    const [skillHovered, setSkillHovered] = useState(false);

    return (
      <motion.div
        className='skill-icon-and-name'
        onMouseOver={() => setSkillHovered(true)}
        onMouseLeave={() => setSkillHovered(false)}
      >
        {skill.icon}

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
    <div className='row' style={{ gap: 6 }}>
      {skills.map((skill, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.75, delay: 0.25 * index },
          }}
        >
          <SkillComponent skill={skill} />
        </motion.div>
      ))}
    </div>
  );
};
