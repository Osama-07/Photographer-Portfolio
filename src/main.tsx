import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "flowbite";
import Header from "./Header.tsx";
import HeroSection from "./HeroSection.tsx";
import About from "./About.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <About />
  </StrictMode>
);
