import React from 'react';
import CardSwap, { Card } from './CardSwap';
import Aurora from './Aurora';

import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Code2, 
  Cloud, 
  Shield, 
  Cpu, 
  Sparkles, 
  Rocket, 
  Users, 
  CheckCircle2,
  Globe,
  Zap,
  BarChart3,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
// Features data
const features = [
  "Agile Development Methodology",
  "Dedicated Project Managers",
  "Transparent Communication",
  "Quality Assurance Testing",
  "Post-Launch Support",
  "Scalable Architecture"
];


const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontStyle: "normal",
};

const Home3 = () => {
  return (
    <>
      {/* Aurora Animation Section */}
      <section className="relative w-full h-[500px] overflow-hidden ">
        <div className="absolute inset-0 z-0">
          <Aurora 
            colorStops={["#ff6b35", "#f72585", "#7209b5"]} 
            amplitude={1.2} 
            blend={0.6}
            speed={0.8}
          />
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center space-y-6 px-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
              We Transforms Your Idea into <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Reality</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
              Transforming ideas into powerful digital solutions with cutting-edge technology
            </p>
          </div>
        </div>
      </section>
    
    
      {/* Why Choose Us Section */}
      <section className="relative z-10 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="container mx-auto m-8 px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full">
                <Rocket className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">Why Choose Us</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Your Success Is Our <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                With over a decade of experience in delivering exceptional IT solutions, 
                we combine technical expertise with business acumen to create solutions that matter.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500  to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <Globe className="w-10 h-10 text-cyan-400 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Global Reach</h4>
                  <p className="text-gray-400 text-sm">Serving clients across 25+ countries worldwide</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
                  <BarChart3 className="w-10 h-10 text-purple-400 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Data-Driven</h4>
                  <p className="text-gray-400 text-sm">Analytics-first approach for measurable results</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-300">
                  <Zap className="w-10 h-10 text-emerald-400 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Fast Delivery</h4>
                  <p className="text-gray-400 text-sm">Agile methodology for rapid development</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300">
                  <MessageSquare className="w-10 h-10 text-orange-400 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">24/7 Support</h4>
                  <p className="text-gray-400 text-sm">Round-the-clock technical assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home3