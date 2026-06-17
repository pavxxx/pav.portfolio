import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="solid-card hover-target"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '280px',
        border: '1px solid var(--black)',
        pointerEvents: 'auto',
        position: 'relative',
      }}
    >
      {/* Corner brackets */}
      <div className="corner-tl" style={{ transition: 'border-color 0.4s ease', borderColor: hovered ? 'var(--beige)' : 'var(--black)' }} />
      <div className="corner-br" style={{ transition: 'border-color 0.4s ease', borderColor: hovered ? 'var(--beige)' : 'var(--black)' }} />

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          {/* Animated index number */}
          <span
            className="mono-small"
            style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: hovered ? 'var(--beige)' : 'var(--accent)',
              transition: 'color 0.4s ease',
              letterSpacing: '0.05em',
            }}
          >
            0{index + 1}
          </span>
          <span className="mono-small" style={{
            opacity: hovered ? 0.8 : 0.6,
            fontSize: '0.7rem',
            border: `1px solid ${hovered ? 'var(--beige)' : 'var(--black)'}`,
            padding: '2px 8px',
            transition: 'all 0.4s ease',
          }}>
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
    </div>
  );
}

function SelectedWork() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const x = useMotionValue(0);

  // Update drag constraints when the viewport or projects list changes
  useEffect(() => {
    const updateConstraints = () => {
      if (outerRef.current && innerRef.current) {
        const outerWidth = outerRef.current.offsetWidth;
        const innerWidth = innerRef.current.scrollWidth;
        const maxDrag = innerWidth - outerWidth;
        setDragConstraints({
          left: maxDrag > 0 ? -maxDrag : 0,
          right: 0
        });
      }
    };

    const timer = setTimeout(updateConstraints, 50);
    window.addEventListener("resize", updateConstraints);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateConstraints);
    };
  }, [projects]);

  // Dynamic progress track: map translation of the progress handle
  // Track width is 160px, handle width is 40px. Max translation is 120px.
  const handleX = useTransform(
    x,
    [0, dragConstraints.left || -1],
    [0, 120]
  );

  return (
    <section id="work" className="section">
      <div className="container" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-accent-bar" />
            <h2 className="heading-md" style={{ margin: 0 }}>
              Selected <span className="serif-italic" style={{ textTransform: 'lowercase' }}>Work</span>
            </h2>
          </div>
          <span className="mono-small" style={{ opacity: 0.5, alignSelf: 'flex-end', paddingBottom: '8px' }}>
            {projects.length} PROJECTS &mdash; DRAG TO EXPLORE
          </span>
        </div>

        {/* Draggable Carousel Showcase */}
        <div 
          ref={outerRef} 
          className="carousel-container"
          style={{ 
            width: '100%', 
            overflow: 'visible', 
            cursor: 'grab'
          }}
        >
          <motion.div
            ref={innerRef}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            style={{
              display: 'flex',
              gap: '24px',
              x,
              width: 'max-content',
              touchAction: 'pan-y'
            }}
          >
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: 'clamp(290px, 35vw, 380px)',
                    flexShrink: 0,
                    userSelect: 'none'
                  }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Carousel Slider Progress Track */}
        {dragConstraints.left < 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', gap: '10px' }}>
            <span className="mono-small" style={{ fontSize: '0.7rem', opacity: 0.6, letterSpacing: '0.15em' }}>DRAG TO VIEW</span>
            <div style={{
              width: '160px',
              height: '3px',
              background: 'rgba(18, 18, 18, 0.1)',
              position: 'relative',
              borderRadius: '2px'
            }}>
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '40px',
                  background: 'var(--black)',
                  x: handleX,
                  borderRadius: '2px'
                }}
              />
            </div>
          </div>
        )}
        
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

      <style>{`
        .carousel-container:active {
          cursor: grabbing;
        }
      `}</style>
    </section>
  );
}

export default SelectedWork;
