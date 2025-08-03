
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AI Jarvis Assistant",
      description: "Advanced AI assistant with voice recognition and natural language processing capabilities.",
      image: "/lovable-uploads/402675ce-abeb-4f85-8fff-2150e93cf8af.png",
      technologies: ["Python", "OpenAI", "Speech Recognition", "Flask"],
    },
    {
      title: "Real-time Chat Application", 
      description: "Full-stack chat app with real-time messaging, user authentication, and modern UI.",
      image: "/lovable-uploads/1d1ef043-2174-45f7-92f0-1da40c8e5903.png",
      technologies: ["React", "Firebase", "JavaScript", "CSS3"],
    },
    {
      title: "Weather Forecast App",
      description: "Comprehensive weather application with multi-city support and detailed forecasts.",
      image: "/lovable-uploads/bd0405bc-5ab1-42b1-8721-d842dfec55b3.png",
      technologies: ["React", "Weather API", "CSS3", "JavaScript"],
    },
    {
      title: "Task Automation Suite",
      description: "Automation tools for streamlining repetitive tasks and improving productivity.",
      image: "/lovable-uploads/c0539f1a-1a42-4a12-bd42-1c24e6033c61.png",
      technologies: ["Python", "Automation", "APIs", "Scheduling"],
    },
  ];

  return (
    <section id="projects" className="py-20 particle-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden animate-scale-in hover-lift" style={{animationDelay: `${index * 200}ms`}}>
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300 animate-slide-in-right">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4 leading-relaxed animate-fade-in">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-secondary/30 border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                      style={{animationDelay: `${(index * 200) + (techIndex * 100)}ms`}}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
