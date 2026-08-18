import { Link } from "react-router-dom";
import "./styles/WorkPage.css";

const WorkFooter = () => {
  return (
    <footer className="work-footer">
      <div className="work-footer-grid">
        <div className="work-footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/play">Play</Link></li>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="work-footer-column">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://www.behance.com" target="_blank" rel="noreferrer">Behance</a></li>
            <li><a href="mailto:shreyasvaidyanathan@gmail.com">Email</a></li>
          </ul>
        </div>
        
        <div className="work-footer-column">
          <h4>About</h4>
          <p className="work-footer-about">
            Shreyas Vaidyanathan &mdash; UI/UX Designer focused on structured, research-driven and meaningful digital experiences.
          </p>
        </div>
      </div>
      
      <div className="work-footer-bottom">
        &copy; {new Date().getFullYear()} Shreyas Vaidyanathan. All rights reserved.
      </div>
    </footer>
  );
};

export default WorkFooter;
