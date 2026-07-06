import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { fadeInLeft, fadeInRight, fadeInUp, viewportOnce } from '../utils/motion';
import { education } from '../data/personal';

export default function Education() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="education" className="py-24 bg-bg-secondary relative overflow-hidden">
      {}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-accent-primary opacity-[0.015] blur-[130px] rounded-full translate-x-[20%] translate-y-[20%]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          title="Academic Journey"
        />

        <div className="w-full mt-12 md:mt-16 max-w-5xl mx-auto">
          <div className="relative w-full">
            {}
            <div className="absolute left-[15px] md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2" />

            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'} justify-between items-start w-full mb-12 md:mb-16 last:mb-0`}
                >
                  {}
                  <div className="absolute left-[15px] md:left-1/2 top-[14px] -translate-y-1/2 md:top-[16px] md:-translate-x-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-accent-primary z-10 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />

                  {}
                  <div className={`w-full md:w-[46%] pl-9 md:pl-0 flex flex-col items-start text-left ${isLeft ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    <motion.div
                      variants={isDesktop ? (isLeft ? fadeInLeft : fadeInRight) : fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      className="w-full py-2"
                    >
                      <span className="font-mono text-accent-primary text-xs md:text-sm font-semibold mb-1 block tracking-wide">
                        {item.duration}
                      </span>
                      <h4 className="font-display font-bold text-lg md:text-xl text-text-primary leading-snug mb-1">
                        {item.degree}
                      </h4>
                      <p className="text-text-secondary font-medium text-sm md:text-base mb-2">
                        {item.university}
                      </p>
                      
                      <div className={`flex flex-wrap items-center gap-2 text-sm md:text-base justify-start ${isLeft ? 'md:justify-end md:w-full' : 'md:justify-start'}`}>
                        <span className="text-white font-semibold">{item.cgpa}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
