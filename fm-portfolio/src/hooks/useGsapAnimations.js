import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// GSAP Scroll animations
const useGsapAnimations = () => {
  useEffect(() => {
    // ------------------ HERO ------------------
    // Heading Typography
    gsap.to('#scroll-animation-1', {
      scrollTrigger: {
        trigger: '#scroll-animation-1',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top 60%',
        end: 'bottom 10%',
      },
      y: -100,
      opacity: 0,
      ease: 'none',
      duration: 3,
    });

    // Roles Text
    gsap.to('#scroll-animation-2', {
      scrollTrigger: {
        trigger: '#scroll-animation-2',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top -10%',
        end: 'bottom 10%',
      },
      y: -290,
      opacity: 0,
      ease: 'none',
      duration: 3,
    });

    // Glow Elipse
    gsap.to('#scroll-animation-3', {
      scrollTrigger: {
        trigger: '#scroll-animation-3',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top -10%',
        end: 'bottom 10%',
      },
      x: -240,
      opacity: 0,
      ease: 'none',
      duration: 3,
    });

    // 'WHO AM I' Title
    gsap.fromTo('#scroll-animation-4',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-4',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 60%',
          end: 'bottom 10%',
        },
        x: -100,
        ease: 'none',
        duration: 3,
      }
    );
    // ------------------ //HERO ------------------

    // ------------------ ABOUT ------------------
    // Glow Elipse
    gsap.fromTo('#scroll-animation-5',
      { opacity: 0 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-5',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 50%',
          end: 'bottom 10%',
        },
        y: -240,
        ease: 'none',
        duration: 3,
      }
    );
    // 'WHO AM I' Content
    gsap.fromTo('.scroll-animation-6',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '.scroll-animation-6',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 60%',
          end: 'bottom 10%',
        },
        ease: 'none',
        duration: 3,
      }
    );
    // 'HOW IT STARTED' Title
    gsap.fromTo('#scroll-animation-7',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-7',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 60%',
          end: 'bottom 10%',
        },
        x: -70,
        ease: 'none',
        duration: 3,
      }
    );
    // 'HOW IT STARTED' Content
    gsap.fromTo('.scroll-animation-8',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '.scroll-animation-8',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 80%',
          end: 'bottom 10%',
        },
        ease: 'none',
        duration: 3,
      }
    );
    // 'HOW'S IT GOING' Title
    gsap.fromTo('#scroll-animation-9',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-9',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 60%',
          end: 'bottom 10%',
        },
        x: 70,
        ease: 'none',
        duration: 3,
      }
    );
    // 'HOW'S IT GOING' Content
    gsap.fromTo('.scroll-animation-10',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '.scroll-animation-10',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 80%',
          end: 'bottom 10%',
        },
        ease: 'none',
        duration: 3,
      }
    );
    // ------------------ //ABOUT ------------------

    // ------------------ EDUCATION ------------------
    // 'EDUCATION' Title
    gsap.fromTo('#scroll-animation-11',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-11',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 90%',
          end: 'bottom 70%',
        },
        y: 40,
        ease: 'none',
        duration: 3,
      }
    );
    // 'EDUCATION' Content
    gsap.fromTo('.scroll-animation-12',
      { opacity: 0.1 }, // from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '.scroll-animation-12',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 80%',
          end: 'bottom 10%',
        },
        y: -50,
        ease: 'none',
        duration: 3,
      }
    );
    // Glow Elipse
    gsap.fromTo('#scroll-animation-13',
      { opacity: 0.3 }, // from
      {
        opacity: 4,
        scrollTrigger: {
          trigger: '#scroll-animation-13',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top -20%',
          end: 'bottom 10%',
        },
        y: 240,
        ease: 'none',
        duration: 3,
      }
    );
    // ------------------ //EDUCATION ------------------

  }, []);
}

export default useGsapAnimations
