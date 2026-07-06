import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import { fadeInUp } from '../utils/motion';


export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary relative overflow-hidden">
      {}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-accent-secondary opacity-[0.01] blur-[120px] rounded-full -translate-x-[30%] -translate-y-[30%]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          title="About Me"
        />

        <AnimatedSection variants={fadeInUp} className="w-full mt-8 md:mt-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 md:p-8 bg-bg-card/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl overflow-hidden group transition-all duration-500 hover:border-accent-primary/30 hover:shadow-accent-glow">
              {}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent-primary/10 rounded-full blur-[60px] -z-10 group-hover:bg-accent-primary/20 transition-colors duration-700" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent-secondary/10 rounded-full blur-[60px] -z-10 group-hover:bg-accent-secondary/20 transition-colors duration-700" />

              <div className="relative z-10 flex flex-col gap-3">
                <div className="space-y-4 text-text-secondary leading-relaxed text-sm md:text-base text-justify md:text-left font-sans">
                  <p>
                    I'm a final-year Computer Science student with a strong interest in <span className="text-white font-medium">Software Engineering</span> and <span className="text-white font-medium">Full Stack Web Development</span>. I enjoy building software that solves real-world problems, but what truly fascinates me is everything beyond writing code — the architecture behind scalable systems, the engineering decisions that shape reliable products, and the process of transforming an idea into software people genuinely trust.
                  </p>
                  <p>
                    I'm curious about what bridges the gap between a great idea and exceptional software. That curiosity drives me to build scalable full-stack web applications with modular architectures, robust backend systems, secure APIs, and intuitive user experiences. Through internships and real-world projects, I've gained hands-on experience designing maintainable solutions, optimizing application performance, and developing software that balances scalability, reliability, and long-term maintainability.
                  </p>
                  <p>
                    I'm driven by the belief that software is shaped by better engineering decisions, continuous improvement, and never losing sight of the people it's built for. To me, <span className="text-white font-medium">software engineering</span> is about creating scalable, maintainable, and reliable systems where every design decision, every feature, and every line of code has a purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
