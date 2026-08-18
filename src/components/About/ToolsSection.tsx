import "../../pages/styles/AboutPage.css";

const tools = [
  { name: "Figma", icon: "/images/figma.png" },
  { name: "Adobe Photoshop", icon: "/images/adobe photoshop.jpg" },
  { name: "Adobe Illustrator", icon: "/images/adobe Illustor.png" },
  { name: "Framer", icon: "/images/Framer.png" },
  { name: "Antigravity", icon: "/images/antigravity.png" },
];

const ToolsSection = () => {
  return (
    <div className="tools-section">
      <h3 className="section-heading">Tools I Love</h3>
      <div className="tools-track">
        {tools.map((tool) => (
          <div key={tool.name} className="tool-chip">
            <img src={tool.icon} alt={tool.name} />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
