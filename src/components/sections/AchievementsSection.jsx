import { motion } from 'framer-motion';
import { Award, Sparkles, ExternalLink, Calendar, Compass } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import { Card } from '../common/Card';
import { achievementsData } from '../../data/achievements';

export const AchievementsSection = () => {
  return (
    <SectionContainer
      id="achievements"
      title="Certifications & Accreditations"
      subtitle="Verified technical credentials and professional skill development."
    >
      {achievementsData && achievementsData.length > 0 ? (
        /* Verified Achievements Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card
                interactive
                className="p-6 space-y-3 bg-surface/85 border-border-subtle hover:border-border-muted flex flex-col justify-between h-full"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-brand/10 text-brand-light border border-brand/20">
                      <Award className="w-5 h-5" />
                    </div>
                    {item.date && (
                      <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-accent-cyan" />
                        {item.date}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    {item.issuer && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-background border border-border-subtle text-text-primary">
                        {item.issuer}
                      </span>
                    )}
                    {item.grade && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald font-semibold">
                        {item.grade}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <div className="pt-3 border-t border-border-subtle/60">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-brand-light hover:underline inline-flex items-center gap-1"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Tasteful & Recruiter-Friendly In-Progress State (Zero Fabricated Items) */
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-5 sm:p-8 bg-surface/80 border-border-subtle text-center space-y-4 shadow-soft-sm">
            <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 text-brand-light mx-auto flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-background border border-border-subtle text-text-muted">
                <Sparkles className="w-3.5 h-3.5 text-accent-amber" />
                <span>Engineering Milestones in Progress</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Continuous Technical Growth
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl mx-auto">
                Currently dedicating time to core computer science coursework, full-stack software development (Spring Boot & React), and algorithm problem solving. Verified certifications, awards, and competitive honors will be showcased here as they are earned.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-text-dim">
              <span className="px-2.5 py-1 rounded bg-background/80 border border-border-subtle/80">
                • Practical Projects First
              </span>
              <span className="px-2.5 py-1 rounded bg-background/80 border border-border-subtle/80">
                • Open Source Practice
              </span>
              <span className="px-2.5 py-1 rounded bg-background/80 border border-border-subtle/80">
                • Continuous Learning
              </span>
            </div>
          </Card>
        </motion.div>
      )}
    </SectionContainer>
  );
};
