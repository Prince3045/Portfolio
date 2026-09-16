import { motion } from 'framer-motion';
import { FileText, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import { Card } from '../common/Card';
import { profilesData } from '../../data/profiles';

export const ResumeSection = () => {
  const resume = profilesData.resume;

  return (
    <SectionContainer
      id="resume"
      title="Resume"
      subtitle="Engineering credentials, core competencies, and curriculum vitae."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <Card className="p-7 sm:p-10 relative overflow-hidden bg-surface/90 border-brand/25 shadow-card-glow">
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-brand/10 blur-[80px] rounded-full"
          />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
            
            {/* Left Content */}
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand/10 border border-brand/20 text-brand-light">
                <Sparkles className="w-3 h-3" />
                <span>Curriculum Vitae</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Want to know more about my work?
              </h3>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                View my experience, projects, skills and technical background in my resume.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-text-muted">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
                  Computer Science (NIET)
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
                  Full-Stack Development
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
                  Spring Boot & React
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col items-stretch gap-3 w-full sm:w-auto shrink-0">
              <a
                href={resume.url}
                download={resume.fileName}
                className="btn-base btn-primary inline-flex items-center justify-center gap-2 text-sm font-semibold shadow-soft-sm group"
                aria-label="Download Prince Goyal Resume PDF"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              <a
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-secondary inline-flex items-center justify-center gap-2 text-sm font-semibold"
                aria-label="View Prince Goyal Resume Document in new tab"
              >
                <FileText className="w-4 h-4 text-text-secondary group-hover:text-white" />
                <span>View Resume</span>
              </a>
            </div>

          </div>
        </Card>
      </motion.div>
    </SectionContainer>
  );
};
