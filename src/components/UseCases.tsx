
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-slate-50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-quantum-navy/20 bg-quantum-navy/10 px-4 py-1 text-sm font-medium text-quantum-navy mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 h-3.5 w-3.5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>Applications</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 quantum-title">
            Use Cases
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Our quantum-resistant blockchain technology enables secure and future-proof solutions
            across various industries and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-quantum-navy to-quantum-teal"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Financial Stability</h3>
              <p className="text-muted-foreground mb-6">
                Our quantum-resistant blockchain ensures the long-term security and stability of financial 
                assets and transactions in a post-quantum world.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-quantum-teal flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Secure cryptocurrency transactions resistant to quantum attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-quantum-teal flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Protection for smart contracts managing financial assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-quantum-teal flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Future-proof digital asset management and exchange</span>
                </li>
              </ul>
              <a href="#" className="inline-flex items-center text-quantum-teal hover:text-quantum-navy font-medium">
                Learn more about financial applications
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-quantum-teal to-quantum-gold"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Supply Chain Security</h3>
              <p className="text-muted-foreground mb-6">
                Enhance supply chain integrity with immutable, quantum-resistant records that ensure
                product authenticity and traceability throughout the entire process.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-quantum-teal flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Tamper-proof product authentication and verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-quantum-teal flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Secure end-to-end tracking of goods and materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-quantum-teal flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Quantum-resistant supply chain automation and smart contracts</span>
                </li>
              </ul>
              <a href="#" className="inline-flex items-center text-quantum-teal hover:text-quantum-navy font-medium">
                Explore supply chain solutions
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="quantum-card">
            <CardContent className="p-6">
              <div className="rounded-full bg-quantum-teal/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-quantum-teal">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Digital Identity</h3>
              <p className="text-muted-foreground">
                Secure, self-sovereign digital identities protected against quantum threats, 
                enabling safe authentication and verification.
              </p>
            </CardContent>
          </Card>

          <Card className="quantum-card">
            <CardContent className="p-6">
              <div className="rounded-full bg-quantum-teal/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-quantum-teal">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Healthcare Data</h3>
              <p className="text-muted-foreground">
                Protect sensitive healthcare records with quantum-resistant encryption 
                while maintaining HIPAA compliance and data integrity.
              </p>
            </CardContent>
          </Card>

          <Card className="quantum-card">
            <CardContent className="p-6">
              <div className="rounded-full bg-quantum-teal/10 p-2 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-quantum-teal">
                  <path d="M20 17a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2Z"></path>
                  <path d="M6 15v-2"></path>
                  <path d="M10 15v-6"></path>
                  <path d="M14 15V9"></path>
                  <path d="M18 15V5"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">IoT Security</h3>
              <p className="text-muted-foreground">
                Secure IoT networks and device communications with quantum-resistant 
                authentication and data exchange protocols.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
