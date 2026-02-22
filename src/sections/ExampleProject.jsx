import { useRef } from 'react';
import useOnScreen from '../custom-hook/useOnScreen';
import ProjectCard from "../components/ProjectCard"
import { useNavigate } from "react-router-dom";

const ExampleProject = ({ isDarkMode }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const navigate = useNavigate();

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      ref={ref}
      className={`
        sm:px-28 max-sm:px-4 
        transition-opacity duration-1000
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${isDarkMode ? "bg-primary text-white" : "bg-gray-100 text-black"}
      `}
    >
      {/* Macts */}
      <div className="flex space-x-7 items-center py-5">
        <div className="sm:w-1/2">
          <ProjectCard
            isDarkMode={isDarkMode}
            title="MACTs"
            projectCard={true}
            description="The Multifunctional Access Control and Tracking System through RFID-Driven Technology presents a comprehensive system designed to enhance access control and tracking capabilities across in the university settings. Leveraging RFID (Radio-Frequency Identification) technology, this innovative system offers multifaceted solutions for classroom attendance, gatepass issuance, library in/out records management, gym in/out records management, and registrar student information management."
            thumbnail="https://firebasestorage.googleapis.com/v0/b/insertimage-97b1f.appspot.com/o/macts_video%2Fpictures%2Fwebapp.png?alt=media"
            onViewClick={() => navigate("/macts")}
          />
        </div>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleFullscreen}
          className={`
    max-sm:hidden mt-10 h-60 sm:w-1/2 rounded-lg
    overflow-hidden transition-all duration-500 hover:h-64
    cursor-pointer group relative flex justify-center items-center
    ${isDarkMode ? "border border-white" : "border border-black bg-white"}
  `}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            src="https://firebasestorage.googleapis.com/v0/b/insertimage-97b1f.appspot.com/o/macts_video%2FMobileApp.mp4?alt=media"
            muted
            playsInline
          />

          {/* Optional Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-semibold">Play Preview</span>
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="flex sm:space-x-5 justify-center py-5">
        <div className={`
          max-sm:hidden mt-10 h-60 w-1/2 rounded-lg cursor-pointer hover:h-64 transition-all duration-500
          ${isDarkMode ? "border border-white" : "border border-black bg-white"}
        `}>
        </div>

        <div className="sm:w-1/2 max-sm:w-full">
          <ProjectCard
            isDarkMode={isDarkMode}
            title="MACTs"
            projectCard={true}
            description="The Multifunctional Access Control and Tracking System through RFID-Driven Technology presents a comprehensive system designed to enhance access control and tracking capabilities across in the university settings. Leveraging RFID (Radio-Frequency Identification) technology, this innovative system offers multifaceted solutions for classroom attendance, gatepass issuance, library in/out records management, gym in/out records management, and registrar student information management."
          
          />
        </div>
      </div>

      {/* THIRD ROW */}
      <div className="flex space-x-7 items-center py-5">
        <div className="sm:w-1/2 max-sm:w-full">
          <ProjectCard
            isDarkMode={isDarkMode}
            title="MACTs"
            projectCard={true}
            description="The Multifunctional Access Control and Tracking System through RFID-Driven Technology presents a comprehensive system designed to enhance access control and tracking capabilities across in the university settings. Leveraging RFID (Radio-Frequency Identification) technology, this innovative system offers multifaceted solutions for classroom attendance, gatepass issuance, library in/out records management, gym in/out records management, and registrar student information management."
            
          />
        </div>

        <div className={`
          max-sm:hidden mt-10 h-60 w-1/2 rounded-lg cursor-pointer hover:h-64 transition-all duration-500
          ${isDarkMode ? "border border-white" : "border border-black bg-white"}
        `}>
        </div>
      </div>
    </div>
  )
}

export default ExampleProject