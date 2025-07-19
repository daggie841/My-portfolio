import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Activities", href: "#activities" },
    { name: "Boarding", href: "#boarding" },
    { name: "Contact", href: "#contact" }
  ];

  const academics = [
    { name: "Mathematics", href: "#curriculum" },
    { name: "Sciences", href: "#curriculum" },
    { name: "Languages", href: "#curriculum" },
    { name: "Social Studies", href: "#curriculum" }
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
              Mpeketoni Boys' High School
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Excellence in Education, Character Development, and Holistic Growth. 
              Preparing young minds for tomorrow's challenges with quality education and moral values.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@mpeketoniboys.ac.ke</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Mpeketoni, Lamu County</span>
              </div>
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

          {/* Academics */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Academics</h4>
            <ul className="space-y-2">
              {academics.map((subject) => (
                <li key={subject.name}>
                  <button
                    onClick={() => scrollToSection(subject.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {subject.name}
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
              Ready to Join Our School?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Begin your educational journey with us. Contact our admissions office for more information.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={() => scrollToSection('#contact')}
              className="group"
            >
              Apply Today
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Mpeketoni Boys' High School. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button
                onClick={scrollToTop}
                className="hover:text-primary transition-colors"
              >
                Back to Top ↑
              </button>
              <span>•</span>
              <span>Empowering Excellence Since 1995</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;