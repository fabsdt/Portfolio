import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c178629',
        'template_j66dov6',
        form.current,
        'BmfVcsV8ECPI_t35d'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="section flex justify-center p-5" id="contact">
        <StyledContactForm>
          <Link to="contact" className="text-gradient btn-link cursor-pointer">
            Work with me !
          </Link>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input
              type="submit"
              value="Send"
              className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#f0ebf1] font-bold font-primary hover:from-[#e7e2e7] hover:to-[#42A6E3]"
            />
          </form>
        </StyledContactForm>
      </div>
      <div className="py-8 flex-grow justify-center">
        <div className="container mx-auto">
          {/* social */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[50px] gap-x-6 max-w-max mx-auto lg:mx-0"
          >
            {/* <img src={Logo} alt="" /> */}
            <a href="https://www.linkedin.com/in/vamb33g" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Vai-1337" target="_blank">
              <FaGithub />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      color: black;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      color: black;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type='submit'] {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.5rem;
      cursor: pointer;
      background: #42a6e3;
      color: white;
      border: none;
    }
  }
`;
