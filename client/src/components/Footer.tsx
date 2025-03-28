import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center">
          <motion.a 
            href="#home" 
            className="text-2xl font-bold tracking-tight text-blue-400 mb-4 inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            AV.
          </motion.a>
          <p className="text-gray-400 mb-6">© {currentYear} Atharva Vichare. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a 
              href="https://github.com/atharva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/atharva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a 
              href="mailto:atharvavichare57@gmail.com" 
              className="text-gray-400 hover:text-white transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdEmail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
          <div className="flex justify-center">
            <motion.a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
              whileHover={{ scale: 1.05 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
