import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { resumeData } from "../data/resume";

export default function ExperienceSection() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    const handleChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };
    
    // Initialize theme
    handleChange();
    
    // Listen for theme changes
    window.addEventListener("storage", handleChange);
    return () => window.removeEventListener("storage", handleChange);
  }, []);
  
  const experienceData = resumeData.experience;

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans text-gray-900 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Vertical Line */}
          <div className="hidden md:block absolute left-0 top-8 bottom-0 w-0.5 bg-blue-400 dark:bg-blue-600"></div>
          
          {/* Timeline Items */}
          {experienceData.map((experience, index) => (
            <motion.div 
              key={index}
              className="mb-12 md:mb-16 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-[-8px] top-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10"></div>
              
              <div className="md:ml-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">{experience.company}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{experience.location}</p>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full self-start">{experience.period}</span>
                </div>
                
                <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                  {experience.responsibilities.map((responsibility, rIndex) => (
                    <li key={rIndex} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <p>{responsibility}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
