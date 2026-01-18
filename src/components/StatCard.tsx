import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  suffix?: string;
}

const StatCard = ({ value, label, icon, suffix = '' }: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract numeric value and any prefix (like '$')
  const numericMatch = value.match(/^([^\d]*)(\d+)(.*)$/);
  const prefix = numericMatch?.[1] || '';
  const numericValue = parseInt(numericMatch?.[2] || '0', 10);
  const valueSuffix = numericMatch?.[3] || suffix;

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * numericValue);
      
      setDisplayValue(current.toString());

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericValue.toString());
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative text-center p-8 rounded-2xl glass-card group hover:border-cyan/20 transition-all duration-500"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan/5 to-transparent" />
      </div>

      {/* Icon */}
      {icon && (
        <motion.div 
          className="mb-4 flex justify-center text-cyan"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {icon}
        </motion.div>
      )}

      {/* Value with Counter Animation */}
      <div className="relative">
        <motion.div
          className="text-5xl md:text-6xl font-display font-bold stat-number mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {prefix}{displayValue}{valueSuffix}
        </motion.div>
        
        {/* Underline accent */}
        <motion.div
          className="h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-cyan to-cyan-light"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>

      {/* Label */}
      <motion.div
        className="text-muted-foreground font-medium mt-4 text-sm uppercase tracking-wider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default StatCard;