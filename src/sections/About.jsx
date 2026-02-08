import { useRef } from 'react';
import { profile, gradient, arrow } from "../constant";
import useOnScreen from '../custom-hook/useOnScreen';

const About = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  
  return (
    <div ref={ref} className={`sm:p-14 px-4 sm:px-28 bg-primary transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      <div className="flex max-sm:items-center">
        <div className="flex w-60 h-72 justify-center items-center">
          <img
            src={gradient}
            className="absolute sm:w-60 sm:h-72 max-sm:w-36 max-sm:h-44"
          />
          <img
            src={arrow}
            className="absolute h-36 w-h-36 top-[5.1rem] left-60 max-sm:hidden"
          />
          <img
            src={profile}
            className="sm:w-32 sm:h-32 max-sm:w-20 z-10"
            alt="profile"
          />
        </div>


        <div className="ml-4 max-sm:w-[300px]">
          <p className="text-white text-base font-palanquin max-sm:text-sm">Hello!, I am
            <span className="text-textColor"> John Maur</span>
          </p>

          <p className="text-white font-palanquin sm:mt-[3.1rem] text-base underline max-sm:text-sm">A Developer who</p>

          <p className="text-white font-palanquin text-5xl max-sm:text-[1.4rem] font-semibold">Considers a tool </p>
          <p className="text-white font-palanquin text-5xl max-sm:text-[1.4rem] font-semibold">by its <span className="text-textColor">simplicity</span><span className="tracking-widest">...</span></p>
          <p className="text-white font-palanquin text-[10px] mt-2">Because if it’s too complex, creativity gets locked away.</p>
        </div>
      </div>

      <div className="mt-7 sm:ml-12">
        <p className="text-white font-palanquin sm:text-5xl max-sm:text-[1.4rem] font-semibold">I'm aspiring a Software Engineer!</p>
        <p className="text-white font-palanquin text-base sm:mt-2 max-sm:mt-1 max-sm:text-sm">currently, I'm a student of BTVTEICT major in Computer programming</p>

        <p className="text-white font-palanquin text-base sm:mt-4 sm:pr-60 max-sm:mt-2 max-sm:text-sm">A self-taught developer with nearly three years of hands-on experience from my college days, building innovative and user-friendly mobile apps and web applications. Working with React, React Native, and Node.js, I create dynamic and responsive solutions that meet modern needs.</p>
      </div>
    </div>
  )
}

export default About