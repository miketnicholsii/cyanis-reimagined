import Layout from '@/components/layout/Layout';
import StatCard from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Target,
  Eye,
  Heart,
  Shield,
  Award,
  Users,
  Plane,
  Sparkles,
  CheckCircle2,
  Rocket,
  Globe
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'We deliver accurate, reliable data that you can trust for critical decisions.',
    color: 'from-blue-500/20 to-cyan/20',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Safety is our top priority in every flight operation we conduct.',
    color: 'from-green-500/20 to-cyan/20',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with honesty and transparency in all client relationships.',
    color: 'from-rose-500/20 to-cyan/20',
  },
  {
    icon: Eye,
    title: 'Innovation',
    description: 'We continuously adopt cutting-edge technology to serve you better.',
    color: 'from-purple-500/20 to-cyan/20',
  },
];

const certifications = [
  { name: 'FAA Part 107 Certified', description: 'Licensed commercial drone operators' },
  { name: 'Fully Insured & Bonded', description: '$1M+ liability coverage' },
  { name: 'TRUST Certified', description: 'FAA recreational safety test' },
  { name: 'DJI Enterprise Partner', description: 'Authorized service provider' },
];

const timeline = [
  { year: '2019', title: 'Company Founded', description: 'Started operations in Tulsa, Oklahoma' },
  { year: '2020', title: 'First Major Contract', description: 'Partnered with local construction firms' },
  { year: '2021', title: 'Team Expansion', description: 'Added certified pilots and analysts' },
  { year: '2022', title: 'Technology Upgrade', description: 'Invested in enterprise-grade drones' },
  { year: '2023', title: 'Regional Growth', description: 'Expanded services across Oklahoma' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <motion.div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
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
              transition={{ delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4" />
              About Us
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Pioneering <span className="gradient-text">Aerial Innovation</span> in Oklahoma
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Cyanis LLC was founded with a simple mission: to make professional drone 
              services accessible, affordable, and reliable for businesses across Oklahoma.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan/20 rounded-br-3xl" />
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <motion.img
                  src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Drone aerial photography"
                  className="w-full aspect-[4/3] object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />
                <div className="absolute inset-0 tech-grid opacity-0 group-hover:opacity-30 transition-opacity" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-8 -right-8 glass-card p-5 rounded-xl border border-cyan/20 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center">
                    <Plane className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-foreground">Since 2019</div>
                    <div className="text-sm text-muted-foreground">Serving Oklahoma</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-br from-cyan/10 to-transparent -z-10" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-semibold tracking-wide uppercase text-sm mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                Built on <span className="gradient-text">Expertise</span> & Passion
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Cyanis LLC emerged from a passion for aviation and a vision to transform how 
                  businesses collect and utilize aerial data. Based in Tulsa, Oklahoma, we've 
                  quickly become a trusted partner for companies seeking professional drone services.
                </p>
                <p>
                  Our team combines years of aviation experience with cutting-edge drone technology 
                  and data processing expertise. We understand that every project is unique, which 
                  is why we take the time to understand your specific needs and deliver tailored solutions.
                </p>
                <p>
                  From construction sites to agricultural fields, from real estate properties to 
                  infrastructure inspections, we've helped countless clients gain valuable insights 
                  from above.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-cyan" />
                  <span>FAA Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-cyan" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-cyan" />
                  <span>Oklahoma Based</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] radial-glow opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value="100+" label="Projects Completed" />
            <StatCard value="50+" label="Happy Clients" />
            <StatCard value="10K+" label="Flight Hours" />
            <StatCard value="100%" label="Safety Record" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-semibold tracking-wide uppercase text-sm mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-5">
              Growing with <span className="gradient-text">Purpose</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan/30 to-transparent -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      className="glass-card rounded-xl p-6 border border-border/50 hover:border-cyan/30 transition-all group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-3xl font-display font-bold gradient-text mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-cyan transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-cyan relative z-10 flex-shrink-0">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border/50 hover:border-cyan/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-cyan transition-colors">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide businesses with accurate, affordable, and accessible aerial data 
                solutions that drive informed decision-making and operational efficiency. 
                We're committed to pushing the boundaries of what's possible with drone 
                technology while maintaining the highest standards of safety.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8 border border-border/50 hover:border-cyan/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-cyan transition-colors">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Oklahoma's most trusted drone services provider, recognized for our 
                technical excellence, innovative solutions, and unwavering commitment to 
                client success. We envision a future where aerial data is integral to 
                business operations across every industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(var(--cyan) / 0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-semibold tracking-wide uppercase text-sm mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3 mb-5">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              These principles guide every decision we make and every service we deliver.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center glass-card rounded-2xl p-8 border border-white/10 hover:border-cyan/30 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8 text-cyan" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-cyan transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-semibold tracking-wide uppercase text-sm mb-6">
                Credentials
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                Certified & <span className="gradient-text">Professional</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                We maintain all required certifications and insurance to ensure every 
                operation is conducted safely and legally. Your peace of mind is our priority.
              </p>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-cyan/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-cyan" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground group-hover:text-cyan transition-colors">
                        {cert.name}
                      </span>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">Work With Us</h3>
                    <p className="text-muted-foreground text-sm">Let's discuss your project</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're planning a construction project, need agricultural insights, 
                  or require infrastructure inspections, we're here to help you succeed.
                </p>
                <Link to="/contact">
                  <Button className="w-full bg-accent hover:bg-cyan-dark text-accent-foreground btn-glow group py-6 text-lg font-semibold">
                    Start a Conversation
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready to <span className="gradient-text">Work Together</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Experience the Cyanis difference. Contact us today for a free consultation 
              and discover how we can elevate your project.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-cyan-dark text-accent-foreground px-8 py-6 text-lg font-semibold btn-glow group">
                  Contact Us Today
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg hover:border-cyan/50 hover:text-cyan">
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;