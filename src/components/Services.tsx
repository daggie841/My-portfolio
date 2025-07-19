import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Smartphone, Globe, Zap, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Implementation",
        "E-commerce Solutions"
      ],
      startingPrice: "From $2,500"
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "User-centered design solutions that create meaningful and engaging digital experiences.",
      features: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Interactive Design",
        "Design Systems"
      ],
      startingPrice: "From $1,500"
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Comprehensive branding solutions that help your business stand out and connect with customers.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Print Materials",
        "Brand Strategy"
      ],
      startingPrice: "From $1,200"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end development services from database design to frontend implementation.",
      features: [
        "Database Design",
        "API Development",
        "Frontend Integration",
        "Deployment & Hosting"
      ],
      startingPrice: "From $3,500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing websites and applications for better user experience and SEO.",
      features: [
        "Code Optimization",
        "Image Compression",
        "Caching Strategies",
        "Performance Audits"
      ],
      startingPrice: "From $800"
    },
    {
      icon: Users,
      title: "Consultation & Training",
      description: "Expert guidance on design and development best practices for your team.",
      features: [
        "Technical Consulting",
        "Design Reviews",
        "Team Training",
        "Code Reviews"
      ],
      startingPrice: "From $150/hour"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive digital solutions that combine creative design with technical expertise 
            to help businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="text-lg font-semibold text-primary text-center">
                    {service.startingPrice}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Need Something Custom?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project is unique. I'd love to discuss your specific needs and create a 
            tailored solution that perfectly fits your requirements and budget.
          </p>
          <Button variant="gradient" size="lg" className="group">
            Start a Conversation
            <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;