import { motion } from 'framer-motion';
import { Code2, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { moreProjects } from '../data/projects';
import { staggerContainer, viewportOnce } from '../utils/motion';

export default function MoreProjects() {
  return (
    <section className="py-16 bg-bg-secondary">
      <div className="section-container">
        <SectionTitle
          title="Additional Projects"
        />

        <motion.div
          className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
          variants={staggerContainer(0.07, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {moreProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex flex-row items-stretch rounded-2xl overflow-hidden
                         bg-bg-card border border-border w-full sm:w-[calc(50%-12px)] md:w-[220px]
                         hover:border-accent-primary hover:shadow-accent-glow
                         transition-colors duration-200 group text-left"
            >
              {}
              <div
                className="w-1 flex-shrink-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(249,115,22,0.8), rgba(251,146,60,0.5))',
                }}
              />
              {}
              <div className="flex flex-col justify-center p-3 pl-3.5 w-full">
                <span className="text-base font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200 truncate w-full">
                  {project.name}
                </span>
                <div className="flex items-center gap-1.5 text-sm text-text-muted group-hover:text-accent-primary transition-colors duration-200 mt-1">
                  <Code2 size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} className="ml-0.5 opacity-70" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
