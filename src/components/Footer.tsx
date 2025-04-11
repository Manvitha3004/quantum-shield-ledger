
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-quantum-navy text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-quantum-teal" />
              <span className="font-bold text-lg">QuantumShield</span>
            </div>
            <p className="text-quantum-light/80 text-sm mb-6">
              Securing blockchain technology for the quantum age with advanced cryptographic solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-quantum-light/70 hover:text-quantum-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-quantum-light/70 hover:text-quantum-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-quantum-light/70 hover:text-quantum-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6h-4z"></path>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </a>
              <a href="#" className="text-quantum-light/70 hover:text-quantum-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Technology</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">SPHINCS+</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">Lattice-Based Encryption</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">Quantum-Safe PoS</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">IPFS Integration</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">Smart Contracts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">Whitepaper</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">GitHub</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-quantum-light/80 hover:text-quantum-teal transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-quantum-light/60 text-sm">
            © 2025 QuantumShield Ledger. All rights reserved.
          </p>
          <p className="text-quantum-light/60 text-sm mt-4 md:mt-0">
            Securing the future of blockchain technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
