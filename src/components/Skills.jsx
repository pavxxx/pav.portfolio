const skills = [
  { name: "React", deg: "-2deg", color: "pink" },
  { name: "JavaScript", deg: "3deg", color: "cyan" },
  { name: "HTML & CSS", deg: "-1deg", color: "lime" },
  { name: "Git", deg: "4deg", color: "pink" },
  { name: "Figma", deg: "-3deg", color: "cyan" },
  { name: "REST APIs", deg: "2deg", color: "lime" },
  { name: "Accessibility", deg: "-4deg", color: "cyan" },
  { name: "Node.js", deg: "1deg", color: "pink" },
];

function Skills() {
  return (
    <section id="skills" className="container" style={{ padding: '100px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="section-title">My Toolbox</h2>
        <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Tools I use to bring ideas to reality.</p>
      </div>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '24px', 
        justifyContent: 'center',
        padding: '20px'
      }}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`neo-box hoverable sticker ${skill.color}`} 
            style={{ 
              padding: '16px 32px', 
              fontSize: '1.2rem',
              transform: `rotate(${skill.deg})`
            }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
