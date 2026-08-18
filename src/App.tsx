import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PlayPage = lazy(() => import("./pages/PlayPage"));
const ChatPage = lazy(() => import("./pages/ChatPage"));
const CaseStudyPlaceholder = lazy(() => import("./pages/CaseStudyPlaceholder"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <LoadingProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="work">
                <Route index element={<WorkPage />} />
                <Route path=":projectId" element={<CaseStudyPlaceholder />} />
              </Route>
              <Route path="contact" element={<ContactPage />} />
              <Route path="play" element={<PlayPage />} />
              <Route path="chat" element={<ChatPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </LoadingProvider>
  );
};

export default App;
