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
      description: 'Beautiful designs that work flawlessly across all devices and screen sizes.',
      icon: '📱',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'High Performance',
      description: 'Lightning-fast load times and smooth interactions for optimal user experience.',
      icon: '⚡',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, handling millions of users seamlessly.',
      icon: '📈',
      color: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security protocols to protect your data and users.',
      icon: '🔒',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack solution for modern online retail',
      icon: '🛍️',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Real-time analytics and monitoring system',
      icon: '📊',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform experience for iOS & Android',
      icon: '📱',
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  useEffect(() => {
    if (!featuresRef.current) return;

    // Animate features on scroll
    const features = featuresRef.current.querySelectorAll('.feature-card');
    features.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: feature,
            start: 'top 80%',
            end: 'top 50%',
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
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
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
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
          },
        }
      );
    }
  }, []);

  return (
    <>
      {/* Features Section */}
      <section className="relative w-full py-28 md:py-40 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-200 text-sm font-semibold tracking-wider">
                ✨ OUR EXPERTISE
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ITSFIZZ</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We combine cutting-edge technology with creative excellence to deliver solutions that drive real business impact
            </p>
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-500 transition-all duration-300 p-8 md:p-10"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-base md:text-lg group-hover:text-slate-100 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Bottom accent */}
                  <div className={`mt-6 h-1 w-12 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative w-full py-28 md:py-40 px-4 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-200 text-sm font-semibold tracking-wider">
                🚀 PORTFOLIO
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Recent <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Showcase of our latest innovations and sophisticated solutions
            </p>
          </div>

          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card group relative overflow-hidden rounded-2xl">
                {/* Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} p-1 rounded-2xl`}>
                  <div className="absolute inset-1 bg-slate-900 rounded-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  {/* Top */}
                  <div>
                    <div className={`text-5xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      {project.icon}
                    </div>
                    <h3 className={`text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:${project.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {project.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Visual */}
                  <div className={`mt-8 w-full h-32 bg-gradient-to-br ${project.gradient} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center gap-2 text-slate-400 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-semibold">View Project</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative w-full py-28 md:py-40 px-4 bg-gradient-to-b from-slate-900 to-[#0f172a] overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Create <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Something Amazing?</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join innovative companies that have transformed their digital presence. Let's build the future together and create something extraordinary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="px-8 md:px-10 py-4 md:py-5 border-2 border-slate-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-16 border-t border-slate-700 grid grid-cols-3 gap-8">
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                500+
              </div>
              <div className="text-slate-400 mt-2 text-sm">Projects Delivered</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text group-hover:from-pink-400 group-hover:to-blue-400 transition-all duration-300">
                99%
              </div>
              <div className="text-slate-400 mt-2 text-sm">Client Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                15+
              </div>
              <div className="text-slate-400 mt-2 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-16 px-4 bg-gradient-to-b from-[#0f172a] to-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-black text-white mb-4">ITSFIZZ</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Crafting digital excellence through innovation and precision
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Services</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Projects</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white">◎</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © 2026 ITSFIZZ. All rights reserved. <span className="text-slate-400 ml-2">Crafted with passion • Built with precision • Delivered with excellence</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
