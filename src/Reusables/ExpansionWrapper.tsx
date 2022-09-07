import { motion } from 'framer-motion';
import { useEffect } from 'react';

type ExpansionWrapperProps = {
  key: number;
  className?: string;
  setExpansionAnimationFinished?: (bool: boolean) => void;
  children: JSX.Element;
};

const ExpansionWrapper = ({
  key,
  className,
  setExpansionAnimationFinished,
  children,
}: ExpansionWrapperProps) => {
  useEffect(() => {
    setExpansionAnimationFinished && setExpansionAnimationFinished(false);
  }, []);

  return (
    <motion.div
      key={key}
      className={className}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.1 } }}
      transition={{ duration: 0.1 }}
      onAnimationComplete={() =>
        setExpansionAnimationFinished && setExpansionAnimationFinished(true)
      }
    >
      {children}
    </motion.div>
  );
};

export default ExpansionWrapper;
