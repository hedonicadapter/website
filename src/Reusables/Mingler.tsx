import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  hovered,
  setHovered,
}: {
  hovered: boolean;
  setHovered: (bool: boolean) => void;
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
        fontSize: 'max(2.4em, 5vw)',
        marginBottom: 'min(-1.25vw, -20px)',
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
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.15, duration: 0.55 },
      }}
      className='no-select'
      href='www.google.com'
      target='_blank'
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

const Mingler = () => {
  const [expanded, setExpanded] = useState(false);
  const [notExpandedHovered, setNotExpandedHovered] = useState(false);

  const [timelineHovered, setHovered] = useState(0);
  const [timelineItemClicked, setTimelineItemClicked] = useState<
    number | boolean
  >(true);

  const [hasBeenViewed, setHasBeenViewed] = useState(false);

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
      whileInView={{
        opacity: 1,
      }}
      className='mingler'
    >
      <div className='mingler-prototype-and-header-container'>
        <div className='mingler-header'>
          <MinglerTitle
            hovered={notExpandedHovered}
            setHovered={setNotExpandedHovered}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.35 } }}
            className='header-skills'
          >
            <Skills tooltips skills={minglerStack} vertical={false} />
          </motion.div>
        </div>
        <div
          className='no-select'
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            justifyItems: 'center',
          }}
        >
          <img
            src={frame}
            style={{
              gridRowStart: 1,
              gridColumnStart: 1,
              zIndex: -1,
              pointerEvents: 'none',
              width: '100%',
            }}
          />
          <motion.div
            style={{
              zIndex: 0,
              borderRadius: 18,
              gridRowStart: 1,
              gridColumnStart: 1,
              marginTop: 2,
              width: '93%',
            }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.45, duration: 1 },
            }}
            viewport={{ once: true }}
          >
            <div className='figma-prototype-container '>
              <iframe
                height='100%'
                src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fclill097ZPLRtPuTU4cfUo%2FSharehub-4%3Fpage-id%3D0%253A1%26node-id%3D0%253A1%26viewport%3D49%252C308%252C0.06%26scaling%3Dscale-down-width%26starting-point-node-id%3D339%253A213&hide-ui=1'
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence exitBeforeEnter>
        {!expanded ? (
          <ExpansionWrapper key={0}>
            <motion.div
              onHoverStart={() => setNotExpandedHovered(true)}
              onHoverEnd={() => setNotExpandedHovered(false)}
            >
              <Description
                links={minglerLinks}
                descriptionText='Chat and share your digital life with friends.'
                hovered={notExpandedHovered}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            </motion.div>
          </ExpansionWrapper>
        ) : (
          <ExpansionWrapper
            key={1}

            // animate={expanded ? 'show' : 'hide'}
            // variants={{
            //   show: { height: 'auto', opacity: 1 },
            //   hide: { height: '0', opacity: 0 },
            // }}
          >
            <>
              <div className='row small-arrow-and-links-container'>
                <SmallArrow setExpanded={setExpanded} />
                <Links align='right' links={minglerLinks} />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.75 }}
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
              <Timeline
                timelineEvents={minglerTimelineEvents}
                hovered={timelineHovered}
                setHovered={setHovered}
                timelineItemClicked={timelineItemClicked}
                timelineItemClickHandler={timelineItemClickHandler}
              />
              <motion.a
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
              </motion.a>
            </>
          </ExpansionWrapper>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Mingler;
