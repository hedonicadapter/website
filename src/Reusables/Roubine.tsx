import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { Skills } from './Skills';
import { roubineStack } from '../Globals';
import '../styles/Roubine.css';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';

import Description from './Description';
import SmallArrow, { arrowOnClickHandler } from './SmallArrow';
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
    animate={isMobile ? 'show' : hovered ? 'show' : 'hide'}
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

const RoubineCard = ({
  title,
  body,
  secondPhone = false,
}: {
  title: string;
  body: string | JSX.Element;
  secondPhone?: Boolean;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.35 } }}
    exit={{ opacity: 0, transition: { delay: 0 } }}
    transition={{ duration: 0.15 }}
    className={`roubine-card ${secondPhone ? ' second' : ' first'}`}
  >
    <h3>{title}</h3>
    <p>{body}</p>
    <img
      src={secondPhone ? card2 : card1}
      alt='Graphic of a mascot called Ruby from Roubine'
    />
  </motion.div>
);

const Roubine = () => {
  const [notExpandedHovered, setNotExpandedHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [firstPhonePlay, setFirstPhonePlay] = useState(false);
  const [secondPhonePlay, setSecondPhonePlay] = useState(false);

  const [phoneHovered, setPhoneHovered] = useState(0);

  const animationController = useAnimationControls();
  // Separate controller so the big arrow doesn't grow right before fading out just because the small arrow grows
  const smallArrowAnimationController = useAnimationControls();

  useEffect(() => {
    //so that if you close expansion when the second phone is hovered, the filters dont persist
    if (!expanded) setPhoneHovered(0);
  }, [expanded]);

  useEffect(() => {
    if (phoneHovered) {
      // phoneHovered === 1 === true === second phone is hovered
      setFirstPhonePlay(false);
      setSecondPhonePlay(true);
    } else {
      // phoneHovered === 0 === false === first phone is hovered
      setFirstPhonePlay(true);
      setSecondPhonePlay(false);
    }
  }, [phoneHovered]);

  useEffect(() => {
    console.log({ firstPhonePlay });
    console.log({ secondPhonePlay });
  }, [firstPhonePlay, secondPhonePlay]);

  return (
    <motion.div
      initial={{ opacity: 0.15, filter: 'blur(2px) grayscale(70%)' }}
      exit={{ opacity: 0.15, filter: 'blur(2px) grayscale(70%)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px) grayscale(0%)' }}
      viewport={{ amount: 0.5 }}
      onViewportLeave={() => {
        expanded &&
          arrowOnClickHandler(
            false,
            setExpanded,
            smallArrowAnimationController
          );
        setFirstPhonePlay(false);
        setSecondPhonePlay(false);
      }}
      onViewportEnter={() => {
        setFirstPhonePlay(true);
      }}
      transition={{ duration: 0.15 }}
      className='roubine'
    >
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
                  arrowOnClickHandler(
                    !expanded,
                    setExpanded,
                    expanded
                      ? smallArrowAnimationController
                      : animationController
                  );
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
                onClick={() =>
                  arrowOnClickHandler(
                    false,
                    setExpanded,
                    smallArrowAnimationController
                  )
                }
              >
                <SmallArrow
                  hovered={notExpandedHovered}
                  expanded={expanded}
                  animationController={smallArrowAnimationController}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          onClick={() =>
            arrowOnClickHandler(
              !expanded,
              setExpanded,
              expanded ? smallArrowAnimationController : animationController
            )
          }
        >
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
                <Phone expanded={expanded} play={firstPhonePlay} />
              </motion.div>
              <AnimatePresence>
                {expanded && (
                  <div className='first-card-container'>
                    <RoubineCard
                      title='Create better routines with psychology'
                      body={
                        <ul
                          style={{
                            listStyle: 'disc inside',
                            flexDirection: 'column',
                            fontSize: '0.9em',
                          }}
                        >
                          <li>don't be a busta</li>
                          <li>secure the bag</li>
                          <li>check gmail</li>
                        </ul>
                      }
                    />
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
          onClick={() =>
            arrowOnClickHandler(
              false,
              setExpanded,
              expanded ? smallArrowAnimationController : animationController
            )
          }
          style={{ cursor: expanded ? 'pointer' : 'auto' }}
        >
          <HoverWrapper
            hovered={phoneHovered === 1}
            setHovered={() => expanded && setPhoneHovered(1)}
          >
            <>
              <div className='second-card-container'>
                <RoubineCard
                  secondPhone={true}
                  title='Ehehehe'
                  body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere malesuada sem, et pretium libero venenatis. '
                />
              </div>
              <motion.div
                onHoverStart={() => setNotExpandedHovered(true)}
                onHoverEnd={() => setNotExpandedHovered(false)}
                className='second-phone-container'
              >
                <Phone
                  expanded={false}
                  secondPhone={true}
                  play={secondPhonePlay}
                />
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
                  onClick={() =>
                    arrowOnClickHandler(true, setExpanded, animationController)
                  }
                >
                  <Description
                    links={[
                      {
                        title: 'github',
                        url: 'https://github.com/hedonicadapter/Roubinous',
                      },
                    ]}
                    descriptionText={
                      <>
                        Create
                        <mark className='description-mark'>better</mark>
                        routines with psychology.
                      </>
                    }
                    arrowUnderneath={true}
                    hovered={notExpandedHovered}
                    setHovered={setNotExpandedHovered}
                    expanded={expanded}
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
