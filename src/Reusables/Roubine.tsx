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

const HoverWrapper = ({
  hovered,
  setHovered,
  children,
}: {
  hovered: Boolean;
  setHovered: () => void;
  children: JSX.Element;
}) => (
  <motion.div
    className='row'
    onMouseEnter={() => setHovered()}
    initial={'hide'}
    animate={hovered ? 'show' : 'hide'}
    variants={{
      show: {
        scale: 1,
        opacity: 1,
        filter: 'blur(0) grayscale(0%)',
      },
      hide: {
        scale: 0.99,
        opacity: 0.86,
        filter: 'blur(2px) grayscale(20%)',
      },
    }}
    transition={{ duration: 0.15 }}
  >
    {children}
  </motion.div>
);

const RoubineCard = ({ secondPhone = false }: { secondPhone?: Boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.35 } }}
    exit={{ opacity: 0, transition: { delay: 0 } }}
    transition={{ duration: 0.15 }}
    style={{
      borderRadius: 22,
      border: '1px solid rgba(62,62,62,0.22)',
      width: '100%',
      height: '10vw',
      paddingBlock: 24,
      paddingInline: 30,
      backgroundColor: '#212121',
      color: 'var(--off-white)',
      fontSize: '1.25em',
      fontFamily: 'Inter-Light',
      overflowY: 'scroll',
      WebkitBoxShadow: secondPhone
        ? '7px 20px 23px -16px rgba(0,0,0,0.26)'
        : '-7px 20px 23px -16px rgba(0,0,0,0.26)',
      boxShadow: secondPhone
        ? '7px 20px 23px -16px rgba(0,0,0,0.26)'
        : '-7px 20px 23px -16px rgba(0,0,0,0.26)',
    }}
  >
    <p style={{ marginBottom: 14 }}>Create better routines with psychology</p>
    <ul
      style={{
        listStyle: 'disc inside',
        flexDirection: 'column',
        fontSize: '0.9em',
      }}
    >
      <li style={{ marginBlock: 8 }}>don't be a busta</li>
      <li style={{ marginBlock: 8 }}>secure the bag</li>
      <li style={{ marginBlock: 8 }}>check gmail</li>
    </ul>
  </motion.div>
);

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

  useEffect(() => {
    //so that if you close expansion when the second phone is hovered, the filters dont persist
    if (!expanded) setPhoneHovered(0);
  }, [expanded]);

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
        <div onClick={() => setExpanded(!expanded)}>
          <HoverWrapper
            hovered={phoneHovered === 0}
            setHovered={() => setPhoneHovered(0)}
          >
            <>
              <motion.div
                onHoverStart={() => setNotExpandedHovered(true)}
                onHoverEnd={() => setNotExpandedHovered(false)}
                className='first-phone-container'
              >
                <Phone expanded={expanded} />
              </motion.div>
              <AnimatePresence>
                {expanded && (
                  <div className='first-card-container'>
                    <RoubineCard />
                  </div>
                )}
              </AnimatePresence>
            </>
          </HoverWrapper>
        </div>

        <motion.div
          animate={expanded ? 'show' : 'hide'}
          variants={{
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.35, delay: 0.15 },
            },
            hide: { opacity: 0, x: 40, transition: { duration: 0.25 } },
          }}
          onClick={() => setExpanded(false)}
          style={{ cursor: expanded ? 'pointer' : 'auto' }}
        >
          <HoverWrapper
            hovered={phoneHovered === 1}
            setHovered={() => expanded && setPhoneHovered(1)}
          >
            <>
              <div className='second-card-container'>
                <RoubineCard secondPhone={true} />
              </div>
              <motion.div
                onHoverStart={() => setNotExpandedHovered(true)}
                onHoverEnd={() => setNotExpandedHovered(false)}
                className='second-phone-container'
              >
                <Phone expanded={false} secondPhone={true} />
              </motion.div>
            </>
          </HoverWrapper>
        </motion.div>

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
      </div>
    </motion.div>
  );
};

export default Roubine;
