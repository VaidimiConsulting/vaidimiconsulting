import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export function Button({ children, to, href, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300';

  const variants: Record<string, string> = {
    primary: 'bg-cta-bg text-cta-text hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-soft',
    outline:
      'border border-border-strong text-text-primary hover:border-primary hover:text-primary hover:-translate-y-0.5',
    ghost: 'text-text-primary hover:text-accent',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
