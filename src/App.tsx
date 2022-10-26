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

const menuItems = ['projects', 'about', 'contact'];

type MenuItemProps = {
  text: string;
  expanded: number;
  direction: string;
  handleMenuItemOnclick: (menuItem: number) => void;
  children: JSX.Element;
};

const MenuItem = ({
  text,
  expanded,
  direction,
  handleMenuItemOnclick,
  children,
}: MenuItemProps) => {
  let expandedItem = menuItems.indexOf(text);

  return (
    <AnimatePresence exitBeforeEnter>
      {expanded !== expandedItem && (
        <motion.a
          layout='position'
          initial={{ opacity: 0, x: direction === 'left' ? 80 : -80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 'left' ? -80 : 80 }}
          transition={{ duration: 0.5 }}
          whileHover={{ opacity: 0.9, transition: { duration: 0.1 } }}
          whileTap={{ opacity: 0.7, transition: { duration: 0.1 } }}
          className='header-menu-item no-select'
          onClick={() => handleMenuItemOnclick(expandedItem)}
        >
          {text}
        </motion.a>
      )}
      {expanded === expandedItem && (
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
        className='row'
        style={{
          transition: '0.4s ease-in-out',
          WebkitTransition: '0.4s ease-in-out',

          transform:
            expanded === 0
              ? 'translateX(0%)'
              : 'translateX(max(-40vw, -780px))', // same size as slide-wrapper
          // : 'translateX(max(-40vw, -780px))', // same size as slide-wrapper
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

  const sliderContainerRef = useRef<HTMLInputElement | null>(null);
  const controls = useAnimationControls();

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
    if (menuItem === 0) controls.start({ x: -150 });
    else if (menuItem === 1) controls.start({ x: 0 });
    else if (menuItem === 2) controls.start({ x: 158 });
    // if (menuItem === 0) controls.start({ x: -180 });
    // else if (menuItem === 1) controls.start({ x: 10 });
    // else if (menuItem === 2) controls.start({ x: 188 });

    // if (expanded === menuItem) return setExpanded(-1);
    setExpanded((prevState) => {
      setPreviousExpanded(prevState);
      return menuItem;
    });
  };

  return (
    <div className='container'>
      <header>
        <AnimateSharedLayout>
          {menuItems.map((item) => (
            <MenuItem
              expanded={expanded}
              direction={previousExpanded < expanded ? 'left' : 'right'}
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
            // initial={{ x: -180, scale: 0.8, opacity: 0 }}
            initial={{ x: -180 }}
            transition={{ duration: 0.45 }}
            className='header-menu-content'
            onMouseEnter={() => setSliderContainerHovered(true)}
            onMouseLeave={() => setSliderContainerHovered(false)}
            ref={sliderContainerRef}
          >
            <Slider expanded={expanded} />
          </motion.div>
        </AnimateSharedLayout>
      </header>
    </div>
  );
}

export default App;
