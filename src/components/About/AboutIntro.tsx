import "../../pages/styles/AboutPage.css";

const AboutIntro = () => {
  return (
    <div className="about-hero-right">
      <div className="about-eyebrow">ABOUT</div>
      <h1 className="about-heading">Designing clear, meaningful digital experiences.</h1>
      
      <p className="about-bio">
        I am Shreyas, a Final year UI/UX Design student at MIT Pune with a strong focus on building functional, structured, and research-driven digital experiences. My design approach emphasizes cognitive ergonomics, clarity, and meaningful interaction, with a keen interest in dashboards, product interfaces, and modern digital ecosystems.
      </p>
      
      <p className="about-bio">
        I have worked on multiple academic and industry-aligned projects, including collaborative engagements with Jio, Nurdd, JNPA and other platform-based initiatives. Through these projects, I have strengthened my practice in problem-solving, information hierarchy, visual order, whitespace management, and usability-centered decision making.
      </p>
      
      <p className="about-bio">
        Currently, I continue to enhance my design craft through ongoing collaborations and self-led explorations, consistently pushing myself to refine my creative thinking, improve execution quality, and build strong, industry-ready design outcomes.
      </p>

      <div>
        <a href="#" download className="download-cta">
          Download Resume &rarr;
        </a>
      </div>
    </div>
  );
};

export default AboutIntro;
