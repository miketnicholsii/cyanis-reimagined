import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import StatCard from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Box, 
  Map, 
  Search, 
  DollarSign, 
  ArrowRight,
  Shield,
  Clock,
  Award,
  Target,
  Cpu,
  Radio
} from 'lucide-react';

const services = [
  {
    icon: Box,
    title: '3D Modeling',
    description: 'Create detailed 3D models of structures, terrain, and assets with photogrammetry technology.',
    features: ['High-resolution models', 'CAD-ready exports', 'Virtual tours'],
  },
  {
    icon: Map,
    title: 'Precision Mapping',
    description: 'Accurate aerial mapping and surveying for construction, agriculture, and land management.',
    features: ['Topographic surveys', 'Orthomosaic maps', 'Volume calculations'],
  },
  {
    icon: Search,
    title: 'Aerial Inspections',
    description: 'Safe and efficient infrastructure inspections without scaffolding or manned aircraft.',
    features: ['Roof inspections', 'Power line surveys', 'Cell tower audits'],
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Solutions',
    description: 'Reduce project costs and timelines with efficient drone-based data collection.',
    features: ['50% cost savings', 'Faster turnaround', 'Detailed reports'],
  },
];

const features = [
  {
    icon: Shield,
    title: 'Fully Certified & Insured',
    description: 'FAA Part 107 certified pilots with comprehensive liability coverage for every mission.',
  },
  {
    icon: Clock,
    title: 'Rapid Turnaround',
    description: 'Most projects completed and delivered within 24 hours, with rush options available.',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Experience across construction, agriculture, energy, and real estate sectors.',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Compact */}
      <Hero
        subtitle="Professional UAS Services"
        title="Precision Aerial Solutions"
        description="Cutting-edge drone technology for 3D modeling, mapping, and inspections across Oklahoma."
        ctaText="Request a Quote"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        compact={true}
      />

      {/* Stats Section with Tech Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] radial-glow opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value="100+" label="Projects Completed" />
            <StatCard value="50%" label="Cost Savings" />
            <StatCard value="24hr" label="Turnaround Time" />
            <StatCard value="5★" label="Client Rating" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-28 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 radial-glow opacity-30" />
        <div className="absolute bottom-20 left-0 w-64 h-64 radial-glow opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-semibold tracking-wide uppercase text-sm mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              What We Offer
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-5">
              Professional <span className="gradient-text">Drone Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              We leverage cutting-edge UAS technology to deliver accurate, safe, and 
              cost-effective aerial solutions for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div 
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan/30 text-cyan hover:bg-cyan/10 hover:border-cyan/50 px-8 group"
              >
                View All Services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Dark Theme */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(var(--cyan) / 0.1) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-semibold tracking-wide uppercase text-sm mb-6">
                Why Cyanis
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3 mb-6 leading-tight">
                Your Trusted Partner in{' '}
                <span className="gradient-text">Aerial Innovation</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                At Cyanis LLC, we combine FAA-certified expertise with cutting-edge drone 
                technology to deliver unparalleled aerial services. Our commitment to 
                safety, precision, and client satisfaction sets us apart.
              </p>

              {/* Feature List */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-5 p-5 rounded-xl glass-card border-white/5 group hover:border-cyan/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-cyan" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-white mb-1.5 group-hover:text-cyan transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional drone in flight"
                  className="w-full h-auto rounded-2xl"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                
                {/* Tech Overlay */}
                <div className="absolute inset-0 tech-grid opacity-30" />
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-8 -left-8 glass-card p-6 rounded-xl border border-cyan/20 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-white">10+</div>
                    <div className="text-sm text-white/60">Years Experience</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-6 -right-6 glass-card p-5 rounded-xl border border-cyan/20 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <div className="text-xl font-display font-bold text-white">AI-Powered</div>
                    <div className="text-xs text-white/60">Data Processing</div>
                  </div>
                </div>
              </motion.div>

              {/* Animated Drone Icon */}
              <motion.div
                className="absolute top-1/4 right-1/4"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Radio className="w-8 h-8 text-cyan/40" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] radial-glow opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-semibold tracking-wide uppercase text-sm mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Get Started Today
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Ready to <span className="gradient-text">Elevate</span> Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Get in touch today for a free consultation and discover how our drone 
              services can transform your operations and save you time and money.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-cyan-dark text-accent-foreground px-8 py-6 text-lg font-semibold btn-glow group">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="tel:9184759378">
                <Button size="lg" variant="outline" className="border-2 border-muted-foreground/30 hover:border-cyan/50 hover:text-cyan px-8 py-6 text-lg">
                  Call (918) 475-9378
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute bottom-0 left-0 w-40 h-40 border-l border-b border-cyan/10 rounded-bl-3xl" />
        <div className="absolute top-0 right-0 w-40 h-40 border-r border-t border-cyan/10 rounded-tr-3xl" />
      </section>
    </Layout>
  );
};

export default Index;