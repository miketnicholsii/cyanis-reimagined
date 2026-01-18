import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Box, 
  Map, 
  Search, 
  Leaf, 
  ArrowRight,
  Check,
  Building2,
  TreePine,
  Zap,
  Home,
  HardHat,
  ChevronRight,
  Sparkles
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
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500/20 to-cyan/20',
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
    image: 'https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500/20 to-cyan/20',
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
    image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-500/20 to-cyan/20',
  },
  {
    icon: Leaf,
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
    image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-emerald-500/20 to-cyan/20',
  },
];

const industries = [
  { icon: Building2, name: 'Construction' },
  { icon: TreePine, name: 'Agriculture' },
  { icon: Zap, name: 'Energy & Utilities' },
  { icon: Home, name: 'Real Estate' },
  { icon: HardHat, name: 'Mining & Excavation' },
];

const processSteps = [
  { step: '01', title: 'Consultation', description: 'Discuss your project needs and objectives with our expert team.' },
  { step: '02', title: 'Planning', description: 'We create a custom flight plan optimized for your specific requirements.' },
  { step: '03', title: 'Data Capture', description: 'Our certified pilots capture high-quality aerial imagery on-site.' },
  { step: '04', title: 'Delivery', description: 'Receive processed data, models, and comprehensive reports.' },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <motion.div
            className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(var(--cyan) / 0.15) 0%, transparent 70%)' }}
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
              Our Services
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Professional <span className="gradient-text">Drone Services</span> for Every Industry
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              From detailed 3D modeling to precision agriculture, our FAA-certified team 
              delivers cutting-edge aerial solutions tailored to your specific needs.
            </p>
          </motion.div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan/20 rounded-br-3xl" />
      </section>

      {/* Industries Bar */}
      <section className="py-6 bg-secondary/50 border-y border-border/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="flex items-center gap-2 text-muted-foreground hover:text-cyan transition-colors cursor-default group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <industry.icon className="w-5 h-5 text-cyan/60 group-hover:text-cyan transition-colors" />
                <span className="font-medium text-sm">{industry.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? '' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 relative group`}>
                        <service.icon className="w-8 h-8 text-cyan relative z-10" />
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-cyan/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1.1 }}
                        />
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      {/* Features Grid */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            className="flex items-center gap-3 group"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                          >
                            <div className="w-5 h-5 rounded-full bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                              <Check className="w-3 h-3 text-cyan" />
                            </div>
                            <span className="text-foreground text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      {/* Industry Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.industries.map((industry) => (
                          <span
                            key={industry}
                            className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium border border-border/50"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                      
                      <Link to="/contact">
                        <Button className="bg-accent hover:bg-cyan-dark text-accent-foreground btn-glow group px-6">
                          Request This Service
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                  
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="relative rounded-2xl overflow-hidden group">
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full aspect-[4/3] object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Tech Grid Overlay */}
                        <div className="absolute inset-0 tech-grid opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className={`absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-br ${service.color} ${index % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'}`} />
                      
                      {/* Floating Badge */}
                      <motion.div
                        className={`absolute ${index % 2 === 0 ? '-bottom-6 -left-6' : '-bottom-6 -right-6'} glass-card px-4 py-3 rounded-xl border border-cyan/20 shadow-xl`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center">
                            <Check className="w-5 h-5 text-cyan" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-foreground">Industry Standard</div>
                            <div className="text-xs text-muted-foreground">Professional Grade</div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-semibold tracking-wide uppercase text-sm mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-5">
              Our Simple <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From initial consultation to final delivery, we make it easy to get the 
              aerial data you need.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan/30 to-transparent -translate-y-1/2" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center glass-card rounded-2xl p-8 border border-border/50 hover:border-cyan/30 transition-all duration-300 group">
                    {/* Step Number */}
                    <motion.div
                      className="text-6xl font-display font-bold stat-number mb-4 relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.step}
                      <div className="absolute -inset-4 rounded-full bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </motion.div>
                    
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Arrow to next */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ChevronRight className="w-8 h-8 text-cyan/40" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(var(--cyan) / 0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Contact us today for a free consultation. We'll help you determine the 
              best drone solution for your project.
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
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="tel:9184759378">
                <Button size="lg" variant="outline" className="border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40 px-8 py-6 text-lg">
                  Call (918) 475-9378
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cyan/20 rounded-bl-3xl" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyan/20 rounded-tr-3xl" />
      </section>
    </Layout>
  );
};

export default Services;