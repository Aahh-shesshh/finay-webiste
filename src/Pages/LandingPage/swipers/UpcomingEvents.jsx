import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import swipperData from "../../../Data/swiperData";

export default function UpcomingEvents() {
  return (
    <div className="home-slider">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-white text-4xl mb-8">Upcoming Events</h3>
        <span className="cursor-pointer text-orange-500 underline-offset-2">
          See all
        </span>
      </div>

      <Swiper

        slidesPerView={3}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        // loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {swipperData.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-[300px] w-[380px] rounded-lg flex flex-col bg-zinc-800">
                <div className="w-full h-full overflow-hidden">
                  <img alt="" className="w-full h-full" src={data.image}></img>
                </div>
                <div className="flex flex-row  items-center w-[380px] px-2 py-2 justify-between apple3">
                  <div className="flex flex-row items-center justify-center gap-3">
                    <img className="w-11 h-11 rounded-full" alt="" src={data.image}></img>
                    <div className="flex flex-col items-center desc">
                      <h5>{data.title}</h5>
                      <h4>{data.sub_title}</h4>
                    </div>
                  </div>

                  <div className="tommorow px-4 py-1">{data.date}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
