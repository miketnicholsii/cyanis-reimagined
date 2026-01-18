import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import StatCard from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { 
  Box, 
  Map, 
  Search, 
  DollarSign, 
  ArrowRight,
  Shield,
  Clock,
  Award
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

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        subtitle="Professional Drone Services"
        title="Elevate Your Perspective with Precision Aerial Solutions"
        description="From 3D modeling to precision mapping, we deliver cutting-edge UAS technology for industries across Oklahoma. Safe, certified, and cost-effective."
        ctaText="Request a Quote"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
      />

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection>
              <StatCard value="100+" label="Projects Completed" />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <StatCard value="50%" label="Cost Savings" />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <StatCard value="24hr" label="Turnaround Time" />
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <StatCard value="5★" label="Client Rating" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Professional Drone Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We leverage cutting-edge UAS technology to deliver accurate, safe, and 
              cost-effective aerial solutions for your business needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">Why Cyanis</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Your Trusted Partner in Aerial Innovation
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                At Cyanis LLC, we combine FAA-certified expertise with cutting-edge drone 
                technology to deliver unparalleled aerial services. Our commitment to 
                safety, precision, and client satisfaction sets us apart.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Fully Certified & Insured</h3>
                    <p className="text-primary-foreground/70">FAA Part 107 certified pilots with comprehensive liability coverage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Rapid Turnaround</h3>
                    <p className="text-primary-foreground/70">Most projects completed and delivered within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Industry Expertise</h3>
                    <p className="text-primary-foreground/70">Experience across construction, agriculture, energy, and real estate sectors.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional drone in flight"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm font-medium">Years Combined Experience</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Elevate Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get in touch today for a free consultation and discover how our drone 
              services can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-cyan-dark text-accent-foreground px-8 btn-glow">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:9184759378">
                <Button size="lg" variant="outline" className="px-8">
                  Call (918) 475-9378
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
