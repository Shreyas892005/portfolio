import { useEffect } from "react";
import ProfileCard from "../components/About/ProfileCard";
import AboutIntro from "../components/About/AboutIntro";
import ToolsSection from "../components/About/ToolsSection";
import ExperienceSection from "../components/About/ExperienceSection";
import SkillsSection from "../components/About/SkillsSection";
import WorkFooter from "../components/Work/WorkFooter";
import "./styles/AboutPage.css";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-container">
      <div className="about-content-wrapper">
        <div className="about-hero">
          <ProfileCard />
          <AboutIntro />
        </div>
        
        <div className="location-section">
          <h3 className="section-heading">Location</h3>
          <div className="location-text">
            Based in India <span role="img" aria-label="India Flag">🇮🇳</span>
          </div>
        </div>

        <ToolsSection />
        <ExperienceSection />
        <SkillsSection />
      </div>
      
      <WorkFooter />
    </div>
  );
};

export default AboutPage;
