import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import FunResumeButton from "./FunResumeButton";

/* ── Count-up hook ── */
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return count;
}

function StatCounter({ value, label, suffix = "+" }) {
  const count = useCountUp(value, 1400);
  return (
    <div className="hero-stat">
      <span className="hero-stat-number">{count}{suffix}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}

/* ── Typewriter hook ── */
function useTypewriter(text, speed = 40, delay = 1800) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  return displayed;
}

/* ── Standard CTA button ── */
function MagneticButton({ href, children, style }) {
  const handleClick = (e) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        if (window.lenis) {
          window.lenis.scrollTo(target, { duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="btn-invert hover-target"
      style={style}
    >
      {children}
    </a>
  );
}

/* ── Heading ── */
function GlitchHeading({ children, className, style }) {
  return (
    <h1 className={className} style={style}>
      {children}
    </h1>
  );
}

/* ── Hero ── */
function Hero() {
  const tagline = useTypewriter("Building aesthetic, robust, and scalable web experiences.", 40, 1800);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 } },
  };

  return (
    <section id="home" className="section" style={{ minHeight: "100vh", paddingTop: "140px", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "60px" }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ flex: "1 1 500px", minWidth: "300px" }}
          >
            {/* Label row */}
            <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
              <span className="mono-small" style={{ fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.2em" }}>
                BY PAVITHRA &mdash; PORTFOLIO 2026
              </span>
            </motion.div>

            {/* Glitch heading */}
            <motion.div variants={itemVariants} style={{ marginBottom: "40px" }}>
              <GlitchHeading
                className="heading-lg"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                }}
              >
                UI / UX designer<br />
                <span className="serif-italic" style={{ color: "var(--black)", textTransform: "lowercase" }}>&amp; Fullstack</span><br />
                DEVELOPER.
              </GlitchHeading>
            </motion.div>

            {/* Info strip */}
            <motion.div
              variants={itemVariants}
              style={{
                position: "relative",
                display: "flex",
                flexWrap: "wrap",
                padding: "30px 0",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              <motion.div variants={lineVariants} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", backgroundColor: "var(--black)", originX: 0 }} />
              <motion.div variants={lineVariants} style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", backgroundColor: "var(--black)", originX: 0 }} />

              {/* Left: availability */}
              <div className="mono-small" style={{ textAlign: "left", lineHeight: 1.8 }}>
                PAVITHRA &copy; 2026<br />
                <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "2px" }}>
                  <span style={{ position: "relative", display: "inline-block", width: "8px", height: "8px", flexShrink: 0 }}>
                    <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#4ade80", animation: "pingPulse 1.8s ease-in-out infinite" }} />
                    <span style={{ position: "absolute", inset: "1px", borderRadius: "50%", background: "#22c55e" }} />
                  </span>
                  AVAILABLE FOR HIRE
                </span>
              </div>

              {/* Center: stat counters */}
              <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                <StatCounter value={4} label="Projects" suffix="+" />
                <div style={{ width: "1px", height: "40px", background: "rgba(18,18,18,0.15)" }} />
                <StatCounter value={10} label="Technologies" suffix="+" />
              </div>

              {/* Right: magnetic CTAs */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                <MagneticButton
                  href="#work"
                  style={{ padding: "12px 24px", textDecoration: "none", display: "inline-block", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase" }}
                >
                  View Works
                </MagneticButton>
                <FunResumeButton />
              </div>
            </motion.div>

            {/* Typewriter tagline */}
            <motion.div
              variants={itemVariants}
              className="serif-italic"
              style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", opacity: 0.65, maxWidth: "520px", lineHeight: 1.4, minHeight: "1.6em" }}
            >
              {tagline}
              <span style={{ borderRight: "1.5px solid var(--black)", marginLeft: "2px", animation: "caretBlink 0.9s step-end infinite" }} />
            </motion.div>
          </motion.div>

          {/* Right column empty as requested */}
          <div style={{ display: "flex", alignItems: "center", paddingTop: "60px", flexShrink: 0 }}>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pingPulse {
          0%, 100% { transform: scale(1);   opacity: 0.8; }
          50%       { transform: scale(2.2); opacity: 0; }
        }
        @keyframes caretBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

export default Hero;
