import { motion } from 'framer-motion';

type TooltipProps = {
  text: string;
  show: boolean;
  vertical?: boolean;
};

const Tooltip = ({ text, show, vertical }: TooltipProps) => {
  return (
    <motion.div
      animate={show ? 'show' : 'hide'}
      initial={'hide'}
      variants={{
        show: { opacity: 1 },
        hide: { opacity: 0 },
      }}
      transition={{ duration: 0.1 }}
      className={vertical ? 'tooltip-vertical no-select' : 'tooltip no-select'}
    >
      {text}
    </motion.div>
  );
};

export default Tooltip;
