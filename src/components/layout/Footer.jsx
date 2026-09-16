import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { GithubIcon } from '../common/GithubIcon';
import { LinkedinIcon } from '../common/LinkedinIcon';
import { profilesData } from '../../data/profiles';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'coding', label: 'Coding' },
  { id: 'achievements', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-border-subtle bg-surface/60 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Descriptor */}
          <div className="md:col-span-5 space-y-3">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left group text-lg font-bold tracking-tight text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light rounded-sm"
              aria-label="Prince Goyal — Back to Home"
            >
              Prince Goyal
              <span className="text-brand-light inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                .
              </span>
            </button>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
              Software Developer & Computer Science undergraduate at NIET, Greater Noida. Dedicated to building robust full-stack web applications, clean architectures, and disciplined problem solving.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-background border border-border-subtle text-accent-emerald">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span>Available for Software Engineering Roles</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-mono text-text-secondary">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-light rounded-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect & Top Button */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Connect Online
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={profilesData.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-white transition-colors group"
                aria-label="Prince Goyal GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
                <span>GitHub (@{profilesData.github.username})</span>
              </a>

              <a
                href={profilesData.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-[#0077b5] transition-colors group text-left"
                aria-label="Prince Goyal LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-text-muted group-hover:text-[#0077b5] transition-colors" />
                <span>LinkedIn ({profilesData.linkedin.username})</span>
              </a>

              <a
                href={profilesData.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent-amber transition-colors group text-left"
                aria-label="Prince Goyal LeetCode Profile"
              >
                <Code2 className="w-4 h-4 text-accent-amber group-hover:text-accent-amber transition-colors" />
                <span>LeetCode ({profilesData.leetcode.username})</span>
              </a>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-text-muted hover:text-white bg-surface hover:bg-surface-hover border border-border-subtle transition-colors group"
                aria-label="Scroll back to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credit Strip */}
        <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <p>
            © {new Date().getFullYear()} Prince Goyal. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-[11px] text-text-dim">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500/20" />
            <span>using React, Tailwind CSS & Framer Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
