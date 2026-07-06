import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../../data/personal';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm text-center sm:text-left leading-relaxed">
          Designed with creativity.<br />
          Crafted and engineered by Adiba Anwar.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-text-muted hover:text-accent-primary transition-colors duration-200"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
