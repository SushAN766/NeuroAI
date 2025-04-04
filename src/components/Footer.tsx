
import React from 'react';
import { Brain, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medical-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-medical-700 p-2 rounded-lg mr-2">
                <Brain className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">BrainScan</span>
            </div>
            <p className="text-gray-300 text-sm">
              Advanced AI-powered brain tumor detection platform for medical professionals.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Research Papers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">News & Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@brainscan.ai</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Medical Center Blvd</li>
              <li>San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} BrainScan Medical Technologies. Made with <Heart className="h-3 w-3 text-red-500" /> for advancing healthcare.
          </p>
          <p className="mt-2">
            This application is for educational and research purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
