import { keyframes } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  // gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

export const revealText = (trigger: null | Element, ...el: string[]) => {
  if (trigger !== null) {
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: trigger,
        start: 'top center',
      },
    });

    tl.to([...el], {
      y: 0,
      opacity: 1,
      stagger: 0.4,
      duration: 1,
      ease: 'power2.inOut',
    });
  }
};

export const moveToLeft = keyframes`
  from {
    margin-left: 0;
  }

  to {
    margin-left: 3rem;
  }
`;
