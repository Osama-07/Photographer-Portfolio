import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../assets/css/slide.css";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

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
  return (
    <section id="tranding" className="pb-12 pt-0">
      <div className="container">
        <h1 className="section-heading text-white text-4xl my-5 max-md:text-center">
          {title}
        </h1>
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          grabCursor={true}
          centeredSlides={false} // لتجنب عرض الصورة في المنتصف فقط
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
        >
          {props.length > 0 ? (
            props.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  style={{ width: "100%", borderRadius: "1rem" }}
                />
              </SwiperSlide>
            ))
          ) : (
            <h1 className="text-white text-5xl text-center py-2">
              لا يـوجـد صـور
            </h1>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Slide;
