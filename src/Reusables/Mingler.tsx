import { useState } from 'react';
import { motion } from 'framer-motion';
import { minglerStack, minglerTimelineEvents, whileTap } from '../Globals';
import { Skills } from './Skills';
import Timeline from './Timeline';
import Textbox from './Textbox';
import '../styles/Mingler.css';

const Mingler = () => {
  const [hovered, setHovered] = useState(0);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  return (
    <motion.div
      whileInView={{
        opacity: 1,
      }}
      className='mingler'
    >
      <div className='mingler-prototype-and-header-container'>
        <div className='mingler-header'>
          <motion.a
            style={{ display: 'flex' }} // Fixes z-index issue for some reason
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.15, duration: 0.55 },
            }}
            className='no-select'
            href='www.google.com'
            target='_blank'
          >
            <motion.h1
              whileHover={{ opacity: 0.7, scale: 0.992 }}
              transition={{ duration: 0.15 }}
            >
              Mingler
            </motion.h1>
          </motion.a>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.35 } }}
            className='header-skills'
          >
            <Skills tooltips skills={minglerStack} vertical={false} />
          </motion.div>
        </div>
        <motion.div
          style={{ backgroundColor: 'black', borderRadius: 18 }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.45, duration: 1 },
          }}
          viewport={{ once: true }}
        >
          <div className='figma-prototype-container'>
            <iframe
              height='100%'
              src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fclill097ZPLRtPuTU4cfUo%2FSharehub-4%3Fpage-id%3D0%253A1%26node-id%3D0%253A1%26viewport%3D49%252C308%252C0.06%26scaling%3Dscale-down-width%26starting-point-node-id%3D339%253A213&hide-ui=1'
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.25 }}
        className='mingler-description no-select'
      >
        Real-time chat app with activity sharing
      </motion.h2>
      <Timeline
        timelineEvents={minglerTimelineEvents}
        hovered={hovered}
        setHovered={setHovered}
      />

      <Textbox
        timelineEvents={minglerTimelineEvents}
        hasBeenViewed={hasBeenViewed}
        setHasBeenViewed={setHasBeenViewed}
        hovered={hovered}
      />
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.75, duration: 1.25 } }}
        className='come-mingle no-select'
        href='www.google.com'
        target='_blank'
      >
        <motion.h4
          whileTap={whileTap}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.1 }}
        >
          come mingle
        </motion.h4>
      </motion.a>
      {/* <>
        An overly ambitious chat app that lets you share your computer
        activities with your friends in real time. <br />
        <br /> Try the prototype or get the <mark>beta</mark>
      </> */}
      <div className='figma-prototype-container'>
        {/* <iframe
              height='100%'
              src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fclill097ZPLRtPuTU4cfUo%2FSharehub-4%3Fpage-id%3D0%253A1%26node-id%3D0%253A1%26viewport%3D49%252C308%252C0.06%26scaling%3Dscale-down-width%26starting-point-node-id%3D339%253A213&hide-ui=1'
              allowFullScreen
            ></iframe> */}
      </div>
    </motion.div>
  );
};

export default Mingler;
