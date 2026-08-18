import { useEffect } from "react";
import WorkHero from "../components/Work/WorkHero";
import WorkGrid from "../components/Work/WorkGrid";
import InterfaceGallery from "../components/Work/InterfaceGallery";
import WorkFooter from "../components/Work/WorkFooter";
import "../components/Work/styles/WorkPage.css";

const WorkPage = () => {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="work-page-container">
      <div className="work-content-wrapper">
        <WorkHero />
        <WorkGrid />
      </div>
      <InterfaceGallery />
      <WorkFooter />
    </div>
  );
};

export default WorkPage;
