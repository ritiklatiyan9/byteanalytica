import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import GooeyNav from "./GooveyNav";
const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontStyle: "normal",
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Navigation items for GooeyNav
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header style={customFontStyle} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {/* Main Header Container */}
      <div className="relative bg-gray-950/60 backdrop-blur-2xl rounded-full border border-white/10 px-6 py-3 flex justify-between items-center shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-shadow duration-500" style={{ overflow: 'visible' }}>
        {/* Glossy overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Logo */}
        <Link to="/" className="relative z-10 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Bytematrix  Analytica
        </Link>

        {/* Desktop Navigation with GooeyNav */}
        <div className="hidden lg:block relative z-10" style={{ overflow: 'visible' }}>
          <GooeyNav
            items={navItems}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4 relative z-10">
          <Link to="/login" className="text-gray-300 hover:text-white transition-all duration-300">
            Sign In
          </Link>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden relative z-10 p-2 text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
            <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-3' 
            : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className={`bg-gray-950/80 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 shadow-[0_0_30px_rgba(139,92,246,0.1)] transform transition-all duration-500 ${
          isMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
        }`}>
          {/* Glossy overlay for mobile menu */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>
          
          <nav className="flex flex-col gap-4 relative z-10">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5"
            >
              Home
            </Link>
            <Link 
              to="/features" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5"
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5"
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5"
            >
              Contact
            </Link>
            
            <div className="border-t border-white/10 my-2"></div>
            
            <Link 
              to="/login" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5"
            >
              Sign In
            </Link>
            <Button 
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 py-3 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 w-full"
            >
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}