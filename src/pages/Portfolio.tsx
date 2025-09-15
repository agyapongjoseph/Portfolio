import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import josephProfile from "@/assets/joseph-profile.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Brain,
  Smartphone,
  Server,
  BarChart,
  Menu,
  X,
  Download,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Globe,
  LanguagesIcon,
  LucideLanguages,
  Languages,
} from "lucide-react";
import { toast } from "sonner";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();
  if (!formRef.current) return;

  emailjs
    .sendForm("service_v6h77di", "template_b8ub1xx", formRef.current, "vcJZf6u4YeynBBBNf")
    .then(
      () => {
        toast.success("Message sent 🎉", {
          description: "Thanks Joseph, I’ll get back to you soon!",
          duration: 4000,
        });
        formRef.current?.reset();
      },
      (error) => {
        toast.error("Message failed ❌", {
          description: "Please try again or reach me directly.",
          duration: 5000,
        });
        console.error(error.text);
      }
    );
};

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = {
    languages: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 88 },
      { name: 'SQL', level: 82 },
    ],
    tools: [
      'VS Code', 'Git/GitHub', 'Node.js', 'Expo', 'PostgreSQL', 
      'MongoDB', 'Jupyter Notebook', 'MySQL', 'Figma'
    ],
    frameworks: [
      'React.js', 'React Native', 'Tailwind CSS', 'Express.js', 
      'Flutter', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'NLTK'
    ],
    other: [
      'RESTful API development', 'Authentication & Authorization', 
      'Data Visualization', 'Agile Project Management', 
      'Machine Learning', 'NLP basics'
    ]
  };

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Electricity Company of Ghana',
      period: 'Mar 2025 – May 2025',
      achievements: [
        'Led a team to build a meter tracking system, cutting unreported visits by 40%',
        'Built secure databases with role-based authentication, improving efficiency by 35%',
        'Streamlined Git/GitHub collaboration, reducing deployment time by 25%'
      ]
    },
    {
      title: 'Freelance Front-End Developer',
      company: 'Independent',
      period: '2025 – Present',
      achievements: [
        'Built an interactive mathematics learning web app, boosting engagement by 30%',
        'Delivered production-ready solutions independently from design to deployment'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Love Economy Church Thesaurus',
      period: '2024 – Present',
      achievements: [
        'Co-built an attendance tracking system used by 500+ members',
        'Improved reporting accuracy by 40% with authentication and role-based access',
        'Strengthened data security with comprehensive access controls'
      ]
    }
  ];

  const projects = [
    {
      title: 'Depression Detection using NLP',
      description: 'Applied Python (Scikit-learn, NLTK, TensorFlow) to detect depression in social media text with 92% accuracy. Built an interactive dashboard for sentiment trends.',
      tech: ['Python', 'Scikit-learn', 'NLTK', 'TensorFlow', 'Data Visualization'],
      link: '#',
      github: '#'
    },
    {
      title: 'Decentralized Banking System on ICP',
      description: 'Designed and deployed smart contracts in Motoko for transparent digital transactions. Simulated 100+ financial transactions for scalability and security validation.',
      tech: ['Motoko', 'ICP', 'Smart Contracts', 'Blockchain'],
      link: '#',
      github: '#'
    },
    {
      title: 'Mathematics Learning Web App',
      description: 'Developed using HTML, Tailwind CSS, and JavaScript. Integrated dynamic problem-solving modules, increasing engagement by 30%.',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Interactive UI'],
      link: '#',
      github: '#'
    },
    {
      title: 'Meter Tracking System (ECG)',
      description: 'Enabled supervisors to track field workers\' progress, cutting revenue leakage. Built with secure authentication and real-time reporting.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Authentication'],
      link: '#',
      github: '#'
    },
    {
      title: 'Attendance Tracking System',
      description: 'Used by 500+ members, improving growth insights and leadership reporting. Features role-based access and comprehensive analytics.',
      tech: ['React', 'Express.js', 'MongoDB', 'Role-based Auth'],
      link: '#',
      github: '#'
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: 'Full-Stack Web & Mobile Development',
      description: 'End-to-end development of scalable web applications and mobile apps using modern technologies.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      title: 'Frontend Development',
      description: 'React.js, React Native, and Flutter development with responsive, user-friendly interfaces.'
    },
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: 'Database Design & API Integration',
      description: 'Robust database architecture and RESTful API development with secure authentication systems.'
    },
    {
      icon: <Brain className="w-8 h-8 text-accent" />,
      title: 'Machine Learning & NLP Solutions',
      description: 'Custom ML models and natural language processing solutions for data-driven insights.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-accent" />,
      title: 'Custom Dashboard & Data Visualization',
      description: 'Interactive dashboards and data visualization tools for business intelligence and analytics.'
    }
  ];

 
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-bounce-subtle"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-display font-bold text-gradient">Joseph Okore Agyapong</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      activeSection === item.id
                        ? 'text-accent bg-accent/10 shadow-lg'
                        : 'text-muted-foreground hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:scale-110 transition-transform duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-background/95 backdrop-blur-xl border-t border-border/50">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-accent bg-accent/10 transform scale-105'
                      : 'text-muted-foreground hover:text-accent hover:bg-accent/5 hover:scale-105'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-background relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left relative">
              {/* Floating decoration */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-accent/10 rounded-full animate-float"></div>
              
              <h2 className="text-lg font-medium text-muted-foreground mb-4 animate-fade-in font-mono">Hello .</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 animate-slide-up text-foreground leading-tight">
                I'm Joseph<br />
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software Developer
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 animate-slide-up max-w-lg leading-relaxed" 
                 style={{ animationDelay: '0.2s' }}>
                Building impactful solutions through technology with a passion for innovation and problem-solving.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Got a project?
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a 
                  href="/Joseph-Okore-CV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    My Resume
                  </Button>
                </a>
              </div>
              
              {/* Tech Stack Icons with Animation */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.6s' }}>
                {['HTML5', 'CSS', 'JavaScript', 'Node.js', 'React', 'Git', 'GitHub'].map((tech, index) => (
                  <span 
                    key={tech} 
                    className="font-mono hover:text-accent transition-colors duration-300 cursor-default hover:scale-110 transform"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side - Profile Image with Enhanced Design */}
            <div className="flex justify-center lg:justify-end animate-scale-in relative">
              <div className="relative group">
                {/* Animated background rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 animate-rotate-slow"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse-glow"></div>
                
                {/* Main profile container */}
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-accent via-accent/90 to-accent/80 flex items-center justify-center shadow-2xl group-hover:shadow-accent/25 transition-all duration-500">
                  <img
                    src={josephProfile}
                    alt="Joseph Okore Agyapong"
                    className="w-72 h-72 rounded-full object-cover border-4 border-accent/20 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-lg rotate-45 animate-float shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent/30 rounded-full animate-bounce-subtle"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-primary/15 rounded-full animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About/Services Section */}
      <section id="about" className="py-20 section-bg relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rounded-full animate-bounce-subtle"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Services with Modern Cards */}
              <div className="space-y-8">
                <div className="animate-slide-up">
                  <span className="text-sm font-mono text-accent uppercase tracking-wider">What I Do</span>
                  <h2 className="text-3xl font-display font-bold mt-2 mb-8 text-foreground">Services</h2>
                </div>
                
                <div className="space-y-6">
                  {services.slice(0, 3).map((service, index) => (
                    <div 
                      key={index} 
                      className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 animate-slide-up cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="text-accent group-hover:text-primary transition-colors duration-300">
                            {service.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - About Me with Enhanced Design */}
              <div className="lg:pl-8">
                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <span className="text-sm font-mono text-accent uppercase tracking-wider">Who I Am</span>
                  <h2 className="text-3xl font-display font-bold mt-2 mb-8 text-foreground">About me</h2>
                </div>
                
                <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                 <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
  I’m <span className="text-primary font-medium">Joseph Okore Agyapong</span>, a 
  <span className="text-accent font-medium"> full-stack developer</span> with experience in 
  React, TypeScript, Node.js, and Python, and a strong background in 
  <span className="text-primary font-medium"> machine learning</span> and 
  <span className="text-accent font-medium"> NLP</span>. 
  I’ve built solutions ranging from AI-powered depression detection models to 
  real-world systems that cut operational overhead by 
  <span className="text-primary font-medium"> 40%</span> and boosted user adoption by 
  <span className="text-accent font-medium"> 30%</span>. 
  I thrive at the intersection of <span className="text-primary font-medium">software engineering</span> 
  and <span className="text-accent font-medium">AI</span>, eager to bring innovative, scalable solutions 
  to top tech companies solving global challenges.
</p>

                </div>

                {/* Enhanced Statistics */}
                <div className="grid grid-cols-3 gap-6 mb-8 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                  {[
                    { number: '7', suffix: '+', label: 'Completed\nProjects', icon: <Target className="w-5 h-5" /> },
                    { number: '95', suffix: '%', label: 'Client\nsatisfaction', icon: <Star className="w-5 h-5" /> },
                    { number: '3', suffix: '+', label: 'Years of\nexperience', icon: <Zap className="w-5 h-5" /> }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center p-4 bg-card rounded-xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <div className="flex justify-center mb-2 text-accent group-hover:text-primary transition-colors duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}<span className="text-accent">{stat.suffix}</span>
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-pre-line font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="animate-slide-up" style={{ animationDelay: '1s' }}>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
                  >
                    <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Let's Work Together
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">Skills & Technologies</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="skill-card p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-6 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-accent" />
                  Programming Languages
                </h3>
                <div className="space-y-4">
                  {skills.languages.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-accent">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-card p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-6 flex items-center">
                  <Server className="w-5 h-5 mr-2 text-accent" />
                  Developer Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <Badge key={index} variant="outline" className="bg-accent/10 text-accent border-accent/20">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="skill-card p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-6 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-accent" />
                  Libraries & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((framework, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="skill-card p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-6 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-accent" />
                  Other Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">Professional Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="skill-card">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-primary">{exp.title}</CardTitle>
                        <CardDescription className="text-accent font-medium">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0 self-start">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="portfolio" className="py-24 bg-background relative">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse-glow"></div>
          <div className="absolute top-1/2 right-0 w-1 h-48 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <span className="text-sm font-mono text-accent uppercase tracking-wider">My Work</span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold mt-4 mb-6 text-foreground">Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-6 h-6 text-accent group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       
                      </div>
                    </div>
                    <CardTitle className="text-xl font-display group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs font-mono bg-accent/10 text-accent border-0 hover:bg-accent/20 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105 group"
              >
                <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">Services I Offer</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="skill-card text-center group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">Let's Work Together</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-accent mr-3" />
                    <span>agyapongjoseph222@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-accent mr-3" />
                    <span>+233 599160505</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-accent mr-3" />
                    <span>Accra, Ghana</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4 text-primary">Follow Me</h4>
                  <div className="flex gap-4">
                   <a
                      href="https://github.com/agyapongjoseph"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="icon" variant="outline" className="hover:bg-accent hover:text-white">
                        <Github className="w-5 h-5" />
                      </Button>
                    </a>

                    <a
                      href="https://linkedin.com/in/joseph-okore-agyapong-67027b2a6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="icon" variant="outline" className="hover:bg-accent hover:text-white">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                    </a>

                  </div>
                </div>
              </div>
              
              <Card className="skill-card">
                <CardHeader>
                  <CardTitle className="text-primary">Send Message</CardTitle>
                  <CardDescription>
                    Have a project in mind? Let's discuss how I can help bring your ideas to life.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label htmlFor="name" className="text-sm font-medium mb-2 block">Name</label>
      <Input id="name" name="name" placeholder="Your name" required />
    </div>
    <div>
      <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
    </div>
  </div>
  <div>
    <label htmlFor="subject" className="text-sm font-medium mb-2 block">Subject</label>
    <Input id="subject" name="subject" placeholder="Project inquiry" />
  </div>
  <div>
    <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
    <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={4} required />
  </div>
  <Button type="submit" className="w-full btn-glow">
    Send Message
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</form>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Joseph Okore Agyapong. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;