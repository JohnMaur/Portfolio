// import { burgerIcon, burderIconDark } from "../constant"
// import { DarkmodeButton } from "../components";

// const Header = ({ isDarkMode, toggleMode }) => {
//   return (
//     <header className="flex-1 sticky w-full top-8 max-sm:top-0 z-50 flex justify-center sm:mb-4">
//       <div className="bg-header w-7/12 h-16 max-sm:w-full sm:rounded-full flex items-center justify-center px-20">

//         {/* Navigation */}
//         <nav className="hidden flex-1 sm:flex text-white font-medium gap-10 items-center justify-center">
//           <a href="#home" className="text-xl hover:text-accent transition">Home</a>
//           <a href="#about" className="text-xl hover:text-accent transition">About</a>
//           <a href="#projects" className="text-xl hover:text-accent transition">Projects</a>
//           <a href="#services" className="text-xl hover:text-accent transition">Services</a>
//           <a href="#contact" className="text-xl hover:text-accent transition">Contact</a>
//           <DarkmodeButton
//             isDarkMode={isDarkMode}
//             toggleMode={toggleMode}
//           />
//         </nav>


//         {/* Mobile Burger */}
//         <div className="sm:hidden flex items-center h-16 justify-end p-2">
//           <img
//             className="w-8 h-8 active:opacity-60"
//             src={burderIconDark}
//             alt="Burger Icon"
//           />
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header

import { burderIconDark } from "../constant"
import { DarkmodeButton } from "../components"
import {
  FiHome,
  FiUser,
  FiFolder,
  FiBriefcase,
  FiMail
} from "react-icons/fi"

const Header = ({ isDarkMode, toggleMode }) => {
  return (
    <header className="flex-1 sticky w-full top-8 max-sm:top-0 z-50 flex justify-center sm:mb-4">
      <div
        className={`
          w-7/12 h-16 max-sm:w-full sm:rounded-full
          flex items-center justify-center sm:px-20
          transition-colors duration-300
          ${isDarkMode ? "bg-header text-white" : "bg-white text-black shadow-md"}
        `}
      >
        {/* Navigation */}
        <nav className="hidden flex-1 sm:flex font-medium items-center justify-center">

          <NavItem icon={<FiHome />} label="Home" />
          <NavItem icon={<FiUser />} label="About" />
          <NavItem icon={<FiFolder />} label="Projects" />
          <NavItem icon={<FiBriefcase />} label="Services" />
          <NavItem icon={<FiMail />} label="Contact" />

          <DarkmodeButton
            isDarkMode={isDarkMode}
            toggleMode={toggleMode}
          />
        </nav>

        {/* Mobile Burger */}
        <div className="sm:hidden flex items-center h-16 justify-end p-2 flex-1 ">
          <img
            className="w-8 h-8 active:opacity-60"
            src={burderIconDark}
            alt="Burger Icon"
          />
        </div>
      </div>
    </header>
  )
}

const NavItem = ({ icon, label, isDarkMode }) => (
  <div className={`h-16 px-7 cursor-pointer flex items-center rounded-full transition-all duration-300 ease-out
                ${isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"}`}>
    <a
      href={`#${label.toLowerCase()}`}
      className="flex items-center justify-center gap-1 text-xl hover:text-accent transition hover:"
    >
      {icon}
      {label}
    </a>
  </div>
)

export default Header
