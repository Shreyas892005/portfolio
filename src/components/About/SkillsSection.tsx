import "../../pages/styles/AboutPage.css";

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h3 className="section-heading">Skills & Capabilities</h3>
      <p className="skills-intro">
        A focused toolkit for solving complex design challenges across digital products, interaction and emerging technologies.
      </p>
      
      <div className="skills-grid">
        <div className="skills-column">
          <h3>DESIGN SKILLS</h3>
          <div className="skills-list">
            <div className="skill-item">
              <span className="skill-title">1. UX/UI Design</span>
              <span className="skill-desc">Crafting intuitive interfaces</span>
            </div>
            <div className="skill-item">
              <span className="skill-title">2. Design Systems</span>
              <span className="skill-desc">Building scalable component libraries</span>
            </div>
            <div className="skill-item">
              <span className="skill-title">3. Wireframing</span>
              <span className="skill-desc">Rapid prototyping & iteration</span>
            </div>
            <div className="skill-item">
              <span className="skill-title">4. User Research</span>
              <span className="skill-desc">Data-driven insights</span>
            </div>
            <div className="skill-item">
              <span className="skill-title">5. Human-Centered Design</span>
              <span className="skill-desc">Empathy-first approach</span>
            </div>
          </div>
        </div>
        
        <div className="skills-column">
          <h3>Design + Technology</h3>
          <div className="skills-list">
            <div className="skill-item">
              <span className="skill-title">1. Prompt Engineering</span>
              <span className="skill-desc">AI-powered design workflows</span>
            </div>
            <div className="skill-item">
              <span className="skill-title">2. Frontend Collaboration</span>
              <span className="skill-desc">Bridging design & engineering</span>
            </div>
            <div className="skill-item">
              <span className="skill-title">3. HTML/CSS</span>
              <span className="skill-desc">Production-ready implementation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
