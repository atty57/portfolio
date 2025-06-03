import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import avatarImage from "@assets/ChatGPT Image Mar 28, 2025, 12_18_42 AM.png";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const fullText = "Hi, I'm Atharva Vichare";
  const [typedText, setTypedText] = useState("");

  // Split the name for controlled rendering
  const name = "Atharva Vichare";
  const nameStartIndex = fullText.indexOf(name);
  const nameEndIndex = nameStartIndex + name.length;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Helper to render the name with <wbr>
  function renderTypedTextWithBreak(text: string) {
    if (text.length <= nameStartIndex) return text;
    // If the full name is not yet fully typed, keep the whole currently-typed portion of the name in a nowrap span
    if (text.length < nameEndIndex) {
      return (
        <>
          {text.slice(0, nameStartIndex)}
          <span style={{ whiteSpace: 'nowrap' }}>{text.slice(nameStartIndex)}</span>
        </>
      );
    }
    const firstName = 'Atharva';
    const lastName = 'Vichare';
    return (
      <>
        {text.slice(0, nameStartIndex)}
        <span style={{ whiteSpace: 'nowrap' }}>{firstName}</span>
        {' '}
        <span style={{ whiteSpace: 'nowrap' }}>{lastName}</span>
      </>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#374151]"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-sans min-h-[3.5rem] mobile-typewriter">
              <span>{renderTypedTextWithBreak(typedText)}</span>
              {typedText.length < fullText.length && <span className="animate-pulse">|</span>}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Graduate Research Assistant & Software Engineer
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
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
                href="https://drive.google.com/file/d/1A2kpSD2APiItS1nTvYm9jJPG9LGlD8Dq/view?usp=drive_link" 
                target="_blank" 
                className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-medium rounded-lg transition shadow-md hover:shadow-lg"
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
                className="text-gray-200 hover:text-white transition"
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
                className="text-gray-200 hover:text-white transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a 
                href="https://x.com/atharva1357" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaXTwitter className="h-7 w-7" />
                <span className="sr-only">X (Twitter)</span>
              </motion.a>
              <motion.a 
                href="mailto:atharvavichare57@gmail.com" 
                className="text-gray-200 hover:text-white transition"
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
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
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
