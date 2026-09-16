import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Users, Server, Monitor } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import { Card } from '../common/Card';
import { GithubIcon } from '../common/GithubIcon';
import { projectsData } from '../../data/projects';

export const ProjectsSection = () => {
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <SectionContainer
      id="projects"
      title="Featured Projects"
      subtitle="Practical software engineering applications demonstrating full-stack architecture, relational database design, and real-world problem-solving."
    >
      <div className="space-y-10">

        {/* 1. PRIMARY FEATURED PROJECT: RozgaarX */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xl border border-brand/30 bg-surface/90 overflow-hidden shadow-card-glow hover:border-brand-light/60 hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.22)] transition-all duration-300 group"
        >
          {/* Ambient Corner Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-brand/15 blur-[100px] rounded-full"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Column: Abstract HTML/CSS Application Preview */}
            <div className="lg:col-span-5 p-5 sm:p-7 bg-background-secondary/70 border-b lg:border-b-0 lg:border-r border-border-subtle flex flex-col justify-center">
              
              {/* Simulated Window Chrome */}
              <div className="rounded-lg border border-border-subtle bg-background overflow-hidden shadow-soft-md">
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-surface/80 border-b border-border-subtle text-xs">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
                  </div>
                  <div className="text-[11px] font-mono text-text-muted bg-surface px-2.5 py-0.5 rounded border border-border-subtle truncate max-w-[180px]">
                    https://rozgaarxp.vercel.app
                  </div>
                  <div className="w-6" />
                </div>

                {/* Abstract UI Elements */}
                <div className="p-4 space-y-3 font-sans text-xs">
                  {/* App Header Simulation */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-border-subtle/60">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-brand flex items-center justify-center text-[10px] font-bold text-white">
                        RX
                      </div>
                      <span className="font-bold text-white text-xs">RozgaarX Portal</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                      Live System
                    </span>
                  </div>

                  {/* Simulated Service Card */}
                  <div className="p-3 rounded-md bg-surface/90 border border-border-subtle space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-text-primary">Service Request #1042</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand/10 text-brand-light">
                        Allocated
                      </span>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-tight">
                      Service Booking & Provider Matching Workflow
                    </p>
                    <div className="flex items-center gap-3 pt-1 text-[10px] text-text-muted font-mono">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-brand-light" /> Role: Client/Worker
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-accent-emerald" /> JWT Secured
                      </span>
                    </div>
                  </div>

                  {/* Workflow Steps */}
                  <div className="p-2.5 rounded-md bg-surface/40 border border-border-subtle/50 space-y-1.5 text-[11px]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                      Active Lifecycle
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono text-[9px]">
                      <div className="p-1 rounded bg-brand/15 text-brand-light border border-brand/20">
                        1. Booking
                      </div>
                      <div className="p-1 rounded bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/20">
                        2. Allocation
                      </div>
                      <div className="p-1 rounded bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/20">
                        3. Tracking
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="text-[11px] font-mono text-text-dim">
                  Architecture: Spring Boot REST API • MySQL • React SPA
                </span>
              </div>
            </div>

            {/* Right Column: Project Information & Actions */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Eyebrow & Status */}
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand/15 border border-brand/30 text-brand-light">
                    Featured Project
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    {featuredProject.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm font-medium text-brand-light font-mono mt-0.5">
                    {featuredProject.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Technology Badges */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.technologies.map((tech) => (
                      <span key={tech} className="badge-tech text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Key Features */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                    Verified Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                    {featuredProject.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border-subtle/80 flex flex-wrap items-center gap-3">
                <Link
                  to={`/projects/${featuredProject.id}`}
                  className="btn-base btn-primary inline-flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-soft-sm group"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-base btn-secondary inline-flex items-center gap-2 text-xs sm:text-sm font-semibold"
                    aria-label="Open RozgaarX live demo in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>Live Demo</span>
                  </a>
                )}

                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-base btn-outline inline-flex items-center gap-2 text-xs sm:text-sm font-semibold"
                    aria-label="Open RozgaarX GitHub repository in new tab"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>

            </div>

          </div>
        </motion.article>

        {/* 2. SECONDARY PROJECTS GRID */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Other Engineering Projects
            </h3>
            <span className="text-xs font-mono text-text-muted">
              {secondaryProjects.length} Verified Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Card
                  interactive
                  className="p-6 sm:p-7 flex flex-col justify-between h-full bg-surface/80 hover:bg-surface border-border-subtle hover:border-border-muted transition-all duration-200"
                >
                  <div className="space-y-4">
                    {/* Header: Category & Type Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-background border border-border-subtle text-text-secondary">
                        {project.category}
                      </span>
                      <div className="p-2 rounded-md bg-background/80 border border-border-subtle text-brand-light">
                        {project.category === 'Backend' ? (
                          <Server className="w-4 h-4 text-accent-cyan" />
                        ) : (
                          <Monitor className="w-4 h-4 text-accent-amber" />
                        )}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {project.title}
                      </h4>
                      <p className="text-xs font-mono text-brand-light mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-[11px] font-mono uppercase tracking-wider text-text-muted mb-2">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="badge-tech text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Verified Features */}
                    {project.features && project.features.length > 0 && (
                      <div>
                        <h5 className="text-[11px] font-mono uppercase tracking-wider text-text-muted mb-2">
                          Core Features
                        </h5>
                        <ul className="space-y-1.5 text-xs text-text-secondary" aria-label={`${project.title} features`}>
                          {project.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Verified Status & Optional GitHub Link */}
                  <div className="pt-4 mt-6 border-t border-border-subtle/60 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-text-dim">
                      Status: Verified Project
                    </span>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-light hover:text-white transition-colors group/link"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub Repo</span>
                        <ExternalLink className="w-3 h-3 text-text-dim group-hover/link:text-white" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-text-muted">
                        PRD Validated
                      </span>
                    )}
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};
