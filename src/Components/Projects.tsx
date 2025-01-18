import Slide from "./Shared/Slide";

const products = [
  {
    id: 1,
    src: "/تصوير اطعمة/_MG_4696.jpg",
    alt: "_MG_4696.jpg",
  },
  {
    id: 2,
    src: "/تصوير اطعمة/_MG_4739.jpg",
    alt: "_MG_4739.jpg",
  },
  {
    id: 3,
    src: "/تصوير اطعمة/_MG_5152.jpg",
    alt: "_MG_5152.JPEG",
  },
  {
    id: 4,
    src: "/تصوير اطعمة/_MG_5153.jpg",
    alt: "_MG_5153.JPEG",
  },
  {
    id: 5,
    src: "/تصوير اطعمة/_MG_5154.jpg",
    alt: "_MG_5154.JPEG",
  },
  {
    id: 6,
    src: "/تصوير اطعمة/_MG_5155.jpg",
    alt: "_MG_5155.JPEG",
  },
  {
    id: 7,
    src: "/تصوير اطعمة/_MG_6193.jpg",
    alt: "_MG_6193.jpg",
  },
  {
    id: 8,
    src: "/تصوير اطعمة/_MG_6241.jpg",
    alt: "_MG_6241.jpg",
  },
  {
    id: 9,
    src: "/تصوير اطعمة/Chocolate.png.PNG",
    alt: "Chocolate.png.PNG",
  },
  {
    id: 10,
    src: "/تصوير اطعمة/Chocolate.png(1).PNG",
    alt: "Chocolate.png(1).PNG",
  },
  {
    id: 11,
    src: "/تصوير اطعمة/IMG_7570.jpg",
    alt: "IMG_7570.jpg",
  },
  {
    id: 12,
    src: "/تصوير اطعمة/IMG_7571.jpg",
    alt: "IMG_7571.jpg",
  },
  {
    id: 13,
    src: "/تصوير اطعمة/IMG_7572.jpg",
    alt: "IMG_7572.jpg",
  },
  {
    id: 14,
    src: "/تصوير اطعمة/IMG_7573.jpg",
    alt: "IMG_7573.jpg",
  },
  {
    id: 15,
    src: "/تصوير اطعمة/IMG_7574.jpg",
    alt: "IMG_7574.jpg",
  },
  {
    id: 16,
    src: "/تصوير اطعمة/IMG_7575.jpg",
    alt: "IMG_7575.jpg",
  },
  {
    id: 17,
    src: "/تصوير اطعمة/تصميم بدون عنوان.png.PNG",
    alt: "تصميم بدون عنوان.png.PNG",
  },
  {
    id: 18,
    src: "/تصوير اطعمة/تصميم بدون عنوان.png(1).PNG",
    alt: "تصميم بدون عنوان.png(1).PNG",
  },
  {
    id: 19,
    src: "/تصوير اطعمة/تصميم بدون عنوان.png(2).PNG",
    alt: "تصميم بدون عنوان.png(2).PNG",
  },
  {
    id: 20,
    src: "/تصوير اطعمة/تصميم بدون عنوان.png(3).PNG",
    alt: "تصميم بدون عنوان.png(3).PNG",
  },
];

const weddings = [
  {
    id: 1,
    src: "/زواجات/1591EB14-1A6E-4DBE-AC9D-6639EF8EEA32.JPG",
    alt: "jpg",
  },
  {
    id: 2,
    src: "/زواجات/B033FDE4-BBF0-4C81-952B-FEDA94ED9CD9.JPG",
    alt: "jpg",
  },
  {
    id: 3,
    src: "/زواجات/DAE232E4-F669-4EA5-B988-1CC0567B5F22.JPG",
    alt: "jpg",
  },
];

const Projects = () => {
  return (
    <div
      id="work"
      data-section={"work"}
      className="relative pt-10 px-4 bg-gradient-to-tl from-main to-mainAlt"
    >
      <h1 className="text-center text-white text-4xl font-extrabold mb-20">
        أعــمـ<span className="text-main">ا</span>لــي
      </h1>
      <Slide props={products} title="تـصـويـر مـنـتـجـات" />
      <Slide props={weddings} title="تـصـويـر زواجــات" />
      <Slide props={[]} title="تـصـويـر شـخـصـي" />
    </div>
  );
};

export default Projects;
