function Footer() {
  return (
    <footer id="contact" style={{ 
      background: 'var(--coral)', 
      borderTop: 'var(--border-thick)',
      marginTop: '100px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Decorative large shapes */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: 'var(--sunshine)',
        borderRadius: '50%',
        border: 'var(--border-thick)',
        boxShadow: 'var(--shadow-main)'
      }}></div>

      <div className="container" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ 
            fontSize: 'clamp(4rem, 10vw, 7rem)', 
            fontWeight: 900, 
            lineHeight: 0.9,
            marginBottom: '40px',
            textTransform: 'uppercase'
          }}>
            Let's <br /> Collaborate
          </h2>
          
          <p style={{ 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            marginBottom: '48px',
            maxWidth: '600px'
          }}>
            Have a crazy idea? Available for freelance work or full-time roles. Let's build something epic together.
          </p>

          <div style={{ marginBottom: '80px' }}>
            <a href="mailto:pavithra@example.com" className="neo-btn lavender" style={{ 
              fontSize: '1.5rem', 
              padding: '24px 48px',
              borderRadius: '50px'
            }}>
              Shoot me an email!
            </a>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap',
          gap: '24px',
          borderTop: 'var(--border-thick)',
          paddingTop: '32px',
          marginTop: '40px'
        }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase' }}>Pavithra</h3>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ fontWeight: 800, color: 'var(--black)', textDecoration: 'none', textTransform: 'uppercase' }}>Twitter</a>
            <a href="#" style={{ fontWeight: 800, color: 'var(--black)', textDecoration: 'none', textTransform: 'uppercase' }}>GitHub</a>
            <a href="#" style={{ fontWeight: 800, color: 'var(--black)', textDecoration: 'none', textTransform: 'uppercase' }}>LinkedIn</a>
          </div>

          <p style={{ fontWeight: 800 }}>
            © 2026 Build with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
