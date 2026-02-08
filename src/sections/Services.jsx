import { useRef } from "react";
import { FaMobileAlt, FaGlobe, FaPaintBrush } from "react-icons/fa";
import { Card } from "../components";
import useOnScreen from "../custom-hook/useOnScreen";

const Services = ({ isDarkMode }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`
        flex justify-center items-center h-auto
        sm:py-20 max-sm:py-10
        transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${isDarkMode ? "bg-primary" : "bg-gray-100"}
      `}
    >
      <div className="space-y-6 w-full sm:px-28 max-sm:px-3">
        <p
          className={`font-palanquin font-bold text-4xl
            ${isDarkMode ? "text-white" : "text-black"}`}
        >
          Services
        </p>

        {/* Mobile */}
        <div className="sm:hidden space-y-5">
          <Card
            isDarkMode={isDarkMode}
            degreeAngle="320deg"
            icon={FaMobileAlt}
            title="Mobile App"
            description="Building cross-platform mobile applications using React Native with smooth performance and modern design."
          />
          <Card
            isDarkMode={isDarkMode}
            degreeAngle="160deg"
            icon={FaGlobe}
            title="Web Application"
            description="Developing scalable and responsive web applications with modern frontend and backend technologies."
          />
          <Card
            isDarkMode={isDarkMode}
            degreeAngle="320deg"
            icon={FaPaintBrush}
            title="UI / UX Design"
            description="Designing clean, user-friendly, and responsive interfaces that deliver great user experiences."
          />
        </div>

        {/* Desktop */}
        <div className="max-sm:hidden">
          <div className="flex space-x-3">
            <Card
              isDarkMode={isDarkMode}
              degreeAngle="320deg"
              icon={FaMobileAlt}
              title="Mobile App"
              description="Building cross-platform mobile applications using React Native with smooth performance and modern design."
            />
            <Card
              isDarkMode={isDarkMode}
              degreeAngle="160deg"
              icon={FaGlobe}
              title="Web Application"
              description="Developing scalable and responsive web applications with modern frontend and backend technologies."
            />
            <Card
              isDarkMode={isDarkMode}
              degreeAngle="80deg"
              icon={FaPaintBrush}
              title="UI / UX Design"
              description="Designing clean, user-friendly, and responsive interfaces that deliver great user experiences."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
