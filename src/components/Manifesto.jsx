import useReveal from "../hooks/useReveal";

function Manifesto() {
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} className={`panel panel-grey span-7 flex-column reveal ${visible ? "is-visible" : ""}`} style={{ minHeight: '500px' }}>
      <div className="reg-mark reg-tl"></div>
      <div className="reg-mark reg-br"></div>
      
      <div className="mono-small mb-20" style={{ borderBottom: '1px solid var(--black)', paddingBottom: '10px' }}>
        CORE ETHOS / 01
      </div>

      <div className="push-bottom mt-40 hover-target">
        <h2 className="headline" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textTransform: 'none', lineHeight: 1 }}>
          Good design should be <span className="serif-italic">invisible</span> when working, but exceptionally <span className="serif-italic">loud</span> when speaking.
        </h2>
      </div>
    </div>
  );
}

export default Manifesto;
