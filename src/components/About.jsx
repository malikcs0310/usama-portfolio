import React from "react";
import { motion } from "framer-motion";
import usama from "../assets/usama1.jpg";
export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-white text-gray-800 py-20 sm:py-28"
    >
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          About <span className="text-cyan-600">Me</span>
        </motion.h2>

        {/* Underline */}
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

        {/* Content */}
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Hi, I'm Malik Usama
            </h3>

            <p className="text-gray-700 leading-relaxed">
              A passionate{" "}
              <span className="text-cyan-600 font-medium">
                Full-Stack Developer
              </span>{" "}
              from Lahore, Pakistan, specializing in the MERN stack. I build
              modern, responsive web applications with clean code and intuitive
              user experiences.
            </p>

            <p className="text-gray-700 leading-relaxed">
              My journey began with{" "}
              <span className="text-violet-600 font-medium">PHP & MySQL </span>
              and evolved to mastering the{" "}
              <span className="text-cyan-600 font-medium">MERN stack</span>.
              Through{" "}
              <span className="text-violet-600 font-medium">15+ projects</span>,
              I've developed strong problem-solving skills and a passion for
              creating impactful digital solutions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, I explore UI/UX trends and collaborate with
              other developers. I'm always learning and excited to take on new
              challenges in web development.
            </p>
          </motion.div>

          {/* Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative h-60 w-60 rounded-2xl overflow-hidden shadow-xl sm:h-72 sm:w-72">
              <img
                src={usama} // apni image ka path
                alt="About me"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
