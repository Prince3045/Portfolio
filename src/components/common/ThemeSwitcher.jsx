import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeSwitcher = ({ className = '', isMobile = false }) => {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const activeTheme = themes.find((t) => t.id === currentTheme) || themes[0];

  if (isMobile) {
    return (
      <div className={`p-4 border-t border-border-subtle/80 bg-surface/70 space-y-3 ${className}`}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-medium text-text-muted flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-light" />
            ACCENT THEME
          </span>
          <span className="text-xs font-mono text-brand-light font-semibold">
            {activeTheme.name}
          </span>
        </div>

        {/* 4 Theme Options Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {themes.map((theme) => {
            const isSelected = theme.id === currentTheme;
            return (
              <button
                key={theme.id}
                onClick={() => setTheme(theme.id)}
                className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-brand/20 border-brand-light text-white shadow-soft-sm font-semibold'
                    : 'bg-background/80 border-border-subtle text-text-secondary hover:border-border-muted hover:text-white'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full flex-shrink-0 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${theme.color}, ${theme.accent})`,
                  }}
                />
                <div className="truncate">
                  <div className="text-xs font-medium leading-tight truncate">{theme.shortName}</div>
                  <div className="text-[10px] text-text-dim truncate">{theme.tag}</div>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 ml-auto text-brand-light flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      {/* Dropdown Palette Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={`Theme: ${activeTheme.name} (Click to switch colors)`}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-surface/80 border border-border-subtle hover:border-border-muted hover:bg-surface text-text-secondary hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light group"
      >
        <div className="relative flex items-center justify-center">
          <Palette className="w-4 h-4 transition-transform group-hover:rotate-12 text-text-secondary group-hover:text-white" />
          <span
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full border border-surface shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${activeTheme.color}, ${activeTheme.accent})`,
            }}
          />
        </div>
        <span className="hidden xl:inline-block text-xs font-mono font-medium">
          {activeTheme.shortName}
        </span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-72 rounded-xl bg-surface-elevated/95 border border-border-muted shadow-[0_16px_40px_-10px_rgba(0,0,0,0.85)] backdrop-blur-xl p-2 z-50 overflow-hidden text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-border-subtle/80 mb-1">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-brand-light" />
                Color Theme
              </span>
              <span className="text-[10px] font-mono text-text-dim">4 Themes</span>
            </div>

            {/* Theme Options */}
            <div className="space-y-1">
              {themes.map((theme) => {
                const isSelected = theme.id === currentTheme;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left transition-all duration-150 group ${
                      isSelected
                        ? 'bg-brand/20 text-white font-semibold'
                        : 'hover:bg-white/5 text-text-secondary hover:text-white'
                    }`}
                  >
                    {/* Gradient Preview Dot */}
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm ring-1 ring-white/20 group-hover:scale-110 transition-transform"
                      style={{
                        background: `linear-gradient(135deg, ${theme.color}, ${theme.accent})`,
                      }}
                    />

                    {/* Information */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold leading-tight truncate text-white">
                          {theme.name}
                        </span>
                        <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-surface border border-border-subtle text-text-dim">
                          {theme.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-text-muted truncate mt-0.5">
                        {theme.description}
                      </p>
                    </div>

                    {/* Active Checkmark */}
                    {isSelected && (
                      <motion.div
                        layoutId="themeSelectedCheck"
                        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                      >
                        <Check className="w-4 h-4 text-brand-light flex-shrink-0" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
