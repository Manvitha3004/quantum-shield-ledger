
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Architecture from '@/components/Architecture';
import TechStack from '@/components/TechStack';
import UseCases from '@/components/UseCases';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Architecture />
        <TechStack />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
