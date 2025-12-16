import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontStyle: "normal",
};

export default function Contact() {
  return (
    <div style={customFontStyle} className="relative min-h-screen bg-gray-950 text-white overflow-hidden pt-24 px-6">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors h-32" placeholder="How can we help?"></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg rounded-xl">
                        Send Message
                    </Button>
                </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 flex flex-col justify-center">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                        <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
                        <p className="text-gray-400">support@bytematrix.com</p>
                        <p className="text-gray-400">sales@bytematrix.com</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                        <Phone className="h-6 w-6 text-pink-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Call Us</h3>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                        <p className="text-gray-400">Mon-Fri 9am-6pm EST</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                        <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Visit Us</h3>
                        <p className="text-gray-400">123 Tech Boulevard</p>
                        <p className="text-gray-400">Innovation District, NY 10001</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
