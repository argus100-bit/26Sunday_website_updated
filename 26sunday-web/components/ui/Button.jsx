import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * @param {{ href?: string, onClick?: Function, variant?: 'primary'|'secondary'|'ghost'|'outline', size?: 'sm'|'md'|'lg', children: React.ReactNode, className?: string, external?: boolean, showArrow?: boolean }} props
 */
export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
  external = false,
  showArrow = false,
  style,
  ...rest
}) {
  const base = 'group inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap';

  const variants = {
    primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] focus-visible:outline-[var(--color-accent)] shadow-sm hover:shadow-md',
    accent: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] focus-visible:outline-[var(--color-accent)] shadow-sm hover:shadow-md',
    secondary: 'bg-[var(--color-primary)] text-white hover:bg-[#0d2b52] focus-visible:outline-[var(--color-primary)] shadow-sm',
    ghost: 'text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] focus-visible:outline-[var(--color-accent)]',
    outline: 'border border-[var(--color-neutral-200)] text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline-[var(--color-accent)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const arrowSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  const classes = cn(base, variants[variant], sizes[size], className);
  const computedStyle = (variant === 'primary' || variant === 'accent' || variant === 'secondary') ? { color: '#FFFFFF', ...style } : style;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight 
          size={arrowSizes[size] || 16} 
          className="transition-transform duration-200 ease-out group-hover:translate-x-1 flex-shrink-0" 
          aria-hidden="true" 
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={computedStyle}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} style={computedStyle} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
