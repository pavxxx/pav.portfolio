import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'var(--bg-color)',
      borderBottom: 'var(--border-thick)',
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '80px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between'
      }}>
        {/* Logo block */}
        <a href="#" style={{ 
          textDecoration: 'none', 
          color: 'var(--text-main)',
          background: 'var(--coral)',
          padding: '8px 16px',
          border: 'var(--border-thick)',
          boxShadow: '4px 4px 0px var(--black)',
          transform: 'rotate(-2deg)'
        }}>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase' }}>Pavithra</h1>
        </a>

        {/* Desktop Menu */}
        <ul style={{ 
          display: 'flex', 
          gap: '32px', 
          listStyle: 'none', 
          alignItems: 'center'
        }} className="hidden-mobile">
          <li>
            <a href="#about" className="nav-link">About</a>
          </li>
          <li>
            <a href="#skills" className="nav-link">Toolbox</a>
          </li>
          <li>
            <a href="#experience" className="nav-link">Journey</a>
          </li>
          <li>
            <a href="#work" className="nav-link">Creations</a>
          </li>
          <li>
            <a href="#contact" className="neo-btn sunshine" style={{ padding: '8px 20px', fontSize: '1rem' }}>Let's Talk</a>
          </li>
        </ul>
      </div>

      <style>{`
        .nav-link {
          text-decoration: none;
          color: var(--text-main);
          font-weight: 800;
          font-size: 1.1rem;
          text-transform: uppercase;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 4px;
          bottom: -4px;
          left: 0;
          background-color: var(--black);
          transition: width 0.2s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
