
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-quantum-teal/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-60 -left-20 h-60 w-60 rounded-full bg-quantum-gold/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-quantum-teal/20 bg-quantum-teal/10 px-4 py-1 text-sm font-medium text-quantum-teal mb-6">
            <Shield className="mr-1 h-3.5 w-3.5" />
            <span>Quantum-Resistant Blockchain Technology</span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="block">Blockchain Security</span>
            <span className="block text-quantum-teal">For The Quantum Age</span>
          </h1>
          
          <p className="max-w-2xl text-muted-foreground text-lg sm:text-xl mb-10">
            Our quantum-resistant blockchain employs SPHINCS+ and lattice-based cryptography to 
            secure your digital assets against both classical and quantum threats.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="gap-2 bg-quantum-navy hover:bg-quantum-dark">
              <Lock className="h-4 w-4" />
              Get Started
            </Button>
            <Button variant="outline" className="gap-2 group">
              Learn More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
            <div className="flex flex-col items-center gap-2 rounded-lg bg-background/50 p-4 text-center shadow-sm">
              <div className="rounded-full bg-quantum-teal/10 p-2">
                <Shield className="h-6 w-6 text-quantum-teal" />
              </div>
              <h3 className="font-medium">Post-Quantum Security</h3>
              <p className="text-sm text-muted-foreground">Resistant to attacks from quantum computers</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 rounded-lg bg-background/50 p-4 text-center shadow-sm">
              <div className="rounded-full bg-quantum-gold/10 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-quantum-gold">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <path d="M12 18V6"></path>
                </svg>
              </div>
              <h3 className="font-medium">Financial Stability</h3>
              <p className="text-sm text-muted-foreground">Secure cryptocurrencies and digital assets</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 rounded-lg bg-background/50 p-4 text-center shadow-sm">
              <div className="rounded-full bg-blue-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="font-medium">Decentralized Storage</h3>
              <p className="text-sm text-muted-foreground">IPFS integration for tamperproof data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
