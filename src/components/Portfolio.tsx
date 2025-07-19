import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      type: "Full-Stack Development",
      description: "A complete e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      results: "Increased client sales by 40% and reduced cart abandonment by 25%"
    },
    {
      id: 2,
      title: "Brand Identity - TechStartup",
      category: "design",
      type: "Brand Design",
      description: "Complete brand identity design for a fintech startup including logo design, color palette, typography system, business cards, and brand guidelines.",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Brand Strategy"],
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
      liveUrl: "https://behance.net",
      results: "Brand recognition increased by 60% in first quarter"
    },
    {
      id: 3,
      title: "Task Management App",
      category: "web",
      type: "UI/UX & Development",
      description: "A productivity app combining beautiful UI design with robust functionality. Features real-time collaboration, project timelines, and advanced analytics.",
      technologies: ["Vue.js", "Firebase", "Figma", "TypeScript"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      results: "10K+ active users within 6 months of launch"
    },
    {
      id: 4,
      title: "Restaurant Website Redesign",
      category: "both",
      type: "Design & Development",
      description: "Complete redesign and development of a restaurant website including menu management system, online reservations, and mobile-first responsive design.",
      technologies: ["React", "Strapi", "Adobe XD", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      results: "Online reservations increased by 80%"
    },
    {
      id: 5,
      title: "Mobile App UI Design",
      category: "design",
      type: "UI/UX Design",
      description: "Complete UI/UX design for a fitness tracking mobile app including user research, wireframes, prototypes, and high-fidelity designs.",
      technologies: ["Figma", "Principle", "User Research", "Prototyping"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      liveUrl: "https://figma.com",
      results: "98% user satisfaction score in usability testing"
    },
    {
      id: 6,
      title: "SaaS Dashboard",
      category: "web",
      type: "Full-Stack Development",
      description: "Complex analytics dashboard for a SaaS platform with real-time data visualization, user management, and API integrations.",
      technologies: ["Next.js", "D3.js", "MongoDB", "Express", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      results: "Reduced data processing time by 50%"
    }
  ];

  const filteredProjects = projects.filter(project => 
    filter === "all" || project.category === filter || project.category === "both"
  );

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "design", label: "Graphic Design" },
    { id: "both", label: "Design + Dev" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of projects that showcase my expertise in both web development 
            and graphic design, demonstrating the power of combining technical skills with creative vision.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filterOption => (
            <Button
              key={filterOption.id}
              variant={filter === filterOption.id ? "default" : "outline"}
              onClick={() => setFilter(filterOption.id)}
              className="transition-all duration-300"
            >
              {filterOption.label}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-glow transition-all duration-500 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </a>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                    <a 
                      href={project.liveUrl}
                      className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                {project.results && (
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-primary">
                      Results: {project.results}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;