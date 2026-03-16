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
       title: 'Scalable Architecture',
       description: 'Built to grow with your business seamlessly.',
       icon: '📈',
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
     {
       title: 'Mobile App',
       description: 'Cross-platform experience',
       icon: '📱',
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
       <section className="w-full py-40 md:py-56 px-6 md:px-10 bg-slate-900">
         <div className="max-w-7xl mx-auto">
           {/* Header */}
             <div className="mb-40 md:mb-52">
               <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                 Why ITSFIZZ
               </h2>
               <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
             </div>

           {/* Features Grid */}
           <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32">
            {features.map((feature, index) => (
              <div
                key={index}
                 className="feature-card group max-w-sm"
              >
                 <div className="text-7xl md:text-8xl mb-12 group-hover:scale-110 transition-transform duration-500">
                   {feature.icon}
                 </div>
                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                   {feature.title}
                 </h3>
                 <p className="text-lg text-slate-300 leading-relaxed mb-10">
                   {feature.description}
                 </p>
                 <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:w-32 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Projects Section */}
       <section className="w-full py-40 md:py-56 px-6 md:px-10 bg-slate-950">
         <div className="max-w-7xl mx-auto">
           {/* Header */}
             <div className="mb-40 md:mb-52">
               <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                 Recent Projects
               </h2>
               <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
             </div>

           {/* Projects */}
           <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-24">
            {projects.map((project, index) => (
               <div key={index} className="project-card group max-w-sm">
                 <div className="text-7xl md:text-7xl mb-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                   {project.icon}
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                   {project.title}
                 </h3>
                 <p className="text-slate-400 group-hover:text-slate-200 transition-colors text-lg mb-10">
                   {project.description}
                 </p>
                 <div className="h-1 w-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section ref={ctaRef} className="w-full py-40 md:py-60 px-6 md:px-10 bg-black">
         <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-5xl md:text-7xl font-black text-white mb-12 leading-tight">
             Ready for <br />
             <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
               Something Great?
             </span>
           </h2>

           <p className="text-xl md:text-2xl text-slate-300 mb-16 leading-relaxed">
             Transform your vision into reality with cutting-edge solutions
           </p>

           <button className="group px-12 md:px-14 py-6 md:py-7 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 mb-24 md:mb-32">
             Get Started
             <span className="ml-3 group-hover:translate-x-2 transition-transform inline-block">→</span>
           </button>

           {/* Stats */}
           <div className="grid grid-cols-3 gap-12 md:gap-16 pt-20 md:pt-28 border-t border-slate-800">
             <div className="group">
               <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                 500+
               </div>
               <p className="text-slate-400 text-sm md:text-base">Projects</p>
             </div>
             <div className="group">
               <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                 99%
               </div>
               <p className="text-slate-400 text-sm md:text-base">Satisfaction</p>
             </div>
             <div className="group">
               <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                 15+
               </div>
               <p className="text-slate-400 text-sm md:text-base">Years</p>
             </div>
           </div>
        </div>
      </section>

       {/* Footer */}
       <footer className="w-full py-20 md:py-24 px-6 md:px-10 bg-gradient-to-b from-black to-slate-950 border-t border-slate-800">
         <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-20 mb-20 md:mb-28">
             <div>
               <h3 className="text-2xl font-black text-white mb-8">ITSFIZZ</h3>
               <p className="text-slate-400 leading-relaxed">
                 Digital excellence crafted with precision
               </p>
             </div>
             <div>
               <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-wider">Product</h4>
               <ul className="space-y-5">
                 <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                 <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-wider">Company</h4>
               <ul className="space-y-5">
                 <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                 <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-wider">Legal</h4>
               <ul className="space-y-5">
                 <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a></li>
                 <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a></li>
               </ul>
             </div>
           </div>

           <div className="border-t border-slate-800 pt-12 text-center">
             <p className="text-slate-500 text-sm">
               © 2026 ITSFIZZ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
