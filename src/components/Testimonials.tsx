import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStartup Inc.",
      content: "Working with this developer was a game-changer for our company. They delivered a beautiful, functional website that perfectly captured our brand vision while exceeding all technical requirements. The attention to detail in both design and code quality was exceptional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Director, Creative Agency",
      content: "The brand identity and website redesign completely transformed our business. Client inquiries increased by 200% in the first month alone. The design perfectly balanced creativity with professionalism, and the development work was flawless.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      role: "Founder, E-commerce Store",
      content: "The e-commerce platform they built for us has been incredibly successful. The user experience is seamless, the admin panel is intuitive, and the performance is outstanding. Our conversion rate improved by 40% after the launch.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Product Manager, SaaS Company",
      content: "Exceptional work on our dashboard redesign and development. They took complex data visualization requirements and turned them into an elegant, user-friendly interface. The project was delivered on time and exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      role: "Restaurant Owner",
      content: "The website redesign and online reservation system have revolutionized our business. We've seen an 80% increase in online bookings, and customers constantly compliment us on how beautiful and easy the website is to use.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "James Thompson",
      role: "Startup Founder",
      content: "From initial concept to final delivery, the entire process was professional and collaborative. They brought fresh ideas to the table and solved complex technical challenges with creative solutions. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me 
            and the results we've achieved together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-glow transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-primary p-8 rounded-lg text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Let's work together to create something amazing that drives real results for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;