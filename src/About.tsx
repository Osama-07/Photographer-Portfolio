const About = () => {
  return (
    <div id="about" className="bg-gray-200 pt-20 max-md:py-10">
      <div className="container">
        {/* <h1 className="text-center text-4xl font-extrabold mb-20">
          نـبـذة <span className="text-orange-500">عـنـي</span>
        </h1> */}
        <div className="info mt-10 grid grid-cols-2 max-md:grid-cols-1 max-md:place-items-center">
          <img
            className="mx-auto"
            src="/Personal-ImagePNG.PNG"
            alt="Personal Photo"
          />
          <div className="max-md:bg-white max-md:rounded-lg pb-5 max-md:text-center">
            <h1 className="relative md:w-fit text-2xl font-bold my-10 before:w-1/2 before:h-1 before:bg-orange-500 before:absolute max-md:before:left-1/2 before:-bottom-5 max-md:before:-translate-x-1/2">
              الـمـصـور &nbsp; <span className="main-color">|</span> &nbsp;
              عـبـدالله عـبـدالـعـزيـز
            </h1>
            <p className="md:bg-white md:p-5 md:rounded-lg w-9/12 leading-relaxed text-gray-700 max-md:w-full max-md:text-center max-md:px-5">
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
      </div>
    </div>
  );
};

export default About;
