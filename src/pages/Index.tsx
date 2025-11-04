import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Index = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Gildardo Martinez - Physicist & Equipment Engineer</title>
          <meta
            name="description"
            content="Portfolio of Gildardo Martinez — Physicist and Equipment Engineer in the semiconductor industry. Experienced in photonic device fabrication, process systems, and automation, with a background in full-stack development and USAF service."
          />
          <meta
            name="keywords"
            content="physicist, equipment engineer, semiconductor, photonics, process engineering, automation, cleanroom, USAF veteran, full-stack developer"
          />

          {/* Open Graph / Social Media */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Gildardo Martinez - Physicist & Equipment Engineer"
          />
          <meta
            property="og:description"
            content="Physicist and Equipment Engineer specializing in semiconductor fabrication, photonics, and process automation. Bridging physics, software, and precision engineering."
          />
          <meta
            property="og:image"
            content="/uploads/eff682af-cd4d-4b87-8651-88063286cb65.png"
          />

          {/* Accessibility */}
          <html lang="en" />
        </Helmet>

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            <HeroSection />
            <ResumeSection />
            <ProjectsSection />
            <ResearchSection />
            <ContactSection />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </>
    </HelmetProvider>
  );
};

export default Index;
