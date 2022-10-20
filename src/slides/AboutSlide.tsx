import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import placeHolderguy from '../assets/placeholderGuy.png';
import { Card } from '../Reusables/Card';
import { SlideWrapper } from '../Reusables/SlideWrapper';
import { Skills } from '../Reusables/Skills';
import { githubLink, languages, linkedInLink } from '../Globals';
import '../styles/AboutSlide.css';
import { BsGithub, BsLinkedin, BsPhoneFill } from 'react-icons/bs';

const paragraphs = [
  `Mauris tempus nulla a purus vulputate cursus. Vestibulum at eros condimentum, dictum dui sit amet, porta augue. Lorem ipsum dolor sit amet. Mauris tempus nulla a purus vulputate cursus. Vestibulum at eros condimentum, dictum dui sit amet, porta augue. Lorem ipsum dolor sit amet. Mauris tempus nulla a purus vulputate cursus. Vestibulum at eros condimentum, dictum dui sit amet, porta augue. Lorem ipsum dolor sit amet.`,
  `Mauris tempus nulla a purus vulputate cursus. Vestibulum at eros condimentum, dictum dui sit amet, porta augue. Lorem ipsum dolor sit amet. Mauris tempus nulla a purus vulputate cursus. Vestibulum at eros condimentum, dictum dui sit amet, porta augue. Lorem ipsum dolor sit amet.`,
  `Mauris tempus nulla a purus vulputate cursus. Vestibulum at eros condimentum, dictum dui sit amet, porta augue. Lorem ipsum dolor sit amet.`,
];

const AnimationWrapper = ({
  children,
  contactSlide,
  multiplier = 1,
}: {
  children: JSX.Element;
  contactSlide: boolean;
  multiplier?: number;
}) => {
  const isMe = multiplier > 1;

  return (
    <motion.div
      variants={{
        show: {
          originY: 1,
          originX: 0,
          opacity: 1,
          filter: 'blur(0px) grayscale(0%)',
          transition: {
            duration: isMe ? 0.85 : 0.65,
          },
        },
        blur: {
          originY: 1,
          x: isMe ? -300 : -100,
          originX: 0,
          scale: 0.9,
          opacity: 0.7,
          filter: 'blur(3px) grayscale(100%)',
          transition: { duration: isMe ? 0.45 : 0.65 },
        },
      }}
      initial={'show'}
      animate={contactSlide ? 'blur' : 'show'}
    >
      {children}
    </motion.div>
  );
};

const IconWrapper = React.memo(
  ({
    children,
    text,
    setContactText,
    link,
    cssClass,
  }: {
    children: JSX.Element;
    text: string;
    setContactText: (text: string) => void;
    link: string;
    cssClass?: string;
  }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => setContactText(text)}
    >
      <a
        target={text === 'phone' ? '' : '_blank'}
        href={link}
        rel={text === 'phone' ? '' : 'noreferrer'}
        className={cssClass}
      >
        {children}
      </a>
    </motion.div>
  )
);

