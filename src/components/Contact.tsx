import { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.chen@example.com',
      href: 'mailto:alex.chen@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ color: '#111827', fontFamily: 'var(--font-playfair)' }}
          >
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#6B7280' }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's create
            something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="p-6 md:p-8 rounded-2xl border-0 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2" style={{ color: '#111827' }}>
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2" style={{ color: '#111827' }}>
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2" style={{ color: '#111827' }}>
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2" style={{ color: '#111827' }}>
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: '#0EA5E9' }}
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <Card
                    className="p-6 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#0EA5E9' }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm mb-1" style={{ color: '#6B7280' }}>
                          {info.label}
                        </p>
                        <p className="text-lg" style={{ color: '#111827' }}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                );

                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Additional Info Card */}
            <Card
              className="p-6 md:p-8 rounded-2xl border-0 shadow-lg"
              style={{ backgroundColor: '#0EA5E9' }}
            >
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                Quick Response
              </h3>
              <p className="text-white/90 mb-4">
                I typically respond within 24 hours during business days. For urgent inquiries,
                please call or send me a direct message on LinkedIn.
              </p>
              <p className="text-white/90">
                Available for freelance projects starting Q4 2025.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
