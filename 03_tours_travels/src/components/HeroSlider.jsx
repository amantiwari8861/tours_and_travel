// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slides = [
  {
    imageUrl: "/images/places/place (1).jpg",
    title: "Taj Mahal",
    subTitle: "Agra, India",
  },
  {
    imageUrl: "/images/places/place (2).jpg",
    title: "Humayun Tomb",
    subTitle: "Delhi, India",
  },
  {
    imageUrl: "/images/places/place (3).jpg",
    title: "Qutub Minar",
    subTitle: "Delhi, India",
  },
  {
    imageUrl: "/images/places/place (4).jpg",
    title: "Ganga Ghat",
    subTitle: "Varanasi, India",
  },
];

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        {slides.map((placeObj, i) => (
          <SwiperSlide key={i}>
            <img
              src={placeObj.imageUrl}
              alt={placeObj.title}
              className="h-90 w-full"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col ">
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 ml-20 w-100 text-left h-[85%] inline-flex items-end">
                {placeObj.title}
              </h2>
              <p className="text-xl font-bold text-white text-left ml-20 w-100 h-[15%]">
                {placeObj.subTitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
