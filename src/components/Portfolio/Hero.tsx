import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background grid */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-lg animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-accent/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/20 rounded-lg animate-float-reverse" />
        <div className="absolute bottom-20 right-32 w-8 h-8 bg-accent/20 rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className={`flex-1 text-left space-y-6 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="space-y-2">
              <p className="text-primary text-lg font-mono">Hello, I'm</p>
              <h1 
                className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight glitch" 
                data-text="Praashant Verma"
              >
                <span className="text-gradient-primary">Praashant</span>
                <br />
                <span className="text-foreground">Verma</span>
              </h1>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/90">
                Senior Product & Project Manager
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Driving digital transformation with 12+ years of experience in fintech, healthcare, 
                and enterprise sectors. Specialist in Agile delivery and data-driven product strategy.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="btn-tech text-primary-foreground"
                onClick={() => scrollToSection('about')}
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                className="btn-tech-outline"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6">
              <a 
                href="mailto:thatsme.prashantt@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/thatsme-prashantt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="tel:+917007179287" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex-shrink-0 ${isVisible ? 'animate-slideInRight animate-delay-300' : 'opacity-0'}`}>
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glowing border */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-75 blur-xl animate-pulse-glow" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm" />
                
                {/* Profile Image */}
                <img
                  src="/lovable-uploads/e10ee3f5-277a-4190-9662-a192757495de.png"
                  alt="Praashant Verma - Senior Product & Project Manager"
                  className="relative z-10 w-full h-full object-cover rounded-full border-2 border-primary/50"
                />
                
                {/* Floating tech elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border border-accent rounded-lg animate-float" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-float-delayed" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isVisible ? 'animate-fadeInUp animate-delay-500' : 'opacity-0'}`}>
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-mono">Scroll Down</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;