import useReveal from "../hooks/useReveal";

function Skills() {
  const [ref, visible] = useReveal();
  const tools = ["ReactJS", "TypeScript", "Vite", "TailwindCSS", "Figma", "REST APIs", "Node.js", "Express", "MongoDB", "Framer Motion", "Next.js", "GraphQL"];

  return (
    <section id="skills" className="section" style={{ borderBottom: 'none' }}>
      <div className="container" ref={ref}>
        <div className={`fade-up ${visible ? "is-visible" : ""}`}>
           <h2 className="heading-md">My <span className="serif-italic" style={{ textTransform: 'lowercase' }}>Toolbox</span></h2>
           <div className="skills-grid">
             {tools.map((t, i) => (
                <div key={i} className="skill-rect hover-target">
                  {t}
                </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
