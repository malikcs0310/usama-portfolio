import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_uge97at",
      "template_6r4pc9m",
      e.target,
      "vqOyVFFD2yOox__BO"
    )
    .then(
      (result) => {
        alert("Message sent successfully 🚀");
      },
      (error) => {
        alert("Failed to send message ❌");
      }
    );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 py-20 sm:py-28"
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
          Let’s <span className="text-cyan-600">Connect</span>
        </motion.h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Whether you have a project idea or just want to say hi, I’d love to
          hear from you. Fill out the form below or reach me on socials
        </p>

        {/* Contact Form + Socials */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 rounded-2xl bg-white shadow-xl p-8"
            onSubmit={sendEmail}
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                required
                name="message"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 text-white font-medium shadow-md hover:brightness-110 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-lg font-semibold">Or connect with me here:</p>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-2">
              <SocialCard
                href="https://github.com/malikcs0310"
                label="GitHub"
                icon={<Github className="h-7 w-7" />}
                gradient="from-gray-800 to-gray-600"
              />
              <SocialCard
                href="https://www.linkedin.com/in/malik-usama-9b7a10220/"
                label="LinkedIn"
                icon={<Linkedin className="h-7 w-7" />}
                gradient="from-blue-600 to-blue-500"
              />
              <SocialCard
                href="https://mail.google.com/mail/?view=cm&fs=1&to=malikcs0310@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Usama,%0A%0AI%20visited%20your%20portfolio%20and%20I%20am%20interested%20in%20your%20skills%20and%20projects.%20Can%20we%20connect%20to%20discuss%20further?"
                label="Email"
                icon={<Mail className="h-7 w-7" />}
                gradient="from-red-500 to-pink-500"
              />
              <SocialCard
                href="#"
                label="Website"
                icon={<Globe className="h-7 w-7" />}
                gradient="from-cyan-500 to-teal-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function SocialCard({ href, label, icon, gradient }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow hover:shadow-lg transition group"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${gradient} text-white group-hover:scale-110 transition`}
      >
        {icon}
      </div>
      <span className="font-medium text-gray-800">{label}</span>
    </a>
  );
}
export default Contact;
