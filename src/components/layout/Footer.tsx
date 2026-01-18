import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Cyanis LLC</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Professional drone services delivering precision mapping, 3D modeling, 
              and aerial inspections for industries across Oklahoma.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  3D Modeling
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Precision Mapping
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Aerial Inspections
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Agricultural Surveys
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9184759378"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span>(918) 475-9378</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cyanisllc.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span>info@cyanisllc.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Tulsa, Oklahoma</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Cyanis LLC. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              FAA Part 107 Certified • Fully Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
