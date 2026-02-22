import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaExpand } from "react-icons/fa";

const Macts = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const webVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const [hoverWeb, setHoverWeb] = useState(false);
  const [hoverMobile, setHoverMobile] = useState(false);

  const handleBack = () => navigate(-1);

  useEffect(() => {
    if (location.state?.scrollY !== undefined) {
      window.scrollTo(0, location.state.scrollY);
    }
  }, []);

  const handleFullscreen = (videoRef) => {
    videoRef.current?.requestFullscreen?.();
  };

  return (
    <div className={`sm:px-28 max-sm:px-4 min-h-screen ${isDarkMode ? "text-white" : "text-black"}`}>
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-white hover:scale-110 transition-transform duration-300 py-4"
      >
        <FaArrowLeft />
        <span className="text-base">Back</span>
      </button>

      <h1 className="text-4xl font-bold mb-6">Macts</h1>

      <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0">

        {/* Web App */}
        <div className="sm:w-1/2">
          <p className="mb-2 font-semibold text-lg">Web Application</p>
          <div
            className={`h-60 w-full rounded-lg overflow-hidden relative cursor-pointer transition-all duration-500 hover:h-64 flex justify-center items-center shadow-lg ${isDarkMode ? "bg-[#201335]" : "bg-white"}`}
            onMouseEnter={() => {
              setHoverWeb(true);
              webVideoRef.current?.play();
            }}
            onMouseLeave={() => {
              setHoverWeb(false);
              webVideoRef.current?.pause();
              webVideoRef.current.currentTime = 0;
            }}
            onClick={() => handleFullscreen(webVideoRef)}
          >
            {/* Blurred background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/webapp.png?authuser=0)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(20px) brightness(0.5)",
                zIndex: 0,
              }}
            />

            {/* Video */}
            <video
              ref={webVideoRef}
              className="absolute w-full h-full object-contain z-10"
              src="https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/WebApp.mp4?authuser=0"
              muted
              playsInline
              loop
            />

            {/* Thumbnail on top */}
            <img
              src="https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/webapp.png?authuser=0"
              alt="Web App"
              className={`absolute w-full h-full object-contain z-20 transition-opacity duration-300 ${hoverWeb ? "opacity-0" : "opacity-100"
                }`}
            />

            {/* Fullscreen Icon */}
            <FaExpand className="absolute bottom-2 right-2 text-white z-30 cursor-pointer hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Mobile App */}
        <div className="sm:w-1/2">
          <p className="mb-2 font-semibold text-lg">Mobile Application</p>
          <div
            className={`h-60 w-full rounded-lg overflow-hidden relative cursor-pointer transition-all duration-500 hover:h-64 flex justify-center items-center shadow-lg ${isDarkMode ? "bg-[#201335]" : "bg-white"}`}
            onMouseEnter={() => {
              setHoverMobile(true);
              mobileVideoRef.current?.play();
            }}
            onMouseLeave={() => {
              setHoverMobile(false);
              mobileVideoRef.current?.pause();
              mobileVideoRef.current.currentTime = 0;
            }}
            onClick={() => handleFullscreen(mobileVideoRef)}
          >
            {/* Blurred background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/mobileapp.png?authuser=0)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(20px) brightness(0.5)",
                zIndex: 0,
              }}
            />

            {/* Video */}
            <video
              ref={mobileVideoRef}
              className="absolute w-full h-full object-contain z-10"
              src="https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/MobileApp.mp4?authuser=0"
              muted
              playsInline
              loop
            />

            {/* Thumbnail on top */}
            <img
              src="https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/mobileapp.png?authuser=0"
              alt="Mobile App"
              className={`absolute w-full h-full object-contain z-20 transition-opacity duration-300 ${hoverMobile ? "opacity-0" : "opacity-100"
                }`}
            />

            {/* Fullscreen Icon */}
            <FaExpand className="absolute bottom-2 right-2 text-white z-30 cursor-pointer hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className={`mt-8 p-6 rounded-2xl shadow-lg border ${isDarkMode ? "bg-[#201335] border-gray-700" : "bg-gray-50 border-gray-200"}`}>
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          Project Overview
        </h2>
        <p className={`text-base leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-700"} font-palanquin`}>
          The <strong>Multifunctional Access Control and Tracking System (MACTs)</strong> leverages
          <strong> RFID (Radio-Frequency Identification) technology</strong> to enhance access control
          and tracking capabilities across university settings. This innovative system provides
          comprehensive solutions for classroom attendance, gatepass issuance, library in/out records,
          gym in/out management, and registrar student information management, streamlining operations
          and improving security for students and staff.
        </p>
      </div>
    </div>
  );
};

export default Macts;