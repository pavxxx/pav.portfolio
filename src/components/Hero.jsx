function Hero() {
  return (
    <div id="about" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '80px' }}>
      <section className="container" style={{ 
        flex: 1,
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
        paddingTop: '60px',
        paddingBottom: '60px'
      }}>
        <div style={{ maxWidth: '900px', textAlign: 'center', position: 'relative' }}>
          
          {/* Floating Sticker Effect */}
          <div className="sticker pink" style={{ position: 'absolute', top: '-30px', left: '10%', transform: 'rotate(-10deg)' }}>
            Frontend Enthu
          </div>
          <div className="sticker cyan" style={{ position: 'absolute', bottom: '20px', right: '5%', transform: 'rotate(15deg)' }}>
            UI/UX
          </div>

          <h1 style={{
            fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: "32px",
            textTransform: "uppercase",
            letterSpacing: "-2px"
          }}>
            Crafting Digital <span style={{ color: "var(--coral)", WebkitTextStroke: "2px var(--black)", textShadow: "4px 4px 0px var(--black)" }}>Experiences</span>
          </h1>

          <p style={{
            fontSize: '1.4rem',
            fontWeight: 600,
            marginBottom: '48px',
            maxWidth: '700px',
            margin: '0 auto 48px auto'
          }}>
            I'm Pavithra. A creative engineer building bold, accessible, and dynamic interfaces that don't just work—they make an impact.
          </p>

          <div style={{ display: "flex", gap: "24px", flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#work" className="neo-btn mint">
              See My Work
            </a>
            <a href="https://linkedin.com/in/pavithravg" target="_blank" rel="noreferrer" className="neo-btn lavender">
              Say Hello
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span className="marquee-item">Web Development</span>
          <span className="marquee-item">UI/UX Design</span>
          <span className="marquee-item">Creative Coding</span>
          <span className="marquee-item">ReactJS</span>
          <span className="marquee-item">Web Development</span>
          <span className="marquee-item">UI/UX Design</span>
          <span className="marquee-item">Creative Coding</span>
          <span className="marquee-item">ReactJS</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
