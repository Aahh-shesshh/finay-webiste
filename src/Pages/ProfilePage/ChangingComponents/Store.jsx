
import React from "react";

import Button from "../../../components/buttons/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Store = () => {
  return (
    <div className="store">
      <h3>What's hot</h3>

      <Swiper
        // spaceBetween={}
        slidesPerView={3}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album5.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album5.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album4.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album4.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album2.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album2.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album5.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album5.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album3.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album3.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
       
        
      </Swiper>

      <br />
      <br />
      <h3>Most Popular</h3>
      <Swiper
        // spaceBetween={}
        slidesPerView={3}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album5.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album5.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album4.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album4.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album2.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album2.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album5.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album5.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album3.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album3.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards">
            <div className="w-[250px] h-[260px] overflow-hidden">
              <img alt="" className="w-[250px]" src="/images/album.jpg"></img>
            </div>
            <div className="apple">
              <img className="logo" alt="" src="/images/album.jpg"></img>
              <div className="desc">
                <h5>Reo Cargun</h5>
                <h4>Frameworks</h4>
              </div>
              <Button className="price" buttonText="12.3$" />
            </div>
          </div>
        </SwiperSlide>
       
        
      </Swiper>
     
    </div>
  );
};

export default Store;
