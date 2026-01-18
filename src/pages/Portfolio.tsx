import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, MapPin, Calendar, Building2, Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';

// Portfolio project data
const projects = [
  {
    id: 1,
    title: 'Downtown Tulsa Tower',
    category: 'construction',
    location: 'Tulsa, OK',
    date: '2024',
    client: 'Manhattan Construction',
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Monthly progress documentation and volumetric analysis for 42-story mixed-use development.',
  },
  {
    id: 2,
    title: 'Wind Farm Inspection',
    category: 'energy',
    location: 'Woodward, OK',
    date: '2024',
    client: 'NextEra Energy',
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://videos.pexels.com/video-files/5765249/5765249-uhd_2560_1440_24fps.mp4',
    description: 'Thermal inspection of 150 wind turbines identifying blade damage and thermal anomalies.',
  },
  {
    id: 3,
    title: 'Luxury Estate Showcase',
    category: 'realestate',
    location: 'Nichols Hills, OK',
    date: '2024',
    client: 'Luxury Properties Group',
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Cinematic aerial video and photography for $4.2M estate listing.',
  },
  {
    id: 4,
    title: 'Precision Agriculture Survey',
    category: 'agriculture',
    location: 'Ponca City, OK',
    date: '2024',
    client: 'Oklahoma Farm Bureau',
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://videos.pexels.com/video-files/5532769/5532769-uhd_2560_1440_25fps.mp4',
    description: 'NDVI crop health mapping across 2,500 acres for irrigation optimization.',
  },
  {
    id: 5,
    title: 'Pipeline Right-of-Way',
    category: 'energy',
    location: 'Cushing, OK',
    date: '2023',
    client: 'Magellan Midstream',
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: '120-mile corridor inspection with LiDAR and vegetation encroachment analysis.',
  },
  {
    id: 6,
    title: 'Commercial Complex',
    category: 'construction',
    location: 'Oklahoma City, OK',
    date: '2024',
    client: 'Clayco Construction',
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Weekly orthomosaic mapping and 3D modeling for project management.',
  },
  {
    id: 7,
    title: 'Lakefront Properties',
    category: 'realestate',
    location: 'Grand Lake, OK',
    date: '2024',
    client: 'Century 21',
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
    description: 'Sunset aerial tours of premium waterfront listings.',
  },
  {
    id: 8,
    title: 'Wheat Harvest Monitoring',
    category: 'agriculture',
    location: 'Enid, OK',
    date: '2023',
    client: 'Johnston Seed Company',
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Yield prediction mapping with multispectral analysis.',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'construction', label: 'Construction' },
  { id: 'energy', label: 'Energy' },
  { id: 'realestate', label: 'Real Estate' },
  { id: 'agriculture', label: 'Agriculture' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setLightboxIndex(filteredProjects.findIndex(p => p.id === project.id));
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length
      : (lightboxIndex + 1) % filteredProjects.length;
    setLightboxIndex(newIndex);
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <Layout>
      <PageTransition>
        {/* Hero */}
        <Hero
          subtitle="Our Work"
          title="Projects That Speak for Themselves"
          description="Explore our portfolio of aerial imagery, 3D models, and inspection data from across Oklahoma."
          ctaText="Start Your Project"
          ctaLink="/contact"
          showToggle={false}
          compact
        />

        {/* Category Filter */}
        <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-xl z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-accent text-accent-foreground shadow-lg'
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(project)}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                      
                      {/* Video indicator */}
                      {project.type === 'video' && (
                        <motion.div 
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="w-4 h-4 text-accent-foreground fill-current ml-0.5" />
                        </motion.div>
                      )}
                      
                      {/* Expand icon */}
                      <motion.div
                        className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Expand className="w-4 h-4 text-white" />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="flex items-center gap-2 text-white/70 text-xs mb-2">
                            <MapPin className="w-3 h-3" />
                            {project.location}
                            <span className="mx-1">•</span>
                            <Calendar className="w-3 h-3" />
                            {project.date}
                          </div>
                          <h3 className="text-white font-display font-bold text-lg mb-1 group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {project.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-muted-foreground">No projects found in this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '150+', label: 'Projects Completed' },
                { value: '50+', label: 'Happy Clients' },
                { value: '10K+', label: 'Acres Mapped' },
                { value: '500+', label: 'Flight Hours' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join 50+ Oklahoma companies who trust Cyanis for their aerial data needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 btn-glow">
                  Get a Free Quote
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6">
                  <Building2 className="w-4 h-4 mr-2" />
                  View Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Navigation */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>

              {/* Content */}
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary">
                  {selectedProject.type === 'video' && selectedProject.videoUrl ? (
                    <video
                      autoPlay
                      loop
                      controls
                      className="w-full h-full object-cover"
                    >
                      <source src={selectedProject.videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={selectedProject.fullImage || selectedProject.thumbnail}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Project info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-white"
                >
                  <div className="flex items-center gap-4 text-white/60 text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {selectedProject.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" /> {selectedProject.client}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-white/70 max-w-2xl">{selectedProject.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageTransition>
    </Layout>
  );
};

export default Portfolio;