import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, Globe, FlaskConical, Palette, Users, Heart, Target } from "lucide-react";

const Curriculum = () => {
  const subjects = [
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Advanced mathematics covering algebra, geometry, calculus, and statistics",
      category: "Core"
    },
    {
      icon: BookOpen,
      name: "English",
      description: "Language arts, literature, composition, and communication skills",
      category: "Core"
    },
    {
      icon: FlaskConical,
      name: "Sciences",
      description: "Physics, Chemistry, Biology with practical laboratory work",
      category: "Core"
    },
    {
      icon: Globe,
      name: "Social Studies",
      description: "History, Geography, Civics, and Government studies",
      category: "Core"
    },
    {
      icon: Heart,
      name: "Religious Education",
      description: "Moral and spiritual development through religious studies",
      category: "Character"
    },
    {
      icon: Target,
      name: "Life Skills",
      description: "Practical life skills, entrepreneurship, and career guidance",
      category: "Life Skills"
    },
    {
      icon: Palette,
      name: "Creative Arts",
      description: "Art, Music, Drama, and creative expression",
      category: "Arts"
    },
    {
      icon: Users,
      name: "Physical Education",
      description: "Sports, fitness, and health education",
      category: "Physical"
    }
  ];

  const categories = ["All", "Core", "Character", "Life Skills", "Arts", "Physical"];

  return (
    <section id="curriculum" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Curriculum
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive curriculum designed to develop critical thinking, creativity, 
            and practical skills necessary for success in the 21st century.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Card 
              key={subject.name}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <subject.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{subject.name}</CardTitle>
                <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm text-accent-foreground">
                  {subject.category}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {subject.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our curriculum is aligned with the national education standards and designed to prepare 
              students for national examinations (KCSE) and higher education opportunities.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.2/5</div>
                <div className="text-sm text-muted-foreground">Average Grade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">University Admission</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;