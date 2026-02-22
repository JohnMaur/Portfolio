import { useRef } from 'react';
import { profile, gradient, arrow } from "../constant";
import useOnScreen from '../custom-hook/useOnScreen';

const About = ({ isDarkMode }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`
        sm:p-14 px-4 sm:px-28
        transition-opacity duration-1000
        ${isDarkMode ? "bg-primary" : "bg-gray-100"}
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="flex max-sm:items-center">
        {/* Profile Images */}
        <div className="flex w-60 h-72 justify-center items-center relative">
          <img
            src={gradient}
            className="absolute sm:w-60 sm:h-72 max-sm:w-36 max-sm:h-44"
          />
          <img
            src={arrow}
            className="absolute h-36 w-h-36 top-[-1.8rem] left-32 max-sm:hidden"
          />
          <img
            src={profile}
            className="sm:w-32 sm:h-32 max-sm:w-20 z-10 rounded-full shadow-lg"
            alt="profile"
          />
        </div>

        {/* Text content */}
        <div className="ml-4 max-sm:w-[300px]">
          <p className={`text-base font-palanquin max-sm:text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Hello!, I am
            <span className={`${isDarkMode ? "text-textColor" : "text-indigo-700"} font-semibold`}> John Maur</span>
          </p>

          <p className={`font-palanquin sm:mt-[3.1rem] text-base underline max-sm:text-sm ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            A Developer who
          </p>

          <p className={`font-palanquin text-5xl max-sm:text-[1.4rem] font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Considers a tool
          </p>
          <p className={`font-palanquin text-5xl max-sm:text-[1.4rem] font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            by its <span className={`${isDarkMode ? "text-textColor" : "text-indigo-700"} font-semibold`}>simplicity</span><span className="tracking-widest">...</span>
          </p>

          <p className={`font-palanquin text-[10px] mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Because if it’s too complex, creativity gets locked away.
          </p>
        </div>
      </div>

      {/* About description */}
      <div className="mt-7 sm:ml-12">
        <p className={`font-palanquin sm:text-5xl max-sm:text-[1.4rem] font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          I'm aspiring a Software Engineer!
        </p>
        <p className={`font-palanquin text-base sm:mt-2 max-sm:mt-1 max-sm:text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          Currently, I'm a student of BTVTEICT major in Computer Programming
        </p>

        <p className={`font-palanquin text-base sm:mt-4 sm:pr-60 max-sm:mt-2 max-sm:text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          A self-taught developer with nearly three years of hands-on experience from my college days, building innovative and user-friendly mobile apps and web applications. Working with React, React Native, and Node.js, I create dynamic and responsive solutions that meet modern needs.
        </p>
      </div>
    </div>
  );
};

export default About;
