import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  link?: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, features, link = '/services', index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={link}
        className="service-card group block glass-card rounded-2xl p-7 border border-border/50 hover:border-cyan/30 h-full"
      >
        {/* Icon Container with Glow */}
        <div className="icon-container w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-6 relative">
          <Icon className="w-8 h-8 text-cyan relative z-10 transition-transform duration-500 group-hover:scale-110" />
          <motion.div
            className="absolute inset-0 rounded-2xl bg-cyan/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-display font-semibold text-card-foreground mb-3 group-hover:text-cyan transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-5">
          {description}
        </p>
        
        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="space-y-2.5 mb-5">
            {features.map((feature, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-center gap-3 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
        
        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-cyan font-medium mt-auto pt-2 group/link">
          <span className="relative">
            Learn more
            <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan transition-all duration-300 group-hover/link:w-full group-hover:w-full" />
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
        </div>

        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/5 via-transparent to-transparent" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;