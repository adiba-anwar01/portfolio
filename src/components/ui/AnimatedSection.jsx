import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../../utils/motion';

export default function AnimatedSection({ children, className = '', delay = 0, variants }) {
  const v = variants || fadeInUp;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={
        delay
          ? {
              ...v,
              visible: {
                ...v.visible,
                transition: { ...v.visible?.transition, delay },
              },
            }
          : v
      }
    >
      {children}
    </motion.div>
  );
}
