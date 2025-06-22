import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export interface GSAPAnimationConfig {
  trigger?: string | Element;
  start?: string;
  end?: string;
  toggleActions?: string;
  duration?: number;
  ease?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  rotation?: number;
}

export const useGSAPAnimation = (
  animationType: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'custom',
  config: GSAPAnimationConfig = {}
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const {
      trigger = element,
      start = "top 80%",
      end = "bottom 20%",
      toggleActions = "play none none reverse",
      duration = 0.8,
      ease = "power2.out",
      delay = 0,
      stagger = 0,
      y = 0,
      x = 0,
      opacity = 1,
      scale = 1,
      rotation = 0
    } = config;

    let initialProps: any = {};
    let finalProps: any = {};

    // Set initial properties based on animation type
    switch (animationType) {
      case 'fadeInUp':
        initialProps = { y: 50, opacity: 0 };
        finalProps = { y: 0, opacity: 1 };
        break;
      case 'fadeInLeft':
        initialProps = { x: -50, opacity: 0 };
        finalProps = { x: 0, opacity: 1 };
        break;
      case 'fadeInRight':
        initialProps = { x: 50, opacity: 0 };
        finalProps = { x: 0, opacity: 1 };
        break;
      case 'scaleIn':
        initialProps = { scale: 0.8, opacity: 0 };
        finalProps = { scale: 1, opacity: 1 };
        break;
      case 'custom':
        initialProps = { y, x, opacity: 0, scale: 0.8, rotation };
        finalProps = { y: 0, x: 0, opacity, scale, rotation: 0 };
        break;
    }

    // Apply custom properties if provided
    if (config.y !== undefined) initialProps.y = config.y;
    if (config.x !== undefined) initialProps.x = config.x;
    if (config.opacity !== undefined) initialProps.opacity = config.opacity;
    if (config.scale !== undefined) initialProps.scale = config.scale;
    if (config.rotation !== undefined) initialProps.rotation = config.rotation;

    const animation = gsap.fromTo(element, 
      initialProps,
      {
        ...finalProps,
        duration,
        ease,
        delay,
        stagger,
        scrollTrigger: {
          trigger,
          start,
          end,
          toggleActions
        }
      }
    );

    return () => {
      animation.kill();
    };
  }, [animationType, config]);

  return elementRef;
};

export const useGSAPStagger = (
  elements: HTMLElement[] | null,
  config: GSAPAnimationConfig = {}
) => {
  useEffect(() => {
    if (!elements || elements.length === 0) return;

    const {
      duration = 0.8,
      ease = "power2.out",
      delay = 0,
      stagger = 0.1,
      y = 30,
      opacity = 0,
      scale = 0.8
    } = config;

    const animation = gsap.fromTo(elements,
      { y, opacity, scale },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration,
        ease,
        delay,
        stagger
      }
    );

    return () => {
      animation.kill();
    };
  }, [elements, config]);
};

export const useGSAPScrollTrigger = (
  trigger: string | Element,
  animation: () => gsap.core.Timeline | gsap.core.Tween,
  config: {
    start?: string;
    end?: string;
    toggleActions?: string;
    once?: boolean;
  } = {}
) => {
  useEffect(() => {
    const {
      start = "top 80%",
      end = "bottom 20%",
      toggleActions = "play none none reverse",
      once = false
    } = config;

    const timeline = animation();
    
    ScrollTrigger.create({
      trigger,
      start,
      end,
      toggleActions: once ? "play none none none" : toggleActions,
      animation: timeline
    });

    return () => {
      timeline.kill();
    };
  }, [trigger, animation, config]);
};

export default useGSAPAnimation; 