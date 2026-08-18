import "./styles/WorkPage.css";
import WorkCard, { WorkProject } from "./WorkCard";

const workProjects: WorkProject[] = [
  {
    id: "fitsync",
    number: "01",
    title: "FitSync",
    fullTitle: "FitSync - Fitness & Nutrition App",
    category: "FITNESS & NUTRITION / UI UX DESIGN",
    description: "A smart fitness and nutrition platform connecting workouts with personalized nutrition, meal planning and a more integrated fitness experience.",
    tools: "Figma, UX Research, UI Design, Prototyping, User Flows, Information Architecture",
    projectType: "Product Design",
    year: "2025",
    image: "/images/placeholder.webp"
  },
  {
    id: "evenout",
    number: "02",
    title: "EvenOut",
    fullTitle: "EvenOut: Advanced Studies in Interaction Design",
    category: "INTERACTION DESIGN / UX DESIGN",
    description: "An interaction design exploration focused on studying behavior, interaction patterns, usability and meaningful digital experiences.",
    tools: "Figma, Interaction Design, UX Research, Prototyping, User Testing",
    projectType: "Interaction Design",
    year: "2025",
    image: "/images/placeholder.webp"
  },
  {
    id: "maya",
    number: "03",
    title: "Maya",
    fullTitle: "Myntra's Maya Chatbot",
    category: "AI / CONVERSATIONAL UX",
    description: "A conversational shopping experience exploring how AI can support users in product discovery, decision-making and fashion e-commerce.",
    tools: "Figma, UX Research, Conversational Design, AI, User Flows, Prototyping",
    projectType: "Conversational UX",
    year: "2025",
    image: "/images/placeholder.webp"
  },
  {
    id: "samsung-agentic-ai",
    number: "04",
    title: "Samsung Agentic AI",
    fullTitle: "Designing Agentic AI for Samsung",
    category: "AI / PRODUCT DESIGN",
    description: "An exploration of agentic AI experiences and how autonomous systems can support users through proactive, contextual and intelligent interactions.",
    tools: "Figma, UX Research, AI, Agentic UX, User Flows, UI Design, Prototyping",
    projectType: "AI / Product Design",
    year: "2025",
    image: "/images/placeholder.webp"
  },
  {
    id: "pottery-wheel",
    number: "05",
    title: "Pottery Wheel",
    fullTitle: "Pottery Wheel | Ergonomics",
    category: "PRODUCT DESIGN / ERGONOMICS",
    description: "A human-factors and ergonomics exploration focused on improving the physical interaction, usability and comfort of a pottery wheel.",
    tools: "Figma, Ergonomics, Human Factors, Product Research, Physical Prototyping",
    projectType: "Product Design",
    year: "2025",
    image: "/images/placeholder.webp"
  },
  {
    id: "ishaara",
    number: "06",
    title: "Ishaara",
    fullTitle: "Ishaara | Design For Special Needs",
    category: "ACCESSIBILITY / INCLUSIVE DESIGN",
    description: "An inclusive design project exploring accessible interactions and experiences for people with different abilities and needs.",
    tools: "Figma, UX Research, Inclusive Design, Accessibility, Prototyping, User Testing",
    projectType: "Inclusive Design",
    year: "2025",
    image: "/images/placeholder.webp"
  }
];

const WorkGrid = () => {
  return (
    <div className="work-grid-section">
      <div className="work-grid">
        {workProjects.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default WorkGrid;
