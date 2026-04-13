import useReveal from "../hooks/useReveal";

function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', paddingTop: '160px' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div ref={ref} className={`fade-up ${visible ? "is-visible" : ""}`}>
          <div className="mono-small" style={{ marginBottom: '20px' }}>Version 1.0 / 2026</div>
          <h1 className="heading-lg">
            I am Pavithra.<br/>
            I build <span className="serif-italic" style={{ textTransform: 'lowercase' }}>digital experiences.</span>
          </h1>
          <p className="text-light mono-small" style={{ marginBottom: '40px', maxWidth: '400px' }}>
            Passionate Frontend Developer & UI Architect focused on creating 
            beautiful, high-performance web applications.
          </p>
          <a href="#work" className="btn-primary hover-target">
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
