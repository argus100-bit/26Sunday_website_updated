import { ShieldCheck, FileQuestion, Activity, ClipboardCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
  'trust-center': ShieldCheck,
  'questionnaire': FileQuestion,
  'status-page': Activity,
  'readiness': ClipboardCheck,
  'readiness-assessment': ClipboardCheck,
  'shield': ShieldCheck,
};

/**
 * @param {{ label: string, variant?: 'accent'|'navy'|'darkNavy'|'neutral'|'success'|'warning', className?: string, icon?: string | React.ComponentType }} props
 */
export default function Badge({ label, variant = 'navy', className, icon }) {
  let Icon = ShieldCheck;
  if (typeof icon === 'string' && iconMap[icon]) {
    Icon = iconMap[icon];
  } else if (icon) {
    Icon = icon;
  }

  const variants = {
    accent: 'bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/30',
    navy: 'bg-[#0B1F3A]/10 text-[#0B1F3A] border border-[#0B1F3A]/25 hover:bg-[#0B1F3A]/15',
    darkNavy: 'bg-[#0B1F3A] text-white border border-white/20 shadow-md',
    neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)] border border-[var(--color-neutral-200)]',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
  };

  const iconColors = {
    accent: 'text-[var(--color-accent)]',
    navy: 'text-[#0B1F3A]',
    darkNavy: 'text-[#FF5757]',
    neutral: 'text-[var(--color-neutral-600)]',
    success: 'text-emerald-600',
    warning: 'text-amber-600',
  };

  return (
    <span className={cn(
      'relative overflow-hidden inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-extrabold tracking-wider uppercase transition-colors duration-300 select-none shadow-xs group',
      variants[variant] || variants.navy,
      className
    )}>
      {/* Light-Sheen Sweep Animation Beam */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
      
      {/* Dynamic Solution Verification Icon */}
      <Icon size={14} className={cn("flex-shrink-0", iconColors[variant] || 'text-[#0B1F3A]')} />
      
      <span>{label}</span>
    </span>
  );
}
