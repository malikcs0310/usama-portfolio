import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "Freelance / Academic Projects",
    period: "2022 - Present",
    description:
      "Built and deployed multiple web projects during university and through freelance work. Experienced in creating responsive, scalable, and modern applications using React, Node.js, Express, MongoDB, PHP, and MySQL.",
  },
  {
    title: "Self-Directed Projects & Learning",
    company: "Personal / Freelance Work",
    period: "2021 - Present",
    description:
      "Gained hands-on experience by building real-world projects including an E-commerce platform, School Management System, and Personal Portfolio. Skilled in React, Tailwind CSS, Node.js, Express, PHP, and MySQL.",
  },
];

const education = [
  {
    degree: "ADP in Computer Science",
    institution: "Superior University, Lahore",
    period: "2023 - 2025",
    description:
      "Completed an Associate Degree Program (ADP) in Computer Science, building strong expertise in web development, databases, and modern programming languages. Planning to pursue BS Computer Science next.",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Aspire Group of Colleges, Lahore",
    period: "2018 - 2020",
    description:
      "Studied Computer Science, Mathematics, and Physics with a strong foundation in programming and problem-solving.",
  },
];

export default function ExperienceEducation() {
  return (
    <section
      id="experience-education"
      className="relative w-full bg-neutral-950 text-white py-20 sm:py-28"
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
          Experience & <span className="text-cyan-400">Education</span>
        </motion.h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

        <div className="mt-14 grid gap-16 sm:grid-cols-2">
          {/* Experience */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400">
              <Briefcase className="h-5 w-5" /> Experience
            </h3>
            <div className="mt-6 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-cyan-500 pl-4"
                >
                  <h4 className="text-lg font-semibold">{exp.title}</h4>
                  <p className="text-sm text-white/70">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-violet-400">
              <GraduationCap className="h-5 w-5" /> Education
            </h3>
            <div className="mt-6 space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-violet-500 pl-4"
                >
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-white/70">
                    {edu.institution} • {edu.period}
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
