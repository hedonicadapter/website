import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { Skills } from './Skills';
import { roubineStack } from '../Globals';
import { Card } from './Card';
import '../styles/Roubine.css';

import iphonex from '../assets/iphonex.png';
import roubineDemo from '../assets/oldroubineDemo.mp4';
import phoneFramesLeftToRight from '../assets/framesLeftToRight.webp';
import phoneFramesRightToLeft from '../assets/framesRightToLeft.webp';
import phoneFrameLeft from '../assets/frameLeft.webp';
import phoneFrameRight from '../assets/frameRight.webp';
import Description from './Description';
import SmallArrow from './SmallArrow';
import ExpansionWrapper from './ExpansionWrapper';
import Phone from './Phone';

type PhoneProps = { hovered?: boolean; direction?: string };
const Phoner = ({ hovered = true, direction }: PhoneProps) => {
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
        perspective: 700,
      }}
    >
      <img
        style={{
          gridRowStart: 1,
          gridColumnStart: 1,
          zIndex: 2,
          pointerEvents: 'none',
          transform: !direction
            ? ''
            : direction === 'left'
            ? 'rotateY(-20deg) rotateX(5deg)'
            : 'rotateY(20deg) rotateX(5deg)',
        }}
        className='phone'
        width='105%'
        height='100%'
        src={iphonex}
      />
      <video
        ref={videoRef}
        autoPlay={true}
        muted
        style={{
          transform: !direction
            ? ''
            : direction === 'left'
            ? 'rotateY(-20deg) rotateX(5deg)'
            : 'rotateY(20deg) rotateX(5deg)',
          gridRowStart: 1,
          gridColumnStart: 1,
          marginTop: 14,
        }}
        src={roubineDemo}
        width='105%'
        height='93%'
      />
    </div>
  );
};

