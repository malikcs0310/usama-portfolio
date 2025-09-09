import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import portfolio from "../assets/portfolio.png";
import orderhive from "../assets/OrderHive.png";
import ilmbase from "../assets/ilmBase.png";
const projects = [
  // {
  //   title: "E-Commerce Website",
  //   description:
  //     "A modern e-commerce platform with shopping cart, payment gateway, and admin dashboard.",
  //   image: "/images/project1.jpg",
  //   live: "https://github.com/malikcs0310?tab=repositories", // Live demo link
  //   github: "https://github.com/malikcs0310?tab=repositories", // GitHub repo link
  // },
  {
    title: "OrderHive",
    description:
      "An e-commerce platform with product management, cart, checkout and payment system.",
    image: orderhive,
    live: "https://github.com/malikcs0310?tab=repositories", // agar live link hai to yahan daalo
    github: "https://github.com/malikcs0310?tab=repositories",
  },

  {
    title: "ilmBase-School Management System",
    description:
      "Full-stack web app for managing students, classes, and exams with clean UI.",
    image: ilmbase,
    live: "https://github.com/malikcs0310?tab=repositories",
    github: "https://github.com/malikcs0310?tab=repositories",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and achievements with animations.",
    image: portfolio,
    live: "https://usama-portfolio-one.vercel.app/",
    github: "https://github.com/malikcs0310?tab=repositories",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-gray-50 text-gray-900 py-20 sm:py-28"
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
          My <span className="text-cyan-600">Projects</span>
        </motion.h2>

        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

        {/* Grid */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cyan-600 transition">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm font-medium text-cyan-600 hover:text-violet-600 transition"
                  >
                    View Project →
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 hover:bg-cyan-500 hover:text-white text-gray-700 shadow-sm transition"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
