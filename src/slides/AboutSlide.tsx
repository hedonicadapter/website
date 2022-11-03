import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import placeHolderguy from '../assets/placeholderGuy.webp';
import { SlideWrapper } from '../Reusables/SlideWrapper';
import { githubLink, languages, linkedInLink } from '../Globals';
import '../styles/AboutSlide.css';
import { BsGithub, BsLinkedin, BsPhoneFill } from 'react-icons/bs';
import { SiMaildotru } from 'react-icons/si';
import useWindowDimensions from '../helpers/useWindowDimensions';

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
          x: 0,
          filter: 'blur(0px) grayscale(0%)',
          transition: {
            duration: isMe ? 0.4 : 0.45,
          },
        },
        blur: {
          originY: 1,
          x: isMe ? -300 : -100,
          originX: 0,
          y: isMe ? 6 : 0, //Hide blurred bottom edge
          scale: 0.9,
          opacity: 0.7,
          filter: 'blur(3px) grayscale(100%)',
          transition: { duration: isMe ? 0.45 : 0.55 },
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
      transition={{ duration: 0.1 }}
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
    const { tablet, width } = useWindowDimensions();

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
                    style={
                      tablet
                        ? {
                            fontSize:
                              index === 0
                                ? 'max(15vw, 2.5em)'
                                : index === 1
                                ? 'max(9.5vw, 1.8em)'
                                : index === 2
                                ? 'max(6vw, 1.4em)'
                                : 0,
                            lineHeight:
                              index === 0
                                ? 'max(14.5vw, 40px)'
                                : index === 1
                                ? 'max(9.5vw, 35px)'
                                : index === 2
                                ? 'max(5vw, 20px)'
                                : '1vw',
                            padding: 0,
                            margin: 0,
                          }
                        : {
                            fontSize:
                              index === 0
                                ? 'max(6vw, 6em)'
                                : index === 1
                                ? 'max(4vw, 4.2em)'
                                : index === 2
                                ? 'max(3vw, 3.4em)'
                                : 0,
                            lineHeight:
                              index === 0
                                ? 'max(5.5vw, 90px)'
                                : index === 1
                                ? 'max(4vw, 60px)'
                                : index === 2
                                ? 'max(2.5vw, 46px)'
                                : '1vw',
                            padding: 0,
                            margin: 0,
                          }
                    }
                  >
                    {value}
                  </motion.h1>
                ))}
              </div>

              <div className='row peepoTalks'>
                {paragraphs.map((item, index) => (
                  <motion.div
                    style={{
                      marginTop: tablet
                        ? index - index * (width * 0.052)
                        : index - index * 52,
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.65,
                        delay: 0.15 * (index + 1),
                      },
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
                // width='780'
                // height='690'
                // width='100%'
                // height='100%'
              />
            </AnimationWrapper>
          </div>
          <AnimatePresence>
            {contactSlide && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: '-50%',
                  transition: {
                    duration: 0.6,
                    delay: 0.1,
                    ease: 'anticipate',
                  },
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
                    transition={{ duration: 0.1 }}
                    key={contactText}
                    className='more-text'
                  >
                    {contactText === 'linkedIn' ? (
                      <a href={linkedInLink} rel='noreferrer' target='_blank'>
                        Sam Herman
                      </a>
                    ) : contactText === 'github' ? (
                      <a href={githubLink} rel='noreferrer' target='_blank'>
                        hedonicadapter
                      </a>
                    ) : contactText === 'phone' ? (
                      <a href='tel:+46 736 26 02 31'>+46 736 26 02 31</a>
                    ) : contactText === 'e-mail' ? (
                      <a href='mailto:mailservice.samherman@gmail.com'>
                        mailservice.samherman@gmail.com
                      </a>
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
                    cssClass='more-icon-github'
                  >
                    <BsGithub size={31} className='more-icon' />
                  </IconWrapper>
                  <IconWrapper
                    text='phone'
                    setContactText={setContactText}
                    link='tel:+46 736 26 02 31'
                    cssClass='more-icon-phone'
                  >
                    <BsPhoneFill size={29} className='more-icon' />
                  </IconWrapper>
                  <IconWrapper
                    text='e-mail'
                    setContactText={setContactText}
                    link='mailservice.samherman@gmail.com'
                    cssClass='more-icon-e-mail'
                  >
                    <SiMaildotru size={29} className='more-icon' />
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
          <div style={{ marginTop: 'auto', marginBottom: 15 }}>
            <AnimationWrapper contactSlide={contactSlide}>
              <motion.div
                className='row'
                style={{
                  gap: tablet ? 8 : 14,

                  zIndex: 200,
                  alignItems: 'center',
                }}
              >
                {languages.map((lang) => (
                  <motion.div>{lang.icon}</motion.div>
                ))}
              </motion.div>
            </AnimationWrapper>
          </div>

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
