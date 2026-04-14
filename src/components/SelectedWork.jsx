import useReveal from "../hooks/useReveal";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`solid-card hover-target fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="mono-small" style={{ marginBottom: '15px' }}>
        0{index + 1}
      </div>
      <h3 className="heading-md" style={{ fontSize: '2rem', marginBottom: '15px' }}>{project.title}</h3>
      <p className="mono-small" style={{ marginBottom: '30px', opacity: 0.7, textTransform: 'none' }}>{project.description}</p>
      
      <a href={project.link} target="_blank" rel="noreferrer" className="btn-invert hover-target" style={{
        display: 'inline-block',
        padding: '10px 24px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '0.8rem',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease'
      }}>
        View Project
      </a>
    </div>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="section">
      <div className="container" style={{ maxWidth: '100%' }}>
        <h2 className="heading-md">Selected <span className="serif-italic" style={{ textTransform: 'lowercase' }}>Work</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <a 
            href="https://github.com/pavxxx" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-invert hover-target" 
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              border: '1px solid var(--black)'
            }}
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
