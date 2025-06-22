import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

// Common animation configurations
export const fadeInUp = {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
};

export const fadeInLeft = {
  x: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
};

export const fadeInRight = {
  x: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
};

export const scaleIn = {
  scale: 0.8,
  opacity: 0,
  duration: 0.6,
  ease: "back.out(1.7)"
};

export const staggerChildren = {
  stagger: 0.1,
  ease: "power2.out"
};

// Hero section animations
export const heroAnimations = {
  title: {
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.05
  },
  subtitle: {
    duration: 0.8,
    ease: "power2.out",
    delay: 0.3
  },
  description: {
    duration: 0.8,
    ease: "power2.out",
    delay: 0.5
  },
  buttons: {
    duration: 0.6,
    ease: "back.out(1.7)",
    delay: 0.7,
    stagger: 0.1
  },
  socialIcons: {
    duration: 0.5,
    ease: "back.out(1.7)",
    delay: 0.9,
    stagger: 0.1
  },
  avatar: {
    duration: 1,
    ease: "power2.out",
    delay: 0.2
  },
  statusBadge: {
    duration: 0.6,
    ease: "back.out(1.7)",
    delay: 1.2
  }
};

// Scroll-triggered animations
export const scrollAnimations = {
  fadeInUp: {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "self",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  },
  fadeInLeft: {
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "self",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  },
  fadeInRight: {
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "self",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  }
};

// Utility functions
export const animateOnScroll = (element: string | Element, animation: any) => {
  return gsap.fromTo(element, 
    { ...animation },
    { 
      ...animation,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

export const staggerAnimation = (elements: string | Element[], animation: any) => {
  return gsap.fromTo(elements, 
    { ...animation },
    { 
      ...animation,
      stagger: 0.1
    }
  );
};

// Cleanup function
export const cleanupGSAP = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

// Smooth scroll utility
export const smoothScrollTo = (target: string | Element, duration: number = 1) => {
  gsap.to(window, {
    duration,
    scrollTo: { y: target, offsetY: 80 },
    ease: "power2.inOut"
  });
};

// Smooth scroll to top
export const scrollToTop = (duration: number = 1) => {
  gsap.to(window, {
    duration,
    scrollTo: { y: 0 },
    ease: "power2.inOut"
  });
};

export default gsap; 