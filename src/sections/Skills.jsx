import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaFigma, FaPython, FaGit, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skillsData = [
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-500 hover:bg-blue-900" },
  { icon: <FaHtml5 />, name: "HTML", color: "text-red-500 hover:bg-pink-900" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500 hover:bg-yellow-900" },
  { icon: <FaReact />, name: "React", color: "text-blue-400 hover:bg-black-900" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-teal-400 hover:bg-orange-900" },
  { icon: <FaFigma />, name: "Figma", color: "text-purple-400 "},
  { icon: <FaPython />, name: "Python", color: "text-blue-500" },
  { icon: <FaGit />, name: "Git", color: "text-orange-500" },
  { icon: <FaGithub />, name: "Github", color: "text-orange-500" },
  { icon: <FaDatabase />, name: "Database", color: "text-orange-500" },
];

const SkillCard = ({ icon, name, color }) => (
  <div
    className="bg-white bg-opacity-90 shadow-lg rounded-lg p-4 flex flex-col items-center space-y-2 
               hover:bg-blue-400 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
    tabIndex="0" // Enables focus on the card
  >
    <div
      className={`text-3xl ${color} transition-transform duration-300 transform 
                  hover:scale-125 focus:scale-125`}
    >
      {icon}
    </div>
    <span className="text-gray-800 font-medium">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,code')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
