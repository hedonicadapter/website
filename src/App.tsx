import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimationControls,
} from 'framer-motion';

import './styles/App.css';
import { ProjectsSlide } from './slides/ProjectsSlide';
import { AboutSlide } from './slides/AboutSlide';
import { ContactSlide } from './slides/ContactSlide';
import Background from './Reusables/Background';
import useWindowDimensions from './helpers/useWindowDimensions';
import FakeFooter from './Reusables/FakeFooter';

const menuItems = ['projects', 'about', 'contact'];

type MenuItemProps = {
  text: string;
  expanded: number;
  direction: string;
  handleMenuItemOnclick: (menuItem: number) => void;
  children: JSX.Element;
  slide: boolean;
};

const MenuItem = ({
  text,
  expanded,
  direction,
  handleMenuItemOnclick,
  children,
  slide,
}: MenuItemProps) => {
  let expandedItem = menuItems.indexOf(text);

  return (
    <AnimatePresence exitBeforeEnter>
      {(!slide || expanded !== expandedItem) && (
        <motion.a
          layout='position'
          initial={{
            opacity: 0,
            x: slide ? (direction === 'left' ? 80 : -80) : 0,
          }}
          animate={{
            opacity: !slide && expanded !== expandedItem ? 0.2 : 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: slide ? (direction === 'left' ? -80 : 80) : 0,
          }}
          transition={{ duration: slide ? 0.35 : 0.15 }}
          whileHover={{ opacity: 0.9, transition: { duration: 0.1 } }}
          whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }}
          className='header-menu-item no-select'
          onClick={() => handleMenuItemOnclick(expandedItem)}
        >
          {text}
        </motion.a>
      )}
      {slide && expanded === expandedItem && (
        <motion.div
          layout='position'
          onClick={() => handleMenuItemOnclick(expandedItem)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// const skills = [
//   { icon: <GrReactjs size={22} />, title: 'Database design', rating: 'mid' },
//   { icon: <SiMongodb size={22} />, title: 'UX Design', rating: 'high' },
//   {
//     icon: <HiDatabase size={22} />,
//     title: 'Requirements analysis',
//     rating: 'low',
//     opacity: old,
//   },
//   {
//     icon: <HiDatabase size={22} />,
//     title: 'Agile',
//     rating: 'high',
//   },
//   {
//     icon: <HiDatabase size={22} />,
//     title: 'Coding',
//     rating: 'high',
//   },
//   {
//     icon: <HiDatabase size={22} />,
//     title: 'Mixing & Mastering',
//     rating: 'high',
//     opacity: oldest,
//   },
//   {
//     icon: <HiDatabase size={22} />,
//     title: 'Music production',
//     rating: 'high',
//     opacity: oldest,
//   },
//   {
//     icon: <HiDatabase size={22} />,
//     title: 'Piano',
//     rating: 'low',
//     opacity: oldest,
//   },
//   {
//     icon: <HiDatabase size={22} />,
//     title: 'Figma',
//     rating: 'high',
//     opacity: recent,
//   },
//   {
//     icon: <HiDatabase size={22} />,
//     title: 'Gimp',
//     rating: 'high',
//     opacity: oldest,
//   },
// ];

type SliderProps = { expanded: number };
const Slider = ({ expanded }: SliderProps) => {
  return (
    <div>
      <motion.div
        className={`row ${
          expanded === 0 ? 'slide-transformer0' : 'slide-transformer1'
        }`}
        style={{
          position: 'relative',
          transition: '0.4s ease',
          WebkitTransition: '0.4s ease',

          // transform:
          //   expanded === 0
          //     ? 'translateX(0%)'
          //     : 'translateX(max(-40vw, -780px))', // same size as slide-wrapper
        }}
      >
        <ProjectsSlide />
        <AboutSlide contactSlide={expanded === 2} />
        <ContactSlide />
        <Background />
      </motion.div>
    </div>
  );
};

function App() {
  const [expanded, setExpanded] = useState(0);
  const [previousExpanded, setPreviousExpanded] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [sliderContainerHovered, setSliderContainerHovered] = useState(false);
  const [x, setX] = useState(0);

  const sliderContainerRef = useRef<HTMLInputElement | null>(null);
  const controls = useAnimationControls();
  const { width, tablet } = useWindowDimensions();

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (sliderContainerHovered) return;

      setScroll((prevState) => {
        let newScrollPosition = prevState + event.deltaY;
        let elementHeight =
          sliderContainerRef.current &&
          sliderContainerRef?.current.offsetHeight;

        if (elementHeight && newScrollPosition >= elementHeight + 200) {
          return elementHeight;
        }
        if (newScrollPosition <= 0) {
          return 0;
        }
        return newScrollPosition;
      });
    };

    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [sliderContainerRef, sliderContainerHovered]);

  useEffect(() => {
    if (tablet) {
      setX(0);
      // vw / viewport total width x 100
      // setX((100 / width) * 100 - width);
    } else {
      setX(Math.max(0.074 * width, 100));
    }
  }, [width, tablet]);

  useEffect(() => {
    if (expanded === 0) controls.start({ x: -x });
    else if (expanded === 1) controls.start({ x: 0 });
    else if (expanded === 2) controls.start({ x: x });
  }, [expanded, width, controls, x]);

  useEffect(() => {
    sliderContainerRef?.current?.scroll({
      top: scroll,
      behavior: 'smooth',
    });
  }, [scroll, sliderContainerRef]);

  // useEffect(() => {
  //   controls.start({
  //     scale: 1,
  //     opacity: 1,
  //     transition: { ease: 'circOut', duration: 0.5 },
  //   });
  // }, []);

  // useEffect(() => {
  //   if (expanded === -1 || expanded === null)
  //     controls.start({ opacity: 0, scaleX: 0 });
  // }, [expanded]);

  const handleMenuItemOnclick = (menuItem: number) => {
    // if (menuItem === 0) controls.start({ x: -x });
    // else if (menuItem === 1) controls.start({ x: 0 });
    // else if (menuItem === 2) controls.start({ x: x });
    // if (menuItem === 0) controls.start({ x: -160 });
    // else if (menuItem === 1) controls.start({ x: 0 });
    // else if (menuItem === 2) controls.start({ x: 168 });

    // if (expanded === menuItem) return setExpanded(-1);
    setExpanded((prevState) => {
      setPreviousExpanded(prevState);
      return menuItem;
    });
  };

  return (
    <div className='app-container'>
      <header>
        <AnimateSharedLayout>
          {menuItems.map((item) => (
            <MenuItem
              expanded={expanded}
              direction={previousExpanded < expanded ? 'left' : 'right'}
              slide={!tablet}
              key={item}
              text={item}
              handleMenuItemOnclick={handleMenuItemOnclick}
            >
              <motion.div
                // animate={controls}
                className='header-menu-content-space-maker'
              />
            </MenuItem>
          ))}

          <motion.div
            animate={controls}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='header-menu-content'
            onMouseEnter={() => setSliderContainerHovered(true)}
            onMouseLeave={() => setSliderContainerHovered(false)}
            ref={sliderContainerRef}
          >
            <Slider expanded={expanded} />
          </motion.div>
        </AnimateSharedLayout>
      </header>
      {tablet && <FakeFooter color='#1c1c1c' />}
    </div>
  );
}

export default App;
