'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: string;
  label: string;
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
  ];

  useEffect(() => {
    if (!headlineRef.current || !statsRef.current || !visualRef.current) return;

    // Initial load animations
    const timeline = gsap.timeline();

    // Animate headline letters
    const headline = headlineRef.current;
    const letters = headline.querySelectorAll('.letter');
    
    timeline.fromTo(
      letters,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out',
      },
      0
    );

    // Animate stats
    timeline.fromTo(
      statsRef.current.querySelectorAll('.stat-item'),
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      },
      0.3
    );

    // Animate visual element
    timeline.fromTo(
      visualRef.current,
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      },
      0.1
    );

    // Scroll-driven animation for visual element
    gsap.to(visualRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      },
      y: -100,
      opacity: 0.3,
      ease: 'none',
    });

    // Parallax effect for headline
    gsap.to(headlineRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 50,
      opacity: 0,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Visual Element - Floating box */}
        <div
          ref={visualRef}
          className="absolute top-20 right-4 md:right-20 w-40 h-40 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-purple-400 to-blue-500 shadow-2xl"
          style={{
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold text-white/80">↗</div>
          </div>
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="text-center mb-12 md:mb-20 max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-white mb-4 leading-none">
            {Array.from('WELCOME ITSFIZZ').map((letter, index) => (
              <span
                key={index}
                className={`letter inline-block ${letter === ' ' ? 'w-2 md:w-4' : ''}`}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-purple-200 mt-6 font-light tracking-wide">
            Crafting Digital Excellence Through Innovation
          </p>
        </div>

        {/* Statistics */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-4 md:gap-12 mt-16 md:mt-24 w-full max-w-2xl px-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200 mb-2 group-hover:from-purple-300 group-hover:to-blue-300 transition-all">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-purple-100 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
          <p className="text-purple-200 text-sm tracking-widest font-light">SCROLL TO EXPLORE</p>
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2 animate-bounce">
            <div className="w-1 h-2 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
