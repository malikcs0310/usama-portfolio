import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPhp, SiMysql } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    level: 95,
    color: "from-orange-500 to-red-500",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    level: 90,
    color: "from-blue-500 to-cyan-500",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    level: 85,
    color: "from-yellow-400 to-yellow-600",
    icon: <FaJs />,
  },
  {
    name: "React",
    level: 85,
    color: "from-cyan-400 to-blue-400",
    icon: <FaReact />,
  },
  {
    name: "Node.js",
    level: 80,
    color: "from-green-500 to-emerald-600",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    level: 75,
    color: "from-green-600 to-green-800",
    icon: <SiMongodb />,
  },
  {
    name: "Express.js",
    level: 80,
    color: "from-gray-700 to-gray-900",
    icon: <SiExpress />,
  },
  {
    name: "PHP",
    level: 70,
    color: "from-indigo-500 to-purple-600",
    icon: <SiPhp />,
  },
  {
    name: "MySQL",
    level: 75,
    color: "from-blue-600 to-indigo-700",
    icon: <SiMysql />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-20 sm:py-28"
    >
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

        {/* Skills Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group rounded-2xl bg-gray-900/70 backdrop-blur-md p-6 shadow-lg hover:shadow-cyan-500/20 transition transform hover:-translate-y-2"
            >
              {/* Icon with gradient circle */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r ${skill.color} text-white text-2xl shadow-md`}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-semibold text-white">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-300 font-medium">
                  {skill.level}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
