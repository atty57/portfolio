import { motion } from "framer-motion";
import { resumeData } from "../data/resume";

export default function ExperienceSection() {
  const experienceData = resumeData.experience;

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-gray-900 dark:text-white inline-block">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full my-2"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            My professional journey showcases a blend of research work and software engineering experience
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Vertical Line */}
          <div className="hidden md:block absolute left-0 top-8 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-400 rounded-full"></div>
          
          {/* Timeline Items */}
          {experienceData.map((experience, index) => (
            <motion.div 
              key={index}
              className="mb-16 md:mb-20 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Timeline elements */}
              <div className="hidden md:flex absolute left-[-14px] top-8 items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 dark:border-blue-400 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-300 animate-pulse"></div>
                </div>
              </div>
              
              <div className="md:ml-14 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col gap-4">
                  {/* Header with date badge */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                      <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">{experience.company}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{experience.location}</p>
                    </div>
                    <span className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 text-white font-medium rounded-lg shadow-sm self-start whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
                  
                  {/* Responsibilities */}
                  <ul className="mt-2 space-y-4 text-gray-700 dark:text-gray-300">
                    {experience.responsibilities.map((responsibility, rIndex) => (
                      <li key={rIndex} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mr-3 flex-shrink-0 mt-0.5">
                          {rIndex + 1}
                        </span>
                        <p className="flex-1">{responsibility}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* End marker */}
          <div className="hidden md:block absolute left-[-14px] bottom-0 w-7 h-7 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-gray-800 z-10"></div>
        </div>
      </div>
    </section>
  );
}