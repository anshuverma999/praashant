import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, MessageSquare, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:thatsme.prashantt@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Prepared",
      description: "Your email client should open with the message ready to send.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "thatsme.prashantt@gmail.com",
      link: "mailto:thatsme.prashantt@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-7007179287",
      link: "tel:+917007179287",
      color: "accent"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lucknow, U.P., India",
      link: "https://maps.google.com/?q=Lucknow,India",
      color: "warning"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/thatsme-prashantt",
      link: "https://linkedin.com/in/thatsme-prashantt",
      color: "primary"
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
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-20 left-10 w-24 h-24 border border-accent/20 rounded-lg animate-float" />
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to drive your next project to success? Let's discuss how my expertise 
            in product management and technical leadership can benefit your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, 
                or potential collaborations. Feel free to reach out through any of the 
                channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={item.title} className="card-tech">
                  <a 
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                  >
                    <div className={`p-3 ${getBgColor(item.color)} rounded-lg flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 ${getIconColor(item.color)}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-tech text-primary-foreground flex-1"
                  onClick={() => window.open('https://linkedin.com/in/thatsme-prashantt', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  className="btn-tech-outline flex-1"
                  onClick={() => window.location.href = 'tel:+917007179287'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <Card className="card-tech">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Project Collaboration Opportunity"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full min-h-[120px] resize-none"
                      placeholder="Tell me about your project and how I can help..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-tech text-primary-foreground w-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond within 24 hours. Looking forward to hearing from you!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className={`mt-20 ${isVisible ? 'animate-fadeInUp animate-delay-500' : 'opacity-0'}`}>
          <Card className="card-tech text-center">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Drive <span className="text-gradient-primary">Success</span> Together?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                With 12+ years of experience in product management and technical leadership, 
                I'm passionate about turning innovative ideas into successful digital products 
                that deliver measurable business value.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span>• Agile & Scrum Expert</span>
                <span>• Cross-functional Team Leadership</span>
                <span>• Data-Driven Product Strategy</span>
                <span>• Global Market Experience</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;