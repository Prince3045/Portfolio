import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon } from '../common/GithubIcon';
import { LinkedinIcon } from '../common/LinkedinIcon';

export const HeroSection = () => {
  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Subtle Background Radial Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand/10 blur-[130px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-10 w-[350px] h-[250px] bg-accent-cyan/5 blur-[120px] rounded-full"
      />

      {/* Subtle Grid Pattern Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Narrative & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow & Status Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-surface/90 border border-border-subtle text-brand-light shadow-soft-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald" />
                </span>
                SOFTWARE DEVELOPER
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-text-dim">
                • Available for software opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm{' '}
                <span className="animate-shimmer font-extrabold inline-block">
                  Prince Goyal
                </span>{' '}
                <span className="inline-block hover:rotate-12 transition-transform origin-bottom-right cursor-default">
                  👋
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-brand-light font-mono">
                Software Developer
              </p>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl"
            >
              Computer Science & Engineering student building practical, scalable and user-focused software applications.
            </motion.p>

            {/* Core Technology Line */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center flex-wrap gap-2 py-2 px-3.5 rounded-lg bg-surface/70 border border-border-subtle/80 backdrop-blur-sm shadow-soft-sm"
            >
              <span className="text-xs font-mono text-text-muted font-medium">Core Stack:</span>
              <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-text-primary">
                <span className="font-semibold text-white">React</span>
                <span className="text-text-dim">•</span>
                <span className="font-semibold text-white">JavaScript</span>
                <span className="text-text-dim">•</span>
                <span className="font-semibold text-white">Java</span>
                <span className="text-text-dim">•</span>
                <span className="font-semibold text-white">Spring Boot</span>
                <span className="text-text-dim">•</span>
                <span className="font-semibold text-white">MySQL</span>
              </div>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-base btn-primary inline-flex items-center justify-center gap-2 text-sm font-semibold shadow-soft-md group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="/resume.pdf"
                download="Prince_Goyal_Resume.pdf"
                className="btn-base btn-secondary inline-flex items-center justify-center gap-2 text-sm font-semibold"
                aria-label="Download Prince Goyal Resume PDF"
              >
                <Download className="w-4 h-4 text-text-secondary group-hover:text-white" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-3 border-t border-border-subtle/60"
            >
              <span className="text-xs font-mono text-text-muted">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Prince3045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-surface/80 border border-border-subtle text-text-secondary hover:text-white hover:border-border-muted transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
                  aria-label="Prince Goyal GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/prince-goyal30/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-surface/80 border border-border-subtle text-text-secondary hover:text-brand-light hover:border-border-muted transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
                  aria-label="Prince Goyal LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:princekumargoyal30@gmail.com"
                  className="p-2 rounded-md bg-surface/80 border border-border-subtle text-text-secondary hover:text-accent-cyan hover:border-border-muted transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
                  aria-label="Send email to princekumargoyal30@gmail.com"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Developer Workspace Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="lg:col-span-5 relative flex items-center justify-center w-full select-none"
          >
            {/* Multi-Layer Ambient Behind-Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr from-brand/40 via-accent-cyan/30 to-accent-emerald/20 blur-[90px] opacity-75 animate-pulse"
            />

            {/* Seamless 3D Artwork Frame */}
            <div className="relative w-full max-w-lg aspect-[3/2] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85)] group backdrop-blur-sm">
              <img
                src="/prince-developer-hero.jpg"
                alt="Prince Goyal - Software Developer Workspace"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
              {/* Subtle glass reflection overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10 bg-gradient-to-t from-[#07090e]/40 via-transparent to-white/5" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
