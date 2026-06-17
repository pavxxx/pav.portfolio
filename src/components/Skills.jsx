import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { skillCategories } from "../data/skills";

function SkillCard({ category, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="skills-card skill-fill-card hover-target"
    >
      {/* Corner Brackets */}
      <div className="corner-tl" />
      <div className="corner-br" />

      {/* Top Title and Index Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '35px' }}>
        <h3 className="serif-italic" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 400, margin: 0, textTransform: 'none' }}>
          {category.title}
        </h3>
        <span className="mono-small" style={{ opacity: 0.5 }}>
          {category.index}
        </span>
      </div>

      {/* Pill Tags */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
      >
        {category.skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="skill-pill hover-target"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ marginBottom: '50px' }}
        >
          <div className="section-accent-bar" />
          <h2 className="heading-md" style={{ marginBottom: '15px' }}>
            My <span className="serif-italic" style={{ textTransform: 'lowercase' }}>Toolbox</span>
          </h2>
          <p className="mono-small" style={{ opacity: 0.7, textTransform: 'none', maxWidth: '500px' }}>
            A structured breakdown of libraries, languages, and tools that I specialize in, grouped by domain.
          </p>
        </motion.div>

        {/* 6-Card Responsive Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginTop: '40px'
        }}>
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>

      {/* Embedded Custom Styles */}
      <style>{`
        .skills-card {
          background: transparent;
          border: 1px solid var(--black);
          padding: 40px;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }
        .skills-card .corner-tl,
        .skills-card .corner-br {
          transition: border-color 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .skills-card:hover .corner-tl,
        .skills-card:hover .corner-br {
          border-color: var(--beige);
        }
        .skills-card:hover {
          color: var(--beige);
        }
        .skill-pill {
          border: 1px solid var(--black);
          border-radius: 0;
          padding: 8px 18px;
          font-size: 0.85rem;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          transition: all 0.25s ease;
          background: transparent;
          color: var(--black);
        }
        .skills-card:hover .skill-pill {
          border-color: rgba(233,229,220,0.4);
          color: var(--beige);
        }
        .skill-pill:hover {
          background: var(--black) !important;
          color: var(--beige) !important;
          border-color: var(--black) !important;
          transform: translateY(-2px);
        }
        .skills-card:hover .skill-pill:hover {
          background: var(--beige) !important;
          color: var(--black) !important;
          border-color: var(--beige) !important;
        }
      `}</style>
    </section>
  );
}

export default Skills;
