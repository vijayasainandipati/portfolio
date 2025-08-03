import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const interests = [
    "Artificial Intelligence",
    "Machine Learning", 
    "Full Stack Development",
    "Web Development",
    "Python Programming",
    "React Development",
    "OpenAI Integration",
    "Automation",
    "Open Source",
    "UI/UX Design"
  ];

  return (
    <section id="about" className="py-20 particle-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an AI Engineering student at Amrita Vishwa Vidyapeetham, 
              Nagercoil, currently in my second year. My journey in 
              technology is driven by an insatiable curiosity for artificial 
              intelligence and full-stack development, with a core desire to 
              create solutions that make a meaningful impact.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From building AI assistants to developing real-time applications, I 
              love exploring the intersection of creativity and technology. I'm 
              particularly fascinated by how AI can enhance human capabilities 
              and streamline complex processes.
            </p>

            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Nagercoil, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🎓</span>
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Interests & Expertise */}
          <Card className="glass-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Interests & Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors px-4 py-2 text-sm"
                  >
                    ✨ {interest}
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