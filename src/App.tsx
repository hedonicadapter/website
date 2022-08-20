import React, { useEffect, useState } from 'react';
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimationControls,
} from 'framer-motion';
import useMeasure from 'react-use-measure';

import './App.css';
import { ProjectsSlide } from './slides/ProjectsSlide';
import { AboutSlide } from './slides/AboutSlide';
import { ContactSlide } from './slides/ContactSlide';

const menuItems = ['projects', 'about', 'contact'];

type MenuItemProps = {
  text: string;
  expanded: number;
  handleMenuItemOnclick: (menuItem: number) => void;
  children: JSX.Element;
};

const MenuItem = ({
  text,
  expanded,
  handleMenuItemOnclick,
  children,
}: MenuItemProps) => {
  let expandedItem = menuItems.indexOf(text);

  return (
    <>
      {expanded !== expandedItem && (
        <motion.a
          layout='position'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => handleMenuItemOnclick(expandedItem)}
        >
          {children}
        </motion.div>
      )}
    </>
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

type SliderProps = { direction: string; expanded: number; width: number };
const Slider = ({ direction, expanded, width }: SliderProps) => {
  type VariantProps = {
    direction: string;
    width: number;
    expanded: number;
  };

  let sliderVariants = {
    initial: ({ direction, width, expanded }: VariantProps) => ({
      x: direction === 'left' ? '-100%' : '100%',
    }),
    // animate: ({ expanded }: VariantProps) =>
    //   expanded === 0
    //     ? { x: '0%' }
    //     : expanded === 1
    //     ? { x: '-100%' }
    //     : expanded === 2
    //     ? { x: '-200%' }
    //     : { x: '0%' },
    exit: ({ direction, width, expanded }: VariantProps) => ({
      x: direction === 'left' ? '100%' : '-100%',
    }),
  };

  return (
    <div>
      {/* <AnimatePresence custom={{ direction, width, expanded }}> */}
      <motion.div
        // key={expanded}
        // variants={sliderVariants}
        // custom={{ direction, width, expanded }}
        // initial={'initial'}
        // animate={'animate'}
        // exit={'exit'}
        // transition={{ bounce: 0, duration: 0.8 }}
        style={{
          transition: '0.3s ease',
          WebkitTransition: '0.3s ease',
          transform:
            expanded === 0
              ? 'translateX(0%)'
              : expanded === 1
              ? 'translateX(max(-40vw, -600px))' // same size as slide-wrapper
              : expanded === 2
              ? 'translateX(max(-80vw, -1200px))' // double
              : 'translateX(0%)',
        }}
        className='row'
      >
        <ProjectsSlide />
        <AboutSlide />
        <ContactSlide />
        {/* <div className='row'>
        {expanded === 0 && <ProjectsSlide />}
        {expanded === 1 && <AboutSlide />}
      </div> */}
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  );
};

function App() {
  const [expanded, setExpanded] = useState(0);
  const [tuple, setTuple] = useState([0, expanded]);

  const [sliderContainerRef, { width }] = useMeasure();
  const controls = useAnimationControls();

  if (tuple[1] !== expanded) setTuple([tuple[1], expanded]);
  let direction = expanded < tuple[0] ? 'left' : 'right';

  // useEffect(() => {
  //   if (expanded === -1 || expanded === null)
  //     controls.start({ opacity: 0, scaleX: 0 });
  // }, [expanded]);

  const handleMenuItemOnclick = (menuItem: number) => {
    if (menuItem === 0) controls.start({ x: -180 });
    else if (menuItem === 1) controls.start({ x: 10 });
    else if (menuItem === 2) controls.start({ x: 188 });

    // if (expanded === menuItem) return setExpanded(-1);
    setExpanded(menuItem);
  };

  return (
    <div className='container'>
      <header>
        <AnimateSharedLayout>
          {menuItems.map((item) => (
            <MenuItem
              expanded={expanded}
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
            initial={{ x: '-26%' }}
            transition={{ duration: 0.32 }}
            className='header-menu-content'
            ref={sliderContainerRef}
          >
            <Slider expanded={expanded} direction={direction} width={width} />
          </motion.div>
        </AnimateSharedLayout>
      </header>
    </div>
  );
}

export default App;
