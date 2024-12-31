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
            src="/luffy-gear-5-colored.png"
            alt="Personal Photo"
          />
          <div className="max-md:bg-white max-md:rounded-lg pb-5 max-md:text-center">
            <h1 className="relative md:w-fit text-2xl font-bold my-10 before:w-1/2 before:h-1 before:bg-orange-500 before:absolute max-md:before:left-1/2 before:-bottom-5 max-md:before:-translate-x-1/2">
              الـمـصـور &nbsp; <span className="main-color">|</span> &nbsp;
              عـبـدالله عـبـدالـعـزيـز
            </h1>
            <p className="md:bg-white md:p-5 md:rounded-lg w-9/12 leading-relaxed text-gray-700 max-md:w-full max-md:text-center max-md:px-5">
              مرحبًا بكم في موقعي! هنا أشارك شغفي في التصوير. كل صورة ألتقطها
              تحكي قصة خاصة، من لحظات الفرح والمناسبات السعيدة إلى مناظر الطبيعة
              الخلابة. أحب ألتقط التفاصيل الصغيرة، لأنه كل شيء له معنى.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
