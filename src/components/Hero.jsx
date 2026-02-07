import Countdown from "./CountDown";
import { FaLocationDot } from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import { SiHackaday } from "react-icons/si";

import {useEffect, useRef, useState} from 'react'

const Hero = () => {



     const [showFinalBlast, setShowFinalBlast] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowFinalBlast(true), 2000);
        return () => clearTimeout(timer);
    }, []);


  return (
    <section id="home" className="relative  w-full pt-22">

      
     <div className="absolute inset-0 fog-layer" />

      <div className=" relative overflow-hidden max-w-337.5 mx-auto px-4 sm:px-6 md:px-10 md:pb-12 pb-18">
 
            <FloatingSparks />



      

      <div className="mt-6">
        <h1 className="text-center font-extralight text-xs sm:text-sm md:text-lg text-gray-100 tracking-[3px] sm:tracking-[4px] leading-relaxed">
          KAMLA NEHRU INSTITUTE OF TECHNOLOGY{" "}
          <span className="text-red-600 font-bold">|</span> SULTANPUR
        </h1>
      </div>

  
      <div className="mt-8 flex justify-center">
        <img
          src="/preview04.png"
          alt="hero"
          draggable='false'
          className="w-55 sm:w-[320px] md:w-105 lg:w-125
          drop-shadow-[15px_15px_25px_rgba(255,26,26,0.55)]
          animate-pulse"
        />
      </div>

   
      <div className="mt-10 flex justify-center">
        <h1
          className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl 
          font-display tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-gray-100"
        >
          CONNECT{" "}
          <span className="font-extrabold text-red-600">•</span> CREATE{" "}
          <span className="font-extrabold text-red-600">•</span> COLLABORATE
        </h1>
      </div>

      
      <div className="mt-12 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">

          <span
            className="border border-red-600 bg-gray-950/40 backdrop-blur-xl
            px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base
            flex items-center gap-3 text-white"
          >
            <FaLocationDot className="w-5 h-5 text-green-500 animate-pulse" />
            17th March, 2026
          </span>

          <span
            className="border border-red-600 bg-gray-950/40 backdrop-blur-xl
            px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base
            flex items-center gap-3 text-white"
          >
            <LuSchool className="w-5 h-5 text-rose-500 animate-pulse" />
            KNIT, Sultanpur
          </span>

          <span
            className="border border-red-600 bg-gray-950/40 backdrop-blur-xl
            px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base
            flex items-center gap-3 text-white"
          >
            <SiHackaday className="w-5 h-5 text-red-500 animate-pulse" />
            24 Hour Hackathon
          </span>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-10">

        <h1
          className="font-display tracking-widest font-medium 
          text-2xl sm:text-3xl md:text-5xl text-gray-100 text-center"
        >
          HACK STARTS IN
        </h1>

        <Countdown />
      </div>

      </div>
     
    </section>
  );
};

export default Hero;





function FloatingSparks() {
    return (
        <>
            {Array.from({ length: 30 }).map((_, i) => (
                <span
                    key={i}
                    className="spark"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 200}%`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
        </>
    );
}
