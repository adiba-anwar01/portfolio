import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import { personal } from '../data/personal';
import { staggerContainer, viewportOnce } from '../utils/motion';

const socials = [
  {
    label: 'Email',
    href: `mailto:${personal.email}`,
    icon: FiMail,
  },
  {
    label: 'GitHub',
    href: personal.github,
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: personal.linkedin,
    icon: FiLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center z-10 relative">
        <SectionTitle
          title="Let's Connect"
          align="center"
        />

        <p className="text-text-secondary max-w-3xl mb-6 -mt-4 text-base leading-relaxed">
          I'm open to new opportunities,
          <br />
          meaningful collaborations, and conversations around software engineering
          <br />
          and innovative products. Whether you have an idea, a project, or simply want to connect, I'd love to hear from you.
        </p>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mt-4"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-5 relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
              }}
            >
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />
              
              <motion.div
                className="relative z-10 flex items-center justify-center text-text-secondary group-hover:text-accent-primary transition-colors duration-300"
                whileHover={{ scale: 1.25, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} strokeWidth={1.5} />
              </motion.div>
              
              <span className="text-sm font-medium text-text-muted group-hover:text-text-primary transition-colors duration-300">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
