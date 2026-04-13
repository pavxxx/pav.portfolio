import useReveal from "../hooks/useReveal";

function Intro() {
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} className={`panel panel-light span-5 flex-column reveal ${visible ? "is-visible" : ""}`}>
      <div className="reg-mark reg-tl"></div>
      <div className="reg-mark reg-br"></div>

      <div className="clip-wrap mb-20">
        <h2 className="headline clip-text" style={{ borderBottom: '2px solid var(--black)', paddingBottom: '20px' }}>CONTENTS</h2>
      </div>
      
      <ul className="mono-small" style={{ listStyle: 'none' }}>
        {['SELECTED WORK', 'TOOLBOX', 'EXPERIENCE', 'CONTACT'].map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: '20px', padding: '8px 0', borderBottom: '1px solid #ccc' }}>
            <span>0{i + 1}.</span> 
            <a href={`#${item.split(' ')[0].toLowerCase()}`} className="hover-target hover-invert" style={{ textDecoration: 'none', color: 'inherit' }}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="push-bottom mt-40">
        <div className="mono-small" style={{ opacity: 0.7 }}>
          Crafting minimal, robust, and accessible user interfaces that scale gracefully across platforms.
        </div>
      </div>
    </div>
  );
}

export default Intro;
