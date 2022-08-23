import { useState } from 'react';
import { motion } from 'framer-motion';
import { Skills } from './Skills';
import { roubineStack } from '../Globals';
import { Card } from './Card';
import '../styles/Roubine.css';

import iphonex from '../assets/iphonex.png';
import roubineDemo from '../assets/roubineDemo.mp4';

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
        autoPlay={true}
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
            whileHover={{ opacity: 0.7, scale: 0.992 }}
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

export default Roubine;
