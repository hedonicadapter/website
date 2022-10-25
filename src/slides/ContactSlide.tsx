import { BsFillTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';

import { SlideWrapper } from '../Reusables/SlideWrapper';
import '../styles/ContactSlide.css';

export const ContactSlide = () => {
  return (
    <SlideWrapper>
      <div className='contact-slide-container'>
        <div className='row'>
          <div className='column'>
            <a className='row' href='tel:123-456-7890'>
              <BsFillTelephoneFill /> 123-456-7890
            </a>
            <a className='row' href='mailto: abc@example.com'>
              <IoMail size={23} /> filtersome@gmail.com
            </a>
          </div>
          <div className='row'>
            <a
              className='row'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/hedonicadapter'
            >
              <BsGithub size={20} />
            </a>
            <a
              className='row'
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/sam-herman/'
            >
              <BsLinkedin />
            </a>

            <div
              style={{
                width: 220,
                height: 360,
                outline: '2px solid gray',
                borderRadius: 3,
                position: 'relative',
                backgroundColor: 'black',
              }}
            >
              <div style={{}}>
                <BsFillTelephoneFill size={90} color={'white'} />
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
                  zIndex: 1,
                }}
              >
                <defs>
                  <filter id='noise' y='0' x='0'>
                    <feTurbulence
                      className='basefrequency'
                      stitchTiles='stitch'
                      baseFrequency='.95'
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
                      opacity='.25'
                    />
                  </pattern>
                </defs>
                <rect
                  id='rect'
                  x='0'
                  y='0'
                  width='100%'
                  height='100%'
                  fill='url(#pattern)'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
