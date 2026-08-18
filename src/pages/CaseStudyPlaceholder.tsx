import { Link, useParams } from "react-router-dom";
import "../components/Work/styles/WorkPage.css";

const projectsData: Record<string, { title: string; category: string; description: string }> = {
  fitsync: {
    title: "FitSync",
    category: "FITNESS & NUTRITION / UI UX DESIGN",
    description: "A smart fitness and nutrition platform connecting workouts with personalized nutrition, meal planning and a more integrated fitness experience."
  },
  evenout: {
    title: "EvenOut",
    category: "INTERACTION DESIGN / UX DESIGN",
    description: "An interaction design exploration focused on studying behavior, interaction patterns, usability and meaningful digital experiences."
  },
  maya: {
    title: "Maya",
    category: "AI / CONVERSATIONAL UX",
    description: "A conversational shopping experience exploring how AI can support users in product discovery, decision-making and fashion e-commerce."
  },
  "samsung-agentic-ai": {
    title: "Samsung Agentic AI",
    category: "AI / PRODUCT DESIGN",
    description: "An exploration of agentic AI experiences and how autonomous systems can support users through proactive, contextual and intelligent interactions."
  },
  "pottery-wheel": {
    title: "Pottery Wheel",
    category: "PRODUCT DESIGN / ERGONOMICS",
    description: "A human-factors and ergonomics exploration focused on improving the physical interaction, usability and comfort of a pottery wheel."
  },
  ishaara: {
    title: "Ishaara",
    category: "ACCESSIBILITY / INCLUSIVE DESIGN",
    description: "An inclusive design project exploring accessible interactions and experiences for people with different abilities and needs."
  }
};

const CaseStudyPlaceholder = () => {
  const { projectId } = useParams();
  
  const project = projectId && projectsData[projectId] 
    ? projectsData[projectId] 
    : { title: "Project Not Found", category: "UNKNOWN", description: "This project could not be found." };

  return (
    <div className="case-study-placeholder">
      <div className="case-study-content">
        <Link to="/work" className="back-link">
          &larr; Back to Work
        </Link>
        <p className="case-study-category">{project.category}</p>
        <h1 className="case-study-title">{project.title}</h1>
        <p className="case-study-desc">{project.description}</p>
        <div className="case-study-coming-soon">
          Case study coming soon
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPlaceholder;
