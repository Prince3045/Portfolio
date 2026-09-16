import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Code2,
  Terminal,
  Star,
  GitFork,
  FolderGit2,
  CheckCircle2,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import { Card } from '../common/Card';
import { GithubIcon } from '../common/GithubIcon';
import { profilesData } from '../../data/profiles';

export const CodingSection = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  // Client-side fetch for Prince3045's verified public repositories
  useEffect(() => {
    let isMounted = true;

    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${profilesData.github.username}/repos?sort=updated&per_page=6`
        );

        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }

        const data = await response.json();
        if (isMounted) {
          // Sort by stargazers/forks or take verified repos
          setRepos(Array.isArray(data) ? data.slice(0, 4) : []);
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          // Graceful fallback without breaking the UI
          setFetchError(true);
          setLoading(false);
        }
      }
    };

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <SectionContainer
      id="coding"
      title="Coding & Problem Solving"
      subtitle="Showcase coding practice, problem-solving activity and developer profiles."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* 1. GITHUB CARD (7 Cols on Desktop) */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 h-full"
        >
          <Card className="p-6 sm:p-7 flex flex-col justify-between h-full bg-surface/85 border-border-subtle hover:border-border-muted transition-all duration-200">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-border-subtle/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-background border border-border-subtle text-white">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {profilesData.github.name}
                      </h3>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand/10 text-brand-light border border-brand/20">
                        @{profilesData.github.username}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {profilesData.github.description}
                    </p>
                  </div>
                </div>

                <a
                  href={profilesData.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-secondary inline-flex items-center gap-1.5 self-start sm:self-center text-xs font-semibold"
                  aria-label="View Prince Goyal GitHub Profile in a new tab"
                >
                  <span>{profilesData.github.cta}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-accent-cyan" />
                </a>
              </div>

              {/* Public Repositories Showcase */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-brand-light" />
                    <span>Public Repositories</span>
                  </h4>
                  <span className="text-[11px] font-mono text-text-dim">
                    Verified GitHub API
                  </span>
                </div>

                {loading ? (
                  /* Loading Skeletons */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-busy="true">
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className="p-3.5 rounded-lg bg-background/50 border border-border-subtle/60 animate-pulse space-y-2"
                      >
                        <div className="h-4 bg-surface rounded w-3/4" />
                        <div className="h-3 bg-surface rounded w-1/2" />
                      </div>
                    ))}
                  </div>
                ) : fetchError || repos.length === 0 ? (
                  /* Graceful API Fallback */
                  <div className="p-4 rounded-lg bg-background/60 border border-border-subtle text-center space-y-2">
                    <p className="text-xs text-text-secondary">
                      Explore full project repositories, commits, and source code directly on GitHub.
                    </p>
                    <a
                      href={profilesData.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-brand-light hover:underline inline-flex items-center gap-1"
                    >
                      <span>github.com/{profilesData.github.username}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ) : (
                  /* Real Public Repositories */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {repos.map((repo) => (
                      <a
                        key={repo.name}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-lg bg-background/70 border border-border-subtle hover:border-border-muted hover:bg-surface/80 transition-all duration-200 group flex flex-col justify-between space-y-2"
                        aria-label={`Open repository ${repo.name} on GitHub`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-semibold text-white group-hover:text-brand-light transition-colors truncate font-mono">
                              {repo.name}
                            </span>
                            <ExternalLink className="w-3 h-3 text-text-dim group-hover:text-text-primary shrink-0 transition-colors" />
                          </div>
                          {repo.description && (
                            <p className="text-[11px] text-text-secondary line-clamp-2 mt-1 leading-snug">
                              {repo.description}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-mono text-text-muted pt-1 border-t border-border-subtle/40">
                          <span className="text-accent-cyan">
                            {repo.language || 'Code'}
                          </span>
                          <div className="flex items-center gap-2">
                            {repo.stargazers_count > 0 && (
                              <span className="flex items-center gap-0.5">
                                <Star className="w-2.5 h-2.5 text-accent-amber" />
                                {repo.stargazers_count}
                              </span>
                            )}
                            {repo.forks_count > 0 && (
                              <span className="flex items-center gap-0.5">
                                <GitFork className="w-2.5 h-2.5 text-text-dim" />
                                {repo.forks_count}
                              </span>
                            )}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Card Footer */}
            <div className="pt-4 mt-6 border-t border-border-subtle/60 flex items-center justify-between text-xs font-mono text-text-dim">
              <span>Open Source & Version Control</span>
              <span className="text-accent-emerald flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                Active Repositories
              </span>
            </div>
          </Card>
        </motion.article>

        {/* 2. LEETCODE CARD (5 Cols on Desktop) */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 h-full"
        >
          <Card className="p-6 sm:p-7 flex flex-col justify-between h-full bg-surface/85 border-border-subtle hover:border-border-muted transition-all duration-200">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-border-subtle/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-background border border-border-subtle text-accent-amber">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {profilesData.leetcode.name}
                    </h3>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {profilesData.leetcode.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent-amber/10 text-accent-amber border border-accent-amber/20 shrink-0">
                  DSA Practice
                </span>
              </div>

              {/* Focus Areas & Topics */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-accent-amber" />
                  <span>Problem Solving Focus Areas</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {profilesData.leetcode.topics.map((topic) => (
                    <div
                      key={topic}
                      className="p-2.5 rounded-md bg-background/70 border border-border-subtle text-xs text-text-secondary flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Practice Overview */}
              <div className="p-4 rounded-lg bg-background/60 border border-border-subtle space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Terminal className="w-4 h-4 text-brand-light" />
                  <span>Algorithmic Development</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Focus on fundamental data structures, optimal time-space complexity trade-offs, and competitive programming problem patterns in Java and Python.
                </p>
              </div>

            </div>

            {/* Card Footer: Verified LeetCode Profile and Problem Count */}
            <div className="pt-4 mt-6 border-t border-border-subtle/60 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5 text-accent-amber font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>150+ Problems Solved</span>
              </div>
              <a
                href={profilesData.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-secondary text-xs inline-flex items-center gap-1.5 py-1 px-3 group"
                aria-label="View Prince Goyal LeetCode Profile"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3 h-3 text-text-dim group-hover:text-accent-amber transition-colors" />
              </a>
            </div>
          </Card>
        </motion.article>

      </div>
    </SectionContainer>
  );
};
