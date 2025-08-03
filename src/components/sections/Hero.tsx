import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen pt-32 particle-bg hero-gradient relative">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center relative">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glow-effect border-4 border-primary/30 hover-scale">
            <img
              src="/lovable-uploads/devloperimage.png"
              alt="Developer at work"
              className="w-full h-full object-cover object-center aspect-square hero-image"
            />
          </div>
        </div>
        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-slide-in-right">
          Hi, I'm Vijaya Sai
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in animation-delay-300">
          Engineer | AI Enthusiast
        </h2>
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-600">
          A passionate full-stack developer skilled in building modern web applications with React, TypeScript, and Node.js. I love solving problems and creating impactful digital experiences.
        </p>
        {/* CTA Button */}
        <Button
          onClick={onContactClick}
          size="lg"
          className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white px-8 py-4 text-lg glow-effect animate-scale-in animation-delay-900 hover-bounce mb-16"
        >
          📧 Get In Touch
        </Button>
        {/* Scroll Indicator */}
        <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 animate-bounce z-10">
          <ArrowDown className="w-6 h-6 text-primary pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
