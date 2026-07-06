import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Code2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectShowcase from '../components/ui/ProjectShowcase';
import { featuredProjects } from '../data/projects';
import { viewportOnce } from '../utils/motion';


function TechChip({ name }) {
  return (
    <span className="px-3.5 py-1 rounded-full border border-orange-500/10 bg-orange-500/[0.04] text-orange-400/90 text-xs font-semibold cursor-default">
      {name}
    </span>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-bg-primary overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Featured Projects"
        />

        <div className="flex flex-col gap-32 lg:gap-40">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={project.id}
                className={`flex flex-col lg:flex-row ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                } items-center justify-between gap-12 lg:gap-16 w-full`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {}
                <motion.div
                  className="flex-1 flex flex-col gap-3 w-full"
                  variants={{
                    hidden: { opacity: 0, x: isReversed ? 40 : -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: 'easeOut' },
                    },
                  }}
                >
                  {}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary leading-tight mb-2">
                    {project.name}
                  </h3>

                  
                  <div className="w-full p-5 md:p-6 bg-bg-card border border-white/5 rounded-2xl shadow-2xl shadow-black/45 hover:shadow-orange-500/10 hover:border-accent-primary/20 transition-all duration-300">
                    
                    <p className="text-text-secondary text-base md:text-[17px] leading-relaxed w-full">
                      {project.description}
                    </p>

                    
                    {project.features && (
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mt-5 pt-5 border-t border-white/[0.04]">
                        {project.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-accent-primary flex-shrink-0" />
                            <span className="text-text-secondary text-sm md:text-base">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((t) => (
                        <TechChip key={t} name={t} />
                      ))}
                    </div>
                  </div>

                  
                  <div className="flex items-center gap-3.5 mt-5 text-sm font-semibold text-text-secondary pl-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-accent-primary transition-colors duration-200"
                      aria-label={`${project.name} source code`}
                    >
                      <span>GitHub</span>
                      <Code2 size={15} />
                    </a>
                    
                    <span className="text-border/60 select-none">|</span>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-accent-primary transition-colors duration-200"
                      aria-label={`${project.name} live demo`}
                    >
                      <span>Live</span>
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </motion.div>

                
                <motion.div
                  className="w-full lg:w-[350px] flex-shrink-0"
                  variants={{
                    hidden: { opacity: 0, x: isReversed ? -40 : 40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 },
                    },
                  }}
                >
                  <ProjectShowcase
                    screenshot={project.screenshot}
                    name={project.name}
                    isReversed={isReversed}
                    tech={project.tech}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
