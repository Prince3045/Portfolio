import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import { Card } from '../common/Card';
import { experienceData } from '../../data/experience';

export const ExperienceSection = () => {
  return (
    <SectionContainer
      id="experience"
      title="Experience"
      subtitle="Internships and engineering roles focusing on practical software development."
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Timeline Axis Line (Desktop) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-8 top-4 bottom-4 w-px bg-border-subtle"
        />

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative md:pl-20"
            >
              {/* Timeline Node (Desktop) */}
              <div
                aria-hidden="true"
                className="hidden md:flex absolute left-6 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-surface border-2 border-brand-light items-center justify-center shadow-soft-sm"
              >
                <div className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
              </div>

              {/* Experience Card */}
              <Card className="p-6 sm:p-7 bg-surface/80 border-border-subtle hover:border-border-muted transition-all duration-200">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-border-subtle/70">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="p-1.5 rounded-md bg-brand/10 text-brand-light border border-brand/20">
                        <Briefcase className="w-4 h-4" />
                      </span>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-brand-light font-medium font-mono">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1 rounded-md text-xs font-mono bg-background/80 border border-border-subtle text-text-secondary">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{exp.startDate} – {exp.endDate}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    Key Contributions & Responsibilities
                  </h4>
                  <ul className="space-y-2" aria-label="Key responsibilities">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="mt-5 pt-4 border-t border-border-subtle/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-text-muted">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-background border border-border-subtle text-text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
