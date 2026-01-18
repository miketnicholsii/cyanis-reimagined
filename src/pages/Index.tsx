import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Box, 
  Map, 
  Search, 
  Leaf, 
  ArrowRight,
  Building2,
  Factory,
  Tractor,
  Home,
  Zap,
  Play,
  CheckCircle2,
  ChevronRight,
  Shield,
  Clock,
  Award
} from 'lucide-react';

// Industry cards data
const industries = [
  {
    icon: Building2,
    title: 'Construction',
    description: 'Track progress, measure volumes, and document sites with precision aerial data.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Factory,
    title: 'Energy & Utilities',
    description: 'Inspect infrastructure safely and efficiently without expensive equipment.',
    image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Tractor,
    title: 'Agriculture',
    description: 'Monitor crop health, plan irrigation, and maximize yields with aerial insights.',
    image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Create stunning property visuals and 3D tours that sell faster.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

// Services data
const services = [
  { icon: Box, title: '3D Modeling', description: 'Photogrammetry and point cloud generation' },
  { icon: Map, title: 'Mapping', description: 'Orthomosaic maps and topographic surveys' },
  { icon: Search, title: 'Inspections', description: 'Infrastructure and asset inspections' },
  { icon: Leaf, title: 'Agriculture', description: 'Crop health and field analysis' },
];

// Process tabs
const processTabs = [
  { id: 'planning', label: 'Planning', description: 'We analyze your project requirements and create a custom flight plan optimized for your needs.' },
  { id: 'capture', label: 'Data Capture', description: 'Our FAA-certified pilots capture high-resolution aerial imagery using enterprise-grade drones.' },
  { id: 'processing', label: 'Processing', description: 'Advanced software processes raw data into actionable deliverables like 3D models and maps.' },
  { id: 'delivery', label: 'Delivery', description: 'Receive your data within 24 hours in industry-standard formats ready for immediate use.' },
];

// Trust logos (using text for now)
const trustLogos = [
  'Oklahoma DOT', 'Tulsa Metro', 'Devon Energy', 'Williams Companies', 
  'ONEOK', 'Magellan Midstream', 'Quiktrip', 'BOK Financial'
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('planning');

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        subtitle="Professional Drone Services"
        title="Reality Capture for the Modern Enterprise"
        description="From aerial surveys to 3D modeling, we transform complex environments into actionable data. Trusted by Oklahoma's leading companies."
        ctaText="Book a Demo"
        ctaLink="/contact"
        secondaryCtaText="Watch Demo"
        secondaryCtaLink="/services"
        showVideo={true}
      />

      {/* Trust Logos */}
      <section className="py-8 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <span className="text-sm text-muted-foreground font-medium">Trusted by:</span>
            <div className="flex items-center gap-10 flex-wrap justify-center">
              {trustLogos.slice(0, 5).map((logo, index) => (
                <motion.span
                  key={logo}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-muted-foreground/60 font-semibold text-sm hover:text-foreground transition-colors cursor-default"
                >
                  {logo}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Industries</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">
              Solutions for Every Industry
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver specialized aerial solutions tailored to the unique challenges of your industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to="/services"
                  className="group block clean-card overflow-hidden h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <industry.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Workflow Section with Tabs */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">
              From Flight to Insight
            </h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-background rounded-xl p-1.5 border border-border shadow-sm">
              {processTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-foreground text-background shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden bg-muted aspect-video shadow-lg">
                <img
                  src={
                    activeTab === 'planning' 
                      ? 'https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=800'
                      : activeTab === 'capture'
                      ? 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800'
                      : activeTab === 'processing'
                      ? 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
                      : 'https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=800'
                  }
                  alt={activeTab}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-accent font-display font-bold text-xl">
                    {processTabs.findIndex(t => t.id === activeTab) + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {processTabs.find(t => t.id === activeTab)?.label}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {processTabs.find(t => t.id === activeTab)?.description}
                </p>
                <Link to="/services">
                  <Button variant="outline" className="group">
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                Complete Aerial Data Solutions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We offer a comprehensive suite of drone services designed to meet the 
                diverse needs of modern businesses. From initial capture to final deliverables.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 rounded-xl bg-secondary/50 border border-border hover:border-accent/30 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </motion.div>
                ))}
              </div>

              <Link to="/services" className="inline-block mt-8">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground btn-glow group">
                  Explore All Services
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Drone services"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">50% Cost Savings</div>
                    <div className="text-sm text-muted-foreground">vs traditional methods</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Section */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Cyanis</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
              The Cyanis Advantage
            </h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto">
              We combine cutting-edge technology with certified expertise to deliver 
              unmatched aerial data solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Certified & Insured', description: 'FAA Part 107 certified pilots with comprehensive liability coverage for every mission.' },
              { icon: Clock, title: '24hr Turnaround', description: 'Fast delivery without compromising quality. Most projects delivered within 24 hours.' },
              { icon: Award, title: 'Enterprise Quality', description: 'Industry-standard deliverables compatible with all major CAD and GIS platforms.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                <p className="text-background/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center bg-secondary/50 rounded-3xl p-12 md:p-16 border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Schedule a free consultation and see how our drone services can save you 
              time, reduce costs, and provide insights you never knew you needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold btn-glow group">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="tel:9184759378">
                <Button size="lg" variant="outline" className="px-10 py-6 text-lg">
                  Call (918) 475-9378
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;