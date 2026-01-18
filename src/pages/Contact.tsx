import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

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

const expectations = [
  'Free project consultation',
  'Custom quote within 24 hours',
  'No obligation to proceed',
  'Expert recommendations',
];

const cities = ['Tulsa', 'Oklahoma City', 'Norman', 'Broken Arrow', 'Edmond', 'Stillwater'];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <motion.div
            className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(var(--cyan) / 0.12) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Sparkles className="w-4 h-4" />
              Contact Us
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Let's Discuss Your <span className="gradient-text">Project</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Ready to elevate your business with professional drone services? 
              Get in touch for a free consultation and quote.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan/20 rounded-br-3xl" />
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 bg-secondary/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-5 border border-border/50 hover:border-cyan/30 transition-all text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <info.icon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-cyan hover:text-cyan-dark font-medium transition-colors text-sm">
                    {info.details}
                  </a>
                ) : (
                  <span className="text-foreground font-medium text-sm">{info.details}</span>
                )}
                <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-semibold tracking-wide uppercase text-sm mb-6">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-5">
                <div className="glass-card rounded-xl p-6 border border-border/50">
                  <h3 className="font-semibold text-foreground mb-4">What to expect:</h3>
                  <ul className="space-y-3">
                    {expectations.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-6 border border-cyan/20 bg-cyan/5">
                  <h3 className="font-semibold text-foreground mb-2">Need immediate assistance?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Give us a call and speak directly with our team.
                  </p>
                  <a
                    href="tel:9184759378"
                    className="inline-flex items-center gap-2 text-cyan hover:text-cyan-dark font-semibold transition-colors group"
                  >
                    <Phone className="w-5 h-5" />
                    (918) 475-9378
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark">
        <div className="absolute inset-0 tech-grid opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Proudly Serving <span className="gradient-text">Oklahoma</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Based in Tulsa, we provide professional drone services throughout 
              Oklahoma and surrounding regions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((city, index) => (
                <motion.span
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 glass-card rounded-full text-white font-medium border border-white/10 hover:border-cyan/30 transition-all cursor-default"
                >
                  {city}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cyan/20 rounded-bl-3xl" />
      </section>
    </Layout>
  );
};

export default Contact;