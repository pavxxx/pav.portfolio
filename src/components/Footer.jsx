function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--black)', color: 'var(--beige)', padding: '60px 5% 40px', borderTop: '1px solid rgba(233,229,220,0.1)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
        <div className="mono-small" style={{ fontSize: '0.8rem' }}>
          PAVITHRA &copy; 2026 &bull; ALL RIGHTS RESERVED
        </div>
        <div className="serif-italic" style={{ fontSize: '1.2rem', color: 'var(--beige)' }}>
          built with passion <span style={{ textTransform: 'lowercase' }}></span>
        </div>
        <div className="mono-small">
          <a href="#home" className="hover-target" style={{ color: 'var(--beige)', textDecoration: 'none' }}>TOP &uarr;</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

