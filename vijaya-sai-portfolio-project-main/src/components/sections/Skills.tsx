import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "Python", percentage: 90, color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", percentage: 88, color: "from-yellow-500 to-yellow-600" },
    { name: "React", percentage: 85, color: "from-cyan-500 to-cyan-600" },
    { name: "Flask", percentage: 82, color: "from-green-500 to-green-600" },
    { name: "Firebase", percentage: 80, color: "from-orange-500 to-orange-600" },
    { name: "Node.js", percentage: 78, color: "from-green-600 to-green-700" },
    { name: "OpenAI API", percentage: 85, color: "from-purple-500 to-purple-600" },
    { name: "MongoDB", percentage: 75, color: "from-pink-500 to-pink-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-primary font-bold">{skill.percentage}%</span>
                </div>
                <div className="skill-bar h-3 w-full">
                  <div 
                    className={`skill-progress bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;