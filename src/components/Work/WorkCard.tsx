import { Link } from "react-router-dom";
import "./styles/WorkPage.css";
import { BsArrowRight } from "react-icons/bs";

export interface WorkProject {
  id: string;
  number: string;
  title: string;
  fullTitle: string;
  category: string;
  description: string;
  tools: string;
  projectType: string;
  year: string;
  image: string;
}

interface WorkCardProps {
  project: WorkProject;
}

const WorkCard = ({ project }: WorkCardProps) => {
  // Split tools string into an array for formatting
  const toolList = project.tools.split(", ");

  return (
    <Link to={`/work/${project.id}`} className="work-card">
      <div className="work-card-image-wrapper">
        <img src={project.image} alt={project.title} className="work-card-image" />
      </div>
      
      <div className="work-card-content">
        <div className="work-card-header">
          <div className="work-card-number">{project.number}</div>
          <div className="work-card-category">{project.category}</div>
        </div>
        
        <h3 className="work-card-title">
          {project.fullTitle}
          <BsArrowRight className="work-card-arrow" />
        </h3>
        
        <p className="work-card-desc">{project.description}</p>
        
        <div className="work-card-footer">
          <div className="work-card-tools">
            <span>Tools / features:</span>
            {toolList.join(" • ")}
          </div>
          <div className="work-card-year">{project.year}</div>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
