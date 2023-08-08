import React from "react";

import Button from "../../../components/buttons/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import swipperData from "../../../Data/swiperData";

const Store = () => {
  return (
    <div className="store">
      <h3>What's hot</h3>
      <br />
      <Swiper
        autoplay={true}
        className="mySwiper"
        slidesPerView={4}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {swipperData.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="cards">
                <div className="w-[250px] h-[260px] overflow-hidden">
                  <img alt="" className="w-[250px]" src={data.image}></img>
                </div>
                <div className="flex flex-row items-center justify-between px-2">
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
                    className="bg-orange-500 h-6 rounded-md text-xs px-3"
                    buttonText={data.price}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <br />
      <br />
      <h3>Most Popular</h3>
      <br />
      <Swiper
        autoplay={true}
        className="mySwiper"
        slidesPerView={4}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {swipperData.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="cards">
                <div className="w-[250px] h-[260px] overflow-hidden">
                  <img alt="" className="w-[250px]" src={data.image}></img>
                </div>
                <div className="flex flex-row items-center justify-between px-2">
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
                    className="bg-orange-500 h-6 rounded-md text-xs px-3"
                    buttonText={data.price}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <br />
    </div>
  );
};

export default Store;
