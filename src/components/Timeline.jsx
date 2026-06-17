import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { timelineData } from "../data/timeline";
import { Briefcase, GraduationCap } from "lucide-react";

function TimelineCard({ item, index, type }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const isExp = type === "experience";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="solid-card hover-target"
      style={{
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "180px",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
          <span className="mono-small" style={{ opacity: 0.6 }}>
            {isExp ? `EXP — 0${index + 1}` : `EDU — 0${index + 1}`}
          </span>
          <span className="mono-small" style={{ fontWeight: 700 }}>
            {item.period}
          </span>
        </div>
        <h3 className="heading-md" style={{ fontSize: "1.5rem", marginBottom: "8px", textTransform: "none" }}>
          {isExp ? item.role : item.degree}
        </h3>
        <p className="serif-italic" style={{ fontSize: "1.2rem", marginBottom: "12px", color: "inherit", opacity: 0.9 }}>
          {isExp ? item.company : item.institution}
        </p>
      </div>
      <p className="mono-small" style={{ opacity: 0.7, textTransform: "none", fontSize: "0.8rem", lineHeight: 1.5 }}>
        {item.description}
      </p>
    </motion.div>
  );
}

function Timeline() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="section" ref={sectionRef} style={{ borderBottom: "1px solid var(--black)" }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ marginBottom: "60px" }}
        >
          <div className="section-accent-bar" />
          <h2 className="heading-md">
            MY <span className="serif-italic" style={{ textTransform: "lowercase" }}>Journey</span>
          </h2>
          <p className="mono-small" style={{ opacity: 0.7, textTransform: "none", maxWidth: "500px" }}>
            A timeline of my professional experience and academic background, showcasing my growth in UI/UX and Frontend development.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="timeline-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          position: "relative"
        }}>
          {/* Experience Track */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px", borderBottom: "2px solid var(--black)", paddingBottom: "15px" }}>
              <Briefcase size={20} />
              <h3 className="mono-small" style={{ fontSize: "1rem", fontWeight: 700 }}>Work Experience</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {timelineData.experience.map((item, index) => (
                <TimelineCard key={index} item={item} index={index} type="experience" />
              ))}
            </div>
          </div>

          {/* Education Track */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px", borderBottom: "2px solid var(--black)", paddingBottom: "15px" }}>
              <GraduationCap size={20} />
              <h3 className="mono-small" style={{ fontSize: "1rem", fontWeight: 700 }}>Education</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {timelineData.education.map((item, index) => (
                <TimelineCard key={index} item={item} index={index} type="education" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
