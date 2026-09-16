import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Cpu,
  Database,
  Server,
  Layout,
  Globe,
  GitBranch,
  Terminal,
  Send,
  Coffee,
  Wrench,
} from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import { Card } from '../common/Card';
import { GithubIcon } from '../common/GithubIcon';
import { skillsData } from '../../data/skills';

// Map technology to an appropriate Lucide or SVG icon
const getSkillIcon = (name) => {
  const iconProps = { className: 'w-5 h-5 text-brand-light' };

  switch (name) {
    case 'Java':
      return <Coffee {...iconProps} className="w-5 h-5 text-accent-amber" />;
    case 'Python':
      return <Terminal {...iconProps} className="w-5 h-5 text-accent-cyan" />;
    case 'SQL':
      return <Database {...iconProps} className="w-5 h-5 text-accent-cyan" />;
    case 'JavaScript':
      return <Code2 {...iconProps} className="w-5 h-5 text-accent-amber" />;
    case 'HTML':
      return <Globe {...iconProps} className="w-5 h-5 text-accent-amber" />;
    case 'CSS':
      return <Layout {...iconProps} className="w-5 h-5 text-accent-cyan" />;
    case 'React':
      return <Cpu {...iconProps} className="w-5 h-5 text-accent-cyan" />;
    case 'Tailwind CSS':
      return <Layout {...iconProps} className="w-5 h-5 text-accent-cyan" />;
    case 'Spring Boot':
      return <Server {...iconProps} className="w-5 h-5 text-accent-emerald" />;
    case 'MySQL':
      return <Database {...iconProps} className="w-5 h-5 text-accent-blue" />;
    case 'MongoDB':
      return <Database {...iconProps} className="w-5 h-5 text-accent-emerald" />;
    case 'SQLite':
      return <Database {...iconProps} className="w-5 h-5 text-accent-cyan" />;
    case 'Git':
      return <GitBranch {...iconProps} className="w-5 h-5 text-accent-amber" />;
    case 'GitHub':
      return <GithubIcon className="w-5 h-5 text-text-primary" />;
    case 'Postman':
      return <Send {...iconProps} className="w-5 h-5 text-accent-amber" />;
    case 'VS Code':
      return <Code2 {...iconProps} className="w-5 h-5 text-accent-blue" />;
    case 'Data Structures & Algorithms':
      return <Cpu {...iconProps} className="w-5 h-5 text-accent-cyan" />;
    case 'OOP (Java)':
      return <Coffee {...iconProps} className="w-5 h-5 text-accent-amber" />;
    case 'DBMS':
      return <Database {...iconProps} className="w-5 h-5 text-accent-emerald" />;
    case 'Operating Systems':
      return <Terminal {...iconProps} className="w-5 h-5 text-brand-light" />;
    case 'Computer Networks':
      return <Globe {...iconProps} className="w-5 h-5 text-accent-cyan" />;
    default:
      return <Wrench {...iconProps} />;
  }
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Languages', 'Backend', 'Databases', 'Tools', 'Core CS'];

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <SectionContainer
      id="skills"
      title="Technical Skills"
      subtitle="Programming languages, development frameworks, databases, and engineering tools."
    >
      {/* Category Tab Filter */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8" role="tablist" aria-label="Skill Categories">
        {categories.map((category) => {
          const count =
            category === 'All'
              ? skillsData.length
              : skillsData.filter((s) => s.category === category).length;

          const isSelected = activeCategory === category;

          return (
            <button
              key={category}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-mono transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-brand text-white shadow-soft-sm font-semibold'
                  : 'bg-surface/80 text-text-secondary hover:text-text-primary hover:bg-surface border border-border-subtle'
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-background text-text-dim'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={`${skill.category}-${skill.name}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                interactive
                className="p-3.5 sm:p-4 flex flex-col justify-between h-full bg-surface/80 hover:bg-surface border border-border-subtle hover:border-border-muted group transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <div className="p-2 rounded-lg bg-background/80 border border-border-subtle/80 group-hover:border-border-muted transition-colors">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-dim px-1.5 py-0.5 rounded bg-background/50 border border-border-subtle/50">
                    {skill.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionContainer>
  );
};
