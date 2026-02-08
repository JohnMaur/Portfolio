import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaJava,
  FaPython,
  FaPhp,
} from "react-icons/fa";

import {
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiThreedotjs,
  SiKotlin,
  SiCplusplus,
  SiMysql,
  SiCodeigniter,
} from "react-icons/si";

const skills = [
  { icon: FaHtml5, name: "HTML" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiRedux, name: "Redux" },
  { icon: FaGitAlt, name: "Git" },
  { icon: SiMysql, name: "SQL" },
  { icon: FaPython, name: "Python" },
  { icon: FaJava, name: "Java" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiKotlin, name: "Kotlin" },
  { icon: FaPhp, name: "PHP" },
  { icon: SiThreedotjs, name: "Three.js" },
  { icon: SiCodeigniter, name: "CodeIgniter" },
];

const Skills = ({ isDarkMode }) => {
  return (
    <div className="w-full overflow-hidden py-10">
      {/* STOP animation when hovering anywhere on the row */}
      <div className="flex w-max animate-scrollX gap-14 hover:[animation-play-state:paused]">
        {[...skills, ...skills].map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              <Icon
                className={`text-5xl transition-all duration-300
                  group-hover:scale-125
                  group-hover:text-blue-500
                  ${isDarkMode ? "text-white" : "text-gray-800"}`}
              />

              <span
                className={`mt-2 text-sm font-medium transition-colors duration-300
                  group-hover:text-blue-500
                  ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Skills;
