import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "flowbite";
import Header from "./Components/Header.tsx";
import HeroSection from "./Components/HeroSection.tsx";
import About from "./Components/About.tsx";
import Projects from "./Components/Projects.tsx";
import Services from "./Components/Services.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <About />
    <Projects />
    <Services />
  </StrictMode>
);
