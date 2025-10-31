import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { events } from "../Data/KEvents";
import { Link } from "react-router-dom";

const EventCarousel = () => {
  return (
    <div className="w-full mb-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <Link to={`/event/${event.id}`}>
              <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px]">
                <img
                  src={event.banner || event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-8 text-white">
                  <span className="bg-yellow-400 text-black px-3 py-0.5 text-xs font-bold w-fit rounded">
                    THEME
                  </span>
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold mt-2 max-w-[700px] leading-snug">
                    {event.title}
                  </h2>
                  <p className="text-sm mt-2">{event.location}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
