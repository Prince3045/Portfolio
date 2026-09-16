import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Sparkles, Database } from 'lucide-react';

export const HeroTechVisual = () => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Parallax Tilt Handler
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Rotation calculations for 3D depth
  const rotateX = isHovered ? -mousePos.y * 18 : 0;
  const rotateY = isHovered ? mousePos.x * 18 : 0;

  return (
    <div 
      className="relative w-full max-w-lg mx-auto py-6 sm:py-8 select-none"
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Ambient Background Glow (Multi-Layer Depth) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-brand/35 via-accent-cyan/25 to-accent-emerald/15 blur-[100px] opacity-75 animate-pulse"
      />

      {/* 2. Floating Parallax Badge: React & Frontend (Breaks out of the boundary, Top-Right) */}
      <motion.div
        animate={{
          y: isHovered ? mousePos.y * -25 - 10 : [0, -8, 0],
          x: isHovered ? mousePos.x * 25 : 0,
        }}
        transition={{
          y: isHovered ? { duration: 0.15 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 0.15 },
        }}
        className="absolute -top-3 -right-2 sm:-right-4 z-30 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0e1220]/90 border border-accent-cyan/40 shadow-[0_8px_25px_rgba(6,182,212,0.25)] backdrop-blur-xl"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.9)]" />
        <div className="font-mono text-left">
          <div className="text-xs font-bold text-white flex items-center gap-1.5">
            <span>React &amp; JavaScript</span>
          </div>
          <div className="text-[10px] text-accent-cyan">Frontend Focus</div>
        </div>
      </motion.div>

      {/* 3. Floating Parallax Badge: Java & Spring Boot (Breaks out, Bottom-Left) */}
      <motion.div
        animate={{
          y: isHovered ? mousePos.y * 25 + 10 : [0, 8, 0],
          x: isHovered ? mousePos.x * -25 : 0,
        }}
        transition={{
          y: isHovered ? { duration: 0.15 } : { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          x: { duration: 0.15 },
        }}
        className="absolute -bottom-4 -left-2 sm:-left-4 z-30 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0e1220]/90 border border-brand/40 shadow-[0_8px_25px_rgba(99,102,241,0.25)] backdrop-blur-xl"
      >
        <span className="p-1 rounded bg-brand/20 text-brand-light">
          <Database className="w-3.5 h-3.5" />
        </span>
        <div className="font-mono text-left">
          <div className="text-xs font-bold text-white">Java &amp; Spring Boot</div>
          <div className="text-[10px] text-brand-light">REST APIs • MySQL</div>
        </div>
      </motion.div>

      {/* 4. Floating Parallax Badge: 8.55 CGPA • NIET (Breaks out, Top-Left) */}
      <motion.div
        animate={{
          y: isHovered ? mousePos.y * -15 : [0, -5, 0],
          x: isHovered ? mousePos.x * -15 : 0,
        }}
        transition={{
          y: isHovered ? { duration: 0.15 } : { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          x: { duration: 0.15 },
        }}
        className="hidden sm:flex absolute -top-4 -left-3 z-30 items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c101d]/90 border border-border-subtle shadow-md backdrop-blur-md font-mono text-[11px]"
      >
        <span className="text-accent-emerald font-bold">8.55</span>
        <span className="text-text-muted">CGPA</span>
        <span className="text-text-dim">•</span>
        <span className="text-text-secondary">NIET Greater Noida</span>
      </motion.div>

      {/* 5. Main 3D Tilted Glass Terminal Board */}
      <motion.div
        ref={cardRef}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative z-20 rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#111422]/95 via-[#0c0e18]/95 to-[#080a12]/95 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
      >
        {/* Dynamic Sheen / Light Reflection on Hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
          style={{
            transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
          }}
        />

        {/* Window Chrome Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#090c16]/90">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a2c] border border-white/10 text-xs font-mono text-white shadow-inner">
            <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
            <span>developer.profile.jsx</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/20 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
            <span>ACTIVE</span>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed flex gap-3 sm:gap-4 bg-[#080b14]/90">
          {/* Line Numbers Gutter */}
          <div className="select-none text-text-dim/50 text-right pr-3 border-r border-white/5 space-y-1 text-xs">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
          </div>

          {/* Syntax Highlighted Code */}
          <div className="space-y-1 text-text-secondary flex-1 overflow-x-auto">
            <div>
              <span className="text-brand-light font-semibold">interface</span>{' '}
              <span className="text-accent-cyan font-semibold">SoftwareEngineer</span> &#123;
            </div>
            
            <div className="pl-3">
              <span className="text-text-muted">name:</span>{' '}
              <span className="text-accent-emerald font-medium">&quot;Prince Goyal&quot;</span>;
            </div>

            <div className="pl-3">
              <span className="text-text-muted">specialization:</span>{' '}
              <span className="text-accent-emerald font-medium">&quot;Frontend &amp; Full-Stack&quot;</span>;
            </div>

            <div className="pl-3">
              <span className="text-text-muted">education:</span>{' '}
              <span className="text-text-primary">&quot;B.Tech CSE @ NIET (8.55 CGPA)&quot;</span>;
            </div>

            <div className="pl-3">
              <span className="text-text-muted">frontend:</span> [
              <span className="text-accent-cyan font-medium">&quot;React&quot;</span>,{' '}
              <span className="text-accent-cyan font-medium">&quot;JavaScript&quot;</span>,{' '}
              <span className="text-accent-cyan font-medium">&quot;Tailwind&quot;</span>];
            </div>

            <div className="pl-3">
              <span className="text-text-muted">backend:</span> [
              <span className="text-accent-amber font-medium">&quot;Java&quot;</span>,{' '}
              <span className="text-accent-amber font-medium">&quot;Spring Boot&quot;</span>];
            </div>

            <div className="pl-3">
              <span className="text-text-muted">database:</span> [
              <span className="text-accent-blue font-medium">&quot;MySQL&quot;</span>];
            </div>

            <div className="pl-3">
              <span className="text-text-muted">featuredApp:</span>{' '}
              <span className="text-brand-light font-semibold">&quot;RozgaarX&quot;</span>;
            </div>

            <div className="pl-3 flex items-center">
              <span className="text-text-muted">openToWork:</span>{' '}
              <span className="text-accent-emerald font-bold ml-1.5">true</span>;
              <span className="inline-block w-1.5 h-4 bg-accent-emerald ml-1.5 animate-pulse" />
            </div>

            <div>&#125;</div>
            
            <div className="pt-1 text-[11px] text-text-dim flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-brand-light" />
              <span>// Clean Architecture • Responsive UI • RESTful APIs</span>
            </div>
          </div>
        </div>

        {/* Terminal Status Bar */}
        <div className="px-4 py-2.5 bg-[#090c16] border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-emerald shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
            <span className="text-text-secondary text-[11px]">Production Ready • 0 Warnings</span>
          </div>

          <a
            href="#projects"
            className="text-brand-light hover:text-white text-[11px] inline-flex items-center gap-1 transition-colors group"
          >
            <span>View RozgaarX</span>
            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
