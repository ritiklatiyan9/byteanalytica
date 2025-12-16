import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontStyle: "normal",
};

export default function Pricing() {
  return (
    <div style={customFontStyle} className="relative min-h-screen bg-gray-950 text-white overflow-hidden pt-24 px-6">
      <div className="max-w-6xl mx-auto py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Simple Pricing
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-2xl mx-auto">
          Choose the plan that fits your business needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Basic Plan */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col">
                <h3 className="text-xl font-medium text-gray-400 mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal text-gray-500">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-3"><Check className="text-green-400 h-5 w-5" /> <span className="text-gray-300">Basic Analytics</span></li>
                    <li className="flex items-center gap-3"><Check className="text-green-400 h-5 w-5" /> <span className="text-gray-300">1 User</span></li>
                    <li className="flex items-center gap-3"><Check className="text-green-400 h-5 w-5" /> <span className="text-gray-300">Community Support</span></li>
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10">Get Started</Button>
            </div>

            {/* Pro Plan */}
             <div className="relative p-8 rounded-3xl bg-gray-900 border border-purple-500/30 backdrop-blur-sm flex flex-col shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-4 py-1 rounded-full font-medium">Most Popular</div>
                <h3 className="text-xl font-medium text-purple-300 mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-6">$49<span className="text-lg font-normal text-gray-500">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                     <li className="flex items-center gap-3"><Check className="text-purple-400 h-5 w-5" /> <span className="text-gray-300">Advanced AI Analytics</span></li>
                    <li className="flex items-center gap-3"><Check className="text-purple-400 h-5 w-5" /> <span className="text-gray-300">Up to 10 Users</span></li>
                    <li className="flex items-center gap-3"><Check className="text-purple-400 h-5 w-5" /> <span className="text-gray-300">Priority Support</span></li>
                     <li className="flex items-center gap-3"><Check className="text-purple-400 h-5 w-5" /> <span className="text-gray-300">Custom Reports</span></li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">Start Free Trial</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col">
                <h3 className="text-xl font-medium text-gray-400 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold mb-6">Custom</div>
                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-3"><Check className="text-green-400 h-5 w-5" /> <span className="text-gray-300">Unlimited Analytics</span></li>
                    <li className="flex items-center gap-3"><Check className="text-green-400 h-5 w-5" /> <span className="text-gray-300">Unlimited Users</span></li>
                    <li className="flex items-center gap-3"><Check className="text-green-400 h-5 w-5" /> <span className="text-gray-300">24/7 Dedicated Support</span></li>
                    <li className="flex items-center gap-3"><Check className="text-green-400 h-5 w-5" /> <span className="text-gray-300">On-premise Deployment</span></li>
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10">Contact Sales</Button>
            </div>
        </div>
      </div>
    </div>
  );
}
