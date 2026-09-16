import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from '../common/GithubIcon';
import { LinkedinIcon } from '../common/LinkedinIcon';
import { ThemeSwitcher } from '../common/ThemeSwitcher';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'coding', label: 'Coding' },
  { id: 'achievements', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll listener for background blur and active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background styling
      setIsScrolled(window.scrollY > 20);

      // Only calculate active section on the home page
      if (location.pathname !== '/') return;

      const scrollPosition = window.scrollY + 120; // Offset for navbar height

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle section navigation with smooth scrolling and route awareness
  const handleNavClick = (id) => {
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border-subtle shadow-soft-sm py-3'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group text-left text-base sm:text-lg font-bold tracking-tight text-text-primary hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light rounded-sm"
            aria-label="Prince Goyal — Home"
          >
            Prince Goyal
            <span className="text-brand-light inline-block transition-transform duration-200 group-hover:translate-x-0.5">
              .
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === '/' && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-light rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Theme Switcher & Social Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeSwitcher />
            <a
              href="https://github.com/Prince3045"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-md border border-border-subtle hover:border-border-muted transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
              aria-label="Prince Goyal GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-goyal30/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-[#0077b5] hover:bg-surface rounded-md border border-border-subtle hover:border-border-muted transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
              aria-label="Prince Goyal LinkedIn Profile"
              title="Connect on LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions: Theme Switcher & Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeSwitcher />
            <a
              href="https://github.com/Prince3045"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-text-primary rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-md border border-border-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-border-subtle bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-4 pt-3 pb-6 space-y-1">
              {NAV_ITEMS.map((item, index) => {
                const isActive = location.pathname === '/' && activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-white bg-surface font-semibold border-l-2 border-brand-light'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-light" />
                    )}
                  </motion.button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-border-subtle/80 flex items-center justify-between px-3">
                <span className="text-xs font-mono text-text-muted">Connect</span>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://github.com/Prince3045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-md border border-border-subtle transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prince-goyal30/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-text-secondary hover:text-[#0077b5] hover:bg-surface rounded-md border border-border-subtle transition-colors"
                    aria-label="Prince Goyal LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <ThemeSwitcher isMobile={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
