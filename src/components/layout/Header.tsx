import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-scrolled py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">C</span>
            </div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Cyanis LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : isScrolled
                    ? 'text-foreground hover:text-accent'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:9184759378"
              className={`flex items-center gap-2 font-medium transition-colors ${
                isScrolled ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(918) 475-9378</span>
            </a>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-cyan-dark text-accent-foreground btn-glow">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 mobile-menu-enter">
            <div className="flex flex-col gap-2 bg-card rounded-lg p-4 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 px-4 rounded-md font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-accent/10 text-accent'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <a
                href="tel:9184759378"
                className="flex items-center gap-2 py-3 px-4 text-foreground hover:text-accent"
              >
                <Phone className="w-4 h-4" />
                <span>(918) 475-9378</span>
              </a>
              <Link to="/contact" className="mt-2">
                <Button className="w-full bg-accent hover:bg-cyan-dark text-accent-foreground">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
