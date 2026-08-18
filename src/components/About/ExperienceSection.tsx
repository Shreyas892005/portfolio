import "../../pages/styles/AboutPage.css";

const experiences = [
  {
    id: "01",
    role: "UX/UI Designer",
    company: "Jio DDC",
    date: "May 2026 – July 2026",
    type: "Internship",
    description: "Worked on UX/UI design for enterprise digital systems and workflows, contributing to structured interfaces, information architecture and usability-focused product experiences."
  },
  {
    id: "02",
    role: "UX/UI Designer",
    company: "Jio",
    date: "June 2024 – July 2024",
    type: "Internship",
    description: "Worked on UX/UI design for Jio's warehouse and logistics workflows, focusing on improving operational processes, information clarity and digital interaction."
  },
  {
    id: "03",
    role: "UX/UI Designer",
    company: "HealthMudraa",
    date: "October 2024 – February 2025",
    type: "Internship",
    description: "Designed and developed digital experiences for HealthMudraa across web and mobile interfaces, focusing on usability, accessibility, visual consistency and user-centered interaction."
  },
  {
    id: "04",
    role: "UX/UI Designer",
    company: "Nurdd",
    date: "February 2025 – May 2025",
    type: "Internship",
    description: "Contributed to product and interface design, focusing on user experience, visual systems, interaction patterns and responsive digital experiences."
  },
  {
    id: "05",
    role: "UX/UI Designer",
    company: "JNPA",
    date: "June 2025 – July 2025",
    type: "Internship",
    description: "Worked on UX/UI design for JNPA's digital systems, focusing on improving workflows, interface clarity and usability across operational platforms."
  }
];

const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <h3 className="section-heading">Work Experience</h3>
      
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-meta">
              <div className="experience-number">{exp.id}</div>
              <div className="experience-date">{exp.date}</div>
              <div className="experience-type">{exp.type}</div>
            </div>
            
            <div className="experience-content">
              <h3>{exp.role}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
