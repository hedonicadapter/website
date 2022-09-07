import { useState } from 'react';
import { motion } from 'framer-motion';

import { BsFillTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { DiGithubAlt } from 'react-icons/di';

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
              href='https://github.com/YungMilky'
            >
              <BsGithub size={20} />
            </a>
            <a
              className='row'
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/sam-herman-950a50a7/'
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
