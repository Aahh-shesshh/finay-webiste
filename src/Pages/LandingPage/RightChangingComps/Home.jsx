import React from "react";
import Button from "../../../components/buttons/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import supportors from "../../../Data/Supportors";
import { FaHeadphones } from "react-icons/fa";
import swipperData from "../../../Data/swiperData";
const Home = () => {
  return (
    <div className="home-page">
      <div className="explore">
        <div className="flex flex-col gap-5">
          <h1>
            All the best Music NFT on <span>Finay</span>
          </h1>
          <p>
            Create or explore the best music NFT from your favourite artists.
          </p>
          <Button buttonText="Explore" className="Explore-btn" />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center card-songs">
          <img src="/images/album4.jpg" alt="asd" />
          <h6>See you Again</h6>
          <h5>Wiz Khalifa - Charlie puth</h5>
          <Button buttonText="Buy" className="Buy" />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center card-songs2">
          <img src="/images/album5.jpg" alt="asd" />
          <h6>See you Again</h6>
          <h5>Wiz Khalifa - Charlie puth</h5>
          <Button buttonText="Buy" className="Buy" />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center card-songs3">
          <img src="/images/album3.jpg" alt="asd" />
          <h6>See you Again</h6>
          <h5>Wiz Khalifa - Charlie puth</h5>
          <Button buttonText="Buy" className="Buy" />
        </div>
      </div>
      <div className="discover">
        <div>
          <img src="/images/nft.jpg" alt="adf" />
        </div>
        <div className="flex flex-col">
          <h5>Discover event, merch, songs at one place.</h5>
          <h6>
            Now you can easily create event, merch, songs by just clicking the
            below button. You can easily promote songs in the market and win
            backstge pass.
          </h6>
          <Button buttonText="Create" className="create-btn" />
        </div>
      </div>
      <div className="home-slider">
        <div className="flex flex-row items-center justify-evenly gap-[700px]">
          <h3 className="text-white text-4xl mb-8">What's hot</h3>
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
              <SwiperSlide key={index}>
                <div className="h-[350px] rounded-lg w-[300px] flex flex-col bg-zinc-800">
                  <div className="absolute right-[50px] p-[10px] border mt-[10px] rounded-lg bg-zinc-500 text-white">
                    {" "}
                    <FaHeadphones size={34} />
                  </div>
                  <div className="w-full h-full overflow-hidden">
                    <img
                      alt=""
                      className="w-full h-full"
                      src={data.image}
                    ></img>
                  </div>
                  <div className="apple2">
                    <img className="logo" alt="" src={data.image}></img>
                    <div className="desc">
                      <h5>{data.title}</h5>
                      <h4>{data.sub_title}</h4>
                    </div>
                    <Button className="price" buttonText={data.price} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="home-slider">
        <div className="flex flex-row items-center justify-evenly gap-[600px]">
          <h3 className="text-white text-4xl mb-8">Popular Collection</h3>
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
              <SwiperSlide key={index}>
                <div className="h-[350px] rounded-lg w-[300px] flex flex-col bg-zinc-800">
                  <div className="absolute right-[50px] p-[10px] border mt-[10px] rounded-lg bg-zinc-500 text-white">
                    {" "}
                    <FaHeadphones size={34} />
                  </div>
                  <div className="w-full h-full overflow-hidden">
                    <img
                      alt=""
                      className="w-full h-full"
                      src={data.image}
                    ></img>
                  </div>
                  <div className="apple2">
                    <img className="logo" alt="" src={data.image}></img>
                    <div className="desc">
                      <h5>{data.title}</h5>
                      <h4>{data.sub_title}</h4>
                    </div>
                    <Button className="price" buttonText={data.price} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="download">
        <div>
          <h1>
            Download the
            <span>Finay app,</span> track your <span> NFT</span> portfolio and
            discover drops.
          </h1>
          <div className="flex flex-row ml-[20px] gap-[20px]">
            <div className="appstore">
              <img src="/images/appstore.jpg" alt="asdf" />
              <h5>App store</h5>
            </div>
            <div className="appstore">
              <img src="/images/playstore.jpg" alt="asfd" />
              <h5>Google play</h5>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-[170px] mt-9 h-[170px]"
            src="/images/qr.jpg"
            alt="asdf"
          />
        </div>
      </div>
      <div>
        <h3 className="text-white text-4xl mb-8">Artists</h3>
        <div className="supporters">
          {supportors.map((data, index) => {
            return (
              <div className="supportors-div" key={index}>
                <div className="supporters-overlay cursor-pointer">
                  <img src={data.image} alt="img"></img>
                </div>
                <p>{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="home-slider">
        <div className="flex flex-row items-center justify-evenly gap-[600px]">
          <h3 className="text-white text-4xl mb-8">Upcoming Events</h3>
          <span className="cursor-pointer text-orange-500 underline-offset-2">
            See all
          </span>
        </div>

        <Swiper
          // spaceBetween={}
          slidesPerView={2}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          // loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {swipperData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="h-[350px] rounded-lg w-[450px] flex flex-col bg-zinc-800">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      alt=""
                      className="w-full h-full"
                      src={data.image}
                    ></img>
                  </div>
                  <div className="apple3">
                    <img className="logo" alt="" src={data.image}></img>
                    <div className="desc">
                      <h5>{data.title}</h5>
                      <h4>{data.sub_title}</h4>
                    </div>
                    <div className="tommorow">{data.date}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="home-slider">
        <div className="flex flex-row items-center justify-evenly gap-[700px]">
          <h3 className="text-white text-4xl mb-8">Top Selling</h3>
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
              <SwiperSlide key={index}>
                <div className="h-[350px] rounded-lg w-[300px] flex flex-col bg-zinc-800">
                  <div className="absolute right-[50px] p-[10px] border mt-[10px] rounded-lg bg-zinc-500 text-white">
                    {" "}
                    <FaHeadphones size={34} />
                  </div>
                  <div className="w-full h-full overflow-hidden">
                    <img
                      alt=""
                      className="w-full h-full"
                      src={data.image}
                    ></img>
                  </div>
                  <div className="apple2">
                    <img className="logo" alt="" src={data.image}></img>
                    <div className="desc">
                      <h5>{data.title}</h5>
                      <h4>{data.sub_title}</h4>
                    </div>
                    <Button className="price" buttonText={data.price} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
