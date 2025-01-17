import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header.tsx";
import HeroSection from "./Components/HeroSection.tsx";
import About from "./Components/About.tsx";
import Projects from "./Components/Projects.tsx";
import Services from "./Components/Services.tsx";
import Contact from "./Components/Contact.tsx";
import { ScrollProvider } from "./Context/ScrollContext.tsx";
import ScrollTracker from "./Components/ScrollTracker.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <ScrollProvider>
      <ScrollTracker />
      <HeroSection />
      <About />
      <Projects />
      <Services />
      <Contact />
    </ScrollProvider>
  </StrictMode>
);
