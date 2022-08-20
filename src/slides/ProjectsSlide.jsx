import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { roubineStack, minglerStack, whileTap } from '../Globals';
import { SlideWrapper } from '../Reusables/SlideWrapper';
import { Card } from '../Reusables/Card';
import { Skills } from '../Reusables/Skills';

import iphonex from '../assets/iphonex.png';

const timelineEvents = [
  {
    title: 'prototype',
    subTitle: 'A year ago',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nulla a purus vulputate cursus. Vestibulum at eros condimentum, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nulla a purus vulputate cursus. Vestibulum at eros condimentum, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nulla a purus vulputate cursus. Vestibulum at eros condimentum, dictum dui sit amet, porta augue. Nam semper, mauris vel placerat aliquam, tortor nisi facilisis urna, vitae dictum urna odio et urna. Suspendisse potenti. Cras varius, tortor et maximus mollis, dui enim elementum odio, sed hendrerit risus leo at felis. Nam mattis porttitor orci vel vestibulum. ',
  },
  { title: 'prototype', subTitle: 'A year ago', text: 'busting' },
  { title: 'prototype', subTitle: 'A year ago', text: 'busting' },
  { title: 'prototype', subTitle: 'A year ago', text: 'busting' },
  { title: 'prototype', subTitle: 'A year ago', text: 'busting' },
  { title: 'production', subTitle: 'Today', text: 'busting' },
];

const Dots = ({ timelineEvent, hovered }) => {
  return (
    <motion.div className='column no-select timeline-dot-container'>
      <motion.div
        className='timeline-dot'
        animate={
          hovered
            ? { width: 20, backgroundColor: 'white', height: 20, marginTop: -2 }
            : { width: 14, backgroundColor: 'white', height: 14, marginTop: 1 }
        }
      />
      <motion.div
        animate={
          hovered
            ? { fontSize: '1.2em', color: 'white', marginTop: -4 }
            : { fontSize: '1.1em', opacity: 0 }
        }
        transition={{ duration: 0.15 }}
      >
        {timelineEvent.title}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.75 }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div>
              <div className='text-box-triangle' />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Timeline = ({ hovered, setHovered }) => {
  const dotsContainerVariants = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.25,
        staggerChildren: 0.15,
      },
    },
  };

  const dotVariants = {
    hide: {
      opacity: 0,
      scale: 0,
      transition: { type: 'spring', mass: 0.7, duration: 0.15 },
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', mass: 0.7, duration: 0.15 },
    },
  };

  return (
    <motion.div
      variants={dotsContainerVariants}
      initial='hide'
      animate='show'
      className='row timeline'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { ease: 'linear', delay: 0.25, duration: 0.45 },
        }}
        className='timeline-dots-line'
      ></motion.div>
      {timelineEvents.map((timelineEvent, index) => (
        <motion.div
          variants={dotVariants}
          style={{ cursor: 'pointer' }}
          onHoverStart={() => setHovered(index)}
        >
          {/* <div
            className='timeline-dots-line-container'
            style={
              // First dot
              index === 0
                ? { width: '30%', marginLeft: 'auto' }
                : // Last dot
                index === timelineEvents.length - 1
                ? { width: '30%', marginRight: 'auto' }
                : { width: '100%' }
            }
          >
            <div className='timeline-dots-line' />
          </div> */}
          <Dots
            timelineEvent={timelineEvent}
            key={index}
            index={index}
            hovered={hovered === index}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const TextBox = ({ hasBeenViewed, setHasBeenViewed, hovered }) => {
  let hoveredEvent = timelineEvents[hovered];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.35, duration: 0.75 }}
      className='text-box'
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={hovered}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={
              !hasBeenViewed
                ? {
                    opacity: 1,
                    transition: { ease: 'linear', delay: 1, duration: 0.45 },
                  }
                : { opacity: 1, transition: 0.15 }
            }
          >
            {hoveredEvent.subTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={
              !hasBeenViewed
                ? {
                    opacity: 1,
                    transition: { ease: 'linear', delay: 1.2, duration: 1.5 },
                  }
                : { opacity: 1, transition: 0.15 }
            }
            onAnimationComplete={() => setHasBeenViewed(true)}
          >
            {hoveredEvent.text}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

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
      <div className='figma-prototype-and-header-container'>
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
            <h1>Mingler</h1>
          </motion.a>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.35 } }}
            className='mingler-header-skills'
          >
            <Skills skills={minglerStack} />
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
      <Timeline hovered={hovered} setHovered={setHovered} />
      <TextBox
        hasBeenViewed={hasBeenViewed}
        setHasBeenViewed={setHasBeenViewed}
        hovered={hovered}
      />
      <motion.a
        whileTap={whileTap}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.75, duration: 1.25 }}
        className='come-mingle no-select'
        href='www.google.com'
        target='_blank'
      >
        <h4>come mingle</h4>
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

const Roubine = () => {
  return (
    <motion.div whileInView={{ opacity: 1 }} className='roubine'>
      <div className='figma-prototype-and-header-container'>
        <a className='no-select' href='www.google.com' target='_blank'>
          <h1>Roubine</h1>
        </a>
        <div
          className='row'
          style={{ gap: 20, justifyContent: 'space-evenly', paddingTop: 20 }}
        >
          <img className='phone' width='40%' src={iphonex} />

          <Card
            inverted
            title='Create good routines with psychology'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi a nunc maximus consequat. Nullam lobortis, nibh nec maximus congue, sem risus interdum nunc, non egestas est leo sed tellus. Morbi consectetur leo quis velit commodo, sed feugiat quam eleifend.'
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Skills skills={roubineStack} />
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSlide = () => {
  return (
    <SlideWrapper>
      <div className='column project-slide'>
        <Mingler />
        <Roubine />
        <h2 className='header-menu-content-header'></h2>
      </div>
    </SlideWrapper>
  );
};
