import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* div for text */}
      <div className="absolute inset-0 top-24 sm:top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-row items-start gap-5 sm:gap-6 lg:gap-8">
        <div 
          className='flex flex-col justify-center items-center mt-6 sm:mt-5 ml-4 sm:ml-8'
        >
          {/* circle and line */}
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-20 xs:h-24 sm:h-80 violet-gradient-line' />
        </div>

        <div className="flex-1">  
          <h1 className="font-black text-white text-[26px] xs:text-[30px] sm:text-[50px] md:text-[60px] lg:text-[80px] leading-tight lg:leading-none mt-6 sm:mt-2 text-left">
            Hi, I'm <span className='text-[#915EFF]'>Shaurya</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium text-[12px] xs:text-[13px] sm:text-[18px] md:text-[22px] lg:text-[30px] leading-4 xs:leading-5 sm:leading-7 md:leading-8 lg:leading-10 mt-2 text-left pr-4 sm:pr-0">
            I develop 3D visuals, user<br />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute bottom-6 xs:bottom-8 sm:bottom-12 lg:bottom-16 w-full flex justify-center items-center'>
        <a href='#about' className='block'>
          <div className='w-7 h-11 xs:w-8 xs:h-12 sm:w-9 sm:h-16 rounded-3xl border-2 xs:border-4 border-secondary flex justify-center items-start p-1 xs:p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;