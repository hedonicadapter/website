import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { Skills } from './Skills';
import { roubineStack } from '../Globals';
import { Card } from './Card';
import '../styles/Roubine.css';

import iphonex from '../assets/iphonex.png';
import roubineDemo from '../assets/roubineDemo.mp4';
import Description from './Description';
import SmallArrow from './SmallArrow';
import ExpansionWrapper from './ExpansionWrapper';

type PhoneProps = { hovered?: boolean };
const Phone = ({ hovered = true }: PhoneProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play/pause depending on hovered
  useEffect(() => {
    if (hovered) {
      videoRef.current && videoRef.current.play();
      return;
    }
    if (!hovered) videoRef.current && videoRef.current.pause();
  }, [hovered]);

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
        height='95%'
        src={iphonex}
      />
      <video
        ref={videoRef}
        autoPlay={true}
        muted
        style={{
          gridRowStart: 1,
          gridColumnStart: 1,
          marginTop: 14,
        }}
        src={roubineDemo}
        width='100%'
        height='88%'
        controls
      />
    </div>
  );
};

const Roubine = () => {
  const [notExpandedHovered, setNotExpandedHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [phoneHovered, setPhoneHovered] = useState(0);

  const arrowAnimationController = useAnimationControls();

  return (
    <motion.div whileInView={{ opacity: 1 }} className='roubine'>
      <div className='roubine-prototype-and-header-container'>
        <div className='row roubine-header-and-arrow-container'>
          <div className='roubine-header'>
            <div className='header-skills roubine-header-skills'>
              <Skills vertical tooltips skills={roubineStack} />
            </div>
            <motion.div
              onHoverStart={() => setNotExpandedHovered(true)}
              onHoverEnd={() => setNotExpandedHovered(false)}
              transition={{ duration: 0.15 }}
            >
              <a
                className='no-select'
                onClick={(evt) => {
                  evt.stopPropagation();
                  setExpanded(!expanded);
                }}
              >
                <h1>Roubine</h1>
              </a>
            </motion.div>
          </div>
          <div style={{ width: 110 }}>
            <SmallArrow
              expandOnClick={true}
              hovered={notExpandedHovered}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          </div>
        </div>
        <AnimatePresence exitBeforeEnter>
          {!expanded ? (
            <ExpansionWrapper
              key={0}
              className='row description-and-phone-container'
            >
              <>
                <motion.div
                  onHoverStart={() => setNotExpandedHovered(true)}
                  onHoverEnd={() => setNotExpandedHovered(false)}
                >
                  <Description
                    links={[{ title: 'github', url: 'www.google.com' }]}
                    descriptionText='Create good routines with psychology.'
                    arrowUnderneath={true}
                    hovered={notExpandedHovered}
                    setHovered={setNotExpandedHovered}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    arrowAnimationController={arrowAnimationController}
                  />
                </motion.div>
                <motion.div
                  onHoverStart={() => setNotExpandedHovered(true)}
                  onHoverEnd={() => setNotExpandedHovered(false)}
                  onClick={() => setExpanded(true)}
                  className='phone-container'
                >
                  <Phone />
                </motion.div>
              </>
            </ExpansionWrapper>
          ) : (
            <ExpansionWrapper key={1} className='phones'>
              <>
                <motion.div
                  className='row'
                  onMouseEnter={() => setPhoneHovered(0)}
                  initial={'show'}
                  animate={phoneHovered ? 'hide' : 'show'}
                  variants={{
                    show: {
                      scale: 1,
                      x: 5,
                      y: 0,
                      opacity: 1,
                      filter: 'blur(0)',
                    },
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
                    <Phone hovered={phoneHovered === 0} />
                  </div>

                  <div style={{ width: '55vw', marginRight: 0 }}>
                    <Card
                      inverted
                      title='Create good routines with psychology'
                      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi a nunc maximus consequat. Nullam lobortis, nibh nec maximus congue, sem risus interdum nunc, non egestas est leo sed tellus. Morbi consectetur leo quis velit commodo, sed feugiat quam eleifend.'
                    />
                  </div>
                </motion.div>
                <motion.div
                  onMouseEnter={() => setPhoneHovered(1)}
                  initial={'hide'}
                  animate={phoneHovered ? 'show' : 'hide'}
                  variants={{
                    show: {
                      scale: 1,
                      x: -5,
                      y: 20,
                      opacity: 1,
                      filter: 'blur(0)',
                    },
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
                    />
                  </div>
                  <div style={{ marginTop: -225 }}>
                    <Phone hovered={phoneHovered === 1} />
                  </div>
                </motion.div>
              </>
            </ExpansionWrapper>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Roubine;
