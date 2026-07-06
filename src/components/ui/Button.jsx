import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-xl transition-all duration-300 active:scale-[0.97] cursor-pointer select-none hover:-translate-y-[2px]';

  const variants = {
    primary:
      'px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-900 text-white hover:from-orange-500 hover:to-orange-800 shadow-sm hover:shadow-lg',
    ghost:
      'px-6 py-3 border border-accent-primary text-text-secondary hover:text-white hover:shadow-lg',
    icon:
      'p-2.5 border border-border text-text-muted hover:border-accent-primary hover:text-accent-primary rounded-xl',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cls}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={cls}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
