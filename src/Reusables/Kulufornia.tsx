import React, { useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { kuluforniaStack } from '../Globals';
import { Skills } from './Skills';
import '../styles/Kulufornia.css';
import Description from './Description';

import kuluforniaThumbnail from '../assets/kuluforniaThumbnail.webp';

const kuluforniaLinks = [
  {
    title: 'Website',
    url: 'https://kulufornia-h8a8.vercel.app/',
  },
];

const KuluforniaTitle = ({
  setHovered,
}: {
  setHovered: (bool: boolean) => void;
  setExpanded?: () => void;
}) => {
  return (
    <motion.a
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      href={kuluforniaLinks[0].url}
      rel='external nofollow noopener'
      target='_blank'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.15, duration: 0.55 },
      }}
      className='no-select'
    >
      <h1>Kulufornia</h1>
    </motion.a>
  );
};

const KuluforniaPrototype =
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fclill097ZPLRtPuTU4cfUo%2FSharehub-4%3Fpage-id%3D0%253A1%26node-id%3D0%253A1%26viewport%3D49%252C308%252C0.06%26scaling%3Dscale-down-width%26starting-point-node-id%3D339%253A213&hide-ui=1';
const productionReplica =
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJA02Xgw9evpcsj6PnSjkCY%2FUntitled%3Fnode-id%3D1%253A145%26scaling%3Dscale-down-width%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A145&hide-ui=1';

const Kulufornia = () => {
  const [notExpandedHovered, setNotExpandedHovered] = useState(false);

  const animationController = useAnimationControls();

  return (
    <motion.div
      initial={{ opacity: 0.15, filter: 'blur(2px) grayscale(70%)' }}
      exit={{ opacity: 0.15, filter: 'blur(2px) grayscale(70%)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px) grayscale(0%)' }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.15 }}
      className='kulufornia'
    >
      <div className='kulufornia-prototype-and-header-container'>
        <div className='kulufornia-header'>
          <KuluforniaTitle setHovered={setNotExpandedHovered} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.35 } }}
            className='header-skills'
          >
            <Skills tooltips skills={kuluforniaStack} vertical={false} />
          </motion.div>
        </div>
        <div className='no-select'>
          <motion.div
            style={{
              zIndex: 10,
            }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.45, duration: 1 },
            }}
            viewport={{ once: true }}
          >
            <div className='figma-prototype-container '>
              <div className='figma-prototype-bg clicker'>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.35 } }}
                  src={kuluforniaThumbnail}
                  style={{ width: '100%', height: '100%' }}
                  alt='Kulufornia'
                  loading='lazy'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        key={0}
        onClick={() => window.open(kuluforniaLinks[0].url, '_blank')?.focus()}
        className='kuluforniaDescription'
      >
        <Description
          links={kuluforniaLinks}
          descriptionText='Full stack solution for a car dealership.'
          hovered={notExpandedHovered}
          setHovered={setNotExpandedHovered}
          expanded={false}
          animationController={animationController}
        />
      </motion.div>
    </motion.div>
  );
};

export default React.memo(Kulufornia);
