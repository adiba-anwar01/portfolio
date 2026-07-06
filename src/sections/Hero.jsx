import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import HolographicWorkspace from '../components/hero/HolographicWorkspace';

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 lg:pt-16 lg:pb-0 flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.02)_0%,transparent_65%)] -translate-x-[25%] -translate-y-[25%]" />
      </div>

      <div className="section-container w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-4"
          >
            <span className="text-white text-lg md:text-xl font-medium tracking-wide">
              Hi,&nbsp;&nbsp;I'm
            </span>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="mb-6"
          >
            <h1 
              className="font-display font-extrabold leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5rem] tracking-tight text-white animated-name"
              data-text="ADIBA ANWAR"
            >
              ADIBA ANWAR
            </h1>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="mb-6 max-w-lg"
          >
            <span className="text-lg md:text-xl font-medium text-text-secondary tracking-wide block">
              Building software that scales, performs, and creates real world impact.
            </span>
          </motion.div>

          
          <motion.p
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-lg mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' }}
          >
            Computer Science undergraduate driven by Software Engineering and Full Stack Development. I enjoy turning complex ideas into scalable, reliable software—where every design decision and every line of code has a purpose.
          </motion.p>

          {}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
          >
            <Button
              onClick={() => handleScroll('projects')}
              variant="primary"
              className="px-8 py-3 w-full sm:w-auto"
            >
              Explore My Work
              <ArrowRight size={18} />
            </Button>
            <Button
              onClick={() => handleScroll('contact')}
              variant="ghost"
              className="px-8 py-3 w-full sm:w-auto"
            >
              Let's Connect
              <Mail size={18} />
            </Button>
          </motion.div>
        </div>

        
        <motion.div 
          className="lg:col-span-5 w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <HolographicWorkspace />
        </motion.div>

      </div>

      {}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
        <span className="text-[10px] tracking-[0.2em] font-mono text-text-muted uppercase">Scroll</span>
        <div className="w-5 h-10 border border-text-muted/30 rounded-full flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-accent-primary rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
