import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header.tsx";
import "flowbite";
import HeroSection from "./HeroSection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <HeroSection />
  </StrictMode>
);
