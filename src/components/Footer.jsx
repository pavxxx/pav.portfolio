import useReveal from "../hooks/useReveal";

function Footer() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="section" style={{ minHeight: '50vh', backgroundColor: 'var(--black)', color: 'var(--beige)', borderTop: 'none', borderBottom: 'none' }}>
      <div className="container" ref={ref}>
        <div className={`fade-up ${visible ? "is-visible" : ""}`} style={{ textAlign: 'center' }}>
          <h2 className="heading-md" style={{ marginBottom: '20px' }}>Let's Build <span className="serif-italic" style={{ textTransform: 'lowercase' }}>Together</span></h2>
          <p className="mono-small hover-target" style={{ margin: '0 auto 40px', maxWidth: '500px', opacity: 0.8, textTransform: 'none' }}>
            I'm currently available for freelance work and new opportunities.
            If you have a project that needs some creative magic, I'd love to hear about it.
          </p>
          <a href="mailto:Pavithra020906@gmail.com" className="hover-target" style={{
            display: 'inline-block',
            padding: '16px 40px',
            background: 'var(--beige)',
            color: 'var(--black)',
            textDecoration: 'none',
            fontFamily: '"JetBrains Mono", monospace',
            fontWeight: 800,
            fontSize: '1.1rem',
            textTransform: 'uppercase',
            transition: 'opacity 0.3s ease',
            border: '1px solid var(--beige)'
          }}
            onMouseOver={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--beige)'; }}
            onMouseOut={(e) => { e.target.style.background = 'var(--beige)'; e.target.style.color = 'var(--black)'; }}
          >
            Let's Connect
          </a>

          <div className="mono-small" style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(233,229,220,0.2)', opacity: 0.6 }}>
            &copy; 2026 Pavithra. Crafted with passion.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
