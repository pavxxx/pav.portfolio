import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

function ContactForm() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // We can support Web3Forms if they add their access key
    const accessKey = "3dbefd6f-1d5a-4bcf-b949-d3e8a29eb47a"; // User can replace this with their actual Web3Forms key

    try {
      // For demonstration and offline testing, we'll simulate a submission success
      // If the user replaces the key, we perform the actual fetch
      if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE" && accessKey !== "") {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            ...formData,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setStatus({ submitting: false, success: true, error: null });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setStatus({ submitting: false, success: false, error: result.message || "Submission failed." });
        }
      } else {
        // Simulated success block
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ submitting: false, success: false, error: "An unexpected error occurred. Please try again." });
    }
  };

  return (
    <section id="contact" className="section" ref={sectionRef} style={{ borderBottom: "none", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px" }}>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            <div>
              <h2 className="heading-md" style={{ marginBottom: "20px" }}>
                LET'S BUILD <br />
                <span className="serif-italic" style={{ textTransform: "lowercase" }}>together.</span>
              </h2>
              <p className="mono-small" style={{ opacity: 0.7, textTransform: "none", lineHeight: 1.6, marginBottom: "40px" }}>
                I am currently open to freelance projects, collaboration opportunities, and full-time frontend/UI-UX roles. Reach out and let's craft something amazing.
              </p>
            </div>

            <div style={{ borderTop: "1px solid var(--black)", paddingTop: "30px" }}>
              <div style={{ marginBottom: "20px" }}>
                <span className="mono-small" style={{ opacity: 0.5, display: "block", marginBottom: "5px" }}>Direct Email</span>
                <a href="mailto:Pavithra020906@gmail.com" className="hover-target serif-italic" style={{ fontSize: "1.4rem", color: "var(--black)", textDecoration: "none", fontWeight: 600 }}>
                  Pavithra020906@gmail.com
                </a>
              </div>

              <div>
                <span className="mono-small" style={{ opacity: 0.5, display: "block", marginBottom: "5px" }}>Social Profiles</span>
                <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                  <a href="https://github.com/pavxxx" target="_blank" rel="noreferrer" className="hover-target mono-small" style={{ color: "var(--black)", textDecoration: "none", fontWeight: 700 }}>
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/pavxxx" target="_blank" rel="noreferrer" className="hover-target mono-small" style={{ color: "var(--black)", textDecoration: "none", fontWeight: 700 }}>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            {status.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  border: "1px solid var(--black)",
                  padding: "40px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "400px",
                }}
              >
                <CheckCircle2 size={50} style={{ marginBottom: "20px" }} />
                <h3 className="heading-md" style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Message Sent!</h3>
                <p className="mono-small" style={{ textTransform: "none", opacity: 0.7, marginBottom: "30px" }}>
                  Thank you for reaching out. I've received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, success: false, error: null })}
                  className="btn-primary hover-target"
                  style={{ width: "100%" }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>

                <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
                  <label htmlFor="name" className="mono-small" style={{ marginBottom: "8px", fontWeight: 700 }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="hover-target contact-input"
                    placeholder="your name"
                    style={{
                      padding: "15px",
                      border: "1px solid var(--black)",
                      background: "transparent",
                      color: "var(--black)",
                      fontFamily: "inherit",
                      outline: "none",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="email" className="mono-small" style={{ marginBottom: "8px", fontWeight: 700 }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="hover-target contact-input"
                    placeholder="email@example.com"
                    style={{
                      padding: "15px",
                      border: "1px solid var(--black)",
                      background: "transparent",
                      color: "var(--black)",
                      fontFamily: "inherit",
                      outline: "none",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="subject" className="mono-small" style={{ marginBottom: "8px", fontWeight: 700 }}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="hover-target contact-input"
                    placeholder="project inquiry, collaboration..."
                    style={{
                      padding: "15px",
                      border: "1px solid var(--black)",
                      background: "transparent",
                      color: "var(--black)",
                      fontFamily: "inherit",
                      outline: "none",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="message" className="mono-small" style={{ marginBottom: "8px", fontWeight: 700 }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="hover-target contact-input"
                    placeholder="write your message here..."
                    style={{
                      padding: "15px",
                      border: "1px solid var(--black)",
                      background: "transparent",
                      color: "var(--black)",
                      fontFamily: "inherit",
                      outline: "none",
                      fontSize: "1rem",
                      resize: "vertical",
                    }}
                  />
                </div>

                {status.error && (
                  <div className="mono-small" style={{ color: "red", border: "1px solid red", padding: "10px", fontSize: "0.8rem" }}>
                    {status.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="btn-primary hover-target"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    opacity: status.submitting ? 0.7 : 1,
                  }}
                >
                  {status.submitting ? "Sending..." : "Submit Message"}
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <style>{`
        .contact-input:focus {
          background-color: var(--black) !important;
          color: var(--beige) !important;
        }
        .contact-input::placeholder {
          font-family: "Instrument Serif", serif;
          font-style: italic;
          opacity: 0.6;
          transition: color 0.3s;
        }
        .contact-input:focus::placeholder {
          color: var(--beige);
          opacity: 0.4;
        }
      `}</style>
    </section>
  );
}

export default ContactForm;
