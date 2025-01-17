import { useEffect } from "react";
import { useScrollContext } from "../Context/ScrollContext.tsx";

const ScrollTracker = () => {
  const { setActiveSection } = useScrollContext();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        "[data-section]"
      ) as NodeListOf<HTMLElement>;
      let activeSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // تحديد منتصف القسم بناءً على موقعه العلوي وطوله
        const sectionMiddle = rect.top + rect.height / 2;

        // التحقق إذا كان منتصف القسم موجودًا داخل نافذة العرض
        const isInView =
          sectionMiddle > 0 && sectionMiddle < window.innerHeight;

        if (isInView) {
          activeSection = section.getAttribute("data-section") || "";
        }
      });

      setActiveSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return null;
};

export default ScrollTracker;
