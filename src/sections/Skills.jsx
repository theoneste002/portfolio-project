import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaFigma, FaPython, FaGit } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skillsData = [
  { icon: <FaJs className="text-yellow-500 text-4xl" />, name: "JavaScript", level: "Advanced" },
  { icon: <FaHtml5 className="text-red-500 text-4xl" />, name: "HTML", level: "Middle" },
  { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, name: "CSS", level: "Beginner" },
  { icon: <FaReact className="text-blue-400 text-4xl" />, name: "React", level: "Intermediate" },
  { icon: <SiTailwindcss className="text-teal-400 text-4xl" />, name: "Tailwind", level: "Intermediate" },
  { icon: <FaFigma className="text-purple-400 text-4xl" />, name: "Figma", level: "Intermediate" },
  { icon: <FaPython className="text-blue-500 text-4xl" />, name: "Python", level: "Intermediate" },
  { icon: <FaGit className="text-orange-500 text-4xl" />, name: "Git", level: "Intermediate" },
];

const SkillCard = ({ icon, name, level }) => (
  <div
    id="skills"
    className="bg-green-500 w-40 h-48 shadow-sm rounded-lg hover:bg-blue-400 flex flex-col items-center gap-3 ">
    {icon}
    <span className="text-white text-md font-semibold">{name}</span>
    <button className="bg-blue-800 text-emerald-50 py-1 px-4 rounded-lg text-sm">{level}</button>
  </div>
);

const Skills = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-10">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} level={skill.level} />
        ))}
      </div>
    </main>
  );
};

export default Skills;




