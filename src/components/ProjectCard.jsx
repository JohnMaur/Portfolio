import { FaEye, FaLink } from "react-icons/fa";

const ProjectCard = ({ title, description, projectCard, isDarkMode, thumbnail, onViewClick }) => {

  return (
    <div className="transition-colors duration-500">

      {/* Featured Label */}
      <p
        className={`
          font-semibold font-palanquin text-base
          ${isDarkMode ? "text-textColor" : "text-gray-600"}
        `}
      >
        Featured Project
      </p>

      {/* Title */}
      <p
        className={`
          font-bold text-3xl font-palanquin
          ${isDarkMode ? "text-white" : "text-black"}
        `}
      >
        {title}
      </p>

      {/* Project Preview Box */}

      {projectCard ? (
        <div
          className={`
      relative mt-4 h-60 w-full rounded-lg cursor-pointer
      hover:h-64 transition-all duration-500 overflow-hidden group
      ${isDarkMode
              ? "border border-white bg-transparent"
              : "border border-black bg-white shadow-md"}
    `}
        >
          {/* Blurred Background */}
          {thumbnail && (
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backgroundImage: `url(${thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(20px) brightness(0.5)",
                zIndex: 0,
              }}
            />
          )}

          {/* Thumbnail Image */}
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 z-10"
            />
          )}

          {/* Dark Hover Overlay */}
          {thumbnail && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
            </div>
          )}

          {/* Bottom Icons */}
          <div className="absolute bottom-3 right-4 flex space-x-3 z-30">
            <div className="relative group">
              <FaEye
                onClick={(e) => { e.stopPropagation(); onViewClick?.(); }}
                className={`w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-300 ${isDarkMode ? "text-white" : "text-gray-700"
                  }`}
              />
              <span className="absolute -top-7 right-1/2 transform translate-x-1/2 
                     bg-black text-white text-xs rounded px-2 py-1 
                     opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300 whitespace-nowrap z-40">
                View Project
              </span>
            </div>
            <FaLink
              className={`w-5 h-5 opacity-50 cursor-not-allowed ${isDarkMode ? "text-white" : "text-gray-700"
                }`}
            />
          </div>
        </div>
      ) : null}

      {/* Description Box */}
      <div
        className={`
          rounded-lg p-4 px-5 mt-5 w-auto h-36 
          overflow-hidden hover:overflow-y-auto bg-custom-scrollbar
          transition-colors duration-500
          ${isDarkMode
            ? "bg-[#201335] text-white"
            : "bg-white text-gray-800 shadow-md"}
        `}
      >
        <p className="text-base font-palanquin">
          {description}
        </p>
      </div>

    </div>
  );
};

export default ProjectCard;