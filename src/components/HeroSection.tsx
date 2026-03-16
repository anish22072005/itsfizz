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
  const brandRef = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
  ];

  useEffect(() => {
    if (!heroRef.current || !headlineRef.current || !brandRef.current || !statsRef.current || !visualRef.current) return;

    const heroEl = heroRef.current;
    const headlineEl = headlineRef.current;
    const brandEl = brandRef.current;
    const statsEl = statsRef.current;
    const visualEl = visualRef.current;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      const letters = headlineEl.querySelectorAll('.letter');
      const statItems = statsEl.querySelectorAll('.stat-item');
      const brandLetters = brandEl.querySelectorAll('.brand-letter');

      // Cinematic letter reveal for WELCOME
      timeline.fromTo(
        letters,
        {
          opacity: 0,
          y: 36,
          rotateX: -70,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.72,
          stagger: 0.07,
          ease: 'expo.out',
        },
        0
      );

      // Unique wave reveal for grouped ITSFIZZ word
      timeline.fromTo(
        brandLetters,
        {
          opacity: 0,
          y: 34,
          scale: 0.88,
          rotateZ: -6,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateZ: 0,
          duration: 0.7,
          stagger: 0.045,
          ease: 'back.out(1.8)',
        },
        0.25
      );

      timeline.fromTo(
        statItems,
        {
          opacity: 0,
          y: 28,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: 'power2.out',
        },
        0.45
      );

      timeline.fromTo(
        visualEl,
        {
          opacity: 0,
          scale: 0.7,
          rotate: -12,
        },
        {
          opacity: 0.7,
          scale: 1,
          rotate: 0,
          duration: 1.1,
          ease: 'power3.out',
        },
        0.1
      );

      // Gentle breathing pulse for the brand line
      gsap.to(brandLetters, {
        yPercent: -4,
        duration: 2.2,
        ease: 'sine.inOut',
        stagger: {
          each: 0.04,
          from: 'center',
          yoyo: true,
          repeat: -1,
        },
      });

      // Continuous floating motion for unique hero feel
      gsap.to(visualEl, {
        yPercent: -6,
        rotation: 6,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Scroll-driven orbital fade for main visual
      gsap.to(visualEl, {
        scrollTrigger: {
          trigger: heroEl,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
        y: -160,
        rotate: 40,
        scale: 0.82,
        opacity: 0.15,
        ease: 'none',
      });

      gsap.to(headlineEl, {
        scrollTrigger: {
          trigger: heroEl,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 52,
        opacity: 0.2,
        ease: 'none',
      });
    }, heroEl);

    return () => ctx.revert();
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
        {/* Visual Element - Centered halo object */}
        <div
          ref={visualRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-purple-400/70 via-blue-400/60 to-cyan-300/50 shadow-2xl"
          style={{
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="absolute inset-6 rounded-full border border-white/30"></div>
            <div className="absolute inset-12 rounded-full border border-white/20"></div>
            <div className="text-3xl md:text-5xl font-bold text-white/75">✦</div>
          </div>
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="relative text-center mb-10 md:mb-16 max-w-5xl z-20">
          <h1 className="text-white mb-4 leading-none">
            <span className="flex items-center justify-center gap-2 md:gap-4 text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.05em] md:tracking-[0.1em] whitespace-nowrap">
              {Array.from('WELCOME TO').map((letter, index) => (
                <span key={index} className="letter inline-block">
                  {letter}
                </span>
              ))}
            </span>
            <span
              ref={brandRef}
              className="block mt-2 md:mt-3 text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.02em] md:tracking-[0.03em] whitespace-nowrap"
            >
              {Array.from('ITSFIZZ').map((letter, index) => (
                <span key={index} className="brand-letter inline-block">
                  {letter}
                </span>
              ))}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-purple-200 mt-6 font-light tracking-wide">
            Crafting Digital Excellence Through Innovation
          </p>
        </div>

        {/* Statistics */}
        <div
          ref={statsRef}
          className="relative z-20 grid grid-cols-3 gap-4 md:gap-10 mt-10 md:mt-14 w-full max-w-2xl px-4"
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
