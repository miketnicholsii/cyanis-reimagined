import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showToggle?: boolean;
  showBadges?: boolean;
  compact?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaText = 'Book a Demo',
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  showToggle = true,
  showBadges = true,
  compact = false,
}: HeroProps) => {
  const [activeView, setActiveView] = useState<'exterior' | 'interior'>('exterior');

  const images = {
    exterior: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    interior: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
  };

  const features = [
    'FAA Part 107 Certified',
    'Fully Insured',
    '24hr Turnaround',
  ];

  return (
    <section className={`relative ${compact ? 'pt-28 pb-16' : 'pt-32 pb-20'} bg-background overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 subtle-grid opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {subtitle}
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              >
                {description}
              </motion.p>
            )}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link to={ctaLink}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold btn-glow group">
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink}>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base group">
                    <Play className="mr-2 w-4 h-4" />
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </motion.div>

            {/* Trust Features */}
            {showBadges && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {feature}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Toggle Tabs */}
            {showToggle && (
              <div className="flex gap-2 mb-4">
                {(['exterior', 'interior'] as const).map((view) => (
                  <button
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeView === view
                        ? 'bg-foreground text-background'
                        : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {view === 'exterior' ? 'Aerial View' : '3D Model'}
                  </button>
                ))}
              </div>
            )}

            {/* Main Image/Video Container */}
            <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-[4/3] shadow-2xl">
              <motion.img
                key={activeView}
                src={images[activeView]}
                alt="Drone capture preview"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* UI Overlay - Software Style */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top toolbar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      Live Preview
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                      4K
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                      HDR
                    </div>
                  </div>
                </div>

                {/* Measurement overlay */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 text-white">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-white/70">Processing Status</span>
                      <span className="text-accent font-medium">Complete</span>
                    </div>
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Corner markers */}
                <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-accent/60" />
                <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-accent/60" />
                <div className="absolute bottom-20 left-8 w-8 h-8 border-l-2 border-b-2 border-accent/60" />
                <div className="absolute bottom-20 right-8 w-8 h-8 border-r-2 border-b-2 border-accent/60" />
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-foreground">100+</div>
                  <div className="text-xs text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;