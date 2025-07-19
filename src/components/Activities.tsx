import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Music, Camera, Gamepad2, Briefcase, Heart, Users, Target } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Trophy,
      name: "Sports",
      description: "Football, Basketball, Athletics, Swimming, and more competitive sports",
      image: "Sports teams and facilities",
      achievements: ["Regional Champions 2023", "National Athletics Qualifiers"]
    },
    {
      icon: Music,
      name: "Music & Drama",
      description: "School choir, drama club, music festivals, and theatrical performances",
      image: "Students performing",
      achievements: ["Best Choir County Level", "Drama Festival Winners"]
    },
    {
      icon: Camera,
      name: "Photography Club",
      description: "Creative photography, digital arts, and multimedia production",
      image: "Student photographers",
      achievements: ["Student Magazine Published", "Digital Arts Awards"]
    },
    {
      icon: Briefcase,
      name: "Business Club",
      description: "Entrepreneurship, business skills, and young entrepreneur competitions",
      image: "Business presentations",
      achievements: ["Young Entrepreneur Award", "Business Plan Competition"]
    },
    {
      icon: Target,
      name: "Debate Society",
      description: "Public speaking, debates, and oratory competitions",
      image: "Debate competitions",
      achievements: ["Regional Debate Champions", "Public Speaking Awards"]
    },
    {
      icon: Heart,
      name: "Community Service",
      description: "Environmental conservation, community outreach, and social responsibility",
      image: "Community projects",
      achievements: ["Environmental Awards", "Community Impact Recognition"]
    }
  ];

  return (
    <section id="activities" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Co-Curricular Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beyond academics, we offer diverse activities that develop leadership, creativity, 
            teamwork, and character. Every student finds their passion and talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <Card 
              key={activity.name}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border bg-card overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{activity.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Recent Achievements:</h4>
                  {activity.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Building Character Through Activities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our co-curricular program is designed to complement academic learning by developing 
              essential life skills, leadership qualities, and personal interests that will serve 
              students throughout their lives.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Leadership Development</h4>
                  <p className="text-sm text-muted-foreground">Student council, club leadership, and peer mentoring programs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Competitive Excellence</h4>
                  <p className="text-sm text-muted-foreground">Regional and national competitions across various disciplines</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Community Impact</h4>
                  <p className="text-sm text-muted-foreground">Social responsibility and community service initiatives</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-primary rounded-2xl opacity-20 absolute inset-4"></div>
            <div className="aspect-square bg-card rounded-2xl shadow-elegant border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-lg font-semibold mb-4">Active Clubs</div>
                <p className="text-muted-foreground">
                  Every student participates in at least one co-curricular activity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;