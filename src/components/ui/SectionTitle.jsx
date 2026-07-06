import AnimatedSection from './AnimatedSection';
import { fadeInUp } from '../../utils/motion';

export default function SectionTitle({ label, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <AnimatedSection className={`flex flex-col gap-2 mb-12 ${alignClass}`} variants={fadeInUp}>
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-primary font-mono">
          <span className="w-6 h-px bg-accent-primary" />
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </AnimatedSection>
  );
}
