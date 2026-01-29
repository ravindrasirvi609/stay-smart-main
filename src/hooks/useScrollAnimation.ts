import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
  pin?: boolean;
  anticipatePin?: number;
}

export const useScrollAnimation = (
  animationCallback: (tl: gsap.core.Timeline, el: Element) => void,
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options.trigger || element,
        start: options.start || 'top 80%',
        end: options.end || 'bottom 20%',
        scrub: options.scrub || false,
        markers: options.markers || false,
        toggleActions: options.toggleActions || 'play none none reverse',
        pin: options.pin || false,
        anticipatePin: options.anticipatePin || 1,
      },
    });

    timelineRef.current = tl;
    animationCallback(tl, element);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === element) {
          st.kill();
        }
      });
    };
  }, [animationCallback, options]);

  return elementRef;
};

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.to(element, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === element) {
          st.kill();
        }
      });
    };
  }, [speed]);

  return elementRef;
};

export const useRevealAnimation = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  delay: number = 0
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const directions = {
      up: { y: 60, x: 0 },
      down: { y: -60, x: 0 },
      left: { y: 0, x: 60 },
      right: { y: 0, x: -60 },
    };

    const { x, y } = directions[direction];

    gsap.set(element, { opacity: 0, x, y });

    gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === element) {
          st.kill();
        }
      });
    };
  }, [direction, delay]);

  return elementRef;
};

export default useScrollAnimation;
