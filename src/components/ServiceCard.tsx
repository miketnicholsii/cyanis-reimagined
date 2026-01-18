import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, link = '/services' }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="service-card group block bg-card rounded-xl p-6 border border-border shadow-sm hover:border-accent/30"
    >
      <div className="icon-container w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      
      <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <div className="flex items-center gap-2 text-accent font-medium mt-auto pt-2">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default ServiceCard;
