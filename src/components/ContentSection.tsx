'use client';

import React from 'react';

export default function ContentSection() {
  const features = [
    {
      title: 'Responsive Design',
      description: 'Beautiful designs that work flawlessly across all devices and screen sizes.',
      icon: '📱',
    },
    {
      title: 'High Performance',
      description: 'Lightning-fast load times and smooth interactions for optimal user experience.',
      icon: '⚡',
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, handling millions of users seamlessly.',
      icon: '📈',
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security protocols to protect your data and users.',
      icon: '🔒',
    },
  ];

  return (
    <>
      {/* Features Section */}
      <section className="relative w-full py-20 md:py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose ITSFIZZ</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Delivering exceptional results through cutting-edge technology and creative excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-purple-100 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="relative w-full py-20 md:py-32 px-4 bg-gradient-to-b from-slate-800 to-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Recent Projects</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              A showcase of our latest work and innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 p-1"
              >
                <div className="bg-slate-900 rounded-2xl p-6 h-64 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Project {item}</h3>
                    <p className="text-purple-200 text-sm">
                      Innovative solution for modern digital transformation
                    </p>
                  </div>
                  <div className="w-full h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-300 text-3xl font-bold">✨</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-32 px-4 bg-gradient-to-b from-[#0f172a] to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-purple-200 mb-10 leading-relaxed">
            Join countless businesses that have transformed their digital presence with ITSFIZZ.
            Let's build the future together.
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Get Started Today
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-12 px-4 bg-gradient-to-b from-slate-900 to-black border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-purple-200">
          <p className="mb-4">© 2026 ITSFIZZ. All rights reserved.</p>
          <p className="text-sm text-purple-300">
            Crafted with passion • Built with precision • Delivered with excellence
          </p>
        </div>
      </footer>
    </>
  );
}
