import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 md:pt-20"
      style={{ backgroundColor: '#F1F5F9' }}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-white shadow-sm">
                <span style={{ color: '#0EA5E9' }}>Available for Freelance</span>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-full"
                style={{ color: '#111827', fontFamily: 'var(--font-playfair)' }}
              >
                Building Digital Experiences That Matter
              </h1>
              <p className="text-lg md:text-xl" style={{ color: '#6B7280' }}>
                Full-stack software engineer specializing in modern web applications, scalable
                architectures, and exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: '#0EA5E9' }}
                onClick={() => scrollToSection('#projects')}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" style={{ color: '#111827' }} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" style={{ color: '#0EA5E9' }} />
              </a>
              <a
                href="mailto:alex@example.com"
                className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" style={{ color: '#111827' }} />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjAwNjEwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #111827 100%)',
                }}
              />
            </div>
            {/* Decorative Elements */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-50 blur-3xl"
              style={{ backgroundColor: '#0EA5E9' }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full opacity-30 blur-3xl"
              style={{ backgroundColor: '#0EA5E9' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
