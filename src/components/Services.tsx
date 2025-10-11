import { Code2, Smartphone, Database, Cloud, Palette, Zap } from 'lucide-react';
import { Card } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description:
        'Building responsive, performant web applications using modern frameworks like React, Next.js, and TypeScript.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description:
        'Creating native and cross-platform mobile experiences that users love with React Native and Flutter.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description:
        'Designing and implementing scalable backend systems, APIs, and database architectures.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Deploying and managing applications on AWS, Google Cloud, and Azure with DevOps best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Crafting beautiful, intuitive interfaces with a focus on user experience and accessibility.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description:
        'Analyzing and improving application performance for faster load times and better user engagement.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ color: '#111827', fontFamily: 'var(--font-playfair)' }}
          >
            Services I Offer
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#6B7280' }}>
            Comprehensive software engineering solutions tailored to your needs, from concept to deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6"
                  style={{ backgroundColor: '#0EA5E9' }}
                >
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl mb-3" style={{ color: '#111827' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#6B7280' }}>{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
