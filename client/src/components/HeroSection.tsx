import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import avatarImage from "@assets/ChatGPT Image Mar 28, 2025, 12_18_42 AM.png";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { heroAnimations } from "@/lib/gsap";

export default function HeroSection() {
  const fullText = "Hi, I'm Atharva Vichare";
  const [typedText, setTypedText] = useState("");
  
  // Refs for GSAP animations
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const statusBadgeRef = useRef<HTMLDivElement>(null);

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

  // GSAP animations
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate title
    if (titleRef.current) {
      tl.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: heroAnimations.title.duration,
          ease: heroAnimations.title.ease
        }
      );
    }

    // Animate subtitle
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: heroAnimations.subtitle.duration,
          ease: heroAnimations.subtitle.ease,
          delay: heroAnimations.subtitle.delay
        },
        "-=0.5"
      );
    }

    // Animate description
    if (descriptionRef.current) {
      tl.fromTo(descriptionRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: heroAnimations.description.duration,
          ease: heroAnimations.description.ease,
          delay: heroAnimations.description.delay
        },
        "-=0.3"
      );
    }

    // Animate buttons
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.children;
      tl.fromTo(buttons,
        { y: 20, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: heroAnimations.buttons.duration,
          ease: heroAnimations.buttons.ease,
          delay: heroAnimations.buttons.delay,
          stagger: heroAnimations.buttons.stagger
        },
        "-=0.2"
      );
    }

    // Animate social icons
    if (socialIconsRef.current) {
      const icons = socialIconsRef.current.children;
      tl.fromTo(icons,
        { y: 20, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: heroAnimations.socialIcons.duration,
          ease: heroAnimations.socialIcons.ease,
          delay: heroAnimations.socialIcons.delay,
          stagger: heroAnimations.socialIcons.stagger
        },
        "-=0.3"
      );
    }

    // Animate avatar
    if (avatarRef.current) {
      tl.fromTo(avatarRef.current,
        { scale: 0.8, opacity: 0, rotation: -10 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: heroAnimations.avatar.duration,
          ease: heroAnimations.avatar.ease,
          delay: heroAnimations.avatar.delay
        },
        "-=0.8"
      );
    }

    // Animate status badge
    if (statusBadgeRef.current) {
      tl.fromTo(statusBadgeRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: heroAnimations.statusBadge.duration,
          ease: heroAnimations.statusBadge.ease,
          delay: heroAnimations.statusBadge.delay
        },
        "-=0.4"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  // Interactive avatar animations
  useEffect(() => {
    if (!avatarRef.current) return;

    const avatar = avatarRef.current;
    let isHovering = false;

    // Continuous floating animation
    const floatingAnimation = gsap.to(avatar, {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    // Mouse enter animation
    const handleMouseEnter = () => {
      isHovering = true;
      gsap.to(avatar, {
        scale: 1.05,
        rotation: 5,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
      
      // Add a subtle glow effect
      gsap.to(avatar, {
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
        duration: 0.3
      });
    };

    // Mouse leave animation
    const handleMouseLeave = () => {
      isHovering = false;
      gsap.to(avatar, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
      
      // Remove glow effect
      gsap.to(avatar, {
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        duration: 0.3
      });
    };

    // Mouse move animation (tilt effect)
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      
      const rect = avatar.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateX = (mouseY / (rect.height / 2)) * -10;
      const rotateY = (mouseX / (rect.width / 2)) * 10;
      
      gsap.to(avatar, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    // Click animation
    const handleClick = () => {
      gsap.to(avatar, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.in",
        yoyo: true,
        repeat: 1
      });
      
      // Add a ripple effect
      gsap.to(avatar, {
        boxShadow: "0 0 0 20px rgba(59, 130, 246, 0.2)",
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(avatar, {
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            duration: 0.3
          });
        }
      });
    };

    // Add event listeners
    avatar.addEventListener('mouseenter', handleMouseEnter);
    avatar.addEventListener('mouseleave', handleMouseLeave);
    avatar.addEventListener('mousemove', handleMouseMove);
    avatar.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      floatingAnimation.kill();
      avatar.removeEventListener('mouseenter', handleMouseEnter);
      avatar.removeEventListener('mouseleave', handleMouseLeave);
      avatar.removeEventListener('mousemove', handleMouseMove);
      avatar.removeEventListener('click', handleClick);
    };
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
          <div className="md:w-1/2 space-y-6">
            <h1 
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-sans min-h-[3.5rem] mobile-typewriter"
            >
              <span>{renderTypedTextWithBreak(typedText)}</span>
              {typedText.length < fullText.length && <span className="animate-pulse">|</span>}
            </h1>
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-200"
            >
              Graduate Research Assistant & Software Engineer
            </p>
            <p 
              ref={descriptionRef}
              className="text-lg text-gray-300 max-w-xl"
            >
              Focusing on LLMs, Knowledge Graphs, and developing innovative solutions in healthcare and VR technologies.
            </p>
            <div 
              ref={buttonsRef}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                Contact Me
              </a>
              <a 
                href="https://drive.google.com/file/d/1A2kpSD2APiItS1nTvYm9jJPG9LGlD8Dq/view?usp=drive_link" 
                target="_blank" 
                className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-medium rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                Download Resume
              </a>
            </div>
            <div 
              ref={socialIconsRef}
              className="flex space-x-4 pt-2"
            >
              <a 
                href="https://github.com/atty57" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition transform hover:scale-110 active:scale-90"
              >
                <FaGithub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/atharva-vichare-68739a213/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition transform hover:scale-110 active:scale-90"
              >
                <FaLinkedin className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://x.com/atharva1357" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition transform hover:scale-110 active:scale-90"
              >
                <FaXTwitter className="h-7 w-7" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a 
                href="mailto:atharvavichare57@gmail.com" 
                className="text-gray-200 hover:text-white transition transform hover:scale-110 active:scale-90"
              >
                <MdEmail className="h-7 w-7" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div 
                ref={avatarRef}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl cursor-pointer transform-gpu"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <img 
                  src={avatarImage} 
                  alt="Atharva Vichare" 
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
              <div 
                ref={statusBadgeRef}
                className="absolute -bottom-2 -right-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md"
              >
                <span className="flex items-center">
                  <span className="h-3 w-3 bg-white rounded-full mr-2 animate-pulse"></span>
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
