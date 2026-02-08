// const Card = ({ degreeAngle }) => {
//   return (
//     <div 
//       className={`h-40 w-96 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:border-2 hover:border-cyan-400`}
//       style={{ 
//         background: `linear-gradient(${degreeAngle}, #37116B, #130428)`
//       }}
//     >
//       {/* Your content here */}
//     </div>
//   )
// }

// export default Card;

const Card = ({ degreeAngle, icon: Icon, title, description, isDarkMode }) => {
  const gradient = isDarkMode
    ? `linear-gradient(${degreeAngle}, #37116B, #130428)` // dark mode gradient
    : `linear-gradient(${degreeAngle}, #ffffff, #f1f5f9)`; // light mode gradient

  return (
    <div
      className={`
        group relative overflow-hidden
        sm:h-52 sm:w-1/3 max-sm:w-full max-sm:h-52
        rounded-lg cursor-pointer
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        hover:border-2
        ${isDarkMode ? "hover:border-cyan-400" : "hover:border-indigo-400 shadow-md hover:shadow-xl"}
      `}
      style={{ background: gradient }}
    >
      {/* Center content */}
      <div className="flex flex-col items-center text-center transition-all duration-300 group-hover:-translate-y-6">
        <Icon
          className={`
            text-5xl mb-3 transition-transform duration-300
            ${isDarkMode ? "text-white group-hover:text-cyan-400" : "text-black group-hover:text-indigo-500"}
          `}
        />
        <p
          className={`font-semibold text-lg
            ${isDarkMode ? "text-white" : "text-black"}
          `}
        >
          {title}
        </p>
      </div>

      {/* Hidden description */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          translate-y-full group-hover:translate-y-0
          transition-transform duration-300 ease-out
          px-5 pb-5 text-center
        "
      >
        <p
          className={`
            text-sm leading-relaxed
            ${isDarkMode ? "text-gray-400" : "text-gray-700"}
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
