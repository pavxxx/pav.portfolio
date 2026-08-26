function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--black)', color: 'var(--beige)', padding: '60px 5% 40px', borderTop: '1px solid rgba(233,229,220,0.1)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
        <div className="mono-small" style={{ fontSize: '0.8rem', opacity: 0.7 }}>
          PAVITHRA &copy; 2026 &bull; ALL RIGHTS RESERVED
        </div>
        <div className="serif-italic" style={{ fontSize: '1.2rem', color: 'var(--beige)', opacity: 0.85 }}>
          built with passion by Pavithra
        </div>
        <div className="mono-small">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="hover-target"
            style={{
              color: 'var(--beige)',
              textDecoration: 'none',
              position: 'relative',
              display: 'inline-block',
              cursor: 'pointer',
            }}
          >
            TOP &uarr;
            <span style={{
              position: 'absolute',
              bottom: '-2px',
              left: 0,
              width: 0,
              height: '1px',
              background: 'var(--beige)',
              display: 'block',
              transition: 'width 0.3s ease'
            }}
              onMouseEnter={e => e.target.style.width = '100%'}
              onMouseLeave={e => e.target.style.width = '0'}
            />
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div style={{ marginTop: '40px', borderTop: '1px solid rgba(233,229,220,0.08)', paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <span className="mono-small" style={{ fontSize: '0.65rem', opacity: 0.35, letterSpacing: '0.2em' }}>
          PAVITHRA &mdash; UI/UX &amp; FULLSTACK DEVELOPER &mdash; 2026
        </span>
      </div>
    </footer>
  );
}

export default Footer;
