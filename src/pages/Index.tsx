import { useEffect } from 'react';
import Navigation from '@/components/Portfolio/Navigation';
import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Projects from '@/components/Portfolio/Projects';
import Contact from '@/components/Portfolio/Contact';
import Background3D from '@/components/Portfolio/Background3D';

const Index = () => {
  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.add('dark');
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom scrollbar styles
    document.body.classList.add('custom-scrollbar');

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.classList.remove('custom-scrollbar');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* 3D Background Animation */}
      <Background3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-muted-foreground">
              © 2024 Praashant Verma. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground font-mono">
              Built with passion • React + TypeScript + Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
