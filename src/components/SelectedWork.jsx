import { projects } from "../data/projects";
import "./selectedWork.css";
import useReveal from "../hooks/useReveal";

function SelectedWork() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      className={`container work-section reveal ${
        visible ? "reveal-visible" : ""
      }`}
    >
      <p className="work-label">PROJECTS</p>

      <ul className="work-list">
        {projects.map((project, index) => (
          <li key={index} className="work-item">
            <div className="work-left">
              <a
                href={project.link}
                target="_blank"
                className="work-title underline-link"
                >
                {project.title}
            </a>

              <p className="work-desc">{project.description}</p>
            </div>

            <span className="mono work-year">{project.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SelectedWork;
