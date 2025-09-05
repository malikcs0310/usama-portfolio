import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "Email",
    href: "mailto:hello@example.com",
    icon: <Mail className="h-5 w-5" />,
  },
  { name: "Portfolio", href: "#", icon: <Globe className="h-5 w-5" /> },
];

export default function Footer() {
  return (
    <footer
      id="hero"
      className="bg-neutral-950 text-gray-400 pt-12 pb-6 mt-20 relative"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500"></div>

      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Logo or Name */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold text-white"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Usama.dev
            </span>
          </motion.a>

          {/* Center - Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="hover:text-white transition"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Right - Social Icons */}
          <div className="flex gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-cyan-500 hover:text-white text-gray-300 transition"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom small text */}
        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Usama.dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
