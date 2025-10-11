import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content:
        'Alex delivered our e-commerce platform ahead of schedule with exceptional quality. Their attention to detail and problem-solving skills are outstanding.',
      rating: 5,
      initials: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Digital Solutions',
      content:
        'Working with Alex was a game-changer for our project. They brought innovative solutions and maintained clear communication throughout.',
      rating: 5,
      initials: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, FinTech Pro',
      content:
        'Incredible expertise in both frontend and backend development. Alex transformed our vision into a robust, scalable application.',
      rating: 5,
      initials: 'ER',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ color: '#111827', fontFamily: 'var(--font-playfair)' }}
          >
            Client Testimonials
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#6B7280' }}>
            Don't just take my word for it - here's what clients have to say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div
                className="absolute top-6 right-6 opacity-10"
              >
                <Quote className="h-12 w-12 md:h-16 md:w-16" style={{ color: '#0EA5E9' }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 md:h-5 md:w-5 fill-current"
                    style={{ color: '#0EA5E9' }}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 relative z-10" style={{ color: '#111827' }}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback
                    className="text-white"
                    style={{ backgroundColor: '#0EA5E9' }}
                  >
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p style={{ color: '#111827' }}>{testimonial.name}</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
