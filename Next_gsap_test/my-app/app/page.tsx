"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const cubeRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Section 1 
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    }).fromTo(
      ".section1 h1",
      { opacity: 1, y: 50, scale: 1 },
      { opacity: 0, y: 0, scale: 2, duration: 1 }
    );

    // Section 2 
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    }).fromTo(
      ".section2 h1, .section2 p",
      { opacity: 0, y: 50, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2 }
    );

    // Img arr
    const images = gsap.utils.toArray('.pics img');
    
    images.forEach((img, index) => {
      const positions = [
        { x: -300, y: -200, rotation: -15 }, 
        { x: 300, y: -150, rotation: 10 },   
        { x: -400, y: 100, rotation: -20 },  
        { x: 350, y: 50, rotation: 15 },   
        { x: -200, y: -100, rotation: -5 }, 
        { x: 250, y: -50, rotation: 8 }     
      ];

      gsap.fromTo(img, 
        {
          opacity: 0,
          scale: 0.3,
          x: positions[index].x,
          y: positions[index].y,
          rotation: positions[index].rotation,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotation: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section2",
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );
    });

  }, []);

  return (
    <>
<section className="section1 h-screen flex flex-col justify-center items-center px-6 md:px-24 w-full bg-amber-950">
  <div className="arch-logo w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px] h-[140px] xs:h-[160px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] relative mb-6 xs:mb-8 sm:mb-10 md:mb-12">
    <div className="square absolute top-0 xs:top-1 sm:top-2 md:top-0 left-1/2 rounded-md transform -translate-x-1/2 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-22 xl:h-22 bg-white"></div>
    
    <div className="square absolute top-6 xs:top-7 sm:top-8 md:top-10 lg:top-12 left-2/7 rounded-md transform -translate-x-1/2 rotate-45 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-22 xl:h-22 bg-white"></div>
    
    <div className="square absolute top-6 xs:top-7 sm:top-8 md:top-10 lg:top-12 right-2/7 rounded-md transform translate-x-1/2 rotate-45 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-22 xl:h-22 bg-white"></div>
    
    <div className="square absolute top-16 xs:top-18 sm:top-20 md:top-24 lg:top-28 xl:top-36 left-1/5 rounded-md transform -translate-x-1/2 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-22 xl:h-22 bg-white"></div>
    
    <div className="square absolute top-16 xs:top-18 sm:top-20 md:top-24 lg:top-28 xl:top-36 right-1/5 rounded-md transform translate-x-1/2 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-22 xl:h-22 bg-white"></div>
    
    <div className="square absolute top-16 xs:top-18 sm:top-20 md:top-24 lg:top-28 xl:top-36 left-1/2 rounded-md transform -translate-x-1/2 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-22 xl:h-22 bg-white"></div>
  </div>
  <h1 className="text-4xl md:text-7xl text-center font-serif text-white">
    The first media company crafted for the digital first generation.
  </h1>
</section>

      <section className="section2 h-screen relative flex flex-col px-6 md:px-24 lg:px-96 justify-center items-center w-full bg-amber-950 overflow-hidden">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 z-10">
          Where innovation meets precision.
        </h1>
        <p className="text-lg md:text-2xl font-extralight text-center text-white z-10">
          Symphonia unites visionary thinkers, creative architects, and analytical
          experts, collaborating seamlessly to transform challenges into opportunities.
          Together, we deliver tailored solutions that drive impact and inspire growth.
        </p>
        

        <div className="pics absolute inset-0 pointer-events-none">
          <img 
            src="https://interview-task-three-ruby.vercel.app/assets/img25.jpg" 
            className="absolute w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg"
            alt="Pro image"
          />
          <img 
            src="https://interview-task-three-ruby.vercel.app/assets/img26.jpg" 
            className="absolute w-40 h-40 md:w-56 md:h-56 object-cover rounded-lg"
            alt="Pro image" 
          />
          <img 
            src="https://interview-task-three-ruby.vercel.app/assets/img29.jpg" 
            className="absolute w-44 h-44 md:w-60 md:h-60 object-cover rounded-lg"
            alt="Pro image" 
          />
          <img 
            src="https://interview-task-three-ruby.vercel.app/assets/img30.jpg" 
            className="absolute w-52 h-52 md:w-72 md:h-72 object-cover rounded-lg"
            alt="Pro image" 
          />
          <img 
            src="https://interview-task-three-ruby.vercel.app/assets/img27.jpg" 
            className="absolute w-36 h-36 md:w-52 md:h-52 object-cover rounded-lg"
            alt="Pro image"
          />
          <img 
            src="https://interview-task-three-ruby.vercel.app/assets/img21.jpg" 
            className="absolute w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg"
            alt="Pro image" 
          />
        </div>
      </section>

      <section className="section3 h-screen flex justify-center items-center text-3xl w-full bg-amber-100 text-amber-900 px-6">
        <h1 className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consectetur aliquid nihil, eligendi sapiente deserunt.
        </h1>
      </section>

      <style jsx>{`
        `}
        </style>
    </>
  );
}