const Roubine = () => {
  const [notExpandedHovered, setNotExpandedHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [play, setPlay] = useState(true);
  const [src, setSrc] = useState('');
  const [loaded, setLoaded] = useState(false);

  const [phoneHovered, setPhoneHovered] = useState(0);

  const animationController = useAnimationControls();
  const animationControllerForHeaderArrow = useAnimationControls();

  const phoneFrameRef = useRef<HTMLImageElement>(null);

  const onLoad = () => setLoaded(true);

  useEffect(() => {
    if (phoneFrameRef.current && phoneFrameRef.current.complete) {
      onLoad();
    }
  });

  const arrowOnClickHandler = async () => {
    animationController.start({
      width: 0,
      transition: {
        duration: 0.5,
        ease: [0.1, 0.98, 0, 0.99],
        // origin: 1,
      },
    });

    setExpanded(false);
  };

  useEffect(() => {
    setPlay(true);
  }, [expanded]);

  useEffect(() => {
    if (!loaded) return;

    console.log(
      play
        ? expanded
          ? 'phoneFramesLeftToRight'
          : 'phoneFramesRightToLeft'
        : expanded
        ? 'phoneFrameRight'
        : 'phoneFrameLeft'
    );

    if (play) {
      if (expanded) {
        if (src !== phoneFramesLeftToRight) {
          setSrc(phoneFramesLeftToRight);
          setLoaded(false);
        }
      } else if (!expanded) {
        if (src !== phoneFramesRightToLeft) {
          setSrc(phoneFramesRightToLeft);
          setLoaded(false);
        }
      }
    } else {
      if (expanded) {
        if (src !== phoneFrameRight) {
          setSrc(phoneFrameRight);
          setLoaded(false);
        }
      } else if (!expanded) {
        if (src !== phoneFrameLeft) {
          setSrc(phoneFrameLeft);
          setLoaded(false);
        }
      }
    }

    // setSrc(
    //   play
    //     ? expanded
    //       ? phoneFramesLeftToRight
    //       : phoneFramesRightToLeft
    //     : expanded
    //     ? phoneFrameRight
    //     : phoneFrameLeft
    // );
    // setLoaded(false);
  }, [loaded, play, expanded]);

  useEffect(() => {
    if (!play) return;

    const playFrameTimeout = setTimeout(() => setPlay(false), 770);

    return () => clearTimeout(playFrameTimeout);
  }, [play]);

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
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ width: 90 }}
                onClick={() => arrowOnClickHandler()}
              >
                <SmallArrow
                  hovered={notExpandedHovered}
                  expanded={expanded}
                  animationController={animationControllerForHeaderArrow}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div style={{ position: 'relative' }}>
          <Phone />
          <motion.div
            // initial={'hide'}
            // animate={expanded ? 'hide' : 'show'}
            // exit={'hide'}
            // variants={{
            //   show: { opacity: 1 },
            //   hide: { opacity: 0 },
            // }}
            transition={{ duration: 0.15 }}
            onHoverStart={() => setNotExpandedHovered(true)}
            onHoverEnd={() => setNotExpandedHovered(false)}
            onClick={() => setExpanded(true)}
            className='phone-container'
          >
            <motion.img
              // autoPlay={true}
              // muted
              // style={{
              //   gridRowStart: 1,
              //   gridColumnStart: 1,
              //   marginTop: 14,
              // }}
              alt='a phone showing a Roubine app demo'
              initial={'faceLeft'}
              animate={expanded ? 'faceRight' : 'faceLeft'}
              exit={'faceLeft'}
              variants={{
                faceLeft: {
                  rotate: 3,
                  // scale: 1,
                  x: 0,
                  y: 0,
                  width: 'auto',
                },
                faceRight: {
                  rotate: -6,
                  // scale: 1,
                  x: '-21vw',
                  y: 130,
                  width: 300,
                },
              }}
              transition={{ duration: 0.77 }}
              onLoad={onLoad}
              ref={phoneFrameRef}
              src={src}
              width='70%'
            />
          </motion.div>
          <AnimatePresence>
            {expanded && (
              <div
                style={{
                  width: '18vw',
                  marginRight: 80,
                  marginTop: 180,
                  position: 'absolute',
                  top: 0,
                  right: 0,
                }}
              >
                <Card
                  inverted
                  title='Create good routines with psychology'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi a nunc maximus consequat. Nullam lobortis, nibh nec maximus congue, sem risus interdum nunc, non egestas est leo sed tellus. '
                />
              </div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {expanded && (
            <div className='row'>
              <Card
                inverted
                title='Create good routines with psychology'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi a nunc maximus consequat. Nullam lobortis, nibh nec maximus congue, sem risus interdum nunc, non egestas est leo sed tellus. '
              />
              <motion.div
                // initial={'hide'}
                // animate={expanded ? 'hide' : 'show'}
                // exit={'hide'}
                // variants={{
                //   show: { opacity: 1 },
                //   hide: { opacity: 0 },
                // }}
                transition={{ duration: 0.15 }}
                onHoverStart={() => setNotExpandedHovered(true)}
                onHoverEnd={() => setNotExpandedHovered(false)}
                onClick={() => setExpanded(true)}
                className='phone-container'
              >
                <motion.img
                  alt='a phone showing a Roubine app demo'
                  transition={{ duration: 0.77 }}
                  src={phoneFrameLeft}
                  width='40%'
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {!expanded && (
            <ExpansionWrapper key={0}>
              <div className='description-and-phone-container'>
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
                    animationController={animationController}
                  />
                </motion.div>
              </div>
            </ExpansionWrapper>
          )}
        </AnimatePresence>

        {/* <AnimatePresence exitBeforeEnter>
          {!expanded ? (
            <ExpansionWrapper key={0}>
              <div className='description-and-phone-container'>
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
                    animationController={animationController}
                  />
                </motion.div>
              </div>
            </ExpansionWrapper>
          )
          
          : (
            <ExpansionWrapper key={1} className='phones'>
              <motion.div
                initial={'hide'}
                animate={expanded ? 'show' : 'show'}
                exit={'hide'}
                variants={{
                  show: { opacity: 1 },
                  hide: { opacity: 0 },
                }}
                transition={{ duration: 0.15, delay: 0.15 }}
              >
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
                    gap: 30,
                    justifyItems: 'flex-start',
                    paddingRight: 40,
                    marginLeft: 55,
                  }}
                >
                  <div>
                    <Phoner hovered={phoneHovered === 0} direction='right' />
                  </div>

                  <div style={{ width: '50vw', marginRight: 50 }}>
                    <Card
                      inverted
                      title='Create good routines with psychology'
                      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi a nunc maximus consequat. Nullam lobortis, nibh nec maximus congue, sem risus interdum nunc, non egestas est leo sed tellus. '
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
                    gap: 35,
                    marginRight: 105,
                    paddingLeft: 75,
                  }}
                >
                  <div
                    style={{
                      textAlign: 'right',
                      width: '45vw',
                      marginTop: -5,
                    }}
                  >
                    <Card
                      title='Create good routines with psychology'
                      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi a nunc maximus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />
                  </div>
                  <div style={{ marginTop: '-16vw' }}>
                    <Phoner hovered={phoneHovered === 1} direction='left' />
                  </div>
                </motion.div>
              </motion.div>
            </ExpansionWrapper>
          )}
        </AnimatePresence> */}
      </div>
    </motion.div>
  );
};

export default Roubine;
