import { useState } from "react";
import { useScrollContext } from "../Context/ScrollContext";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const { activeSection } = useScrollContext();
  const isActive = activeSection === "services";

  // لفتح النافذة المنبثقة
  const openPopup = (src: string) => {
    setImageSrc(src);
    setIsOpen(true);
  };

  // لغلق النافذة المنبثقة
  const closePopup = () => {
    setIsOpen(false);
    setImageSrc("");
  };
  return (
    <div
      className="relative p-10 bg-main"
      id="services"
      data-section={"services"}
    >
      <h1 className="text-center text-white text-4xl font-extrabold mb-20">
        خــدمــ<span className="text-mainAlt">ا</span>تــي
      </h1>
      <div className="w-full grid grid-cols-2 gap-5 max-lg:grid-cols-1">
        <img
          className="rounded-xl hover:scale-105 duration-300 cursor-pointer"
          src="/Package-1.png"
          alt=""
          onClick={() => openPopup("/Package-1.png")}
        />
        <img
          className="rounded-xl hover:scale-105 duration-300 cursor-pointer"
          src="/Package-1.png"
          alt=""
          onClick={() => openPopup("/Package-1.png")}
        />
        <img
          className="rounded-xl lg:col-span-2 m-auto lg:w-1/2 hover:scale-105 duration-300 cursor-pointer"
          src="/Package-1.png"
          alt=""
          onClick={() => openPopup("/Package-1.png")}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // لمنع الإغلاق عند النقر داخل الصورة
          >
            <img
              src={imageSrc}
              alt="Popup"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
      <div
        className={`overlay absolute top-0 left-0 w-full h-full bg-black duration-300 ${
          isActive ? "opacity-0 -z-10" : "opacity-70 z-10"
        }`}
      ></div>
    </div>
  );
};

export default Services;
