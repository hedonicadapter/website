import { motion } from 'framer-motion';
import { useEffect } from 'react';

type ExpansionWrapperProps = {
  className?: string;
  children: JSX.Element;
};

const ExpansionWrapper = ({ className, children }: ExpansionWrapperProps) => {
  return <motion.div className={className}>{children}</motion.div>;
};

export default ExpansionWrapper;
