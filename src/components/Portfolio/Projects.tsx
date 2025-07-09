import { useState, useEffect } from 'react';
import { ExternalLink, Github, TrendingUp, Users, Zap, DollarSign, Target, Clock } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Mercans Global Platform",
      role: "Sr. Technical Project Manager",
      company: "Mercans, Estonia",
      period: "Jun 2024 – Present",
      description: "Spearheaded 7 product launches resulting in 18% YoY revenue growth and enhanced market penetration across global markets.",
      achievements: [
        "18% YoY revenue growth through strategic product launches",
        "42% improvement in cross-team collaboration via ClickUp migration",
        "$2.3M in upsell opportunities through analytics frameworks",
        "Enterprise client satisfaction boost (Audi, Uber, Ford, Mastercard)"
      ],
      technologies: ["ClickUp", "Azure DevOps", "Analytics", "Enterprise Solutions"],
      icon: TrendingUp,
      color: "primary"
    },
    {
      title: "HRBlizz Payroll System",
      role: "Product Development Lead",
      company: "Mercans, Estonia", 
      period: "2024",
      description: "Led development of comprehensive payroll system generating $5M in new revenue streams with advanced automation features.",
      achievements: [
        "$5M in new revenue streams generated",
        "Automated payroll processing for global workforce",
        "Multi-currency and compliance support",
        "Real-time analytics and reporting dashboard"
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "Kafka", "Cloud Infrastructure"],
      icon: DollarSign,
      color: "accent"
    },
    {
      title: "MyGold SaaS Platform",
      role: "Sr. Project Manager",
      company: "MyGold Pvt. Ltd, India",
      period: "Apr 2022 - Jun 2024",
      description: "Delivered 18 SaaS projects with 100% on-time delivery, managing $15M+ in annual payment volume with advanced automation.",
      achievements: [
        "100% on-time delivery across 18 SaaS projects",
        "$15M+ annual payment volume managed",
        "65% reduction in transaction failures through automation",
        "100% SLA compliance across 15+ parallel initiatives"
      ],
      technologies: ["SaaS Architecture", "Payment Systems", "Automation", "PMO Operations"],
      icon: Target,
      color: "warning"
    },
    {
      title: "Multi-Country ERP Rollout",
      role: "Sr. Project Manager",
      company: "Nexa Digital & Marketing, UAE",
      period: "Jul 2017 - Mar 2022",
      description: "Championed ERP implementation across 3 countries, achieving $1.2M in operational cost savings with 95% adoption rate.",
      achievements: [
        "$1.2M operational cost savings achieved",
        "95% adoption rate within 3 months",
        "30% acceleration in sprint velocity as ScrumMaster",
        "$800K in upsell opportunities identified through analytics"
      ],
      technologies: ["ERP Systems", "Change Management", "Scrum", "Analytics", "B2B Solutions"],
      icon: Users,
      color: "primary"
    },
    {
      title: "High-Performance Backend Infrastructure",
      role: "Developer & Analyst",
      company: "Eco Consultant Pvt Ltd, India",
      period: "April 2012 – Mar 2017",
      description: "Designed and optimized backend systems improving query performance by 73% with robust code quality practices.",
      achievements: [
        "73% improvement in query performance",
        "40% reduction in production defect rates",
        "22% increase in lead-to-conversion rate",
        "200+ code reviews conducted for quality assurance"
      ],
      technologies: ["Backend Development", "Database Optimization", "Code Review", "Marketing Automation"],
      icon: Zap,
      color: "accent"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'accent': return 'text-accent';
      case 'warning': return 'text-warning';
      default: return 'text-primary';
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary/10';
      case 'accent': return 'bg-accent/10';
      case 'warning': return 'bg-warning/10';
      default: return 'bg-primary/10';
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden bg-muted/30">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-32 left-10 w-20 h-20 border border-primary/20 rounded-lg animate-float" />
      <div className="absolute bottom-32 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing key projects that demonstrate expertise in product management, 
            technical leadership, and driving measurable business outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`card-tech ${isVisible ? `animate-fadeInUp` : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Project Icon */}
                <div className="flex-shrink-0">
                  <div className={`p-4 ${getBgColor(project.color)} rounded-lg`}>
                    <project.icon className={`w-8 h-8 ${getIconColor(project.color)}`} />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {project.period}
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-accent mb-1">{project.role}</div>
                    <div className="text-muted-foreground">{project.company}</div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <div className={`w-2 h-2 ${getBgColor(project.color)} rounded-full mt-2 flex-shrink-0`} />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies & Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-sm rounded-full border ${
                            project.color === 'primary' 
                              ? 'bg-primary/10 text-primary border-primary/20' 
                              : project.color === 'accent'
                              ? 'bg-accent/10 text-accent border-accent/20'
                              : 'bg-warning/10 text-warning border-warning/20'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fadeInUp animate-delay-500' : 'opacity-0'}`}>
          <Card className="card-tech inline-block">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Interested in My Work?</h3>
              <p className="text-muted-foreground max-w-md">
                Let's discuss how my experience can drive success for your next project.
              </p>
              <Button 
                className="btn-tech text-primary-foreground"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;