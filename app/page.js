// app/page.js
'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Code, Cloud, Shield, Zap, Users, Menu, X, 
  ChevronDown, Building2, Briefcase, TrendingUp, Database,
  Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook,
  CheckCircle, Target, Award, Lightbulb
} from 'lucide-react';
import Link from 'next/link';
// import MegaMenu from '../components/ui/header/MegaMenu';
import MegaFooter from '../components/ui/Footer';

export default function Home() {
  

  const solutions = [
    {
      icon: '📊',
      title: "Digital Strategy",
      description: "Strategic planning and roadmap development to align technology with business goals."
    },
    {
      icon: '☁️',
      title: "Cloud Solutions",
      description: "Seamless migration and optimization of your infrastructure for scalability and performance."
    },
    {
      icon: '📈',
      title: "Data Analytics",
      description: "Transform data into actionable insights that drive informed business decisions."
    },
    {
      icon: '🤖',
      title: "AI Integration",
      description: "Leverage artificial intelligence to automate processes and enhance capabilities."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Consultants" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <MegaMenu /> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900">
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                  Transform Your Business with
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Expert IT Solutions
                  </span>
                </h1>
                <p className="text-xl text-purple-100">
                  We deliver innovative technology solutions that drive growth, efficiency, and competitive advantage for businesses worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 text-white shadow-lg shadow-purple-500/50">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-purple-400 hover:bg-purple-400/10 px-8 py-4 rounded-lg font-semibold transition-all text-white">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
                  <Users className="w-16 h-16 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-white">Trusted by Industry Leaders</h3>
                  <p className="text-purple-100 mb-6">Join hundreds of companies that have transformed their operations with our solutions.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl font-bold text-purple-400">{stat.number}</div>
                        <div className="text-sm text-purple-200">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-pink-500 font-semibold text-sm uppercase tracking-wider mb-4">
              FIND YOUR SOLUTION
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-900">
              Solutions That Drive Success.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
                <button className="mt-6 text-pink-500 font-semibold text-sm hover:text-pink-600 transition flex items-center">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's collaborate to create solutions that make a difference.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-medium transition shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Mega Footer */}
      <MegaFooter />
    </div>
  );
}

// app/layout.js
// import { Inter } from 'next/font/google';
// import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Khano - Expert IT Consulting Solutions',
//   description: 'Transform your business with innovative technology solutions. Expert IT consulting, custom software development, cloud solutions, and cybersecurity.',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

// // app/globals.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//     },
//   },
//   plugins: [],
// }

// // package.json
// {
//   "name": "Khano-nextjs",
//   "version": "0.1.0",
//   "private": true,
//   "scripts": {
//     "dev": "next dev",
//     "build": "next build",
//     "start": "next start",
//     "lint": "next lint"
//   },
//   "dependencies": {
//     "react": "^18",
//     "react-dom": "^18",
//     "next": "14.2.0",
//     "lucide-react": "^0.263.1"
//   },
//   "devDependencies": {
//     "autoprefixer": "^10.0.1",
//     "postcss": "^8",
//     "tailwindcss": "^3.3.0",
//     "eslint": "^8",
//     "eslint-config-next": "14.2.0"
//   }
// }

// // postcss.config.js
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// // .eslintrc.json
// {
//   "extends": "next/core-web-vitals"
// }

// // jsconfig.json
// {
//   "compilerOptions": {
//     "paths": {
//       "@/*": ["./*"]
//     }
//   }
// }