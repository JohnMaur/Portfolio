import { useRef } from "react";
import { FaMobileAlt, FaGlobe, FaPaintBrush, FaDatabase, FaServer } from "react-icons/fa";
import { SiApachespark } from "react-icons/si"; // for API integration icon
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

        {/* Mobile Layout */}
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
          <Card
            isDarkMode={isDarkMode}
            degreeAngle="160deg"
            icon={SiApachespark}
            title="API Integration"
            description="Integrating third-party APIs to extend functionality and enhance user experience across platforms."
          />
          <Card
            isDarkMode={isDarkMode}
            degreeAngle="320deg"
            icon={FaDatabase}
            title="Database Design"
            description="Well-structured, optimized databases with proper schema design using MongoDB and MySQL for fast data access."
          />
          <Card
            isDarkMode={isDarkMode}
            degreeAngle="160deg"
            icon={FaServer}
            title="Full Stack Solution"
            description="Complete end-to-end web and mobile solutions using React, React Native, and Node.js."
          />
        </div>

        {/* Desktop Layout */}
        <div className="max-sm:hidden space-y-3">
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
          <div className="flex space-x-3">
            <Card
              isDarkMode={isDarkMode}
              degreeAngle="160deg"
              icon={SiApachespark}
              title="API Integration"
              description="Integrating third-party APIs to extend functionality and enhance user experience across platforms."
            />
            <Card
              isDarkMode={isDarkMode}
              degreeAngle="320deg"
              icon={FaDatabase}
              title="Database Design"
              description="Well-structured, optimized databases with proper schema design using MongoDB and MySQL for fast data access."
            />
            <Card
              isDarkMode={isDarkMode}
              degreeAngle="160deg"
              icon={FaServer}
              title="Full Stack Solution"
              description="Complete end-to-end web and mobile solutions using React, React Native, and Node.js."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;