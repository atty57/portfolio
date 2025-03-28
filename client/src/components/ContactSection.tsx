import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, we would send the form data to a backend
    // For this demo, we'll just show a success message
    setFormSubmitted(true);
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Reset the form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <HiOutlineMail className="h-6 w-6 text-primary dark:text-blue-400 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</h4>
                    <a href="mailto:atharvavichare57@gmail.com" className="text-primary dark:text-blue-400 hover:underline">atharvavichare57@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiOutlinePhone className="h-6 w-6 text-primary dark:text-blue-400 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</h4>
                    <a href="tel:3024442676" className="text-primary dark:text-blue-400 hover:underline">302-444-2676</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiOutlineLocationMarker className="h-6 w-6 text-primary dark:text-blue-400 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Newark, Delaware, USA</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Professional Profiles</h3>
              <div className="flex flex-col space-y-4">
                <a href="https://www.linkedin.com/in/atharva-vichare-68739a213/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition">
                  <FaLinkedin className="h-6 w-6 mr-3" />
                  LinkedIn: linkedin.com/in/atharva-vichare-68739a213
                </a>
                <a href="https://github.com/atty57" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition">
                  <FaGithub className="h-6 w-6 mr-3" />
                  GitHub: github.com/atty57
                </a>
                <a href="https://github.com/atharva-udel" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition">
                  <FaGithub className="h-6 w-6 mr-3" />
                  GitHub (School): github.com/atharva-udel
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>
            {formSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-green-800 dark:text-green-200 mb-4">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            ) : null}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-primary dark:focus:border-blue-500 dark:bg-gray-800 dark:text-white" 
                  placeholder="Your name" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-primary dark:focus:border-blue-500 dark:bg-gray-800 dark:text-white" 
                  placeholder="your.email@example.com" 
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-primary dark:focus:border-blue-500 dark:bg-gray-800 dark:text-white" 
                  placeholder="Message subject" 
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-primary dark:focus:border-blue-500 dark:bg-gray-800 dark:text-white resize-none" 
                  placeholder="Your message..." 
                  required
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="w-full px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
