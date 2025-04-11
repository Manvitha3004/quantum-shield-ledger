
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Lock, Database, Code, CheckCircle } from 'lucide-react';

const Architecture = () => {
  return (
    <section id="architecture" className="py-20 bg-slate-50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-quantum-navy/20 bg-quantum-navy/10 px-4 py-1 text-sm font-medium text-quantum-navy mb-4">
            <Code className="mr-1 h-3.5 w-3.5" />
            <span>Technical Design</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 quantum-title">
            Architecture
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Our quantum-resistant blockchain architecture ensures security at every level from 
            transaction creation to consensus and validation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <Card className="flex-1 bg-white border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle>Quantum-Resistant Components</CardTitle>
              <CardDescription>Core elements ensuring post-quantum security</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-quantum-teal flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">SPHINCS+ Implementation</h4>
                    <p className="text-sm text-muted-foreground">Stateless hash-based signature scheme resistant to quantum attacks</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-quantum-teal flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Lattice-Based Encryption</h4>
                    <p className="text-sm text-muted-foreground">Leverages mathematical problems that quantum computers cannot solve efficiently</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-quantum-teal flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Quantum-Safe PoS</h4>
                    <p className="text-sm text-muted-foreground">Consensus mechanism engineered to resist quantum computing threats</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex-1 bg-white border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle>Security Framework</CardTitle>
              <CardDescription>Comprehensive protection against quantum threats</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-quantum-teal flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Quantum Attack Simulations</h4>
                    <p className="text-sm text-muted-foreground">Regular testing against simulated quantum computing attacks</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-quantum-teal flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">IPFS/Filecoin Integration</h4>
                    <p className="text-sm text-muted-foreground">Decentralized storage solution for tamperproof data protection</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-quantum-teal flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Ongoing Security Audits</h4>
                    <p className="text-sm text-muted-foreground">Continuous evaluation and improvements to security measures</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl">
            <img 
              src="/lovable-uploads/d52d2358-60cd-4b6c-9a66-03d9cb40b3d1.png" 
              alt="Quantum-Resistant Blockchain Architecture" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
