import useReveal from "../hooks/useReveal";

function ImagePanel() {
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} className={`panel span-4 reveal ${visible ? "is-visible" : ""}`} style={{ padding: 0, overflow: 'hidden', backgroundColor: '#e2dfdd' }}>
      <div className="hover-target" style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '400px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
      }}>
         <div className="mono-small" style={{ position: 'absolute', top: '20px', left: '20px' }}>FIG. 1</div>
         <div className="mono-small" style={{ position: 'absolute', bottom: '20px', right: '20px' }}>ABSTRACTION</div>
         
         <div style={{ 
           width: '60%', 
           height: '60%', 
           borderRadius: '100px 0 100px 0', 
           background: 'var(--black)',
           mixBlendMode: 'normal',
           transition: 'border-radius 0.4s ease'
         }} className="shape-anim"></div>
      </div>
      <style>{`
        .panel:hover .shape-anim {
           border-radius: 0 100px 0 100px !important;
        }
      `}</style>
    </div>
  );
}

export default ImagePanel;
