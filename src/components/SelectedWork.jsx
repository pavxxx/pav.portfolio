import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="solid-card hover-target"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '280px',
        border: '1px solid var(--black)'
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <span className="mono-small">0{index + 1}</span>
          <span className="mono-small" style={{ opacity: 0.6, fontSize: '0.7rem', border: '1px solid var(--black)', padding: '2px 8px' }}>
            {project.category}
          </span>
        </div>
        <h3 className="heading-md" style={{ fontSize: '2rem', marginBottom: '15px', textTransform: 'uppercase' }}>
          {project.title}
        </h3>
        <p className="mono-small" style={{ marginBottom: '30px', opacity: 0.7, textTransform: 'none', lineHeight: 1.5 }}>
          {project.description}
        </p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer" 
          className="btn-invert hover-target" 
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease'
          }}
        >
          View Project
        </a>
        <span className="mono-small" style={{ opacity: 0.5 }}>{project.year}</span>
      </div>
    </motion.div>
  );
}

function SelectedWork() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "AI/ML", "Web Dev", "Security", "Systems"];

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="work" className="section">
      <div className="container" style={{ maxWidth: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', mdDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', gap: '20px' }}>
          <h2 className="heading-md" style={{ margin: 0 }}>
            Selected <span className="serif-italic" style={{ textTransform: 'lowercase' }}>Work</span>
          </h2>
          
          {/* Filters Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className="hover-target"
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  padding: '8px 16px',
                  background: selectedFilter === f ? 'var(--black)' : 'transparent',
                  color: selectedFilter === f ? 'var(--beige)' : 'var(--black)',
                  border: '1px solid var(--black)',
                  transition: 'background 0.3s, color 0.3s'
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <motion.div 
          layout 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            borderTop: 'none',
            borderLeft: 'none'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
        
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
