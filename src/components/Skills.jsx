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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="skills-card hover-target"
    >
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
    <section id="skills" className="section" ref={sectionRef} style={{ borderBottom: 'none' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '50px' }}
        >
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
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .skills-card:hover {
          background: var(--black);
          color: var(--beige);
        }
        .skill-pill {
          border: 1px solid var(--black);
          border-radius: 0;
          padding: 8px 18px;
          font-size: 0.9rem;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          transition: all 0.3s ease;
          background: transparent;
          color: var(--black);
        }
        .skills-card:hover .skill-pill {
          border-color: var(--beige);
          color: var(--beige);
        }
        .skill-pill:hover {
          background: var(--black) !important;
          color: var(--beige) !important;
          border-color: var(--black) !important;
          transform: scale(1.05);
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
