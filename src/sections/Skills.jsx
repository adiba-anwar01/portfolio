import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import { skillCategories } from '../data/skills';
import { staggerContainer, viewportOnce } from '../utils/motion';
import { getSkillData } from '../utils/skillIcons';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg-primary">
      <div className="section-container">
        <SectionTitle
          title="Technical Expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection
              key={category.id}
              delay={catIndex * 0.05}
              className="h-full w-full"
            >
              <div
                className="flex flex-col h-full p-6 rounded-2xl border transition-all duration-300 hover:border-accent-primary/40 bg-bg-card hover:shadow-accent-glow hover:-translate-y-1 border-border"
              >
                {}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl" role="img" aria-label={category.label}>
                    {category.icon}
                  </span>
                  <h3 className="font-semibold text-lg text-gradient">
                    {category.label}
                  </h3>
                </div>

                
                <motion.div
                  className={`grid ${category.id === 'cs-core' ? 'grid-cols-1' : 'grid-cols-2'} gap-y-3.5 gap-x-4 w-full`}
                  variants={staggerContainer(0.04, 0.04)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {category.skills.map((skill) => {
                    const skillData = getSkillData(skill);
                    return (
                      <motion.div 
                        key={skill}
                        className="flex items-center"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 }
                        }}
                      >
                        <div className="group flex items-center gap-2 text-text-secondary transition-all duration-300 hover:text-white hover:-translate-y-[0.5px] cursor-default">
                          <span 
                            className="flex items-center text-sm md:text-base"
                            style={{ color: skillData.color }}
                          >
                            {skillData.icon}
                          </span>
                          <span className="text-xs md:text-sm font-medium leading-none">{skill}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
