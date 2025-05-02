
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ResumeSection from '@/components/ResumeSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResearchSection from '@/components/ResearchSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Index = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Gildardo Martinez - Junior Software Engineer & Full-Stack Developer</title>
          <meta name="description" content="Gildardo Martinez's portfolio - Junior Software Engineer, Full-Stack Developer, and USAF Veteran specializing in React, Node.js, and AWS." />
          <meta name="keywords" content="junior software engineer, full-stack developer, React Node.js portfolio, USAF veteran" />
          
          {/* Open Graph / Social Media */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gildardo Martinez - Software Engineer Portfolio" />
          <meta property="og:description" content="Junior Software Engineer, Full-Stack Developer, and USAF Veteran specializing in React, Node.js, and AWS." />
          <meta property="og:image" content="/uploads/eff682af-cd4d-4b87-8651-88063286cb65.png" />
          
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
