import { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Target, Code, Database, Cloud, Zap } from 'lucide-react';
import { Card } from '../ui/card';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      value: "$10M+",
      description: "Generated through 5+ product launches across global markets"
    },
    {
      icon: Users,
      title: "Team Retention",
      value: "95%",
      description: "High-performing team members retained over 5-year period"
    },
    {
      icon: Target,
      title: "Conversion Boost",
      value: "15-25%",
      description: "Product conversion rates improved through data-led optimization"
    },
    {
      icon: Award,
      title: "Cost Reduction",
      value: "30%",
      description: "Operational costs cut via AI/ML product integrations"
    }
  ];

  const skills = [
    {
      category: "Project Management",
      icon: Target,
      skills: ["Agile", "Scrum", "Sprint Planning", "Risk Management", "Stakeholder Engagement"]
    },
    {
      category: "Product Strategy", 
      icon: TrendingUp,
      skills: ["Roadmapping", "User Story Development", "Market Research", "GTM", "Competitive Analysis"]
    },
    {
      category: "Technical Exposure",
      icon: Code,
      skills: ["Jira", "ClickUp", "CI/CD", "Salesforce", "REST APIs", "Java", "Python", "Kafka"]
    },
    {
      category: "AI/ML & Cloud",
      icon: Cloud,
      skills: ["Azure DevOps", "Predictive Models", "Cloud Infrastructure", "Database Management"]
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-20 right-10 w-32 h-32 border border-accent/20 rounded-lg animate-float-reverse" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/10 rounded-full animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">About</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Results-driven Product & Technical Project Manager with 12+ years of experience 
            leading cross-functional teams in the fintech, healthcare, and enterprise sectors.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
          {achievements.map((achievement, index) => (
            <Card key={achievement.title} className="card-tech text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gradient-primary mb-2">
                {achievement.value}
              </div>
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className={`${isVisible ? 'animate-fadeInUp animate-delay-300' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center mb-12">
            Technical <span className="text-gradient-primary">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="card-tech">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <skillGroup.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Summary */}
        <div className={`mt-20 ${isVisible ? 'animate-fadeInUp animate-delay-500' : 'opacity-0'}`}>
          <Card className="card-tech">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-primary rounded-lg flex-shrink-0">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Professional Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Adept in Agile delivery, stakeholder engagement, cloud-based CI/CD pipelines, 
                  and data-driven product strategy. Proven track record of launching digital products 
                  that generated $10M+ in revenue while optimizing processes to reduce costs by up to 30%.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-accent">Adaptive Professional:</strong> Successfully navigated 
                  3 industry transitions through rapid skill acquisition, demonstrating exceptional 
                  ability to evolve with changing market demands and technological advancements.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;