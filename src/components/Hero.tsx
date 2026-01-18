import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  showBadges?: boolean;
  compact?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1920',
  showBadges = true,
  compact = false,
}: HeroProps) => {
  const badges = [
    { icon: Shield, text: 'FAA Part 107 Certified' },
    { icon: Zap, text: 'Fully Insured' },
    { icon: Clock, text: '24hr Turnaround' },
  ];

  return (
    <section className={`relative ${compact ? 'min-h-[60vh]' : 'min-h-screen'} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      />

      {/* Gradient Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-40" />

      {/* Radial Glow Effect */}
      <div className="absolute inset-0 radial-glow" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan rounded-full opacity-60"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Scan Lines Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent"
          animate={{ top: ['-5%', '105%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border-cyan/20 text-cyan mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
            </span>
            <span className="text-sm font-medium tracking-wide uppercase">{subtitle}</span>
          </motion.div>

          {/* Title with Reveal Animation */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight text-shadow"
            >
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === title.split(' ').length - 1 ? 'gradient-text' : ''}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>
          </div>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to={ctaLink}>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-cyan-dark text-accent-foreground px-8 py-6 text-lg font-semibold btn-glow group"
              >
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link to={secondaryCtaLink}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-8 py-6 text-lg group"
                >
                  <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </motion.div>

          {/* Trust Badges */}
          {showBadges && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10"
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 glass-card px-4 py-2.5 rounded-full"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan/20 flex items-center justify-center">
                    <badge.icon className="w-4 h-4 text-cyan" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {!compact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: ['20%', '40%', '20%'], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 rounded-full bg-cyan"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan/20 rounded-br-3xl" />
    </section>
  );
};

export default Hero;