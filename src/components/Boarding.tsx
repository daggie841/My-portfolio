import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Utensils, Shield, Clock, Users, Wifi, BookOpen, Heart } from "lucide-react";

const Boarding = () => {
  const facilities = [
    {
      icon: Home,
      name: "Modern Dormitories",
      description: "Comfortable accommodation with proper bedding and storage facilities",
      features: ["4-6 students per room", "Individual storage", "Proper ventilation"]
    },
    {
      icon: Utensils,
      name: "Nutritious Meals",
      description: "Balanced meals prepared by qualified nutrition staff",
      features: ["3 meals daily", "Special dietary needs", "Clean kitchen facilities"]
    },
    {
      icon: Shield,
      name: "24/7 Security",
      description: "Round-the-clock security and medical supervision",
      features: ["Security guards", "Medical officer", "Emergency protocols"]
    },
    {
      icon: BookOpen,
      name: "Study Facilities",
      description: "Dedicated study halls and prep time for academic excellence",
      features: ["Evening prep", "Study halls", "Academic support"]
    },
    {
      icon: Wifi,
      name: "Modern Amenities",
      description: "Access to modern facilities and communication",
      features: ["Internet access", "Recreation areas", "Communication facilities"]
    },
    {
      icon: Heart,
      name: "Pastoral Care",
      description: "Comprehensive pastoral care and guidance programs",
      features: ["Counseling services", "Mentorship", "Spiritual guidance"]
    }
  ];

  const faqs = [
    {
      question: "What are the visiting hours?",
      answer: "Parents can visit on Saturdays from 2:00 PM to 5:00 PM and Sundays from 10:00 AM to 5:00 PM."
    },
    {
      question: "What should students bring to school?",
      answer: "A detailed list of requirements is provided upon admission, including clothing, bedding, and personal items."
    },
    {
      question: "How is student health monitored?",
      answer: "We have a qualified nurse on duty 24/7 and regular medical check-ups are conducted."
    },
    {
      question: "What disciplinary measures are in place?",
      answer: "We follow a progressive discipline policy focusing on guidance and correction rather than punishment."
    }
  ];

  return (
    <section id="boarding" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Boarding Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our boarding facility provides a safe, nurturing environment where students develop 
            independence, responsibility, and lifelong friendships in a home-away-from-home setting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <Card 
              key={facility.name}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{facility.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {facility.description}
                </p>
                <div className="space-y-2">
                  {facility.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Daily Schedule</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold">5:30 AM - Wake Up</div>
                  <div className="text-sm text-muted-foreground">Morning routine and preparation</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Utensils className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold">6:30 AM - Breakfast</div>
                  <div className="text-sm text-muted-foreground">Nutritious morning meal</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <BookOpen className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold">8:00 AM - 4:00 PM - Classes</div>
                  <div className="text-sm text-muted-foreground">Academic sessions and activities</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <BookOpen className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold">7:00 PM - 9:00 PM - Prep Time</div>
                  <div className="text-sm text-muted-foreground">Supervised study time</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Boarding Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">600+</div>
                <div className="text-sm text-muted-foreground">Boarding Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-muted-foreground">Dormitories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Supervision</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Parent Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boarding;