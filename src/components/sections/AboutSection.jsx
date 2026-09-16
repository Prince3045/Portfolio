import { motion } from 'framer-motion';
import { GraduationCap, Code2, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import { Card } from '../common/Card';

export const AboutSection = () => {
  const highlights = [
    'Modern Frontend Development (React & JavaScript)',
    'Responsive & Intuitive UI/UX Design',
    'REST API Integration & Full-Stack Architecture',
    'Java, OOP & Clean Code',
    'Problem Solving & DSA',
  ];

  return (
    <SectionContainer
      id="about"
      title="About Me"
      subtitle="Background, academic training, and software development focus."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-5"
        >
          <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              I’m a <strong className="text-text-primary font-semibold">Computer Science & Engineering student</strong> at{' '}
              <strong className="text-brand-light font-semibold">Noida Institute of Engineering and Technology (NIET), Greater Noida</strong>, with a strong interest in{' '}
              <strong className="text-white font-semibold">frontend and software development</strong>.
            </p>
            <p>
              My primary focus is on <strong className="text-white font-medium">modern frontend development</strong> using{' '}
              <span className="text-brand-light font-medium">React, JavaScript, and Tailwind CSS</span>, with practical experience building backend REST APIs using <span className="text-white font-medium">Java, Spring Boot, and MySQL</span>. Through academic projects like <strong className="text-white font-medium">RozgaarX</strong> and hands-on practice, I specialize in crafting clean, responsive, and intuitive user interfaces while understanding end-to-end full-stack integration.
            </p>
            <p>
              I enjoy building seamless user experiences and connecting them with reliable backend systems. While frontend is my strongest domain, I continuously strengthen my{' '}
              <strong className="text-white font-semibold">DSA, Java, and backend fundamentals</strong> to grow into a well-rounded software engineer.
            </p>
          </div>

          {/* Key Engineering Focus Badges */}
          <div className="pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
              Core Engineering Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-md bg-surface/70 border border-border-subtle text-xs text-text-primary"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Academic & Technical Profile Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Verified Academic Card */}
          <Card className="p-6 relative overflow-hidden bg-gradient-to-br from-surface to-background-secondary border-border-subtle">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-semibold">
                  Academic Record
                </span>
                <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent-cyan" />
                  <span>B.Tech in CSE</span>
                </h3>
                <p className="text-xs text-text-muted">
                  NIET, Greater Noida
                </p>
              </div>

              {/* Verified CGPA Metric */}
              <div className="text-right p-3 rounded-lg bg-surface/90 border border-border-subtle/80 shadow-soft-sm">
                <div className="text-2xl font-extrabold text-white tracking-tight font-mono">
                  8.55
                </div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-accent-emerald font-medium">
                  CGPA
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border-subtle/60 space-y-2 text-xs text-text-secondary leading-relaxed">
              <p>
                Coursework emphasizing Data Structures, Object-Oriented Programming, Database Systems, Computer Networks, and Full-Stack Engineering.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-text-muted">
                <span className="px-2 py-0.5 rounded bg-background border border-border-subtle">
                  12th CBSE: 80%
                </span>
                <span className="px-2 py-0.5 rounded bg-background border border-border-subtle">
                  10th CBSE: 75%
                </span>
                <span className="text-text-dim">J.V. Public School</span>
              </div>
            </div>
          </Card>

          {/* Practical Project Card */}
          <Card className="p-5 space-y-3 bg-surface/50 border-border-subtle">
            <div className="flex items-center gap-2 text-text-primary">
              <Code2 className="w-4 h-4 text-brand-light" />
              <h4 className="text-sm font-semibold">Practical Project Experience</h4>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Applied engineering principles to practical applications, including <span className="text-text-primary font-medium">RozgaarX</span> (full-stack hiring platform with Spring Boot & React) and database-driven software.
            </p>
            <div className="flex items-center gap-3 pt-1 text-[11px] font-mono text-text-muted">
              <span className="inline-flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-brand-light" /> Continuous Learning
              </span>
              <span className="inline-flex items-center gap-1">
                <Layers className="w-3 h-3 text-accent-cyan" /> Systems Thinking
              </span>
            </div>
          </Card>

        </motion.div>

      </div>
    </SectionContainer>
  );
};
