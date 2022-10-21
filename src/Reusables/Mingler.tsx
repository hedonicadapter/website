import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { minglerStack, minglerTimelineEvents, whileTap } from '../Globals';
import { Skills } from './Skills';
import Timeline from './Timeline';
import Textbox from './Textbox';
import '../styles/Mingler.css';
import frame from '../assets/frame.png';
import Description from './Description';
import Links from './Links';
import SmallArrow from './SmallArrow';
import ExpansionWrapper from './ExpansionWrapper';

const minglerLinks = [
  { title: 'github', url: 'www.google.com' },
  { title: 'download', url: 'www.google.com' },
];

const MinglerTitle = ({
  setHovered,
  setExpanded,
}: {
  setHovered: (bool: boolean) => void;
  setExpanded: () => void;
}) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [shownOnce, setShownOnce] = useState(false);

  type SubTitleProps = { subtitle: string; style?: { fontSize: string } };
  const Subtitle = ({ subtitle, style }: SubTitleProps) => (
    <div
      style={{
        fontSize: 'max(1.2em, 1.9vw)',
        marginBottom: -6,
        ...style,
      }}
    >
      {subtitle}
    </div>
  );

  const titles = [
    <div
      style={{
        fontSize: 'max(2.4em, 7vw)',
        marginBottom: 'min(-1.78vw, -20px)',
      }}
    >
      Mingler
    </div>,
    <Subtitle subtitle='Share activities' />,
    <Subtitle subtitle='Talk to friends' />,
  ];

  useEffect(() => {
    if (shownOnce) return;

    if (titleIndex === titles.length - 1) {
      setShownOnce(true);
    }

    const timeout = setTimeout(
      () => {
        setTitleIndex((prevState) => {
          if (prevState === titles.length - 1) return 0;
          return prevState + 1;
        });
      },
      titleIndex === 0 ? 3500 : 2000
    );

    return () => clearTimeout(timeout);
  }, [titleIndex]);

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
      <motion.h1 transition={{ duration: 0.15 }}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={titleIndex}
          >
            {titles[titleIndex]}
          </motion.div>
        </AnimatePresence>
      </motion.h1>
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

  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  const animationController = useAnimationControls();

  const timelineItemClickHandler = (index: number) => {
    const timelineItemAlreadyOpen = index === timelineItemClicked;

    if (timelineItemAlreadyOpen) return setTimelineItemClicked(false);

    // If user has clicked on a dot, text is already showing, so clicking again should close the textbox
    if (timelineItemClicked !== false && timelineHovered)
      return setTimelineItemClicked(false);

    setTimelineItemClicked(index);
  };

  const arrowOnClickHandler = async () => {
    if (!animationController) return;

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
    <motion.div
      initial={{ opacity: 0.15, filter: 'blur(2px) grayscale(70%)' }}
      exit={{ opacity: 0.15, filter: 'blur(2px) grayscale(70%)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px) grayscale(0%)' }}
      viewport={{ amount: 0.5 }}
      onViewportLeave={() => setExpanded(false)}
      transition={{ duration: 0.15 }}
      className='mingler'
    >
      <div className='mingler-prototype-and-header-container'>
        <div className='mingler-header'>
          <MinglerTitle
            setHovered={setNotExpandedHovered}
            setExpanded={() => setExpanded(!expanded)}
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
            <motion.div className='figma-prototype-container '>
              <AnimatePresence>
                <motion.div
                  key={0}
                  animate={
                    timelineHovered !== minglerTimelineEvents.length - 1
                      ? { opacity: 1 }
                      : { opacity: 0 }
                  }
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <h5>
                    <i>PROTOTYPE</i>✨ try me
                  </h5>
                  <iframe
                    height='100%'
                    src={firstMinglerPrototype}
                    allowFullScreen
                  />
                  <div className='figma-prototype-bg' />
                </motion.div>
                <motion.div
                  key={1}
                  animate={
                    timelineHovered === minglerTimelineEvents.length - 1
                      ? { opacity: 1 }
                      : { opacity: 0 }
                  }
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <iframe
                    height='100%'
                    src={productionReplica}
                    allowFullScreen
                  />
                  <div className='figma-prototype-bg' />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence exitBeforeEnter>
        {!expanded ? (
          <ExpansionWrapper key={0}>
            <Description
              links={minglerLinks}
              descriptionText='Chat and share your digital life with friends.'
              hovered={notExpandedHovered}
              setHovered={setNotExpandedHovered}
              expanded={expanded}
              setExpanded={setExpanded}
              animationController={animationController}
            />
          </ExpansionWrapper>
        ) : (
          <ExpansionWrapper key={1}>
            <>
              <motion.div
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className='row small-arrow-and-links-container'
              >
                <div
                  onClick={() => arrowOnClickHandler()}
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
                        hasBeenViewed={hasBeenViewed}
                        setHasBeenViewed={setHasBeenViewed}
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
