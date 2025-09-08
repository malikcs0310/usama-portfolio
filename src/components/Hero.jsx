import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Globe,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import hero from "../assets/usama2.jpg";

const Hero = ({
  name = "Malik Usama",
  role = "Full-Stack Web Developer • Lahore, Pakistan",
  summary = "Previously worked with PHP & MySQL, now focused on building modern and scalable applications with the MERN Stack (MongoDB, Express, React, Node.js).",
}) => {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[100vh] w-full overflow-hidden bg-neutral-950 text-white"
    >
      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background:radial-gradient(circle_at_20%_10%,#22d3ee22,transparent_25%),radial-gradient(circle_at_80%_20%,#60a5fa22,transparent_25%),radial-gradient(circle_at_50%_80%,#a78bfa22,transparent_25%)]" />

      <div className="container relative mx-auto flex min-h-[92vh] max-w-6xl flex-col-reverse items-center justify-center gap-10 px-6 pt-20 sm:px-8 md:flex-row md:gap-16">
        {/* 👉 Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm/6 text-white/80">
              Open to work & freelance
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I’m{" "}
            <span className="bg-sky-400 bg-clip-text text-transparent">
              {name}
            </span>
          </motion.h1>

          {/* Role & Summary */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-4 max-w-xl text-white/70 sm:text-lg"
          >
            {role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-3 max-w-xl text-white/70 text-sm sm:text-base"
          >
            {summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-3 justify-center md:justify-start"
          >
            <a href="#projects">
              <Button className="group h-11 rounded-2xl border-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 px-6 text-base font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a href="#contact">
              <Button className="h-11 rounded-2xl border border-white/15 bg-white/5 px-6 text-base font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
                Contact Me
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-6 flex items-center justify-center gap-3 md:justify-start"
          >
            {/* <IconLink href="https://yourwebsite.com" label="Website">
              <Globe className="h-5 w-5" />
            </IconLink> */}
            <IconLink href="https://github.com/malikcs0310" label="GitHub">
              <Github className="h-5 w-5" />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/malik-usama-9b7a10220/"
              label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </IconLink>
            <IconLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=malikcs0310@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Usama,%0A%0AI%20visited%20your%20portfolio%20and%20I%20am%20interested%20in%20your%20skills%20and%20projects.%20Can%20we%20connect%20to%20discuss%20further?"
              label="Email"
            >
              <Mail className="h-5 w-5" />
            </IconLink>
          </motion.div>
        </div>

        {/* 👉 Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="flex-1 relative flex justify-center"
        >
          <div className="relative grid place-items-center">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400/30 via-sky-400/20 to-violet-400/30 blur-2xl" />
            <div className="relative h-40 w-40 sm:h-56 sm:w-56 overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl">
              <img
                src={hero}
                alt="Malik Usama"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Floating tech chips */}
          <FloatingChip className="left-[-18px] top-[-10px] sm:left-[-42px] sm:top-[-18px]">
            React
          </FloatingChip>
          <FloatingChip className="right-[-12px] top-[-18px] sm:right-[-42px] sm:top-[-26px]">
            Tailwind
          </FloatingChip>
          <FloatingChip className="bottom-[-18px] left-1/2 -translate-x-1/2 sm:bottom-[-26px]">
            PHP • MySQL
          </FloatingChip>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
// 🔹 Helper Components (JS version)
const IconLink = ({ href = "#", label, children }) => {
  return (
    <a
      href={href}
      aria-label={label}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer noopener" : undefined}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
    >
      <span className="sr-only">{label}</span>
      <span className="text-white/90 transition group-hover:scale-110">
        {children}
      </span>
    </a>
  );
};

const FloatingChip = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`absolute select-none rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
};
