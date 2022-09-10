import { motion } from 'framer-motion';
import { useEffect } from 'react';

type ExpansionWrapperProps = {
  expanded?: boolean;
  className?: string;
  setExpansionAnimationFinished?: (bool: boolean) => void;
  children: JSX.Element;
};

const ExpansionWrapper = ({
  expanded,
  className,
  setExpansionAnimationFinished,
  children,
}: ExpansionWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial={{ x: expanded ? -1000 : 1000 }}
      animate={{ x: 0 }}
      exit={{ x: expanded ? -1000 : 1000 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      onAnimationComplete={() => {
        console.log('animation complete');
        setExpansionAnimationFinished && setExpansionAnimationFinished(true);
      }}
    >
      {children}
    </motion.div>
  );
};

export default ExpansionWrapper;
