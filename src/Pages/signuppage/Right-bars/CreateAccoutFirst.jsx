import React from "react";
import Cards from "../../../components/cards/Cards";
import { FaHeadphones } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import Button from "../../../components/buttons/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { increment } from "../../../Store/Slices/NextButtonSlice";

const CreateAccout = () => {
  const [activeClass1, setActivclass1] = React.useState(true);
  // const [activeClass2, setActivclass2] = React.useState(false);

  const dispatch = useDispatch();

  return (
    <div className="create-account">
      <div className="top-div">
        <h3>Create Account</h3>
        <p>
          Select an option to start buying, selling and collecting NFTs on
          Finay.
        </p>
        <h4>Tell us a bit about you</h4>
      </div>
      <div className="cards-div">
        <Cards
          handleClick={() => setActivclass1((prev) => !prev)}
          className={activeClass1 ? "first-card" : "second-card"}
          Logo={<FaHeadphones className="FaHeadPhones" />}
          h3="I am a Fan"
          p="I want to listen and support my favourite artists"
        />
        <Cards
          className={!activeClass1 ? "first-card" : "second-card"}
          Logo={<GiMusicalNotes className="GiMusicNotes" />}
          h3="I am a Artist"
          handleClick={() => setActivclass1((prev) => !prev)}
          p="I want to create and release Songs with fans."
        />
      </div>
      <div className="mt-3 flex items-center content-center w-[100%]">
        <Button
          className="flex items-center gap-5 pl-11 bg-[#FF8200] w-[170px] h-11 rounded-[30px]"
          buttonText="Next"
          icon={<AiOutlineArrowRight />}
          handleClick={() => dispatch(increment())}
        />
      </div>
    </div>
  );
};

export default CreateAccout;
