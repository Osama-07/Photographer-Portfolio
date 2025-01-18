import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../assets/css/slide.css";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { useState } from "react";

interface image {
  id: number;
  src: string;
  alt: string;
}
interface SlideProps {
  title: string;
  props: image[];
}

const Slide: React.FC<SlideProps> = ({ props, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

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
    <section id="tranding" className="pb-12 pt-0">
      <div className="container">
        <h1 className="section-heading text-white text-4xl my-5 max-md:text-center">
          {title}
        </h1>
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // عدد الصور المراد عرضها في نفس الوقت
          spaceBetween={10} // المسافة بين الصور
          autoplay={{ delay: 3000 }}
          loop={props.length > 3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          className="!p-5 rounded-2xl shadow-xl bg-gradient-to-b from-main to-main"
        >
          {props.length > 0 ? (
            props.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: "100%", borderRadius: "1rem" }}
                  loading="lazy"
                  className="mb-3"
                  onClick={() => openPopup(image.src)}
                />
              </SwiperSlide>
            ))
          ) : (
            <h1 className="text-white text-5xl text-center py-2">
              لا يـوجـد صـور
            </h1>
          )}
        </Swiper>

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
                loading="lazy"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Slide;
