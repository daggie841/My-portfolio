import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Full-Stack Developer
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              & Creative Designer
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I craft beautiful digital experiences that bridge the gap between design and development, 
              creating solutions that are both visually stunning and technically robust.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-300">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('portfolio')}
              className="group"
            >
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in delay-500">
            <a href="https://github.com" className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-elegant hover:shadow-glow">
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a href="https://linkedin.com" className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-elegant hover:shadow-glow">
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a href="mailto:hello@yourname.com" className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-elegant hover:shadow-glow">
              <Mail className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;