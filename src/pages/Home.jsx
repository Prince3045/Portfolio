import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { CodingSection } from '../components/sections/CodingSection';
import { AchievementsSection } from '../components/sections/AchievementsSection';
import { ContactSection } from '../components/sections/ContactSection';

export const Home = () => {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CodingSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
};
