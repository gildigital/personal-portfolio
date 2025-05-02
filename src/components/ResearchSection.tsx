
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ResearchSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const researchImages = [
    {
      src: "/lovable-uploads/b10e5b5a-1d55-4338-8607-838c2a7040f9.png",
      caption: "Physics research team collaboration at USD lab",
    },
    {
      src: "/lovable-uploads/fca6458c-44df-4adb-81e5-a27d4fa3e368.png",
      caption: "Machine learning diagram for FLFM research",
    },
    {
      src: "/lovable-uploads/3f34216b-fa8a-4a5d-913a-97bb386200a0.png",
      caption: "Presenting at USD physics department poster session",
    },
    {
      src: "/lovable-uploads/16cea1b2-23fb-4f84-af90-25b035577011.png",
      caption: "Explaining research findings to colleagues",
    },
    {
      src: "/lovable-uploads/e22b5dc0-918b-41ad-9b5a-0fdbd7e834f6.png",
      caption: "Visual representation of physics experimental setup",
    },
  ];

  return (
    <section id="research" className="bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Research Experience</h2>
        
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          <div className="md:col-span-2 space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">Research Assistant</h3>
            <p className="text-slate-dark">
              As a Research Assistant at the University of San Diego (2023-2024), I applied my
              software engineering skills to physics research, developing machine learning tools
              that significantly advanced our understanding of complex physical phenomena.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-accent/20 p-1.5 rounded mr-3 mt-0.5">
                  <ArrowRight className="h-4 w-4 text-accent" />
                </div>
                <p>Developed ML tools with PyTorch for image analysis</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/20 p-1.5 rounded mr-3 mt-0.5">
                  <ArrowRight className="h-4 w-4 text-accent" />
                </div>
                <p>Built custom CNN architectures for microscopy data processing</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/20 p-1.5 rounded mr-3 mt-0.5">
                  <ArrowRight className="h-4 w-4 text-accent" />
                </div>
                <p>Optimized data preprocessing pipelines reducing analysis time by 85%</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="grid grid-cols-3 gap-3 animate-fade-in-left" style={{ animationDelay: "0.3s" }}>
              {researchImages.slice(0, 6).map((image, index) => (
                <div 
                  key={index}
                  className={`relative rounded-md overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedImage === index ? 'col-span-3 row-span-2' : 
                    index === 0 || index === 3 ? 'col-span-2' : ''
                  }`}
                  onClick={() => setSelectedImage(selectedImage === index ? null : index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.caption} 
                    className="w-full h-full object-cover"
                    style={{ height: selectedImage === index ? 'auto' : '100%', maxHeight: selectedImage === index ? 'none' : '150px' }}
                  />
                  {selectedImage === index && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2">
                      <p className="text-sm">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-2">Publication in <span className="italic">Soft Matter</span></h3>
                <p className="text-slate mb-4">
                  First-author paper on ML tools for image analysis, published in Soft Matter. Compiled two years of work, 
                  reducing data needs by 99% using PyTorch and CNNs.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-badge">Machine Learning</span>
                  <span className="tech-badge">PyTorch</span>
                  <span className="tech-badge">CNNs</span>
                  <span className="tech-badge">Physics</span>
                  <span className="tech-badge">Image Analysis</span>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="flex items-center">
                    <a href="/paper.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Paper
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex items-center">
                    <a href="https://doi.org/10.1039/example" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Publisher Site
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="/lovable-uploads/8167a4d3-79d9-449d-b3b7-d5172623e40e.png" 
                  alt="Research publication" 
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResearchSection;
