import { cn } from '../../utils/cn';

export const Card = ({
  interactive = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        interactive ? 'card-interactive' : 'card-base',
        'p-5 transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
