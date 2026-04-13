function Experience() {
  const experiences = [
    { title: "FRONTEND DEVELOPER TRAINEE", org: "TECH CORP", time: "25-PR" },
    { title: "ENGINEERING INTERN", org: "STARTUP CO", time: "2024" },
    { title: "FREELANCE DESIGNER", org: "SELF EMPLOYED", time: "2023" }
  ];

  return (
    <section id="experience" style={{ marginTop: '20px' }}>
      <p className="sub-title red-text" style={{ marginBottom: '24px' }}>JOURNEY</p>
      
      <ul className="track-list">
        {experiences.map((exp, i) => (
          <li key={i}>
            <div className="track-item" style={{ cursor: 'default', borderTop: i === 0 ? '1px solid #eee' : 'none' }}>
              <span className="track-num" style={{ color: '#aaa' }}>E{i + 1}</span>
              
              <div className="track-info" style={{ marginLeft: '68px' }}>
                <p className="track-title">{exp.title}</p>
                <p className="track-desc">{exp.org}</p>
              </div>
              
              <span className="track-meta">{exp.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
