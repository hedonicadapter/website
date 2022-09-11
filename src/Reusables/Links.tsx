import { motion } from 'framer-motion';

type LinksProps = {
  align: string;
  links: Array<{
    title: string;
    url: string;
  }>;
};
const Links = ({ align, links }: LinksProps) => (
  <div className={`row no-select links ${align}`}>
    {links.map((linkObject, index: number) => (
      <motion.a
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.05 * index } }}
        whileHover={{ color: 'white', textDecoration: 'underline' }}
        transition={{ duration: 0.1 }}
        href={linkObject.url}
        target='_blank'
        rel='noreferrer'
        onClick={(e) => e.stopPropagation()}
      >
        {linkObject.title}
      </motion.a>
    ))}
  </div>
);

export default Links;
