import "./styles/WorkPage.css";

const interfaceItems = [
  { id: 1, image: "/images/placeholder.webp", aspect: "aspect-wide" },
  { id: 2, image: "/images/adobe photoshop.jpg", aspect: "aspect-square" },
  { id: 3, image: "/images/react.webp", aspect: "aspect-tall" },
  { id: 4, image: "/images/Framer.png", aspect: "aspect-wide" },
  { id: 5, image: "/images/placeholder.webp", aspect: "aspect-ultra-wide" },
  { id: 6, image: "/images/canva.jpeg", aspect: "aspect-square" }
];

const InterfaceGallery = () => {
  return (
    <div className="interface-gallery-section">
      <div className="work-content-wrapper interface-gallery-header">
        <div className="work-eyebrow">INTERFACE EXPLORATION</div>
        <h2 className="work-heading" style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
          Selected Interface Work
        </h2>
        <p className="work-subheading" style={{ marginBottom: "0" }}>
          A curated collection of dashboards, mobile interfaces, web experiences, interaction studies and UI explorations created across different projects.
        </p>
      </div>

      <div className="interface-gallery-track-container">
        <div className="interface-gallery-track">
          {interfaceItems.map((item) => (
            <div key={item.id} className={`interface-item ${item.aspect}`}>
              <img src={item.image} alt={`Interface exploration ${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterfaceGallery;
