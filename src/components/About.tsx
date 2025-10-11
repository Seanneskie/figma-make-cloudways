import { Award, BookOpen, Coffee, Users } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const stats = [
    {
      icon: Award,
      value: '50+',
      label: 'Projects Completed',
    },
    {
      icon: Users,
      value: '30+',
      label: 'Happy Clients',
    },
    {
      icon: BookOpen,
      value: '8+',
      label: 'Years Experience',
    },
    {
      icon: Coffee,
      value: '1000+',
      label: 'Cups of Coffee',
    },
  ];

  const skills = [
    'JavaScript/TypeScript',
    'React & Next.js',
    'Node.js & Express',
    'Python & Django',
    'PostgreSQL & MongoDB',
    'AWS & Docker',
    'GraphQL & REST APIs',
    'Tailwind CSS',
  ];

  return (
    <section id="about" className="py-20 md:py-32" style={{ backgroundColor: '#F1F5F9' }}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-4xl md:text-5xl mb-4"
                style={{ color: '#111827', fontFamily: 'var(--font-playfair)' }}
              >
                About Me
              </h2>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                I'm a passionate full-stack software engineer with over 8 years of experience
                building innovative digital solutions. My journey in tech started with a curiosity
                about how things work and evolved into a career dedicated to creating impactful
                software.
              </p>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                I specialize in modern web technologies and have a proven track record of
                delivering high-quality projects for startups and enterprises alike. My approach
                combines technical expertise with a deep understanding of user needs.
              </p>
              <p className="text-lg" style={{ color: '#6B7280' }}>
                When I'm not coding, you'll find me contributing to open-source projects, writing
                technical articles, or exploring the latest in AI and machine learning.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl mb-4" style={{ color: '#111827' }}>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-white shadow-sm"
                    style={{ color: '#111827' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 md:p-8 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center"
                >
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#0EA5E9' }}
                  >
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div
                    className="text-3xl md:text-4xl mb-2"
                    style={{ color: '#111827', fontFamily: 'var(--font-playfair)' }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-sm md:text-base" style={{ color: '#6B7280' }}>
                    {stat.label}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
