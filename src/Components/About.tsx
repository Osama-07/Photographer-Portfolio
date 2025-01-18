import { useScrollContext } from "../Context/ScrollContext";

const About = () => {
  const { activeSection } = useScrollContext();
  const isActive = activeSection === "about";

  return (
    <div
      id="about"
      data-section={"about"}
      className={`relative bg-gradient-to-tr from-main via-white to-mainAlt pt-10 duration-300`}
    >
      <div className="max-md:mx-4 mx-12">
        <h1 className="text-center text-4xl font-extrabold mb-20">
          نـبـذة <span className="text-main">عـنـي</span>
        </h1>
        <div className="info mt-10 grid grid-cols-2 max-lg:grid-cols-1 place-items-center">
          <img
            src="/Personal-ImagePNG.PNG"
            alt="Personal Photo"
            loading="lazy"
          />
          <div className="max-md:rounded-lg pb-5 max-md:text-center">
            <h1 className="rounded-lg relative md:w-fit max-lg:mx-auto text-2xl font-bold my-10 before:w-full before:h-[2px] before:bg-main before:absolute before:left-0 before:-bottom-4 max-lg:before:mx-auto">
              الـمـصـور &nbsp; <span className="text-main">|</span> &nbsp;
              عـبـدالله عـبـدالـعـزيـز
            </h1>
            <p className="shadow-xl bg-gradient-to-r from-mainAlt to-main tracking-widest text-white p-5 rounded-lg w-9/12 leading-relaxed max-xl:w-full max-lg:text-center px-5">
              أنا عبدالله عبدالعزيز، مصور محترف بالتصوير. <br />
              <br /> أمتلك خبرة طويلة تمتد لعدة سنوات في مجالات متعددة تشمل
              تصوير المنتجات المناسبات، وحفلات الزفاف. <br />
              <br /> أهدف دائمًا إلى تقديم لقطات استثنائية تعكس الجمال الطبيعي
              والتفاصيل الدقيقة، مستعينًا بأحدث التقنيات وأفضل الممارسات الفنية.{" "}
              <br />
              <br />
              بدأت رحلتي مع التصوير من حب بسيط للكاميرا، لكن مع الوقت والتطوير
              المستمر، أصبح التصوير جزءًا من هويتي. أؤمن بأن كل صورة تحمل قصة،
              وأسعى دائمًا لتحويل رؤى عملائي إلى صور تنبض بالحياة وتترك انطباعًا
              قويًا يدوم. <br />
              <br /> أتميز بالدقة والمرونة في العمل، وأحرص على خلق تجربة فريدة
              ومريحة لكل عميل، سواء في الاستوديو أو الموقع. <br />
              <br /> رؤيتي تركز على تجاوز توقعات العملاء من خلال تقديم محتوى
              بصري يعكس احترافية وجاذبية عالية.
            </p>
          </div>
        </div>
        <div
          className={`overlay absolute top-0 left-0 w-full h-full bg-black duration-300 ${
            isActive ? "opacity-0 -z-10" : "opacity-70 z-10"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default About;
