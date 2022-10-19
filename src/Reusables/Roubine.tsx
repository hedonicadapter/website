import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { Skills } from './Skills';
import { roubineStack } from '../Globals';
import { Card } from './Card';
import '../styles/Roubine.css';

import Description from './Description';
import SmallArrow from './SmallArrow';
import ExpansionWrapper from './ExpansionWrapper';
import Phone from './Phone';

const Roubine = () => {
  const [notExpandedHovered, setNotExpandedHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [phoneHovered, setPhoneHovered] = useState(0);

  const animationController = useAnimationControls();
  const animationControllerForHeaderArrow = useAnimationControls();

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
                style={{ width: 85 }}
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
        <div>
          <motion.div
            // animate={expanded ? { x: -100 } : { x: 0 }}
            // transition={{ duration: 0.25 }}
            onHoverStart={() => setNotExpandedHovered(true)}
            onHoverEnd={() => setNotExpandedHovered(false)}
            onClick={() => setExpanded(true)}
            className='phone-container'
          >
            <Phone expanded={expanded} />
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
                <Phone expanded={expanded} />
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
