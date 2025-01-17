import { useScrollContext } from "../Context/ScrollContext";
import Slide from "./Shared/Slide";

const products = [
  {
    id: 1,
    src: "/Landing-Camera.jpg",
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "/Personal-ImagePNG.PNG",
    alt: "Slide 2",
  },
  {
    id: 3,
    src: "/luffy-gear-5-colored.png",
    alt: "Slide 3",
  },
  {
    id: 4,
    src: "/Landing-Camera.jpg",
    alt: "Slide 4",
  },
  {
    id: 5,
    src: "/Personal-ImagePNG.PNG",
    alt: "Slide 5",
  },
  {
    id: 6,
    src: "/luffy-gear-5-colored.png",
    alt: "Slide 6",
  },
];

// const videos = [
//   {
//     id: 1,
//     src: "/Landing-Camera.jpg",
//     alt: "video 1",
//   },
//   {
//     id: 2,
//     src: "Personal-ImagePNG.PNG",
//     alt: "video 2",
//   },
//   {
//     id: 3,
//     src: "luffy-gear-5-colored.png",
//     alt: "video 3",
//   },
// ];

const Projects = () => {
  const { activeSection } = useScrollContext();
  const isActive = activeSection === "work";
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
      <Slide props={[]} title="تـصـويـر زواجــات" />
      <Slide props={[]} title="تـصـويـر شـخـصـي" />
      <div
        className={`overlay absolute top-0 left-0 w-full h-full bg-black duration-300 ${
          isActive ? "opacity-0 -z-10" : "opacity-70 z-10"
        }`}
      ></div>
    </div>
  );
};

export default Projects;
