import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import FeaturedProjects from './sections/FeaturedProjects';
import MoreProjects from './sections/MoreProjects';
import Education from './sections/Education';
import Contact from './sections/Contact';
export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <MoreProjects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
