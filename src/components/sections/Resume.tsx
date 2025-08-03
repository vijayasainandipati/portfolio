import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Resume</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition">View Resume</a>
          <a href="/resume.pdf" download className="px-6 py-3 bg-accent text-white rounded-lg shadow hover:bg-accent/90 transition">Download Resume</a>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">You can view or download my resume above. More details about my experience and skills will be added here soon!</p>
      </div>
    </section>
  );
};

export default Resume;