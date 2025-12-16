import React from 'react';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontStyle: "normal",
};

export default function About() {
  return (
    <div style={customFontStyle} className="relative min-h-screen bg-gray-950 text-white overflow-hidden pt-24 px-6">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            About Us
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          We are building the future of enterprise analytics.
        </p>
        
        <div className="space-y-12 text-gray-400 text-lg leading-relaxed">
            <p>
                At ByteMatrix Analytica, we believe that data is the lifeblood of modern business. Our mission is to empower organizations to unlock the full potential of their data through advanced AI and machine learning technologies.
            </p>
            <p>
                Founded by a team of data scientists and engineers, we wanted to create a platform that bridges the gap between complex raw data and actionable business insights. We've built a solution that is not only powerful but also intuitive and beautiful to use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-white text-2xl font-bold mb-2">Our Vision</h3>
                    <p>To be the world's leading AI analytics platform, making data accessible to everyone.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-white text-2xl font-bold mb-2">Our Values</h3>
                    <p>Innovation, Integrity, and Customer Success are at the core of everything we do.</p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
