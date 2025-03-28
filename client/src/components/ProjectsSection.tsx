import { motion } from "framer-motion";
import { HiOutlineDocument, HiOutlineDesktopComputer, HiOutlineCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "ERP Application For College",
      date: "June 2020",
      description: "A comprehensive College ERP system for streamlining administrative processes and improving communication between students, faculty, and administration.",
      achievements: [
        "Enhanced operational efficiency by implementing real-time student attendance monitoring",
        "Automated record maintenance, leading to efficient administrative processes",
        "Improved communication through integrated systems"
      ],
      technologies: ["Java", "SQL", "HTML/CSS", "JavaScript"],
      icon: <HiOutlineDocument className="h-20 w-20 text-white" />,
      gradient: "from-blue-400 to-indigo-500",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    },
    {
      title: "CPU Scheduling with Deep Reinforcement Learning",
      date: "May 2024",
      description: "An innovative CPU scheduling algorithm developed using Proximal Policy Optimization (PPO) to enhance system performance and efficiency.",
      achievements: [
        "Enhanced scheduling efficiency by 35% compared to traditional algorithms",
        "Reduced average waiting time and turnaround time for processes",
        "Increased system throughput by 20%, enabling processing of more tasks"
      ],
      technologies: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
      icon: <HiOutlineDesktopComputer className="h-20 w-20 text-white" />,
      gradient: "from-green-400 to-cyan-500",
      badgeColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    {
      title: "Nessus Parser - CVE & CPE Automation Tool",
      date: "March 2024 - Present",
      description: "Python package for automating the scanning and reporting of Common Vulnerabilities and Exposures (CVE) and Common Platform Enumerations (CPE) using NIST database.",
      features: [
        "Advanced data parsing algorithms for vulnerability analysis",
        "Automated update mechanism for latest NIST database integration",
        "Comprehensive reporting system for security assessment"
      ],
      achievements: [
        "Increased vulnerability analysis efficiency by 40%",
        "Reduced the time required to identify security threats",
        "Eliminated the need for manual database updates"
      ],
      technologies: ["Python", "NIST Database", "API Integration", "Cybersecurity"],
      icon: <HiOutlineCode className="h-20 w-20 text-white" />,
      gradient: "from-purple-400 to-pink-500",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      github: "https://github.com/atharva-udel"
    }
  ];

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl project-card border border-gray-100 dark:border-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                {project.icon}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{project.date}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {project.achievements.map((achievement, aIndex) => (
                      <li key={aIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className={`${project.badgeColor} text-xs font-medium px-2.5 py-0.5 rounded`}>{tech}</span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a href="#" className="text-primary dark:text-blue-400 hover:underline font-medium">View Details →</a>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl project-card border border-gray-100 dark:border-gray-700 md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className={`h-48 bg-gradient-to-r ${projects[2].gradient} flex items-center justify-center`}>
              {projects[2].icon}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{projects[2].title}</h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{projects[2].date}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {projects[2].description}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {projects[2].features?.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {projects[2].achievements.map((achievement, aIndex) => (
                      <li key={aIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[2].technologies.map((tech, tIndex) => (
                  <span key={tIndex} className={`${projects[2].badgeColor} text-xs font-medium px-2.5 py-0.5 rounded`}>{tech}</span>
                ))}
              </div>
              <div className="flex justify-end">
                <a href={projects[2].github} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline font-medium">
                  View on GitHub →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="https://github.com/atharva" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition shadow-md hover:shadow-lg"
          >
            <FaGithub className="h-5 w-5 mr-2" />
            See more projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
