import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import swipperData from "../../../Data/swiperData";
import { FaHeadphones } from "react-icons/fa";
import Button from "../../../components/buttons/Button";

export default function WhatsHotSwiper() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-white text-4xl mb-8 ">What's hot</h3>
        <span className="cursor-pointer text-orange-500 underline-offset-2">
          See all
        </span>
      </div>

      <Swiper
        // spaceBetween={}
        slidesPerView={3}
        // loop={true}
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {swipperData.map((data, index) => {
          return (
            <SwiperSlide >
              <div className="h-[350px] relative rounded-lg w-[300px] flex flex-col bg-zinc-800" key={index}>
                <div className="absolute right-[20px] p-[10px] border mt-[10px] rounded-lg bg-zinc-500 text-white">
                  {" "}
                  <FaHeadphones size={34} />
                </div>
                <div className="w-full h-full overflow-hidden">
                  <img alt="" className="w-full h-full" src={data.image}></img>
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-3">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <img
                      className="w-11 h-11 rounded-full"
                      alt=""
                      src="/images/album.jpg"
                    ></img>
                    <div className="desc flex flex-col">
                      <h5>{data.title}</h5>
                      <h4>{data.sub_title}</h4>
                    </div>
                  </div>

                  <Button
                    className="bg-orange-500 h-6 rounded-lg text-xs px-3"
                    buttonText={data.price}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
