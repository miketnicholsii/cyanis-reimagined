import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(918) 475-9378',
    link: 'tel:9184759378',
    description: 'Call us during business hours',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@cyanisllc.com',
    link: 'mailto:info@cyanisllc.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Tulsa, Oklahoma',
    link: null,
    description: 'Serving all of Oklahoma',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon - Fri: 8am - 6pm',
    link: null,
    description: 'Weekend flights by appointment',
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-light rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Let's Discuss Your Project
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Ready to elevate your business with professional drone services? 
              Get in touch for a free consultation and quote.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 100}>
                <div className="bg-card rounded-xl p-6 border border-border text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-accent hover:text-cyan-dark font-medium transition-colors"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">{info.details}</span>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 24 hours. 
                We're excited to learn about your project and how we can help.
              </p>

              <div className="space-y-6">
                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">What to expect:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Free project consultation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Custom quote within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      No obligation to proceed
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Expert recommendations for your needs
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Need immediate assistance?</h3>
                  <p className="text-muted-foreground mb-4">
                    Give us a call and speak directly with our team.
                  </p>
                  <a
                    href="tel:9184759378"
                    className="inline-flex items-center gap-2 text-accent hover:text-cyan-dark font-semibold transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    (918) 475-9378
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proudly Serving Oklahoma
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Based in Tulsa, we provide professional drone services throughout 
              Oklahoma and surrounding regions. No project is too far.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Tulsa', 'Oklahoma City', 'Norman', 'Broken Arrow', 'Edmond', 'Stillwater'].map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
