import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineCube, HiOutlineDesktopComputer, HiOutlineChartBar } from "react-icons/hi";

export default function SkillsSection() {
  const skills = {
    programmingLanguages: [
      "Java", "Python", "C#", "C++", "SQL (Postgres)", "JavaScript", "HTML/CSS"
    ],
    frameworks: [
      "React", "Node.js", "Flask", "WordPress", "Material-UI", "FastAPI"
    ],
    developerTools: [
      "Git", "Docker", "Jira", "Google Cloud Platform", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"
    ],
    dataAnalysis: [
      "pandas", "NumPy", "Matplotlib", "TensorFlow", "PySpark", "Apache Hive", "Hadoop"
    ]
  };

  const experienceLevels = [
    { name: "Web Development", percentage: 85, color: "bg-blue-600" },
    { name: "Machine Learning", percentage: 75, color: "bg-purple-600" },
    { name: "Backend Development", percentage: 90, color: "bg-green-600" },
    { name: "Big Data Analysis", percentage: 70, color: "bg-red-600" }
  ];

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const renderSkillBadges = (skillsList: string[], badgeColor: string) => {
    return skillsList.map((skill, index) => (
      <motion.span 
        key={index}
        className={`skill-badge ${badgeColor} px-3 py-2 rounded-lg text-sm font-medium`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{ y: -3, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
      >
        {skill}
      </motion.span>
    ));
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <HiOutlineCode className="h-6 w-6 mr-2 text-primary dark:text-blue-400" />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {renderSkillBadges(skills.programmingLanguages, "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200")}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <HiOutlineCube className="h-6 w-6 mr-2 text-green-500 dark:text-green-400" />
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {renderSkillBadges(skills.frameworks, "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200")}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <HiOutlineDesktopComputer className="h-6 w-6 mr-2 text-purple-500 dark:text-purple-400" />
                Developer Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {renderSkillBadges(skills.developerTools, "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200")}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <HiOutlineChartBar className="h-6 w-6 mr-2 text-red-500 dark:text-red-400" />
                Data Analysis & Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {renderSkillBadges(skills.dataAnalysis, "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200")}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Experience Level</h3>
              <div className="space-y-4">
                {experienceLevels.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <motion.div 
                        className={`${skill.color} h-2.5 rounded-full`} 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
