import { motion } from 'framer-motion';

type ExpansionWrapperProps = {
  key: number;
  className?: string;
  children: JSX.Element;
};

const ExpansionWrapper = ({
  key,
  className,
  children,
}: ExpansionWrapperProps) => (
  <motion.div
    key={key}
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
  >
    {children}
  </motion.div>
);

export default ExpansionWrapper;
