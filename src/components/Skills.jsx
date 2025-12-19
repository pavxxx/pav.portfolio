import "./skills.css";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "REST APIs",
  "UI Design",
  "Accessibility",
  "Performance",
];

function Skills() {
  return (
    <section className="skills-section">
      {/* Label aligned with rest of site */}
      <div className="container">
        <p className="skills-label">SKILLS</p>
      </div>

      {/* Full-width scrolling track */}
      <div className="skills-track">
        {[...skills, ...skills].map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
