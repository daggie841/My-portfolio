import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Trophy, BookOpen } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "800+", label: "Students" },
    { icon: GraduationCap, value: "45+", label: "Teachers" },
    { icon: Trophy, value: "50+", label: "Achievements" },
    { icon: BookOpen, value: "20+", label: "Subjects Offered" }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Our School
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mpeketoni Boys' High School is a premier educational institution committed to academic excellence, 
            character development, and holistic growth. We nurture young minds through quality education, 
            strong moral values, and comprehensive co-curricular programs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border bg-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Mission & Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Mission:</strong> To provide quality education that develops intellectual, 
              spiritual, moral, and physical potential of our students while fostering critical 
              thinking, creativity, and responsible citizenship.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Vision:</strong> To be a leading educational institution that produces 
              well-rounded individuals equipped with knowledge, skills, and values necessary 
              for success in higher education and meaningful contribution to society.
            </p>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Our Core Values:</h4>
              <div className="flex flex-wrap gap-3">
                {["Excellence", "Integrity", "Discipline", "Respect", "Innovation", "Team Work"].map((value) => (
                  <span 
                    key={value}
                    className="px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-primary rounded-2xl opacity-20 absolute inset-4"></div>
            <div className="aspect-square bg-card rounded-2xl shadow-elegant border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Excellence in Education</h4>
                <p className="text-muted-foreground">Shaping future leaders through quality education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;