import Slide from "./Slide";

const products = [
  {
    id: 1,
    src: "/Landing-Camera.jpg",
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "Personal-ImagePNG.PNG",
    alt: "Slide 2",
  },
  {
    id: 3,
    src: "luffy-gear-5-colored.png",
    alt: "Slide 3",
  },
];

const videos = [
  {
    id: 1,
    src: "/Landing-Camera.jpg",
    alt: "video 1",
  },
  {
    id: 2,
    src: "Personal-ImagePNG.PNG",
    alt: "video 2",
  },
  {
    id: 3,
    src: "luffy-gear-5-colored.png",
    alt: "video 3",
  },
];

const Projects = () => {
  return (
    <div id="work" className="py-20 px-4 bg-black">
      <h1 className="text-center text-white text-4xl font-extrabold mb-20">
        أعــمـ<span className="main-color">ا</span>لــي
      </h1>
      <Slide props={products} title="تـصـويـر مـنـتـجـات" />
      <Slide props={videos} title="تـصـويـر زواجــات" />
    </div>
  );
};

export default Projects;
