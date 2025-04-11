
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Shield, Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      setSubmitted(true);
      // Clear form
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
      
      // Reset submitted state after a delay
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-quantum-navy/20 bg-quantum-navy/10 px-4 py-1 text-sm font-medium text-quantum-navy mb-4">
                <Mail className="mr-1 h-3.5 w-3.5" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 quantum-title">
                Contact Us
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                Have questions about our quantum-resistant blockchain technology? Reach out to our team of experts for more information.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What's this regarding?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message here..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full gap-2 bg-quantum-navy hover:bg-quantum-dark">
                    {submitted ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full bg-quantum-teal/10 p-2">
                      <Shield className="h-6 w-6 text-quantum-teal" />
                    </div>
                    <h3 className="text-xl font-bold">Security Inquiries</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    For questions about our quantum-resistant security measures and implementation.
                  </p>
                  <a href="mailto:security@quantumshield.com" className="text-quantum-teal hover:underline inline-flex items-center">
                    security@quantumshield.com
                  </a>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full bg-quantum-gold/10 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-quantum-gold">
                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Business Development</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    For partnership opportunities and business inquiries.
                  </p>
                  <a href="mailto:business@quantumshield.com" className="text-quantum-teal hover:underline inline-flex items-center">
                    business@quantumshield.com
                  </a>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Documentation</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    For technical documentation and implementation guides.
                  </p>
                  <a href="mailto:docs@quantumshield.com" className="text-quantum-teal hover:underline inline-flex items-center">
                    docs@quantumshield.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
