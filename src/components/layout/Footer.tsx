import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">C</span>
              </div>
              <span className="font-display font-bold text-xl">Cyanis</span>
            </Link>
            <p className="text-background/60 leading-relaxed text-sm">
              Professional drone services delivering precision mapping, 3D modeling, 
              and aerial inspections across Oklahoma.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, 
                { name: 'About', path: '/about' }, { name: 'Contact', path: '/contact' }].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/60 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {['3D Modeling', 'Precision Mapping', 'Aerial Inspections', 'Agricultural Surveys'].map(service => (
                <li key={service}>
                  <Link to="/services" className="text-background/60 hover:text-accent transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:9184759378" className="flex items-center gap-2 text-background/60 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                  (918) 475-9378
                </a>
              </li>
              <li>
                <a href="mailto:info@cyanisllc.com" className="flex items-center gap-2 text-background/60 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                  info@cyanisllc.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-background/60">
                  <MapPin className="w-4 h-4 text-accent" />
                  Tulsa, Oklahoma
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {currentYear} Cyanis LLC. All rights reserved.</p>
          <p>FAA Part 107 Certified • Fully Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;