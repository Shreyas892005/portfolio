import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <Link to="/" className="navbar-title" data-cursor="disable">
          S.V.
        </Link>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} end>
              <HoverLinks text="HOME" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <HoverLinks text="PROJECTS" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <HoverLinks text="ABOUT" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/play" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <HoverLinks text="PLAYGROUND" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <HoverLinks text="CONTACT" />
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
