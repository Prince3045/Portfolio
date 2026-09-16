import { cn } from '../../utils/cn';

export const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1.5 rounded-sm',
    md: 'text-sm px-4 py-2 rounded-md',
    lg: 'text-base px-5 py-2.5 rounded-lg',
  };

  return (
    <button
      className={cn('btn-base font-medium transition-all duration-200', variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
