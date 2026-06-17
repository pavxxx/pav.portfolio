import { useEffect, useState } from "react";

const SECTIONS = ["home", "work", "skills", "timeline", "contact"];
const LABELS = ["Home", "Work", "Skills", "Timeline", "Contact"];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar hover-target">
      <div className="nav-brand">Pavithra.dev</div>
      <ul className="nav-links">
        {SECTIONS.map((id, i) => (
          <li key={id} style={{ position: "relative" }}>
            <a
              href={`#${id}`}
              className="hover-target"
              style={{
                opacity: active === id ? 1 : 0.5,
                transition: "opacity 0.3s ease",
              }}
            >
              {LABELS[i]}
            </a>
            {/* Sliding underline indicator */}
            {active === id && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--black)",
                  borderRadius: "1px",
                  animation: "slideIn 0.3s ease forwards",
                }}
              />
            )}
          </li>
        ))}
      </ul>
      <style>{`
        @keyframes slideIn {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
