import useReveal from "../hooks/useReveal";

function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', paddingTop: '160px' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div ref={ref} className={`fade-up ${visible ? "is-visible" : ""}`} style={{ width: '100%' }}>
          <div className="mono-small" style={{ marginBottom: '20px', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--black)' }}>
            BY PAVITHRA &mdash; PORTFOLIO 2026
          </div>
          <h1 className="heading-lg" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '40px' }}>
            UI / UX<br />
            <span className="serif-italic" style={{ color: 'var(--black)', textTransform: 'lowercase' }}>&amp; frontend</span><br />
            DEVELOPMENT.
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', borderTop: '2px solid var(--black)', borderBottom: '2px solid var(--black)', padding: '20px 0', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginBottom: '40px' }}>
            <div className="mono-small" style={{ textAlign: 'left' }}>
              PAVITHRA &copy; 2026<br />
              AVAILABLE FOR HIRE
            </div>

            <div className="serif-italic" style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', textAlign: 'center', maxWidth: '400px', lineHeight: 1.2 }}>
              Building aesthetic, robust, and scalable web experiences.
            </div>

            <a href="#work" className="btn-invert hover-target" style={{ padding: '12px 24px', textDecoration: 'none', display: 'inline-block', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', transition: 'all 0.3s ease' }}>
              View Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
