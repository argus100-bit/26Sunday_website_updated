import { cn } from '@/lib/utils';

/**
 * @param {{ children: React.ReactNode, size?: 'wide'|'narrow', className?: string, as?: string }} props
 */
export default function SectionContainer({ children, size = 'wide', className, as: Tag = 'section', ...rest }) {
  const containerClass = size === 'narrow' ? 'container-narrow' : 'container-wide';
  return (
    <Tag className={cn('section-pad', className)} {...rest}>
      <div className={containerClass}>
        {children}
      </div>
    </Tag>
  );
}
