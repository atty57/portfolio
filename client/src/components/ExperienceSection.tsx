import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ExperienceSection() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    // Check for system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
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
  
  const experienceData = [
    {
      title: "Graduate Research Assistant (HCI LAB)",
      company: "University Of Delaware",
      location: "Newark, DE",
      period: "September 2024 - Present",
      responsibilities: [
        "Exploring the application of Large Language Models (LLMs), Knowledge Graphs (KGs), and Retrieval-Augmented Generation Systems (RAGs) to healthcare, with a focus on Alzheimer's disease.",
        "Developing a VR simulation for the USDA to model humane chicken depopulation methods and support animal welfare research."
      ]
    },
    {
      title: "Student Assistant For Joseph Brickley (Instructor)",
      company: "University Of Delaware",
      location: "Newark, DE",
      period: "March 2024 - Present",
      responsibilities: [
        "Co-Developed \"Nessus Parser\", a Python package designed to automate the scanning and reporting of Common Vulnerabilities and Exposures (CVE) and Common Platform Enumerations (CPE) using data from the NIST DB.",
        "Implemented advanced data parsing algorithms, which increased the efficiency of vulnerability analysis by 40 percent, significantly reducing the time required to identify and address security threats.",
        "Developed an automated update mechanism that ensures the package continuously retrieves and uses the latest data from the NIST database, maintaining up-to-date vulnerability information without manual intervention."
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "GEP PVT. LTD",
      location: "Navi Mumbai, MH",
      period: "June 2022 - May 2023",
      responsibilities: [
        "Harnessed the .NET Framework, AngularJS, and Java to develop robust, scalable components for supply chain management software GEP Nexxe, GEP Smart, streamlining processes and boosting efficiency.",
        "Engineered dynamic user interfaces using HTML and CSS, enhancing user satisfaction and experience.",
        "Collaborated with cross-functional teams to translate client requirements into effective technical solutions, contributing to a 22 percent improvement in overall project delivery efficiency.",
        "Conducted thorough code reviews, debugging, and iterative testing, ensuring high-quality software and a 15 percent enhancement in Agile process cycles."
      ]
    }
  ];

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-9 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Timeline Items */}
          {experienceData.map((experience, index) => (
            <motion.div 
              key={index}
              className={`mb-16 ml-20 relative ${index === experienceData.length - 1 ? '' : 'before:content-[""] before:absolute before:left-[-30px] before:top-20 before:bottom-[-20px] before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700'} 
                before:content-[""] before:absolute before:left-[-38px] before:top-0 before:w-5 before:h-5 before:rounded-full before:bg-blue-500 before:border-4 before:border-white dark:before:border-gray-800 before:z-10`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              custom={index}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{experience.period}</span>
                </div>
                <h4 className="text-lg font-medium text-primary dark:text-blue-400 mb-2">{experience.company}, {experience.location}</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {experience.responsibilities.map((responsibility, rIndex) => (
                    <li key={rIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              
              {/* Timeline styling handled through Tailwind classes */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
