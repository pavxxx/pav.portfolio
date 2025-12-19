function Hero() {
  return (
    <section className="container" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div>
        <p className="mono" style={{ marginBottom: "24px" }}>
          FRONTEND ENGINEER · STUDENT
        </p>

        <h1 style={{
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          fontWeight: 500,
          lineHeight: 1.05,
          marginBottom: "32px"
        }}>
          Hi, I am Pavithra
        </h1>

        <p style={{
          maxWidth: "520px",
          color: "#aaa",
          marginBottom: "40px"
        }}>
          An engineering student focused on building modern,
          thoughtful frontend experiences & clean design systems.
        </p>

    <div style={{ display: "flex", gap: "40px" }}>
            <a href="#work" className="underline-link">
              Projects
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="underline-link"
              style={{ color: "#ffffffff" }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pavithravg/"
              target="_blank"
              className="underline-link"
              style={{ color: "#ffffffff" }}
            >
              LinkedIn
            </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
