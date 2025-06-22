import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimations } from "@/lib/gsap";

export default function AboutSection() {
  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

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

    // Animate left column cards with stagger
    if (leftColumnRef.current) {
      const cards = leftColumnRef.current.children;
      gsap.fromTo(cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate right column with different timing
    if (rightColumnRef.current) {
      const elements = rightColumnRef.current.children;
      gsap.fromTo(elements,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate stats with scale effect
    if (statsRef.current) {
      const statItems = statsRef.current.children;
      gsap.fromTo(statItems,
        { scale: 0.8, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans"
        >
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div ref={leftColumnRef} className="space-y-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-blue-400">Background</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I'm a Computer Science graduate student at the University of Delaware, focusing on the intersection of AI, healthcare, and virtual reality. With a background in software engineering, I bring practical experience in developing scalable applications and innovative solutions.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-blue-400">Research Interests</h3>
              <p className="text-gray-700 dark:text-gray-300">
                My current research explores how Large Language Models (LLMs), Knowledge Graphs, and Retrieval-Augmented Generation systems can revolutionize healthcare, with a particular focus on addressing challenges in Alzheimer's disease management.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-blue-400">Professional Philosophy</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I believe in leveraging technology to solve real-world problems, particularly in healthcare and education. My approach combines strong technical skills with a focus on user-centered design and ethical considerations in technology development.
              </p>
            </div>
          </div>
          <div ref={rightColumnRef} className="space-y-8">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
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
            </div>
            <div 
              ref={statsRef}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="flex-1 bg-green-50 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">2+</h4>
                <p className="text-gray-700 dark:text-gray-300">Years of Professional Experience</p>
              </div>
              <div className="flex-1 bg-violet-50 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-400">10+</h4>
                <p className="text-gray-700 dark:text-gray-300">Technical Skills</p>
              </div>
              <div className="flex-1 bg-amber-50 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">5+</h4>
                <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
