
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Database } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-quantum-teal" />
            <span className="font-bold text-lg">QuantumShield</span>
          </Link>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link 
            to="/#architecture" 
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Architecture
          </Link>
          <Link 
            to="/#tech-stack" 
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Technology
          </Link>
          <Link 
            to="/#use-cases" 
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Use Cases
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link to="/demo">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex gap-1 items-center group"
            >
              <Database className="h-4 w-4 group-hover:text-quantum-teal transition-colors" />
              <span>Demo</span>
            </Button>
          </Link>
          <Button 
            size="sm" 
            className="hidden sm:flex gap-1 items-center bg-quantum-navy hover:bg-quantum-dark"
          >
            <Lock className="h-4 w-4" />
            <span>Secure Login</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
