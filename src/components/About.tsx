import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = {
    webDev: [
      "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", 
      "MongoDB", "Git", "Docker", "AWS", "Next.js", "Vue.js"
    ],
    design: [
      "Adobe Creative Suite", "Figma", "Sketch", "UI/UX Design", 
      "Typography", "Color Theory", "Branding", "Print Design", "Motion Graphics"
    ]
  };

  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "5+ years crafting scalable web applications with modern technologies and best practices."
    },
    {
      icon: Palette,
      title: "Creative Vision",
      description: "Award-winning designer with expertise in branding, UI/UX, and visual storytelling."
    },
    {
      icon: Zap,
      title: "Full-Stack Approach",
      description: "Seamlessly bridge design and development to create cohesive digital experiences."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Collaborative approach ensuring every project exceeds expectations and business goals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              My Journey
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer and graphic designer who believes that great 
              digital products are born from the perfect marriage of beautiful design and robust code. 
              My journey began in graphic design, where I fell in love with visual storytelling and 
              the power of aesthetics to communicate ideas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As the digital landscape evolved, I transitioned into web development, discovering 
              that my design background gave me a unique edge in creating user-centered applications. 
              Today, I specialize in building end-to-end digital solutions that are not only 
              technically sound but also visually compelling and user-friendly.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding or designing, you'll find me exploring new design trends, 
              contributing to open-source projects, or mentoring aspiring developers and designers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                    <highlight.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Web Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.webDev.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                Graphic Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;