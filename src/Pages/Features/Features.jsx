import React from 'react';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontStyle: "normal",
};

export default function Features() {
  return (
    <div style={customFontStyle} className="relative min-h-screen bg-gray-950 text-white overflow-hidden pt-24 px-6">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Features
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Explore the powerful features of ByteMatrix Analytica.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Placeholder feature cards */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3 text-purple-300">AI Analytics</h3>
                <p className="text-gray-400">Advanced machine learning algorithms to uncover hidden patterns in your data.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3 text-pink-300">Real-time Processing</h3>
                <p className="text-gray-400">Process millions of data points in real-time with our optimized engine.</p>
            </div>
             <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3 text-blue-300">Secure Vault</h3>
                <p className="text-gray-400">Enterprise-grade security ensuring your data remains private and protected.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3 text-green-300">Custom Integration</h3>
                <p className="text-gray-400">Seamlessly integrate with your existing tools and workflows.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
