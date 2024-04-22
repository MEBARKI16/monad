"use client";

import ChatBotCard from "../card/ChatBotCard";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from 'react';

const HeroSection = () => {
  const [style, setStyle] = useState({});

  // This function updates the transform origin based on mouse position
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2.5)' // Scaling effect when hovering
    });
  };

  const fadeInMotion = {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" }
  };

  return (
    <div className="overflow-hidden relative">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setStyle({})}
        style={style}
        className="text-center px-6 pt-8 lg:px-8  p-12  bg-hero-pattern-3 opacity-65 hover:opacity-100 active:scale-300 cursor-pointer transition duration-700 ease-in-out z-10 lg:h-128 sm:h-screen w-full object-cover bg-cover bg-no-repeat relative"
      />
         <div className=" absolute top-0 w-full text-center px-6 pt-8 lg:px-8  p-12  ">
        <div className="  flex flex-col-reverse sm:flex-row sm:justify-start gap-8">


          <div className="z-40 mt-20 relative justify-start gap-x-6">
            <motion.div {...fadeInMotion} {...{ delay: 1 }}>
              <ChatBotCard />
            </motion.div>
          </div>

        </div>
  
          <h2 className="relative z-40 ext-dark mb-10 text-4xl font-semibold" style={{ display: 'inline-block', marginTop:'30px' }}> Local expertise, global technology <br />
            Empower Algerian industries with <br />
            tailored AI solutions</h2>



      </div>
    </div>
  );
};

export default HeroSection;
