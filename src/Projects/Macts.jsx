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

  const webRef = useRef(null);
  const mobileRef = useRef(null);
  const deviceRef = useRef(null);
  const rfidCardRef = useRef(null);

  const [webVisible, setWebVisible] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [rfidCardVisible, setRfidCardVisible] = useState(false);

  const handleBack = () => navigate(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFullscreen = (videoRef) => {
    videoRef.current?.requestFullscreen?.();
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === webRef.current) setWebVisible(true);
          if (entry.target === mobileRef.current) setMobileVisible(true);
          if (entry.target === deviceRef.current) setDeviceVisible(true);
          if (entry.target === rfidCardRef.current) setRfidCardVisible(true);
        }
      });
    }, { threshold: 0.2 });

    if (webRef.current) observer.observe(webRef.current);
    if (mobileRef.current) observer.observe(mobileRef.current);
    if (deviceRef.current) observer.observe(deviceRef.current);
    if (rfidCardRef.current) observer.observe(rfidCardRef.current);
  }, []);

  return (
    <div className={`sm:px-28 max-sm:px-4 h-full ${isDarkMode ? "text-white" : "text-black"} pb-20`}>
      <div className="flex justify-end pt-5">
        <button
          onClick={handleBack}
          className={`
    flex items-center gap-2 px-5 py-3 rounded-xl font-semibold 
    backdrop-blur-lg bg-gradient-to-r 
    ${isDarkMode
              ? "from-purple-700/50 to-blue-700/50 text-white border border-white/20 hover:from-purple-600/70 hover:to-blue-600/70"
              : "from-purple-200/50 to-blue-200/50 text-gray-800 border border-gray-200 hover:from-purple-300/70 hover:to-blue-300/70"
            }
    shadow-lg hover:scale-105 transition-all duration-300
  `}
        >
          <FaArrowLeft className="w-5 h-5" />
          <span className="text-base">Back</span>
        </button>
      </div>


      <h1 className="text-4xl font-bold mb-6">Macts</h1>

      {/* Project Description */}
      <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        Project Overview
      </h2>
      <p className={`text-base leading-relaxed ${isDarkMode ? "text-gray-200" : "text-black"} font-palanquin`}>
        The <strong>Multifunctional Access Control and Tracking System (MACTs)</strong> leverages
        <strong> RFID (Radio-Frequency Identification) technology</strong> to enhance access control
        and tracking capabilities across university settings. This innovative system provides
        comprehensive solutions for classroom attendance, gatepass issuance, library in/out records,
        gym in/out management, and registrar student information management, streamlining operations
        and improving security for students and staff.
      </p>

      {/* WEB APPLICATION */}
      <div
        className="flex-1 flex flex-col sm:flex-row sm:space-x-8 space-y-10 sm:space-y-0 py-16 relative "
        ref={webRef}
      >
        {/* Decorative Background Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* ================= DESCRIPTION SECTION ================= */}
        <div
          className={`sm:w-1/2 flex flex-col justify-center sm:px-10  backdrop-blur-xl shadow-xl transform transition-all duration-1000 ease-out
            ${webVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
            }
            ${isDarkMode ? "text-white" : "text-gray-800"}
        `}
        >
          {/* Title */}
          <h3 className="text-2xl font-bold mb-6 relative inline-block">
            Web Application (Admin & Faculty)
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
          </h3>

          {/* Description */}
          <p className="text-base leading-relaxed font-palanquin">
            The <strong>Web Application</strong> of MACTs is designed for Admin and
            Faculty users, including Teachers, Guards (for gatepass management),
            Librarians, Gym personnel, and Registrar staff.
          </p>

          {/* Feature List */}
          <ul className="mt-6 space-y-3">
            {[
              "Manage classroom attendance and student participation",
              "Issue and verify gatepasses efficiently",
              "Track library check-ins and check-outs",
              "Monitor gym access and activity records",
              "Access and update registrar student information",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* Bottom Highlight Box */}
          <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <p className="text-sm">
              This system streamlines administrative tasks while improving security
              and operational efficiency.
            </p>
          </div>
        </div>

        {/* ================= VIDEO SECTION ================= */}
        <div
          className={`sm:w-1/2 mt-10 relative transform transition-all duration-1000 ease-out
            ${webVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
            }
          `}
        >
          {/* Caption */}
          <p className={`mb-2 text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Watch the video below
          </p>
          <div
            className={`relative h-60 w-full rounded-md overflow-hidden cursor-pointer transition-all duration-500 hover:h-64 hover:mt-4 hover:-translate-y-3 hover:shadow-2xl flex justify-center items-center shadow-xl ${isDarkMode ? "bg-[#201335]" : "bg-white"
              }`}
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
            {/* Blurred Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/webapp.png?authuser=0)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(25px) brightness(0.5)",
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

            {/* Thumbnail */}
            <img
              src="https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/webapp.png?authuser=0"
              alt="Web App"
              className={`absolute w-full h-full object-contain z-20 transition-opacity duration-300 ${hoverWeb ? "opacity-0" : "opacity-100"
                }`}
            />

            {/* Fullscreen Icon */}
            <FaExpand className="absolute bottom-3 right-3 text-white z-30 cursor-pointer hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* MOBILE APPLICATION */}
      <div
        className="flex-1 flex flex-col sm:flex-row sm:space-x-8 space-y-10 sm:space-y-0 py-16 relative"
        ref={mobileRef}
      >
        {/* Decorative Background Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* ================= VIDEO SECTION (Slides From Left) ================= */}
        <div
          className={`sm:w-1/2 mt-10 relative transform transition-all duration-1000 ease-out
    ${mobileVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
  `}
        >
          {/* Caption */}
          <p className={`mb-2 text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Watch the video below
          </p>
          <div
            className={`relative h-60 w-full rounded-md overflow-hidden cursor-pointer transition-all duration-500 hover:h-64 hover:mt-4 hover:-translate-y-3 hover:shadow-2xl flex justify-center items-center shadow-xl ${isDarkMode ? "bg-[#201335]" : "bg-white"
              }`}
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
            {/* Blurred Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/webapp.png?authuser=0)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(25px) brightness(0.5)",
                zIndex: 0,
              }}
            />

            {/* Mobile Video */}
            <video
              ref={mobileVideoRef}
              className="absolute w-full h-full object-contain z-10"
              src="https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/MobileApp.mp4?authuser=0"
              muted
              playsInline
              loop
              poster="https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/MobileApp.mp4?authuser=0#t=0.0"
            />

            {/* Fullscreen Icon */}
            <FaExpand className="absolute bottom-3 right-3 text-white z-30 cursor-pointer hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* ================= DESCRIPTION SECTION (Slides From Right) ================= */}
        <div
          className={`sm:w-1/2 flex flex-col justify-center sm:px-10 backdrop-blur-xl shadow-xl transform transition-all duration-1000 ease-out
      ${mobileVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
      ${isDarkMode ? "text-white" : "text-gray-800"}
  `}
        >
          <h3 className="text-2xl font-bold mb-6 relative inline-block">
            Mobile Application (Students)
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
          </h3>

          <p className="text-base leading-relaxed font-palanquin">
            The <strong>MACTs Mobile Application</strong> is designed for students,
            allowing them to manage their RFID activities, monitor access logs, and
            register personal devices conveniently using their smartphones.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Student Profile Registration",
              "Real-time RFID Activity Dashboard",
              "Secure Attendance with Code Verification",
              "Activity Reports & History",
              "Device Registration with RFID Integration",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <p className="text-sm">
              Students can securely monitor their campus access and activity records
              in real-time through the MACTs Mobile App.
            </p>
          </div>
        </div>
      </div>

      {/* DEVICE */}
      <div
        className="flex-1 flex flex-col sm:flex-row sm:space-x-8 space-y-10 sm:space-y-0 py-16 relative"
        ref={deviceRef}
      >
        {/* Decorative Background Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* ================= DESCRIPTION SECTION ================= */}
        <div
          className={`sm:w-1/2 flex flex-col justify-center sm:px-10 backdrop-blur-xl shadow-xl transform transition-all duration-1000 ease-out
      ${deviceVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
      ${isDarkMode ? "text-white" : "text-gray-800"}
  `}
        >
          {/* Title */}
          <h3 className="text-2xl font-bold mb-6 relative inline-block">
            Portable Student RFID Device
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
          </h3>

          {/* Description */}
          <p className="text-base leading-relaxed font-palanquin">
            This compact device allows students to easily tap and record their attendance or access logs.
            It is built with an ESP8266 Wi-Fi module, RFID reader, lithium-ion battery, TP4056 charger, switch, and solid wiring inside a junction box.
          </p>

          <p className="mt-4 text-base leading-relaxed font-palanquin">
            The ESP8266 handles data processing, the battery powers the device, the TP4056 manages charging,
            and the switch controls power. The RFID reader scans student tags, making the device simple, efficient, and reliable.
          </p>
        </div>

        {/* ================= IMAGE SECTION ================= */}
        <div
          className={`sm:w-1/2 mt-10 relative transform transition-all duration-1000 ease-out
      ${deviceVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
    `}
        >
          <div
            className={`relative h-60 w-full rounded-md overflow-hidden flex justify-center items-center shadow-xl transition-all duration-500
        ${isDarkMode ? "bg-[#201335]" : "bg-white"}
      `}
          >
            {/* Blurred Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/device.png?authuser=0)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(25px) brightness(0.5)",
                zIndex: 0,
              }}
            />

            {/* Main Image */}
            <img
              src="https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/device.png?authuser=0"
              alt="Portable Student RFID Device"
              className="absolute w-full h-full object-contain z-10"
            />
          </div>
        </div>
      </div>

      {/* RFID CARD & DEVICE STICKER */}
      <div
        className="flex-1 flex flex-col sm:flex-row sm:space-x-8 space-y-10 sm:space-y-0 py-16 relative"
        ref={rfidCardRef}
      >
        {/* Decorative Background Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* ================= IMAGE SECTION ================= */}
        <div
          className={`sm:w-1/2 mt-10 relative transform transition-all duration-1000 ease-out
      ${rfidCardVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
    `}
        >
          <div
            className={`relative h-60 w-full rounded-md overflow-hidden flex justify-center items-center shadow-xl transition-all duration-500
       ${isDarkMode ? "bg-[#201335]" : "bg-white"}
      `}
          >
            {/* Blurred Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/device.png?authuser=0)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(25px) brightness(0.5)",
                zIndex: 0,
              }}
            />

            {/* Main Image */}
            <img
              src="https://storage.cloud.google.com/insertimage-97b1f.appspot.com/macts_video/pictures/Rfid-Card-Tags.jpg?authuser=0"
              alt="RFID Card & Sticker"
              className="absolute w-full h-full object-contain z-10"
            />
          </div>
        </div>

        {/* ================= DESCRIPTION SECTION ================= */}
        <div
          className={`sm:w-1/2 flex flex-col justify-center sm:px-10 backdrop-blur-xl shadow-xl transform transition-all duration-1000 ease-out
            ${rfidCardVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
            ${isDarkMode ? "text-white" : "text-gray-800"}
          `}
        >
          {/* Title */}
          <h3 className="text-2xl font-bold mb-6 relative inline-block">
            RFID Card & Device Sticker
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
          </h3>

          {/* Description */}
          <p className="text-base leading-relaxed font-palanquin">
            Students use a compact <strong>RFID card</strong> to easily tap and record their attendance or access logs.
            For personal devices like laptops, a <strong>small RFID sticker</strong> is used to register and track them securely.
          </p>

          <p className="mt-4 text-base leading-relaxed font-palanquin">
            The RFID system is powered by an ESP8266 Wi-Fi module which handles data processing, while the battery and TP4056 charger manage power.
            The RFID reader scans student cards or stickers, making attendance and device tracking simple, efficient, and reliable.
          </p>
        </div>
      </div>


    </div>
  );
};

export default Macts;