import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import { roubineStack, minglerStack, whileTap } from '../Globals';
import { SlideWrapper } from '../Reusables/SlideWrapper';
import { Card } from '../Reusables/Card';
import { Skills } from '../Reusables/Skills';
import roubineDemo from '../assets/roubineDemo.mp4';

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
    <li>
      <motion.div className='column no-select timeline-dot-container'>
        <motion.div
          className='timeline-dot'
          animate={
            hovered
              ? {
                  width: 20,
                  height: 20,
                  marginTop: -2,
                }
              : {
                  width: 14,
                  height: 14,
                  marginTop: 1,
                }
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
          {hovered && (
            <motion.div
              layoutId='outline'
              transition={{ type: 'spring', stiffness: 1000, damping: 70 }}
              className='text-box-triangle'
            />
          )}
        </motion.div>
      </motion.div>
    </li>
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
      <ul>
        {timelineEvents.map((timelineEvent, index) => (
          <motion.div
            key={index}
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
              index={index}
              hovered={hovered === index}
            />
          </motion.div>
        ))}
      </ul>
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
                    transition: { ease: 'linear', delay: 1.2, duration: 0.45 },
                  }
                : { opacity: 1, transition: { duration: 0.1 } }
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
                    transition: { ease: 'linear', delay: 1.3, duration: 1.5 },
                  }
                : { opacity: 1, transition: { duration: 0.15 } }
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

const headerHoverAnimation = { opacity: 0.7, scale: 0.992 };

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
              whileHover={headerHoverAnimation}
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
        className='mingler-subHeader no-select'
      >
        Real-time chat app with activity sharing
      </motion.h2>
      <Timeline hovered={hovered} setHovered={setHovered} />

      <TextBox
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

const Phone = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        justifyItems: 'center',
      }}
    >
      <img
        style={{
          gridRowStart: 1,
          gridColumnStart: 1,
          zIndex: 2,
          pointerEvents: 'none',
        }}
        className='phone'
        width='100%'
        height='84%'
        src={iphonex}
      />
      <video
        autoplay='autoplay'
        muted
        style={{
          gridRowStart: 1,
          gridColumnStart: 1,
          marginTop: 12,
        }}
        src={roubineDemo}
        width='100%'
        height='78%'
        controls
      ></video>
    </div>
  );
};

const Roubine = () => {
  const [hovered, setHovered] = useState(0);

  return (
    <motion.div whileInView={{ opacity: 1 }} className='roubine'>
      <div className='roubine-prototype-and-header-container'>
        <div className='roubine-header'>
          <div className='header-skills roubine-header-skills'>
            <Skills vertical tooltips skills={roubineStack} />
          </div>
          <motion.div
            whileHover={headerHoverAnimation}
            transition={{ duration: 0.15 }}
          >
            <motion.a
              className='no-select'
              href='www.google.com'
              target='_blank'
            >
              <motion.h1>Roubine</motion.h1>
            </motion.a>
          </motion.div>
        </div>

        <div className='phones'>
          <motion.div
            className='row'
            onMouseEnter={() => setHovered(0)}
            initial={'show'}
            animate={hovered ? 'hide' : 'show'}
            variants={{
              show: { scale: 1, x: 5, y: 0, opacity: 1, filter: 'blur(0)' },
              hide: {
                scale: 0.95,
                x: -0,
                y: -10,
                opacity: 0.6,
                filter: 'blur(2px)',
              },
            }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
            style={{
              gap: 20,
              justifyItems: 'flex-start',
              marginRight: 0,
              paddingRight: 40,
              marginLeft: 35,
            }}
          >
            <div>
              <Phone />
            </div>

            <div style={{ width: '55vw', marginRight: 0 }}>
              <Card
                inverted
                title='Create good routines with psychology'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi a nunc maximus consequat. Nullam lobortis, nibh nec maximus congue, sem risus interdum nunc, non egestas est leo sed tellus. Morbi consectetur leo quis velit commodo, sed feugiat quam eleifend.'
              ></Card>
            </div>
          </motion.div>
          <motion.div
            onMouseEnter={() => setHovered(1)}
            initial={'hide'}
            animate={hovered ? 'show' : 'hide'}
            variants={{
              show: { scale: 1, x: -5, y: 20, opacity: 1, filter: 'blur(0)' },
              hide: {
                scale: 0.95,
                x: 0,
                y: 0,
                opacity: 0.6,
                filter: 'blur(2px)',
              },
            }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
            className='row'
            style={{
              gap: 25,
              marginLeft: 25,
              marginRight: 65,
              paddingLeft: 20,
            }}
          >
            <div
              style={{
                textAlign: 'right',
                width: '45vw',
                marginTop: -75,
              }}
            >
              <Card
                title='Create good routines with psychology'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi a nunc maximus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              ></Card>
            </div>
            <div style={{ marginTop: -225 }}>
              <Phone />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSlide = () => {
  return (
    <SlideWrapper>
      <div id='ele' className='column project-slide'>
        <Mingler />
        <Roubine />
        <h2 className='header-menu-content-header'></h2>
      </div>
    </SlideWrapper>
  );
};
