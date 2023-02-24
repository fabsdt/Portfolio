// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
// images
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';

import React from 'react';

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-gradient">My projects.</h2>
              <p className="max-w-sm mb-16">
                I started with intermediate-level and advanced projects that use
                different technologies such as React, Next.js, Node.js,
                Express.js, and MongoDB... I also integrated advanced features
                such as services like Stripe, Paypal for online payments !
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* images */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full z-40 absolute"></div>
              {/* image */}
              <img
                className="group-hover:scale-125  transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* project title */}

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient cursor-pointer">
                  <a href="https://analyatech.fr/" target="_blank">
                    Ecommerce website
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
            className="flex-1 flex flex-col gap-y-16"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full z-40 absolute"></div>
              {/* image */}
              <img
                className="group-hover:scale-125  transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* project title */}

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient cursor-pointer">
                  <a href="https://vamb33gcs-chatbot.vercel.app/" target="_blank">
                    ChatBot Application 
                  </a>
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full z-40 absolute"></div>
              {/* image */}
              <img
                className="group-hover:scale-125  transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* project title */}

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient cursor-pointer">
                  <a href="https://analyatech.fr/" target="_blank">
                    Ecommerce website
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
