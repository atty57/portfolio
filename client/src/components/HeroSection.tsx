import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import avatarImage from "@assets/ChatGPT Image Mar 28, 2025, 12_18_42 AM.png";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white font-sans">
              Hi, I'm <span className="text-primary dark:text-blue-400">Atharva Vichare</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Graduate Research Assistant & Software Engineer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              Focusing on LLMs, Knowledge Graphs, and developing innovative solutions in healthcare and VR technologies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a 
                href="/resume.pdf" 
                target="_blank" 
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 font-medium rounded-lg transition shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
            <div className="flex space-x-4 pt-2">
              <motion.a 
                href="https://github.com/atty57" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/atharva-vichare-68739a213/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a 
                href="mailto:atharvavichare57@gmail.com" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MdEmail className="h-7 w-7" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img src={avatarImage} alt="Atharva Vichare" className="w-full h-full object-cover" />
              </div>
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, delay: 0.5 }}
              >
                <span className="flex items-center">
                  <span className="h-3 w-3 bg-white rounded-full mr-2 animate-pulse"></span>
                  Available for work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
