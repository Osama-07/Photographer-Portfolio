import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../assets/css/slide.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

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
  const swiperRef = useRef<SwiperRef | null>(null);
  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  return (
    <section id="tranding" className="max-lg:py-10 lg:py-20">
      <div className="container">
        <h1 className="section-heading text-white text-4xl max-md:text-center">
          {title}
        </h1>
      </div>
      <div className="container bg-zinc-800 rounded-xl ">
        <Swiper
          ref={swiperRef}
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          autoplay={{ delay: 3000 }}
          initialSlide={Math.floor(props.length / 2)}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {props.map((prop, index) => (
            <SwiperSlide key={prop.id + prop.alt} className="tranding-slide">
              <div className="tranding-slide-img">
                <img
                  src={prop.src}
                  alt={prop.alt}
                  onClick={() => handleSlideClick(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slide;
