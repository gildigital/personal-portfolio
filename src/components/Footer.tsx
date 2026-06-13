import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-muted-foreground">© 2026 Gil Martinez</p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Equipment Engineer · Dry Etch &amp; High-Vacuum
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/gil-martinez-phys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/gildigital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
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
