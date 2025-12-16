import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

import spyltImg from '@/assets/projects/spylt.png';
import shashwatImg from '@/assets/projects/shashwat.png';
import innovationImg from '@/assets/projects/innovation.png';
import navbharatImg from '@/assets/projects/navbharat.png';
import andmanImg from '@/assets/projects/andman.png';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontStyle: "normal",
};

const projects = [
  {
    title: "Spylt",
    description: "A premier brand website for a leading 3D graphics company in India.",
    url: "https://spylt-xi.vercel.app/",
    image: spyltImg
  },
  {
    title: "Shashwat Public School",
    description: "An advanced school website with a focus on modern graphics and user experience.",
    url: "https://main.d243f5h0zm6z96.amplifyapp.com/",
    image: shashwatImg
  },
  {
    title: "Innovation Remedies",
    description: "Medical company e-commerce website advancing animal care across India.",
    url: "https://www.innovationremedies.com/",
    image: innovationImg
  },
  {
    title: "Navbharat Properties",
    description: "Comprehensive real estate company website showcasing properties.",
    url: "https://navbharat.vercel.app/",
    image: navbharatImg
  },
  {
    title: "Make Andman Trip",
    description: "Travel booking platform for Andaman trips with beautiful visuals.",
    url: "https://www.makeandamantrip.com/",
    image: andmanImg
  }
];

export default function Projects() {
  return (
    <div style={customFontStyle} className="relative min-h-screen bg-gray-950 text-white overflow-hidden pt-24 px-6">
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover how we transform ideas into digital reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden bg-gray-900 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col h-full">
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <Button 
                  asChild
                  className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-300 group-hover:bg-purple-600/20 group-hover:text-purple-200 group-hover:border-purple-500/30 py-6"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
