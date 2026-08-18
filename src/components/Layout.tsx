import { lazy, Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Chatbot from "./Chatbot";
import setSplitText from "./utils/splitText";

const CharacterModel = lazy(() => import("./Character"));

const Layout = () => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <Chatbot />
      {isDesktopView && (
        <Suspense>
          <CharacterModel />
        </Suspense>
      )}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
