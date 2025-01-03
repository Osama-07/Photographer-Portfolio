import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const el = useRef(null); // إنشاء مرجع للعنصر

  useEffect(() => {
    const options = {
      strings: [
        `إلتقاط <span class="text-orange-700">اللحظات</span>، إحياء للذكريات`,
      ],
      cursorChar: ".",
      typeSpeed: 40,
      loop: false,
      contentType: "html",
    };

    const typed = new Typed(el.current, options); // تهيئة Typed

    return () => {
      typed.destroy(); // تنظيف عند إلغاء التركيب
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden" id="home">
      <img
        className="w-full h-full object-cover"
        src="/Landing-Camera.jpg"
        alt="Landing Camera"
      />
      {/*overlay*/}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85"></div>
      <div className="w-full px-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-normal tracking-tight md:text-5xl lg:text-6xl text-white">
          <span ref={el} />
        </h1>
        <p className="mb-6text-center !leading-loose mt-10 mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">
          مرحبًا بكم في موقعي! هنا أشارك شغفي في التصوير. كل صورة ألتقطها تحكي
          قصة خاصة، من لحظات الفرح والمناسبات السعيدة إلى مناظر الطبيعة الخلابة.
          أحب ألتقط التفاصيل الصغيرة، لأنه كل شيء له معنى.
        </p>
        <a
          href="#about"
          className="duration-200 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-700"
        >
          إعرف عني أكثر
        </a>
      </div>
      <a
        href="https://wa.me/966531177595"
        target="_blank"
        className="max-md:opacity-30 hover:opacity-100 fixed w-16 h-16 bottom-10 right-6 duration-200 hover:scale-110 cursor-pointer"
      >
        <img className="w-full" src="/Whatsapp-logo.png" alt="" />
      </a>
    </div>
  );
};

export default HeroSection;
