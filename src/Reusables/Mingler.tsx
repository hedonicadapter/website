import { useState } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { minglerStack, minglerTimelineEvents } from '../Globals';
import { Skills } from './Skills';
import Timeline from './Timeline';
import Textbox from './Textbox';
import '../styles/Mingler.css';
import Description from './Description';
import Links from './Links';
import SmallArrow, { arrowOnClickHandler } from './SmallArrow';
import ExpansionWrapper from './ExpansionWrapper';

import minglerDemo from '../assets/minglerDemo.webm';

const minglerLinks = [
  { title: 'github', url: 'https://github.com/hedonicadapter/Mingler' },
  {
    title: 'download',
    url: 'https://github.com/hedonicadapter/Mingler/releases/download/v1.0.0-alpha/Mingler.v1.0.0-alpha.zip',
  },
];

const MinglerTitle = ({
  setHovered,
  setExpanded,
}: {
  setHovered: (bool: boolean) => void;
  setExpanded: () => void;
}) => {
  return (
    <motion.a
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setExpanded()}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.15, duration: 0.55 },
      }}
      className='no-select'
    >
      <h1>
        <div
          style={{
            fontSize: 'max(2.4em, 7vw)',
            marginBottom: 'min(-1.78vw, -20px)',
          }}
        >
          Mingler
        </div>
      </h1>
    </motion.a>
  );
};

const firstMinglerPrototype =
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fclill097ZPLRtPuTU4cfUo%2FSharehub-4%3Fpage-id%3D0%253A1%26node-id%3D0%253A1%26viewport%3D49%252C308%252C0.06%26scaling%3Dscale-down-width%26starting-point-node-id%3D339%253A213&hide-ui=1';
const productionReplica =
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJA02Xgw9evpcsj6PnSjkCY%2FUntitled%3Fnode-id%3D1%253A145%26scaling%3Dscale-down-width%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A145&hide-ui=1';

const Mingler = () => {
  const [expanded, setExpanded] = useState(false);
  const [notExpandedHovered, setNotExpandedHovered] = useState(false);

  const [timelineHovered, setHovered] = useState(0);
  const [timelineItemClicked, setTimelineItemClicked] = useState<
    number | boolean
  >(true);

  const animationController = useAnimationControls();

  const timelineItemClickHandler = (index: number) => {
    const timelineItemAlreadyOpen = index === timelineItemClicked;

    if (timelineItemAlreadyOpen) return setTimelineItemClicked(false);

    // If user has clicked on a dot, text is already showing, so clicking again should close the textbox
    if (timelineItemClicked !== false && timelineHovered)
      return setTimelineItemClicked(false);

    setTimelineItemClicked(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0.15, filter: 'blur(2px) grayscale(70%)' }}
      exit={{ opacity: 0.15, filter: 'blur(2px) grayscale(70%)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px) grayscale(0%)' }}
      viewport={{ amount: 0.5 }}
      onViewportLeave={() =>
        expanded && arrowOnClickHandler(false, setExpanded, animationController)
      }
      transition={{ duration: 0.15 }}
      className='mingler'
    >
      <div className='mingler-prototype-and-header-container'>
        <div className='mingler-header'>
          <MinglerTitle
            setHovered={setNotExpandedHovered}
            setExpanded={() =>
              arrowOnClickHandler(!expanded, setExpanded, animationController)
            }
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.35 } }}
            className='header-skills'
          >
            <Skills tooltips skills={minglerStack} vertical={false} />
          </motion.div>
        </div>
        <div className='no-select' style={{}}>
          <motion.div
            style={{
              zIndex: 10,
              // borderRadius: 18,
              // gridRowStart: 1,
              // gridColumnStart: 1,
              // marginTop: 2,
              // width: '93%',
            }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.45, duration: 1 },
            }}
            viewport={{ once: true }}
          >
            <div className='figma-prototype-container '>
              <motion.div
                key={0}
                animate={
                  !expanded
                    ? {
                        opacity: 1,
                        transition: { delay: 0.35, duration: 0.35 },
                      }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.25 }}
              >
                <div className='figma-prototype-bg'>
                  <video src={minglerDemo} autoPlay muted loop />
                </div>
              </motion.div>

              <motion.div
                key={1}
                animate={
                  expanded &&
                  timelineHovered !== minglerTimelineEvents.length - 1
                    ? {
                        opacity: 1,
                        transition: { delay: 0.35, duration: 0.35 },
                      }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.25 }}
              >
                {/* <h5>
                  <i>PROTOTYPE</i>✨ try me
                </h5> */}
                <iframe
                  title='First interactive protototype created for Mingler'
                  height='100%'
                  src={firstMinglerPrototype}
                  allowFullScreen
                />
                <div className='figma-prototype-bg' />
              </motion.div>
              <motion.div
                key={2}
                animate={
                  expanded &&
                  timelineHovered === minglerTimelineEvents.length - 1
                    ? {
                        opacity: 1,
                        transition: { delay: 0.35, duration: 0.35 },
                      }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.25 }}
              >
                <iframe
                  title='Interactive figma replica of the final version of Mingler'
                  height='100%'
                  src={productionReplica}
                  allowFullScreen
                />
                <div className='figma-prototype-bg' />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence exitBeforeEnter>
        {!expanded ? (
          <ExpansionWrapper key={0}>
            <motion.div
              onClick={() =>
                arrowOnClickHandler(true, setExpanded, animationController)
              }
            >
              <Description
                links={minglerLinks}
                descriptionText='Chat and share your digital life with friends.'
                hovered={notExpandedHovered}
                setHovered={setNotExpandedHovered}
                expanded={expanded}
                animationController={animationController}
              />
            </motion.div>
          </ExpansionWrapper>
        ) : (
          <ExpansionWrapper key={1}>
            <>
              <motion.div
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className='row small-arrow-and-links-container'
              >
                <div
                  onClick={() =>
                    arrowOnClickHandler(false, setExpanded, animationController)
                  }
                  style={{ marginLeft: 38, marginTop: 10, width: 110 }}
                >
                  <SmallArrow
                    hovered={notExpandedHovered}
                    expanded={expanded}
                    animationController={animationController}
                  />
                </div>
                <Links align='right' links={minglerLinks} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.65 },
                }}
                transition={{ delay: 0.25, duration: 0.55 }}
              >
                <AnimatePresence>
                  {timelineItemClicked !== false && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Textbox
                        timelineEvents={minglerTimelineEvents}
                        hovered={timelineHovered}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Timeline
                  timelineEvents={minglerTimelineEvents}
                  hovered={timelineHovered}
                  setHovered={setHovered}
                  timelineItemClicked={timelineItemClicked}
                  timelineItemClickHandler={timelineItemClickHandler}
                />
              </motion.div>
              {/* <motion.a
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.75, duration: 1.25 },
                }}
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
              </motion.a> */}
            </>
          </ExpansionWrapper>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Mingler;