export const AboutSlide = React.memo(
  ({ contactSlide }: { contactSlide: boolean }) => {
    const [languageHovered, setLanguageHovered] = useState(false);
    const [contactText, setContactText] = useState('more:');

    useEffect(() => {
      contactSlide && setContactText('more:');
    }, [contactSlide]);

    return (
      <SlideWrapper>
        <motion.div
          animate={contactSlide ? 'hide' : 'show'}
          variants={{
            show: { filter: 'brightness(100%)' },
            hide: { filter: 'brightness(85%)' },
          }}
          transition={{ duration: 0.25 }}
          className='column about-container'
        >
          <AnimationWrapper contactSlide={contactSlide}>
            <div className='column'>
              <div className='column about-header'>
                {['Systemvetare', 'Full stack', 'Sam'].map((value, index) => (
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 0.25, delay: 1 / (index + 1) },
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.15 }}
                    style={{
                      // fontSize: 80 / ((index + 1) * 0.8),
                      fontSize:
                        index === 0
                          ? 90
                          : index === 1
                          ? 55
                          : index === 2
                          ? 45
                          : 0,
                      padding: 0,
                      margin: 0,
                      paddingBlock: 1 / ((index + 1) * 1.8),
                    }}
                  >
                    {value}
                  </motion.h1>
                ))}
              </div>
              <div className='row peepoTalks'>
                {paragraphs.map((item, index) => (
                  <motion.div
                    style={{ marginTop: index - index * 40 }}
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 0.65, delay: 0.15 * (index + 1) },
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.15 }}
                  >
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
              {/* <div className='stats'>
                <div
                  style={{ width: '20vw' }}
                  onMouseEnter={() => setLanguageHovered(true)}
                  onMouseLeave={() => setLanguageHovered(false)}
                >
                  <Card
                    title='Languages'
                    secondary
                    titleElement={
                      <motion.div
                        // animate='show'
                        // animate={languageHovered ? 'show' : 'hide'}
                        // variants={{
                        //   show: { height: 'auto' },
                        //   hide: { height: 0 },
                        // }}
                        className='skills-container'
                      >
                        <Skills
                          skills={languages}
                          // cardHovered={true}
                          cardHovered={languageHovered}
                        />
                      </motion.div>
                    }
                    titleInside={true}
                  ></Card>
                </div>
              </div> */}
            </div>
          </AnimationWrapper>
          <div className='me'>
            <AnimationWrapper contactSlide={contactSlide} multiplier={1.15}>
              <img
                alt='Sam Herman'
                src={placeHolderguy}
                width='780'
                height='690'
              />
            </AnimationWrapper>
          </div>
          <AnimatePresence>
            {contactSlide && (
              <motion.div
                initial={{ opacity: 0, x: 500 }}
                animate={{
                  opacity: 1,
                  x: '-50%',
                  transition: { duration: 0.45, delay: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  x: 250,
                  transition: { duration: 0.35, delay: 0 },
                }}
                className='row more'
              >
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    key={contactText}
                    className='more-text'
                  >
                    {contactText === 'linkedIn' ? (
                      <a href={linkedInLink} rel='noreferrer' target='_blank'>
                        Sam Herman
                      </a>
                    ) : contactText === 'github' ? (
                      <a href={githubLink} rel='noreferrer' target='_blank'>
                        Yung Milky
                      </a>
                    ) : contactText === 'phone' ? (
                      <a href='tel:+46 736 26 02 31'>+46 736 26 02 31</a>
                    ) : (
                      contactText
                    )}
                  </motion.div>
                </AnimatePresence>
                <div className='more-icons'>
                  <IconWrapper
                    text='linkedIn'
                    setContactText={setContactText}
                    link={linkedInLink}
                  >
                    <BsLinkedin size={29} className='more-icon' />
                  </IconWrapper>
                  <IconWrapper
                    text='github'
                    setContactText={setContactText}
                    link={githubLink}
                  >
                    <BsGithub size={30} className='more-icon' />
                  </IconWrapper>
                  <IconWrapper
                    text='phone'
                    setContactText={setContactText}
                    link='tel:+46 736 26 02 31'
                    cssClass='more-icon-phone'
                  >
                    <BsPhoneFill size={29} className='more-icon' />
                  </IconWrapper>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* <p style={{ width: '55%' }}>
          Mauris tempus nulla a purus vulputate cursus. Vestibulum at eros
          condimentum, dictum dui sit amet, porta augue. Lorem ipsum dolor sit
          amet.
        </p> */}
          <motion.div
            className='row'
            style={{
              gap: 17,
              // position: 'absolute',

              // marginTop: 290,
              // marginLeft: -50,
              zIndex: 200,
              marginTop: 'auto',
              marginBottom: 20,
            }}
          >
            {languages.map((lang) => (
              <motion.div>{lang.icon}</motion.div>
            ))}
          </motion.div>
          <svg
            id='svg'
            xmlns='http://www.w3.org/2000/svg'
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: '0px',
              left: '0px',
              right: '0px',
              bottom: '0px',
              pointerEvents: 'none',
              zIndex: 90,
            }}
          >
            <defs>
              <filter id='noise' y='0' x='0'>
                <feTurbulence
                  className='basefrequency'
                  stitchTiles='stitch'
                  baseFrequency='.75'
                  type='fractalNoise'
                />
              </filter>
              <pattern
                id='pattern'
                className='tile1'
                patternUnits='userSpaceOnUse'
                height='100'
                width='100'
                y='0'
                x='0'
              >
                <rect
                  className='bg'
                  x='0'
                  y='0'
                  width='100%'
                  height='100%'
                  fill='transparent'
                />
                <rect
                  className='opacity'
                  x='0'
                  y='0'
                  width='100%'
                  height='100%'
                  filter='url(#noise)'
                  opacity='.32'
                />
              </pattern>
            </defs>
            <rect
              style={{ pointerEvents: 'none' }}
              id='rect'
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='url(#pattern)'
            />
          </svg>
        </motion.div>
      </SlideWrapper>
    );
  }
);
