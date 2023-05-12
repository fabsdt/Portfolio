import { useState } from "react";
// motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
// images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/portfolio-img4.png";

import React from "react";

const Work = () => {
  const [showButton, setShowButton] = useState(false);

  const handleShowButton = () => {
    setShowButton(true);
  };
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-gradient">My projects.</h2>
              <p className="max-w-sm mb-16">
                I started with intermediate-level and then advanced projects
                that use different technologies such as React, Redux, Next.js,
                Vite, Node.js, Express.js, and MongoDB... I also integrated
                advanced features such as services like Stripe, Paypal for
                online payments !
              </p>
              <button className="btn btn-sm" onClick={handleShowButton}>View all projects</button>
            </div>

            {/* images */}
            {showButton && ( 
              <>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
             
              <div className="group-hover:bg-black/70 w-full h-full z-40 absolute"></div>
             
              <img
                className="group-hover:scale-125  transition-all duration-500"
                src={Img2}
                alt=""
              />
              
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient cursor-pointer">
                  <a
                    href="https://vamb33gcs-chatbot.vercel.app/"
                    target="_blank"
                  >
                    ChatBot Application
                    <p className="text-lg text-gradient cursor-pointer">React / Vite / tailwindcss</p>
                  </a>
                </span>
              </div>
            </div> 

            
            </>
            )}

          </div>
          <div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
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
                  <a href="https://analyatech.fr/" target="_blank">
                    Ecommern 
                    <p className="text-lg text-gradient cursor-pointer">nextjs / redux / nodejs / mongodb / tailwindcss</p>

                  </a>
                  
                </span>
              </div>
            </div>
            {/* overlay */}
            
            {/* 
            {showButton && ( <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              
              <div className="group-hover:bg-black/70 w-full h-full z-40 absolute"></div>
              
              <img
                className="group-hover:scale-125  transition-all duration-500"
                src={Img3}
                alt=""
              />
              

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient cursor-pointer">
                  <a href="https://fb-clone-o5qx.vercel.app/" target="_blank">
                    FB-Clone
                  </a>
                </span>
              </div>
            </div> )}

            */}
            
            {showButton && ( <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              
              <div className="group-hover:bg-black/70 w-full h-full z-40 absolute"></div>
              
              <img
                className="group-hover:scale-125  transition-all duration-500"
                src={Img4}
                alt=""
              />
              

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient cursor-pointer">
                  <a href="https://netflix-clone-eight-umber.vercel.app/" target="_blank">
                    Netflix-Clone
                    <p className="text-lg text-gradient cursor-pointer">nextjs / prisma / mongodb / tailwindcss</p>
                  </a>
                </span>
              </div>
            </div> )}

            <div className="text-3xl italic text-gradient">
            more on my github</div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Work;
