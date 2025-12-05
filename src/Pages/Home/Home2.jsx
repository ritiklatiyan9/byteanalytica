import React from 'react';
import CardSwap, { Card } from './CardSwap';
import Home3 from './Home3';
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
import Home from './Home';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontStyle: "normal",
};

// Service cards data
const services = [
  {
    icon: <Code2 className="w-10 h-10 text-cyan-400" />,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to drive your business forward.",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: <Cloud className="w-10 h-10 text-purple-400" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for seamless operations.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: <Shield className="w-10 h-10 text-emerald-400" />,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets 24/7.",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: <Cpu className="w-10 h-10 text-orange-400" />,
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics to transform your operations.",
    gradient: "from-orange-500/20 to-red-500/20"
  }
];

// Stats data
const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Experts" },
  { value: "24/7", label: "Support Available" }
];

// Features data
const features = [
  "Agile Development Methodology",
  "Dedicated Project Managers",
  "Transparent Communication",
  "Quality Assurance Testing",
  "Post-Launch Support",
  "Scalable Architecture"
];

export default function Home2() {
  return (
    <div style={customFontStyle} className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Innovating Tomorrow, Today</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Transform Your </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                We craft innovative software solutions that empower businesses to thrive in the digital age. 
                From concept to deployment, we're your technology partner.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-700 text-zinc-900 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
                >
                  View Our Work
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-900 flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold">200+ Happy Clients</p>
                  <p className="text-sm text-gray-500">Trusted by industry leaders</p>
                </div>
              </div>
            </div>

            {/* Right Content - Card Swap */}
            <div className="relative h-[600px] hidden lg:block">
              <CardSwap
                cardDistance={50}
                verticalDistance={60}
                delay={2000}
                pauseOnHover={true}
                width={420}
                height={320}
                skewAmount={4}
                easing="elastic"
              >
                {services.map((service, index) => (
                  <Card 
                    key={index}
                    className={`p-8 bg-gradient-to-br ${service.gradient} backdrop-blur-xl border-gray-800/50 cursor-pointer hover:border-gray-700 transition-colors`}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="mb-4 p-3 bg-gray-900/50 rounded-xl w-fit">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 mt-6 group cursor-pointer">
                        <span className="text-sm font-medium">Learn More</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
   <Home3 />
   

      {/* Mobile Services (visible on smaller screens) */}
      <section className="relative z-10 py-12 lg:hidden">
        <div className="container mx-auto px-6">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br ${service.gradient} border border-gray-800/50`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-900/50 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}