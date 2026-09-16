import { motion } from 'framer-motion';
import {
  ExternalLink,
  ShieldCheck,
  Layers,
  Database,
  Server,
  Layout,
  CheckCircle2,
  Users,
  Activity,
  Lock,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  Workflow,
  Sparkles,
  KeyRound,
  FileCheck2,
} from 'lucide-react';
import { Card } from '../common/Card';
import { GithubIcon } from '../common/GithubIcon';

export const RozgaarXCaseStudy = ({ project }) => {
  const verifiedTech = [
    'React',
    'JavaScript (JSX)',
    'Vite',
    'Tailwind CSS',
    'Axios',
    'Java',
    'Spring Boot',
    'Spring Security',
    'Spring Data JPA',
    'MySQL',
    'JWT',
    'WebSocket',
    'SockJS / STOMP',
  ];

  const featuresList = [
    {
      title: 'User Authentication',
      description: 'Secure registration and login workflows issuing stateless JWT tokens for identity validation.',
      icon: <Lock className="w-5 h-5 text-accent-cyan" />,
    },
    {
      title: 'Role-Based Access',
      description: 'Granular role segmentation ensuring appropriate permissions for customers and service providers.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-light" />,
    },
    {
      title: 'Worker Management',
      description: 'Structured administration of service provider profiles, availability, and specialty categories.',
      icon: <Users className="w-5 h-5 text-accent-emerald" />,
    },
    {
      title: 'Job Booking',
      description: 'Intuitive service request submission allowing users to choose categories and specify task details.',
      icon: <FileCheck2 className="w-5 h-5 text-accent-amber" />,
    },
    {
      title: 'Job Allocation',
      description: 'Order assignment workflow matching incoming service requests with eligible workers.',
      icon: <Workflow className="w-5 h-5 text-brand-light" />,
    },
    {
      title: 'Job Tracking',
      description: 'Lifecycle monitoring providing visibility from booking creation to completion.',
      icon: <Activity className="w-5 h-5 text-accent-cyan" />,
    },
    {
      title: 'Responsive Interface',
      description: 'Adaptive front-end layout designed for smooth usability across mobile phones, tablets, and desktops.',
      icon: <Layout className="w-5 h-5 text-accent-emerald" />,
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'User Access',
      subtitle: 'Visitor registers or logs in as a user or service provider.',
    },
    {
      step: '02',
      title: 'Authentication',
      subtitle: 'Credentials validated; signed JWT token issued for session access.',
    },
    {
      step: '03',
      title: 'Select Service',
      subtitle: 'User explores available service categories and inputs task requirements.',
    },
    {
      step: '04',
      title: 'Job Booking',
      subtitle: 'Service request created and queued in the relational database.',
    },
    {
      step: '05',
      title: 'Job Allocation',
      subtitle: 'Eligible worker allocated to the active service request.',
    },
    {
      step: '06',
      title: 'Job Tracking',
      subtitle: 'Both parties monitor active status through completion.',
    },
  ];

  const challengesList = [
    {
      title: 'Connecting Frontend and Backend',
      description:
        'One of the development considerations was configuring seamless asynchronous API communication between the React Single Page Application and the Spring Boot server, ensuring consistent error handling and standard JSON response structures.',
    },
    {
      title: 'Managing Authentication State',
      description:
        'One of the development considerations was maintaining stateless JWT sessions on the client side, securely persisting tokens, and refreshing views automatically upon session expiry or unauthorized status codes.',
    },
    {
      title: 'Handling Role-Based Functionality',
      description:
        'One of the development considerations was ensuring proper route protection and conditional UI rendering so that workers and general users only access appropriate operational views.',
    },
    {
      title: 'Database Integration',
      description:
        'One of the development considerations was modeling normalized relational entities in MySQL to accurately record user accounts, service classifications, and booking assignments.',
    },
    {
      title: 'Building Responsive Interfaces',
      description:
        'One of the development considerations was styling fluid, mobile-first layouts with Tailwind CSS so that workers and clients on varying screen sizes experience consistent usability.',
    },
  ];

  const learningsList = [
    'Full-stack application architecture and separation of concerns',
    'Component-driven UI development with React and utility-first styling',
    'REST-style backend development and controller design with Spring Boot',
    'Relational database integration and data persistence using MySQL',
    'Stateless authentication and role authorization lifecycle with JWT',
    'API-based client-server communication and structured data contracts',
    'Mobile-first responsive interface design across screen viewports',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-16"
    >
      
      {/* 1. CASE STUDY HERO */}
      <section aria-labelledby="casestudy-hero-title" className="space-y-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-brand/15 border border-brand/30 text-brand-light flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            Engineering Case Study
          </span>
          <span className="text-xs font-mono text-text-muted">
            Full-Stack Service Marketplace
          </span>
        </div>

        <div className="space-y-2">
          <h1
            id="casestudy-hero-title"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-brand-light font-mono">
            {project.tagline || 'Full-Stack Service Marketplace Platform'}
          </p>
        </div>

        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
          A full-stack platform designed to connect users with workers/service providers while supporting authentication, job booking, allocation and tracking.
        </p>

        {/* Technology Badges */}
        <div className="space-y-2 pt-1">
          <h2 className="text-xs font-mono uppercase tracking-wider text-text-muted">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {verifiedTech.map((tech) => (
              <span key={tech} className="badge-tech text-xs sm:text-sm py-1 px-3">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <a
            href={project.liveUrl || 'https://rozgaarxp.vercel.app/'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary inline-flex items-center gap-2 text-sm font-semibold shadow-soft-md"
            aria-label="Visit RozgaarX Live Production Demo"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>

          <a
            href={project.githubUrl || 'https://github.com/Prince3045/RozgaarX'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-secondary inline-flex items-center gap-2 text-sm font-semibold"
            aria-label="View RozgaarX GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section aria-labelledby="overview-title" className="space-y-4">
        <h2 id="overview-title" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <span>Project Overview</span>
        </h2>
        <Card className="p-6 sm:p-7 space-y-4 bg-surface/80 border-border-subtle">
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            <strong className="text-white">RozgaarX</strong> is a full-stack web application developed to facilitate service discovery, booking, and task tracking between clients and local service workers. The platform provides a structured digital workflow to handle authentication, role verification, job dispatching, and status monitoring.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-background/60 border border-border-subtle/80 space-y-1.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-light font-semibold">
                Target Platform Users
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                <strong className="text-text-primary">Clients</strong> seeking reliable local services, and <strong className="text-text-primary">Service Providers/Workers</strong> looking for accessible, structured task opportunities.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/60 border border-border-subtle/80 space-y-1.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-semibold">
                Core Value Proposition
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Eliminating chaotic coordination through transparent service listings, automated allocation workflows, and synchronized lifecycle tracking.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* 3. PROBLEM & 4. SOLUTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Problem */}
        <section aria-labelledby="problem-title" className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-accent-amber" />
            <h2 id="problem-title" className="text-xl font-bold text-white tracking-tight">
              The Problem
            </h2>
          </div>
          <Card className="p-6 h-full space-y-3 bg-surface/80 border-border-subtle">
            <p className="text-sm text-text-secondary leading-relaxed">
              Users frequently encounter friction in discovering and engaging reliable local workers, while service providers often lack a structured mechanism to receive, manage, and schedule incoming task requests.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Without a centralized application, communication remains disjointed, job statuses are opaque, and tracking request milestones is cumbersome.
            </p>
          </Card>
        </section>

        {/* Solution */}
        <section aria-labelledby="solution-title" className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent-emerald" />
            <h2 id="solution-title" className="text-xl font-bold text-white tracking-tight">
              The Solution
            </h2>
          </div>
          <Card className="p-6 h-full space-y-3 bg-surface/80 border-border-subtle">
            <p className="text-sm text-text-secondary leading-relaxed">
              RozgaarX addresses this by providing a unified, role-based platform that coordinates the end-to-end service lifecycle through secure JWT authentication, worker availability management, job booking, allocation, and tracking.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Both users and workers access clear, role-specific views to manage their requests with real-time status visibility.
            </p>
          </Card>
        </section>

      </div>

      {/* 5. SYSTEM ARCHITECTURE (Responsive HTML/CSS/SVG) */}
      <section aria-labelledby="architecture-title" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 id="architecture-title" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent-cyan" />
              <span>System Architecture</span>
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Three-tier client-server architecture with stateless JWT security and relational persistence.
            </p>
          </div>
        </div>

        <Card className="p-6 sm:p-8 bg-surface/90 border-border-subtle overflow-hidden">
          {/* Visual Architecture Flowchart */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-3 py-4">
            
            {/* 1. Client Tier */}
            <div className="w-full lg:w-1/4 p-4 rounded-lg bg-background border border-border-subtle space-y-2 text-center shadow-soft-sm">
              <div className="inline-flex p-2 rounded-md bg-accent-cyan/10 text-accent-cyan">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Client Tier</h3>
              <p className="text-xs font-mono text-brand-light">React SPA</p>
              <p className="text-[11px] text-text-muted">
                JavaScript • Tailwind CSS
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center justify-center text-text-muted">
              <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0 text-brand-light" />
              <span className="text-[10px] font-mono text-text-dim mt-0.5">HTTPS / JSON</span>
            </div>

            {/* 2. Security Gateway */}
            <div className="w-full lg:w-1/4 p-4 rounded-lg bg-background border border-brand/40 space-y-2 text-center shadow-soft-sm relative">
              <div className="inline-flex p-2 rounded-md bg-brand/15 text-brand-light">
                <KeyRound className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Security Layer</h3>
              <p className="text-xs font-mono text-accent-emerald">JWT Authentication</p>
              <p className="text-[11px] text-text-muted">
                Role-Based Authorization
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center justify-center text-text-muted">
              <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0 text-brand-light" />
              <span className="text-[10px] font-mono text-text-dim mt-0.5">REST API</span>
            </div>

            {/* 3. Application Tier */}
            <div className="w-full lg:w-1/4 p-4 rounded-lg bg-background border border-border-subtle space-y-2 text-center shadow-soft-sm">
              <div className="inline-flex p-2 rounded-md bg-accent-emerald/10 text-accent-emerald">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Application Tier</h3>
              <p className="text-xs font-mono text-accent-emerald">Spring Boot</p>
              <p className="text-[11px] text-text-muted">
                REST API & Business Logic
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center justify-center text-text-muted">
              <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0 text-accent-cyan" />
              <span className="text-[10px] font-mono text-text-dim mt-0.5">JDBC / JPA</span>
            </div>

            {/* 4. Database Tier */}
            <div className="w-full lg:w-1/4 p-4 rounded-lg bg-background border border-border-subtle space-y-2 text-center shadow-soft-sm">
              <div className="inline-flex p-2 rounded-md bg-accent-blue/10 text-accent-blue">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Persistence Tier</h3>
              <p className="text-xs font-mono text-accent-blue">MySQL Database</p>
              <p className="text-[11px] text-text-muted">
                Relational Data Storage
              </p>
            </div>

          </div>

          <div className="mt-4 pt-4 border-t border-border-subtle/60 text-xs text-text-muted text-center font-mono">
            Clean 3-Tier Web Architecture • Strictly Verified Project Implementation
          </div>
        </Card>
      </section>

      {/* 6. TECHNICAL DEEP DIVES: Frontend, Backend, Database, Security */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Frontend */}
        <section aria-labelledby="frontend-title" className="space-y-3">
          <h2 id="frontend-title" className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Layout className="w-4 h-4 text-accent-cyan" />
            <span>Frontend Engineering</span>
          </h2>
          <Card className="p-6 space-y-3 h-full bg-surface/80 border-border-subtle">
            <div className="flex flex-wrap gap-1.5 pb-1">
              <span className="badge-tech text-[11px]">React</span>
              <span className="badge-tech text-[11px]">JavaScript (JSX)</span>
              <span className="badge-tech text-[11px]">Tailwind CSS</span>
              <span className="badge-tech text-[11px]">Axios</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              The user interface is constructed using a component-driven Single Page Application architecture in React and modern JavaScript (JSX). Tailwind CSS provides responsive utility styling ensuring clear visual hierarchy, while Axios handles asynchronous REST API communication.
            </p>
            <ul className="space-y-1 text-xs text-text-muted list-disc list-inside">
              <li>Component-based UI with reusable layouts</li>
              <li>Responsive presentation across mobile and desktop</li>
              <li>Role-based dynamic interfaces for clients and workers</li>
            </ul>
          </Card>
        </section>

        {/* Backend */}
        <section aria-labelledby="backend-title" className="space-y-3">
          <h2 id="backend-title" className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Server className="w-4 h-4 text-accent-emerald" />
            <span>Backend Engineering</span>
          </h2>
          <Card className="p-6 space-y-3 h-full bg-surface/80 border-border-subtle">
            <div className="flex flex-wrap gap-1.5 pb-1">
              <span className="badge-tech text-[11px]">Spring Boot</span>
              <span className="badge-tech text-[11px]">Java</span>
              <span className="badge-tech text-[11px]">Spring Security</span>
              <span className="badge-tech text-[11px]">Spring Data JPA</span>
              <span className="badge-tech text-[11px]">WebSocket (STOMP)</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              The backend layer is engineered in Java with Spring Boot, structured to handle HTTP requests, coordinate business rules for job requests, and execute role-based access checks via Spring Security with real-time SockJS/STOMP messaging.
            </p>
            <ul className="space-y-1 text-xs text-text-muted list-disc list-inside">
              <li>REST-style controller and service architecture</li>
              <li>Encapsulated business logic for service allocation</li>
              <li>Synchronized transaction management</li>
            </ul>
          </Card>
        </section>

        {/* Database */}
        <section aria-labelledby="database-title" className="space-y-3">
          <h2 id="database-title" className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Database className="w-4 h-4 text-accent-blue" />
            <span>Database & Persistence</span>
          </h2>
          <Card className="p-6 space-y-3 h-full bg-surface/80 border-border-subtle">
            <div className="flex flex-wrap gap-1.5 pb-1">
              <span className="badge-tech text-[11px]">MySQL</span>
              <span className="badge-tech text-[11px]">Relational Persistence</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Application data is persisted in a normalized MySQL relational database. The schema stores user credentials, role identities, worker service categories, and time-stamped booking orders.
            </p>
            <ul className="space-y-1 text-xs text-text-muted list-disc list-inside">
              <li>Relational persistence for accounts, roles, and bookings</li>
              <li>Data integrity across worker allocation records</li>
              <li>Efficient relational queries for dashboard retrieval</li>
            </ul>
          </Card>
        </section>

        {/* Authentication & Security */}
        <section aria-labelledby="auth-title" className="space-y-3">
          <h2 id="auth-title" className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Lock className="w-4 h-4 text-accent-amber" />
            <span>Authentication & Security</span>
          </h2>
          <Card className="p-6 space-y-3 h-full bg-surface/80 border-border-subtle">
            <div className="flex flex-wrap gap-1.5 pb-1">
              <span className="badge-tech text-[11px]">JWT (JSON Web Tokens)</span>
              <span className="badge-tech text-[11px]">Stateless Security</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Security is enforced via JSON Web Tokens (JWT). Upon successful authentication, the server returns a cryptographically signed token containing user identifiers and assigned roles, passed in subsequent requests to protect sensitive endpoints.
            </p>
            <ul className="space-y-1 text-xs text-text-muted list-disc list-inside">
              <li>Stateless token-based session verification</li>
              <li>Role authorization preventing unauthorized actions</li>
              <li>Secure client-side token handling without exposed credentials</li>
            </ul>
          </Card>
        </section>

      </div>

      {/* 7. KEY FEATURES GRID */}
      <section aria-labelledby="features-title" className="space-y-4">
        <h2 id="features-title" className="text-2xl font-bold text-white tracking-tight">
          Key Capabilities & Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuresList.map((feat) => (
            <Card
              key={feat.title}
              className="p-5 space-y-2.5 bg-surface/80 border-border-subtle hover:border-border-muted transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-md bg-background border border-border-subtle">
                  {feat.icon}
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {feat.title}
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {feat.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 8. PROJECT WORKFLOW DIAGRAM */}
      <section aria-labelledby="workflow-title" className="space-y-4">
        <div className="space-y-1">
          <h2 id="workflow-title" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Workflow className="w-5 h-5 text-brand-light" />
            <span>End-to-End Application Workflow</span>
          </h2>
          <p className="text-sm text-text-secondary">
            Step-by-step lifecycle from visitor onboarding to task resolution.
          </p>
        </div>

        <Card className="p-6 sm:p-8 bg-surface/90 border-border-subtle">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflowSteps.map((item, idx) => (
              <div
                key={item.step}
                className="p-4 rounded-lg bg-background/80 border border-border-subtle relative space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-brand-light">
                    {item.step}
                  </span>
                  {idx < workflowSteps.length - 1 && (
                    <span className="hidden lg:inline-block text-[10px] font-mono text-text-dim">
                      Next →
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* 9. DEVELOPMENT CHALLENGES */}
      <section aria-labelledby="challenges-title" className="space-y-4">
        <div className="space-y-1">
          <h2 id="challenges-title" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-accent-amber" />
            <span>Development Challenges & Considerations</span>
          </h2>
          <p className="text-sm text-text-secondary">
            Realistic technical considerations addressed during system engineering.
          </p>
        </div>

        <div className="space-y-3">
          {challengesList.map((ch) => (
            <Card key={ch.title} className="p-5 space-y-1.5 bg-surface/80 border-border-subtle">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-amber" />
                <span>{ch.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {ch.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 10. LEARNINGS & ENGINEERING TAKEAWAYS */}
      <section aria-labelledby="learnings-title" className="space-y-4">
        <h2 id="learnings-title" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-accent-amber" />
          <span>Key Learnings & Takeaways</span>
        </h2>
        <Card className="p-6 sm:p-7 bg-surface/80 border-border-subtle space-y-4">
          <p className="text-sm text-text-secondary leading-relaxed">
            Developing RozgaarX provided comprehensive practical experience across full-stack architecture, reinforced core competencies in Spring Boot and React, and highlighted the importance of clean API boundaries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {learningsList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* 11. PROJECT LINKS FOOTER */}
      <section aria-labelledby="links-title" className="p-8 rounded-xl bg-surface/90 border border-brand/30 shadow-card-glow text-center space-y-5">
        <div className="space-y-1">
          <h2 id="links-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Explore RozgaarX
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto">
            Test the live production deployment or review the source code on GitHub.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={project.liveUrl || 'https://rozgaarxp.vercel.app/'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary inline-flex items-center gap-2 text-sm font-semibold shadow-soft-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open Live Production Demo</span>
          </a>

          <a
            href={project.githubUrl || 'https://github.com/Prince3045/RozgaarX'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-secondary inline-flex items-center gap-2 text-sm font-semibold"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Browse GitHub Code</span>
          </a>
        </div>
      </section>

    </motion.div>
  );
};
