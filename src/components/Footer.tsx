
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-primary-foreground/80">© 2025 Gildardo Martinez</p>
            <p className="text-xs text-primary-foreground/60 mt-1">From aircraft to algorithms</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/gil-martinez-phys" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground/80 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/gildigital" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground/80 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
