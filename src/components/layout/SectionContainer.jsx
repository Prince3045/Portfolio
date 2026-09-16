import { cn } from '../../utils/cn';

export const SectionContainer = ({
  id,
  title,
  subtitle,
  className = '',
  children,
}) => {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={cn('py-12 sm:py-16 border-b border-border-subtle/50', className)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-8">
            {id && id !== 'hero' && (
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-accent-cyan/90 font-medium">
                  // {id}
                </span>
              </div>
            )}
            {title && (
              <h2
                id={`${id}-heading`}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3"
              >
                <span>{title}</span>
                <span className="hidden sm:block h-px flex-1 bg-gradient-to-r from-border-subtle to-transparent" />
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-text-secondary max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
