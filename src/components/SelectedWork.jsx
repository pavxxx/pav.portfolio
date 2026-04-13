import { projects } from "../data/projects";

function SelectedWork() {
  return (
    <section id="work" className="container" style={{ padding: '100px 24px' }}>
      <div style={{ marginBottom: '60px', textAlign: 'right' }}>
        <h2 className="section-title">Creations</h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '40px' 
      }}>
        {projects.map((project, index) => (
          <div key={index} className="neo-box hoverable" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
            {/* Browser Window Header */}
            <div className="browser-header">
              <span className="circle" style={{ background: '#ff5f56' }}></span>
              <span className="circle" style={{ background: '#ffbd2e' }}></span>
              <span className="circle" style={{ background: '#27c93f' }}></span>
            </div>
            
            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
               <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>
                 {project.title}
               </h3>
               
               <p style={{ fontSize: '1.1rem', fontWeight: 600, flex: 1, marginBottom: '32px' }}>
                 {project.description}
               </p>
               
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>{project.year}</span>
                 <a href={project.link} target="_blank" rel="noreferrer" className="neo-btn sunshine border-thin">
                   Explore
                 </a>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SelectedWork;
