import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ResearchSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const researchImages = [
    { src: "/uploads/b10e5b5a-1d55-4338-8607-838c2a7040f9.png", caption: "Physics research collaboration at USD lab" },
    { src: "/uploads/fca6458c-44df-4adb-81e5-a27d4fa3e368.png", caption: "Experimental setup" },
    { src: "/uploads/3f34216b-fa8a-4a5d-913a-97bb386200a0.png", caption: "USD Physics, Shiley Center for Science and Technology" },
    { src: "/uploads/16cea1b2-23fb-4f84-af90-25b035577011.png", caption: "Poster presentation at a USD research symposium" },
    { src: "/uploads/e22b5dc0-918b-41ad-9b5a-0fdbd7e834f6.png", caption: "Explaining research findings to colleagues" },
  ];

  return (
    <section id="research">
      <div className="container">
        <p className="mono-label mb-2">Research</p>
        <h2 className="section-title">The analytical edge</h2>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          <div className="md:col-span-2 space-y-6 animate-fade-in">
            <h3 className="text-2xl font-display font-medium">Experimental physics, quantified</h3>
            <p className="text-muted-foreground">
              At the University of San Diego (2023–2024) I ran experimental soft-matter research and authored a
              first-author paper in <span className="italic text-foreground">Soft Matter</span>. The throughline
              with equipment engineering is the same: rigorous experimental method and quantitative root-cause —
              turning noisy, real-world data into defensible conclusions.
            </p>

            <div className="space-y-3">
              {[
                "Designed and ran controlled experiments with reproducible method",
                "Built quantitative image-analysis pipelines for microscopy data",
                "Cut required experimental data by ~99% while preserving accuracy",
              ].map((t) => (
                <div key={t} className="flex items-start">
                  <div className="bg-accent/15 p-1.5 rounded mr-3 mt-0.5">
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </div>
                  <p className="text-foreground/90">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-3 gap-3 animate-fade-in-left" style={{ animationDelay: "0.3s" }}>
              {researchImages.slice(0, 6).map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-md overflow-hidden cursor-pointer border border-border transition-all duration-300 ${
                    selectedImage === index ? "col-span-3 row-span-2" : index === 0 || index === 3 ? "col-span-2" : ""
                  }`}
                  onClick={() => setSelectedImage(selectedImage === index ? null : index)}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                    style={{
                      height: selectedImage === index ? "auto" : "100%",
                      maxHeight: selectedImage === index ? "none" : "150px",
                    }}
                  />
                  {selectedImage === index && (
                    <div className="absolute bottom-0 left-0 right-0 bg-background/80 text-foreground p-2">
                      <p className="text-sm">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="panel animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-display font-medium mb-2">
                  Publication in <span className="italic">Soft Matter</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  First-author paper applying convolutional models to image analysis, compiling two years of work and
                  reducing data needs by ~99% — peer-reviewed and published in the Royal Society of Chemistry&apos;s{" "}
                  <span className="italic">Soft Matter</span>.
                </p>

                <div className="flex flex-wrap mb-4">
                  {["Experimental Method", "Data Analysis", "CNNs", "Optics", "Image Analysis"].map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="flex items-center">
                    <a href="/Martinez et al. - 2024 - CNNDDM.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Paper
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex items-center">
                    <a href="https://doi.org/10.1039/D4SM00881B" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Publisher Site
                    </a>
                  </Button>
                </div>
              </div>

              <div className="hidden md:block">
                <img
                  src="/uploads/8167a4d3-79d9-449d-b3b7-d5172623e40e.png"
                  alt="Research publication"
                  className="rounded-lg object-cover w-full h-full border border-border"
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
