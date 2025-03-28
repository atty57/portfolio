import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.div 
              className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-blue-400">Background</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I'm a Computer Science graduate student at the University of Delaware, focusing on the intersection of AI, healthcare, and virtual reality. With a background in software engineering, I bring practical experience in developing scalable applications and innovative solutions.
              </p>
            </motion.div>
            <motion.div 
              className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-blue-400">Research Interests</h3>
              <p className="text-gray-700 dark:text-gray-300">
                My current research explores how Large Language Models (LLMs), Knowledge Graphs, and Retrieval-Augmented Generation systems can revolutionize healthcare, with a particular focus on addressing challenges in Alzheimer's disease management.
              </p>
            </motion.div>
            <motion.div 
              className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-blue-400">Professional Philosophy</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I believe in leveraging technology to solve real-world problems, particularly in healthcare and education. My approach combines strong technical skills with a focus on user-centered design and ethical considerations in technology development.
              </p>
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.div 
              className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 p-8 rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary dark:border-blue-400 pl-4 py-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Master of Science in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-300">University of Delaware</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Aug 2023 - May 2025</p>
                </div>
                <div className="border-l-4 border-primary dark:border-blue-400 pl-4 py-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Bachelor of Engineering in Computer Engineering</h4>
                  <p className="text-gray-600 dark:text-gray-300">Terna College of Engineering</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Aug 2018 - May 2022</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-col md:flex-row gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex-1 bg-green-50 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">2+</h4>
                <p className="text-gray-700 dark:text-gray-300">Years of Professional Experience</p>
              </div>
              <div className="flex-1 bg-violet-50 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-400">10+</h4>
                <p className="text-gray-700 dark:text-gray-300">Technical Skills</p>
              </div>
              <div className="flex-1 bg-amber-50 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">5+</h4>
                <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
