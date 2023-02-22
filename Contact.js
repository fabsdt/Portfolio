import React from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="section flex justify-center p-5" id="contact">
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
  );
};

export default Contact;
