'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContentSection() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const features = [
     {
       title: 'Responsive Design',
       description: 'Beautiful designs that work flawlessly across all devices.',
       icon: '📱',
     },
     {
       title: 'High Performance',
       description: 'Lightning-fast load times and smooth interactions.',
       icon: '⚡',
     },
     {
       title: 'Security First',
       description: 'Enterprise-grade security to protect your data.',
       icon: '🔒',
     },
  ];

  const projects = [
     {
       title: 'E-Commerce Platform',
       description: 'Full-stack retail solution',
       icon: '🛍️',
     },
     {
       title: 'SaaS Dashboard',
       description: 'Real-time analytics system',
       icon: '📊',
     },
  ];

  useEffect(() => {
    if (!featuresRef.current) return;

     // Animate features on scroll
     const cards = featuresRef.current.querySelectorAll('.feature-card');
     cards.forEach((card, index) => {
       gsap.fromTo(
         card,
         { opacity: 0, y: 50 },
         {
           opacity: 1,
           y: 0,
           duration: 0.7,
           delay: index * 0.15,
           scrollTrigger: {
             trigger: card,
             start: 'top 85%',
             scrub: false,
           },
         }
       );
     });

     // Animate projects on scroll
     if (projectsRef.current) {
       const projectCards = projectsRef.current.querySelectorAll('.project-card');
       projectCards.forEach((card, index) => {
         gsap.fromTo(
           card,
           { opacity: 0, y: 50 },
           {
             opacity: 1,
             y: 0,
             duration: 0.7,
             delay: index * 0.2,
             scrollTrigger: {
               trigger: card,
               start: 'top 85%',
               scrub: false,
             },
           }
         );
       });
     }

     // Animate CTA section
     if (ctaRef.current) {
       gsap.fromTo(
         ctaRef.current,
         { opacity: 0, y: 60 },
         {
           opacity: 1,
           y: 0,
           duration: 0.8,
           scrollTrigger: {
             trigger: ctaRef.current,
             start: 'top 80%',
             scrub: false,
           },
         }
       );
     }
  }, []);

  return (
    <>
       {/* Features Section */}
      <section className="w-full py-36 md:py-48 px-6 md:px-10 bg-slate-900">
        <div className="max-w-6xl mx-auto">
           {/* Header */}
            <div className="mb-24 md:mb-32 text-center">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                 Why ITSFIZZ
               </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
             </div>

           {/* Features Grid */}
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 justify-items-center text-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card group max-w-xs transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <div className="text-6xl md:text-7xl mb-8 group-hover:scale-110 transition-transform duration-700 ease-out">
                   {feature.icon}
                 </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                   {feature.title}
                 </h3>
                <p className="text-base text-slate-300 leading-relaxed mb-7">
                   {feature.description}
                 </p>
                <div className="h-1 w-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:w-16 transition-all duration-700 ease-out mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Projects Section */}
      <section className="w-full py-36 md:py-48 px-6 md:px-10 bg-slate-950">
        <div className="max-w-6xl mx-auto">
           {/* Header */}
            <div className="mb-24 md:mb-32 text-center">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                 Recent Projects
               </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
             </div>

           {/* Projects */}
          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 justify-items-center text-center max-w-4xl mx-auto">
            {projects.map((project, index) => (
               <div key={index} className="project-card group max-w-sm transition-transform duration-500 ease-out hover:-translate-y-1">
                <div className="text-6xl md:text-7xl mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 ease-out">
                   {project.icon}
                 </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500 ease-out">
                   {project.title}
                 </h3>
                <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-500 ease-out text-base md:text-lg mb-7">
                   {project.description}
                 </p>
                <div className="h-1 w-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:w-16 transition-all duration-700 ease-out mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section ref={ctaRef} className="w-full py-36 md:py-48 px-6 md:px-10 bg-black flex justify-center">
         <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
             <span className="block">Ready for</span>
             <span className="block mt-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
               Something Great?
             </span>
           </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-12 leading-relaxed">
             Transform your vision into reality with cutting-edge solutions
           </p>

          <button className="group mx-auto px-10 md:px-12 py-5 md:py-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 mb-16 md:mb-20">
             Get Started
             <span className="ml-3 group-hover:translate-x-2 transition-transform inline-block">→</span>
           </button>

           {/* Stats */}
          <div className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 pt-14 md:pt-16 border-t border-slate-800">
             <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                 500+
               </div>
               <p className="text-slate-400 text-sm md:text-base">Projects</p>
             </div>
             <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                 99%
               </div>
               <p className="text-slate-400 text-sm md:text-base">Satisfaction</p>
             </div>
             <div className="group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                 15+
               </div>
               <p className="text-slate-400 text-sm md:text-base">Years</p>
             </div>
           </div>
        </div>
      </section>

       {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-10 bg-gradient-to-b from-black to-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-slate-400 text-sm font-semibold tracking-wide">ITSFIZZ</p>
          <p className="text-slate-500 text-sm">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
