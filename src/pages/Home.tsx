import { lazy, Suspense, useEffect, useState } from "react";
import About from "../components/About";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import WhatIDo from "../components/WhatIDo";
import Work from "../components/Work";
import setSplitText from "../components/utils/splitText";

const TechStack = lazy(() => import("../components/TechStack"));
const CharacterModel = lazy(() => import("../components/Character"));

const Home = () => {
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
      <Landing>
        {!isDesktopView && (
          <Suspense>
            <CharacterModel />
          </Suspense>
        )}
      </Landing>
      <About />
      <WhatIDo />
      <Career />
      <Work />
      {isDesktopView && (
        <Suspense fallback={<div>Loading....</div>}>
          <TechStack />
        </Suspense>
      )}
      <Contact />
    </div>
  );
};

export default Home;
