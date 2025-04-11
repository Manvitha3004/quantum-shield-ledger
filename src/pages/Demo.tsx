
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Shield, Lock, Database, CheckCircle, Copy, ChevronsUpDown } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Demo = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [signatureType, setSignatureType] = useState("sphincs");

  const handleGenerateKeys = () => {
    setIsGenerating(true);
    
    // Simulate key generation with a timeout
    setTimeout(() => {
      if (signatureType === "sphincs") {
        setPublicKey("0x7a631e222438b648508c78a365b8c7b800a51f0572f5c421b5c8b598f475a8d3");
        setPrivateKey("0x9d3f2e01ac45d7629984b4f76ef82893e6399f9a04d87c813ecdb63c4e3b9875");
      } else {
        setPublicKey("0x4c9e1e222438b648508c78a365b8c7b800a51f0572f5c421b5c8b598f475a8d3");
        setPrivateKey("0x3b7f2e01ac45d7629984b4f76ef82893e6399f9a04d87c813ecdb63c4e3b9875");
      }
      
      setIsGenerating(false);
      toast({
        title: "Keys Generated Successfully",
        description: "Your quantum-resistant keys have been created. Keep your private key secure!",
      });
    }, 2000);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} Copied`,
      description: "The key has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-quantum-navy/20 bg-quantum-navy/10 px-4 py-1 text-sm font-medium text-quantum-navy mb-4">
                <Database className="mr-1 h-3.5 w-3.5" />
                <span>Interactive Demo</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 quantum-title">
                Experience Quantum Resistance
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                Generate and test quantum-resistant cryptographic keys and signatures to see our technology in action.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="keygen" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="keygen">Key Generation</TabsTrigger>
                  <TabsTrigger value="signing">Digital Signatures</TabsTrigger>
                  <TabsTrigger value="encryption">Data Encryption</TabsTrigger>
                </TabsList>
                
                <TabsContent value="keygen" className="space-y-8">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">Generate Quantum-Resistant Keys</h3>
                        <p className="text-muted-foreground">
                          Create a new pair of quantum-resistant cryptographic keys using our advanced algorithms.
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Signature Scheme
                        </label>
                        <div className="flex space-x-4">
                          <Button 
                            variant={signatureType === "sphincs" ? "default" : "outline"}
                            onClick={() => setSignatureType("sphincs")}
                            className={signatureType === "sphincs" ? "bg-quantum-navy hover:bg-quantum-dark" : ""}
                          >
                            SPHINCS+
                          </Button>
                          <Button 
                            variant={signatureType === "lattice" ? "default" : "outline"}
                            onClick={() => setSignatureType("lattice")}
                            className={signatureType === "lattice" ? "bg-quantum-navy hover:bg-quantum-dark" : ""}
                          >
                            Lattice-Based
                          </Button>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={handleGenerateKeys} 
                        disabled={isGenerating}
                        className="w-full gap-2 bg-quantum-navy hover:bg-quantum-dark"
                      >
                        {isGenerating ? (
                          <>
                            <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Shield className="h-4 w-4" />
                            Generate Keys
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                  
                  {(publicKey && privateKey) && (
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4">Your Generated Keys</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Public Key
                            </label>
                            <div className="flex">
                              <Input 
                                value={publicKey} 
                                readOnly 
                                className="font-mono text-sm"
                              />
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="ml-2"
                                onClick={() => copyToClipboard(publicKey, "Public Key")}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Private Key (Keep secure!)
                            </label>
                            <div className="flex">
                              <Input 
                                value={privateKey} 
                                readOnly 
                                type="password" 
                                className="font-mono text-sm"
                              />
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="ml-2"
                                onClick={() => copyToClipboard(privateKey, "Private Key")}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <p className="font-medium">Keys Generated Successfully</p>
                                <p className="mt-1">
                                  Your keys use {signatureType === "sphincs" ? "SPHINCS+" : "Lattice-Based"} cryptography, providing resistance to quantum attacks. Save these keys securely.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
                
                <TabsContent value="signing" className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Quantum-Resistant Digital Signatures</h3>
                      <p className="text-muted-foreground mb-6">
                        Sign data with your private key and verify signatures with the corresponding public key.
                      </p>
                      
                      <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-800 mb-4">
                        <p>Generate keys first in the Key Generation tab to use this feature.</p>
                      </div>
                      
                      <Button disabled className="w-full gap-2 bg-quantum-navy hover:bg-quantum-dark opacity-70">
                        <Lock className="h-4 w-4" />
                        Generate keys first
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="encryption" className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Quantum-Resistant Data Encryption</h3>
                      <p className="text-muted-foreground mb-6">
                        Encrypt data using lattice-based encryption schemes for protection against quantum attacks.
                      </p>
                      
                      <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-800 mb-4">
                        <p>Generate keys first in the Key Generation tab to use this feature.</p>
                      </div>
                      
                      <Button disabled className="w-full gap-2 bg-quantum-navy hover:bg-quantum-dark opacity-70">
                        <Lock className="h-4 w-4" />
                        Generate keys first
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="mt-16 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Technical Explanation</h3>
                    <Button variant="ghost" size="sm">
                      <ChevronsUpDown className="h-4 w-4 mr-2" />
                      Expand
                    </Button>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p>
                      Our quantum-resistant cryptography implementation uses SPHINCS+ (Stateless Hash-based Signature Scheme) and lattice-based algorithms to ensure security against quantum computing attacks.
                    </p>
                    <p>
                      SPHINCS+ relies on the one-way nature of cryptographic hash functions, which are believed to be resistant to quantum attacks. The demo generates:
                    </p>
                    <ul>
                      <li>A 256-bit public key that can be safely shared</li>
                      <li>A 256-bit private key that must be kept secure</li>
                    </ul>
                    <p>
                      For more technical details, consult our <a href="#" className="text-quantum-teal hover:underline">documentation</a>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
