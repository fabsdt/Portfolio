import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

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


  const addEvent = () => {
    toast.success('message send succesfully !');
    setInputValue('');
    setInputValue1('');
    setInputValue2('');
  };

  return (
    <>
      <section className='py-16 lg:section' id='contact'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-center'>
            {/* text */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex justify-center items-center'>
              <div>
                <h4 className='text-[45] lg:text-[90px] leading-none uppercase text-gradient1 flex font-medium mb-2 tracking-wide p-6'>
                  Let's work !
                </h4>
              </div>
            </motion.div>
            <form
              className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center'
              ref={form}
              onSubmit={sendEmail}
              >
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-400 focus:border-accent transition-all'
                type='text'
                name='user_name'
                placeholder='Your name'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-400 focus:border-accent transition-all'
                type='email'
                name='user_email'
                placeholder='Your email'
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
              />
              <textarea
                className='bg-transparent border-b py-12 outline-none w-full placeholder:text-gray-400 focus:border-accent transition-all  resize-none mb-12'
                name='message'
                placeholder='Your Message'
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
              />
              <button type='submit' className='btn btn-lg' onClick={addEvent}

              >
                Send message
              </button>
            </form>
            {/* </StyledContactForm> */}
          </div>
        </div>
      </section>
      <div className='py-3 flex-grow justify-center'>
        <div className='container mx-auto'>
          {/* social */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex text-[50px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            {/* <img src={Logo} alt="" /> */}
            <a href='https://www.linkedin.com/in/vamb33g' target='_blank'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/Vai-1337' target='_blank'>
              <FaGithub />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;