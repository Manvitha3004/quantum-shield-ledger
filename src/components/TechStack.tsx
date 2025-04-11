
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Database, Code, Server } from 'lucide-react';

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-quantum-navy/20 bg-quantum-navy/10 px-4 py-1 text-sm font-medium text-quantum-navy mb-4">
            <Server className="mr-1 h-3.5 w-3.5" />
            <span>Technology</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 quantum-title">
            Technology Stack
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Our solution integrates cutting-edge technologies to create a secure and efficient 
            quantum-resistant blockchain platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="quantum-card group hover:border-quantum-teal/50">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-quantum-teal/10 group-hover:bg-quantum-teal/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-quantum-teal">
                  <path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></path>
                  <path d="M6 14h12"></path>
                  <path d="M6 10h12"></path>
                  <path d="M10 2v2"></path>
                  <path d="M14 2v2"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Blockchain Platforms</h3>
              <p className="text-muted-foreground mb-4">
                Built on Ethereum with enhancements for quantum resistance, providing 
                a robust foundation for decentralized applications.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-quantum-navy text-white">
                  Ethereum
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-quantum-navy/80 text-white">
                  EVM Compatible
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="quantum-card group hover:border-quantum-teal/50">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-quantum-teal/10 group-hover:bg-quantum-teal/20 transition-colors">
                <Shield className="h-6 w-6 text-quantum-teal" />
              </div>
              <h3 className="font-bold text-xl mb-2">Post-Quantum Cryptography</h3>
              <p className="text-muted-foreground mb-4">
                Advanced cryptographic algorithms designed to withstand attacks from both 
                classical and quantum computers.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-quantum-teal text-white">
                  SPHINCS+
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-quantum-teal/80 text-white">
                  Lattice-Based
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="quantum-card group hover:border-quantum-teal/50">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-quantum-teal/10 group-hover:bg-quantum-teal/20 transition-colors">
                <Code className="h-6 w-6 text-quantum-teal" />
              </div>
              <h3 className="font-bold text-xl mb-2">Smart Contract Languages</h3>
              <p className="text-muted-foreground mb-4">
                Utilizing industry-standard smart contract languages enhanced with 
                quantum-safe libraries and frameworks.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-600 text-white">
                  Solidity
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="quantum-card group hover:border-quantum-teal/50">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-quantum-teal/10 group-hover:bg-quantum-teal/20 transition-colors">
                <Database className="h-6 w-6 text-quantum-teal" />
              </div>
              <h3 className="font-bold text-xl mb-2">Data Storage & Integrity</h3>
              <p className="text-muted-foreground mb-4">
                Decentralized storage solutions ensuring data remains secure and 
                tamperproof against any attack vector.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-white">
                  IPFS
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600/80 text-white">
                  Filecoin
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="quantum-card group hover:border-quantum-teal/50">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-quantum-teal/10 group-hover:bg-quantum-teal/20 transition-colors">
                <Server className="h-6 w-6 text-quantum-teal" />
              </div>
              <h3 className="font-bold text-xl mb-2">Infrastructure</h3>
              <p className="text-muted-foreground mb-4">
                Containerized deployment architecture allowing for scalable, reliable, 
                and secure blockchain operations.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500 text-white">
                  Docker
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500/80 text-white">
                  Kubernetes
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="quantum-card group hover:border-quantum-teal/50">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-quantum-teal/10 group-hover:bg-quantum-teal/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-quantum-teal">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  <path d="M5 3v4"></path>
                  <path d="M19 17v4"></path>
                  <path d="M3 5h4"></path>
                  <path d="M17 19h4"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Quantum Security</h3>
              <p className="text-muted-foreground mb-4">
                Specialized security tools and protocols designed to monitor and protect against 
                emerging quantum threats.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-quantum-gold text-white">
                  Quantum Audits
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-quantum-gold/80 text-white">
                  Threat Modeling
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
