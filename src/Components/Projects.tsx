import Slide from "./Slide";

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
  return (
    <div
      id="work"
      className="pt-10 px-4 bg-gradient-to-tl from-main to-mainAlt"
    >
      <h1 className="text-center text-white text-4xl font-extrabold mb-20">
        أعــمـ<span className="text-main">ا</span>لــي
      </h1>
      <Slide props={products} title="تـصـويـر مـنـتـجـات" />
      <Slide props={[]} title="تـصـويـر زواجــات" />
      <Slide props={[]} title="تـصـويـر شـخـصـي" />
    </div>
  );
};

export default Projects;
