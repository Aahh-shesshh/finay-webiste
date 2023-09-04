import React from "react";
import Button from "../../../components/buttons/Button";
import "swiper/css";
import "swiper/css/navigation";
import supportors from "../../../Data/Supportors";
// import {} from "";
import WhatsHotSwiper from "../swipers/WhatsHotSwiper";
import PopularCollection from "../swipers/PopularCollection";
import UpcomingEvents from "../swipers/UpcomingEvents";
import TopSelling from "../swipers/TopSelling";

const Home = () => {
  return (
    <div className="px-8 flex flex-col gap-6">
      <div className="explore items-center justify-between pl-8 pr-28 py-4">
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

      <WhatsHotSwiper />
      <PopularCollection />
      <div className="download items-center justify-between px-5">
        <div>
          <h1>
            Download the
            <span>Finay app,</span> track your <span> NFT</span> portfolio and
            discover drops.
          </h1>
          <div className="flex flex-row ml-[20px] gap-[20px]">
            <div className="flex flex-row items-center justify-center appstore border py-2 px-4 rounded-md">
              <img src="/images/appstore.jpg" alt="asdf" />
              <h5>App store</h5>
            </div>
            <div className="flex flex-row items-center justify-center appstore py-2 px-4 border rounded-md">
              <img src="/images/playstore.jpg" alt="asfd" />
              <h5>Google play</h5>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-[170px] rounded-lg mt-9 h-[170px]"
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
      <UpcomingEvents />
      <TopSelling />
    </div>
  );
};

export default Home;
