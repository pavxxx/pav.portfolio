function Experience() {
  const journeys = [
    {
      role: "Frontend Developer Trainee",
      org: "Tech Corp",
      time: "2025 - Present",
      desc: "Built scalable UI components and improved performance by 30% using React and Vite."
    },
    {
      role: "Engineering Intern",
      org: "Startup Co.",
      time: "2024",
      desc: "Worked closely with designers to implement pixel-perfect user interfaces and manage API integrations."
    }
  ];

  return (
    <section id="experience" className="container" style={{ padding: '100px 24px' }}>
      <div style={{ marginBottom: '60px' }}>
        <h2 className="section-title">My Journey</h2>
      </div>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '40px',
        position: 'relative'
      }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: 0,
          bottom: 0,
          width: '6px',
          background: 'var(--black)',
          zIndex: 0
        }}></div>

        {journeys.map((item, i) => (
          <div key={i} className="neo-box hoverable" style={{ 
            padding: '32px', 
            marginLeft: '60px',
            position: 'relative' 
          }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-52px',
              top: '32px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'var(--coral)',
              border: 'var(--border-thick)',
              zIndex: 1
            }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900 }}>{item.role}</h3>
              <span className="sticker mint" style={{ fontSize: '0.85rem' }}>{item.time}</span>
            </div>
            
            <p style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--coral)', marginBottom: '12px' }}>
              @ {item.org}
            </p>

            <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
