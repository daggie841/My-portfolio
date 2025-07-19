import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Brand Identity", href: "#services" },
    { name: "Full-Stack Development", href: "#services" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Your Portfolio
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Crafting beautiful digital experiences that bridge the gap between design and development. 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="p-3 rounded-full bg-background hover:bg-accent transition-colors shadow-elegant hover:shadow-glow"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="p-3 rounded-full bg-background hover:bg-accent transition-colors shadow-elegant hover:shadow-glow"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="mailto:hello@yourname.com" 
                className="p-3 rounded-full bg-background hover:bg-accent transition-colors shadow-elegant hover:shadow-glow"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to action section */}
        <div className="py-8 border-t border-border">
          <div className="bg-gradient-primary p-8 rounded-lg text-center text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can bring your vision to life with exceptional design and development.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={() => scrollToSection('#contact')}
              className="group"
            >
              Get Started Today
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Your Name. Made with</span>
              <Heart className="w-4 h-4 fill-current text-red-500" />
              <span>and lots of coffee.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button
                onClick={scrollToTop}
                className="hover:text-primary transition-colors"
              >
                Back to Top ↑
              </button>
              <span>•</span>
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;