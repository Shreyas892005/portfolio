import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "../../pages/styles/AboutPage.css";

const ProfileCard = () => {
  return (
    <div className="about-hero-left">
      <div className="profile-card">
        <div className="profile-card-tab"></div>
        
        <div className="profile-photo">
          <img src="/images/placeholder.webp" alt="Shreyas Vaidyanathan" />
        </div>
        
        <h2 className="profile-name">
          Shreyas<br />Vaidyanathan
        </h2>
        <p className="profile-email">shreyasvaidyanathan@gmail.com</p>
        
        <div className="profile-socials">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="profile-social-link">
            <FaXTwitter size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="profile-social-link">
            <FaInstagram size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="profile-social-link">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
