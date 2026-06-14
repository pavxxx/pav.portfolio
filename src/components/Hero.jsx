// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
    }
  };

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', paddingTop: '160px', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ position: 'relative' }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%' }}
        >
          <motion.div 
            variants={itemVariants}
            className="mono-small" 
            style={{ marginBottom: '20px', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--black)' }}
          >
            BY PAVITHRA &mdash; PORTFOLIO 2026
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="heading-lg" 
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '40px' }}
          >
            UI / UX<br />
            <span className="serif-italic" style={{ color: 'var(--black)', textTransform: 'lowercase' }}>&amp; frontend</span><br />
            DEVELOPMENT.
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', padding: '25px 0', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginBottom: '40px' }}
          >
            {/* Animated Borders */}
            <motion.div 
              variants={lineVariants}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', backgroundColor: 'var(--black)', originX: 0 }}
            />
            <motion.div 
              variants={lineVariants}
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', backgroundColor: 'var(--black)', originX: 0 }}
            />

            <div className="mono-small" style={{ textAlign: 'left' }}>
              PAVITHRA &copy; 2026<br />
              AVAILABLE FOR HIRE
            </div>

            <div className="serif-italic" style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', textAlign: 'center', maxWidth: '400px', lineHeight: 1.2 }}>
              Building aesthetic, robust, and scalable web experiences.
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#work" 
              className="btn-invert hover-target" 
              style={{ padding: '12px 24px', textDecoration: 'none', display: 'inline-block', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', transition: 'all 0.3s ease' }}
            >
              View Works
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

