import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'header-scrolled py-3' 
          : 'bg-gradient-to-b from-navy-dark/80 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan to-cyan-dark flex items-center justify-center shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-accent-foreground font-bold text-xl relative z-10">C</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                Cyanis
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isScrolled ? 'text-muted-foreground' : 'text-white/60'}`}>
                Drone Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    location.pathname === link.path
                      ? 'text-cyan'
                      : isScrolled
                      ? 'text-foreground hover:text-cyan'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Hover Background */}
                  <motion.span
                    className={`absolute inset-0 rounded-lg ${isScrolled ? 'bg-cyan/10' : 'bg-white/10'}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Active Indicator */}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center gap-5">
            <motion.a
              href="tel:9184759378"
              className={`flex items-center gap-2 font-medium transition-all duration-300 group ${
                isScrolled ? 'text-foreground hover:text-cyan' : 'text-white/80 hover:text-white'
              }`}
              whileHover={{ x: 2 }}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                isScrolled ? 'bg-muted' : 'bg-white/10'
              }`}>
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm">(918) 475-9378</span>
            </motion.a>
            
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-accent hover:bg-cyan-dark text-accent-foreground btn-glow font-semibold px-5 group">
                  Get a Quote
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-muted' : 'bg-white/10'
            }`}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-5 h-5 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`w-5 h-5 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="flex flex-col gap-1 glass-card rounded-2xl p-3 shadow-2xl border border-border/50"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl font-medium transition-all ${
                        location.pathname === link.path
                          ? 'bg-cyan/10 text-cyan'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.name}
                      <ChevronRight className={`w-4 h-4 transition-colors ${
                        location.pathname === link.path ? 'text-cyan' : 'text-muted-foreground'
                      }`} />
                    </Link>
                  </motion.div>
                ))}
                
                <div className="h-px bg-border my-2" />
                
                <motion.a
                  href="tel:9184759378"
                  className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-cyan rounded-xl hover:bg-muted transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan" />
                  </div>
                  <span className="font-medium">(918) 475-9378</span>
                </motion.a>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-2"
                >
                  <Link to="/contact">
                    <Button className="w-full bg-accent hover:bg-cyan-dark text-accent-foreground font-semibold py-6">
                      Get a Quote
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;