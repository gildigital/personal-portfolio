import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
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
          <title>Gil Martinez — Equipment Engineer | Dry Etch &amp; High-Vacuum</title>
          <meta
            name="description"
            content="Gil Martinez — semiconductor equipment engineer specializing in dry etch and high-vacuum toolsets. Plasma etch process & hardware troubleshooting, RF/bias tuning, ESC/dechuck, chamber recovery, PM development, and tool uptime."
          />
          <meta
            name="keywords"
            content="equipment engineer, dry etch, plasma etch, high vacuum, semiconductor, Lam Research, Applied Materials, TEL, SPTS, Axcelis, RF matching, ESC, dechuck, turbo pump, chamber recovery, PM, tool uptime, process engineering, Temecula"
          />

          {/* Open Graph / Social Media */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Gil Martinez — Equipment Engineer | Dry Etch & High-Vacuum"
          />
          <meta
            property="og:description"
            content="Semiconductor equipment engineer for dry etch & high-vacuum toolsets. Plasma, vacuum, yield — engineered for uptime."
          />
          <meta property="og:image" content="/gildardo-og-image.png" />

          {/* Accessibility */}
          <html lang="en" />
        </Helmet>

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            <HeroSection />
            <CapabilitiesSection />
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
