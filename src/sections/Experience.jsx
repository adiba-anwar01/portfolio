import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import { experience } from '../data/experience';
import { fadeInUp } from '../utils/motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-secondary">
      <div className="section-container relative z-10">
        <SectionTitle
          title="Experience"
        />

        <div className="flex flex-col gap-8">
          {experience.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1} variants={fadeInUp}>
              <motion.div
                className="w-full card-base p-4 md:p-5 group hover:-translate-y-3 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:border-[rgba(249,115,22,0.6)]"
              >
                {}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  {}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-bg-secondary border border-border flex items-center justify-center">
                      <Terminal size={16} className="text-accent-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary">
                        {item.position} — <span className="text-accent-primary">{item.company}</span>
                      </h3>
                    </div>
                  </div>

                  
                  <div className="sm:text-right flex-shrink-0 ml-12 sm:ml-0">
                    <span className="text-sm md:text-base font-medium text-text-muted">{item.duration}</span>
                  </div>
                </div>

                {}
                <div className="h-px bg-border mb-3 group-hover:bg-accent-primary/20 transition-colors duration-300" />

                {}
                <ul className="flex flex-col gap-1.5 mb-3">
                  {item.contributions.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      <span className="text-text-secondary text-base md:text-[17px] leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
