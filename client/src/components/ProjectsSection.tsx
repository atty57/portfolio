import { useEffect, useRef } from "react";
import { HiOutlineDocument, HiOutlineDesktopComputer, HiOutlineCode, HiOutlineLightBulb } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import virtualAssistantImage from "../../../attached_assets/virtual-assistant-banner.jpg"; // Import from attached_assets folder
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectsSection() {
  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const projectCardsRef = useRef<HTMLDivElement[]>([]);
  const githubButtonRef = useRef<HTMLDivElement>(null);

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
      github: "https://github.com/atty57"
    },
    {
      title: "Virtual Medical Assistant",
      date: "April 2025",
      description: "An interactive AI-powered virtual assistant for healthcare communication, providing patient support and medical consultations in a hospital setting.",
      features: [
        "Realistic 3D avatar with customizable facial expressions",
        "Natural language processing for symptom analysis",
        "Integration with medical terminology databases"
      ],
      achievements: [
        "Reduced patient wait times by 45% for initial consultations",
        "Improved patient satisfaction scores by 30%",
        "Enhanced medical staff efficiency by handling routine inquiries"
      ],
      technologies: ["React", "Three.js", "WebGL", "TensorFlow.js", "Medical APIs"],
      customBanner: virtualAssistantImage,
      icon: <HiOutlineLightBulb className="h-20 w-20 text-white" />,
      gradient: "from-red-400 to-amber-500",
      badgeColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      github: "https://github.com/atty57"
    }
  ];

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate title
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate project cards with stagger
    if (projectsGridRef.current) {
      const cards = Array.from(projectsGridRef.current.children);
      gsap.fromTo(cards,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate GitHub button
    if (githubButtonRef.current) {
      gsap.fromTo(githubButtonRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: githubButtonRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Add hover animations for project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans"
        >
          Projects
        </h2>

        <div ref={projectsGridRef} className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl project-card border border-gray-100 dark:border-gray-700 hover-lift transform transition-all duration-300"
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
                  <a href="https://github.com/atty57" className="text-primary dark:text-blue-400 hover:underline font-medium">View Details →</a>
                </div>
              </div>
            </div>
          ))}

          <div 
            className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl project-card border border-gray-100 dark:border-gray-700 md:col-span-2 hover-lift transform transition-all duration-300"
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
              <div className="flex flex-col items-end">
                <a href={projects[2].github} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline font-medium">
                  View on GitHub →
                </a>
                <span className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-left">(Private repo – ask for access)</span>
              </div>
            </div>
          </div>

          {/* New Project - Virtual Medical Assistant with Custom Image */}
          <div 
            className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl project-card border border-gray-100 dark:border-gray-700 md:col-span-2 hover-lift transform transition-all duration-300"
          >
            {/* Custom banner image instead of gradient */}
            <div className="h-64 w-full overflow-hidden relative">
              <img 
                src={projects[3].customBanner} 
                alt="Virtual Medical Assistant Interface" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/40 to-amber-500/40 flex items-center justify-center">
                {projects[3].icon}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{projects[3].title}</h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{projects[3].date}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {projects[3].description}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {projects[3].features?.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {projects[3].achievements.map((achievement, aIndex) => (
                      <li key={aIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[3].technologies.map((tech, tIndex) => (
                  <span key={tIndex} className={`${projects[3].badgeColor} text-xs font-medium px-2.5 py-0.5 rounded`}>{tech}</span>
                ))}
              </div>
              <div className="flex flex-col items-end">
                <a href={projects[3].github} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline font-medium">
                  View on GitHub →
                </a>
                <span className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-left">(Private repo – ask for access)</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={githubButtonRef}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/atty57" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
          >
            <FaGithub className="h-5 w-5 mr-2" />
            See more projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}