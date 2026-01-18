import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Map, 
  Search, 
  DollarSign, 
  ArrowRight,
  Check,
  Building2,
  TreePine,
  Zap,
  Home,
  HardHat
} from 'lucide-react';

const services = [
  {
    icon: Box,
    title: '3D Modeling & Photogrammetry',
    description: 'Transform aerial imagery into detailed, accurate 3D models for visualization, analysis, and planning.',
    features: [
      'High-resolution 3D point clouds',
      'Textured mesh models',
      'CAD and BIM integration',
      'Virtual property tours',
      'As-built documentation',
      'Progress tracking overlays',
    ],
    industries: ['Construction', 'Real Estate', 'Architecture'],
  },
  {
    icon: Map,
    title: 'Precision Mapping & Surveying',
    description: 'Accurate topographic surveys and orthomosaic maps for land management, construction, and agriculture.',
    features: [
      'Topographic surveys',
      'Orthomosaic imagery',
      'Contour mapping',
      'Volume calculations',
      'Boundary surveys',
      'Elevation models (DEM/DSM)',
    ],
    industries: ['Construction', 'Agriculture', 'Mining'],
  },
  {
    icon: Search,
    title: 'Aerial Inspections',
    description: 'Safe, efficient infrastructure inspections without the need for scaffolding, cranes, or manned aircraft.',
    features: [
      'Roof condition assessments',
      'Solar panel inspections',
      'Cell tower audits',
      'Power line surveys',
      'Bridge inspections',
      'Thermal imaging analysis',
    ],
    industries: ['Utilities', 'Telecommunications', 'Insurance'],
  },
  {
    icon: DollarSign,
    title: 'Agricultural Solutions',
    description: 'Optimize crop management and farm operations with precision agriculture drone services.',
    features: [
      'Crop health monitoring (NDVI)',
      'Field boundary mapping',
      'Irrigation planning',
      'Livestock monitoring',
      'Drainage analysis',
      'Yield estimation',
    ],
    industries: ['Farming', 'Ranching', 'Agribusiness'],
  },
];

const industries = [
  { icon: Building2, name: 'Construction' },
  { icon: TreePine, name: 'Agriculture' },
  { icon: Zap, name: 'Energy & Utilities' },
  { icon: Home, name: 'Real Estate' },
  { icon: HardHat, name: 'Mining & Excavation' },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-light rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Professional Drone Services for Every Industry
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              From detailed 3D modeling to precision agriculture, our FAA-certified team 
              delivers cutting-edge aerial solutions tailored to your specific needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 100}>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <industry.icon className="w-5 h-5 text-accent" />
                  <span className="font-medium">{industry.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={100}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.industries.map((industry) => (
                        <span
                          key={industry}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact">
                      <Button className="bg-accent hover:bg-cyan-dark text-accent-foreground btn-glow">
                        Request This Service
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
                        <img
                          src={
                            index === 0
                              ? 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
                              : index === 1
                              ? 'https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=800'
                              : index === 2
                              ? 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800'
                              : 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800'
                          }
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Our Simple Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From initial consultation to final delivery, we make it easy to get the 
              aerial data you need.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your project needs and objectives with our team.' },
              { step: '02', title: 'Planning', description: 'We create a custom flight plan and timeline for your project.' },
              { step: '03', title: 'Data Capture', description: 'Our certified pilots capture high-quality aerial imagery.' },
              { step: '04', title: 'Delivery', description: 'Receive processed data and reports within 24 hours.' },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100}>
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation. We'll help you determine the 
              best drone solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-cyan-dark text-accent-foreground px-8">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:9184759378">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
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

export default Services;
