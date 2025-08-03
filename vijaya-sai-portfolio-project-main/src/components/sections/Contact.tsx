import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 particle-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto animate-scale-in"></div>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:h-[520px] items-stretch">
          {/* Left: Contact Info */}
          <div className="space-y-8 animate-slide-in-right h-full">
            <h3 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">Get In Touch</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in animation-delay-300">
              I'm always excited to discuss new opportunities, innovative projects, or simply connect with fellow developers. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
            <div className="space-y-4">
              {/* Email */}
              <Card className="glass-card border-border/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-effect">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a href="mailto:vijayasainandipati@gmail.com" className="text-primary hover:text-accent text-sm">vijayasainandipati@gmail.com</a>
                  </div>
                </CardContent>
              </Card>
              {/* LinkedIn */}
              <Card className="glass-card border-border/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-effect">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">LinkedIn</div>
                    <a href="https://linkedin.com/in/vijaya-sai-nandipati" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent text-sm">Connect with me</a>
                  </div>
                </CardContent>
              </Card>
              {/* GitHub */}
              <Card className="glass-card border-border/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-effect">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">GitHub</div>
                    <a href="https://github.com/vijayasainandipati" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent text-sm">View my code</a>
                  </div>
                </CardContent>
              </Card>
              {/* Resume */}
              <Card className="glass-card border-border/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-effect">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Resume</div>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent text-sm">Download my resume</a>
                  </div>
                </CardContent>
              </Card>
              {/* Location */}
              <Card className="glass-card border-border/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-effect">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground text-sm">Nagercoil, Tamil Nadu</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Right: Netlify Form and Quote Box */}
          <div className="flex flex-col gap-8 animate-slide-in-left h-full">
            {/* Netlify Contact Form */}
            <form name="contact" method="POST" data-netlify="true" className="glass-card border-border/50 p-6 flex flex-col gap-4 h-full" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" name="name" placeholder="Your Name" required className="flex-1 px-4 py-2 rounded bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="email" name="email" placeholder="Your Email" required className="flex-1 px-4 py-2 rounded bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <input type="text" name="subject" placeholder="Subject" required className="px-4 py-2 rounded bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea name="message" placeholder="Your Message" required className="px-4 py-2 rounded bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]" />
              <button type="submit" className="mt-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow hover:from-primary/80 hover:to-accent/80 transition font-semibold flex items-center justify-center gap-2">
                <span>✈️ Send Message</span>
              </button>
            </form>
            {/* Quote Box */}
            <div className="glass-card border-border/50 p-6 flex flex-col items-center text-center h-full">
              <img src="/ironman.png" alt="Iron Man" className="w-20 h-20 rounded-full mb-4 object-cover object-center border-4 border-primary/30" />
              <p className="italic text-lg text-muted-foreground mb-2">
                "It's not about being the smartest in the room. It's about having the will to learn whatever it takes."
              </p>
              <div className="font-semibold text-primary">- RDJ (Iron Man)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
