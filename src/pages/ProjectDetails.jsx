import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Card } from '../components/common/Card';
import { RozgaarXCaseStudy } from '../components/casestudy/RozgaarXCaseStudy';

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  // Scroll to top when route mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <Card className="py-16 space-y-4 max-w-md mx-auto bg-surface/80 border-border-subtle">
          <h1 className="text-xl font-bold text-white">Project Not Found</h1>
          <p className="text-sm text-text-secondary">
            The project &quot;{projectId}&quot; does not exist in the verified dataset.
          </p>
          <Link to="/" className="btn-base btn-primary inline-flex items-center gap-2 text-xs">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
      {/* Back to Portfolio Link */}
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Portfolio</span>
      </Link>

      {/* Render Dedicated RozgaarX Engineering Case Study */}
      {projectId === 'rozgaarx' ? (
        <RozgaarXCaseStudy project={project} />
      ) : (
        <div className="space-y-6">
          <div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-surface border border-border-subtle text-brand-light">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-text-secondary mt-2">
              {project.description}
            </p>
          </div>
          <Card className="p-6 space-y-3 bg-surface/80 border-border-subtle">
            <h2 className="text-sm font-semibold font-mono text-brand-light uppercase tracking-wider">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge-tech">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      )}
    </main>
  );
};

export default ProjectDetails;
