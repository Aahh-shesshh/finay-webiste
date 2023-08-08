import Button from "../../../components/buttons/Button";
import { HiPencil } from "react-icons/hi";
import { useState } from "react";
import BackStage from "./Caurosel";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { incrementByOne } from "../../../Store/Slices/ProfileSlice";
import {BsCamera} from "react-icons/bs"

const MiddleDiv = () => {
  const [showModal, setShowModal] = useState(false);
  const counterProfile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  return (
    <div className="middle-div">
      {showModal ? (
        <BackStage>
          <div className="backstage-caurosel">
            <div className="flex flex-row gap-[20px]">
              <h4>Backstage pass </h4>
              <ImCross
                className="cross-sign"
                onClick={() => setShowModal(false)}
              />
            </div>
            <a href="sjg" className="cursor-pointer">
              <div className="basic">
                <div className="flex flex-row">
                  <h6>Basic - $400</h6>
                  <div className="passes">10 Passes</div>
                </div>
                <div>
                  <p>Access to the Fan only posts.</p>
                </div>
              </div>
            </a>
            <a href="sjg" className="cursor-pointer">
              <div className="basic">
                <div className="flex flex-row">
                  <h6>Luxury - $400</h6>
                  <div className="passes">100 Passes</div>
                </div>
                <div>
                  <p>
                    Access to the Fan only posts, live stream, Songs, events &
                    Merch.
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-row mt-4 gap-7">
              <Button buttonText="Buy Pass" className="BuyPass" />
              <Button buttonText="Save" className="Save" />
            </div>
          </div>
        </BackStage>
      ) : null}

      {counterProfile ? (
        <div>
          <div 
          onClick={() => dispatch(incrementByOne())}
          className="items-center relative flex flex-row ml-32  gap-3  pt-12 cursor-pointer">
            <AiOutlineArrowLeft    className="text-white" />
            <h4 className="text-white">Back</h4>
          </div>
          <div className="rounded-full bg-orange-500 w-[40px] h-[40px] items-center left-[1000px] top-[40px] relative justify-center flex">
            <Button buttonText ={<BsCamera />} />
            </div>
        </div>
      ) : (
        <div className="flex flex-row gap-2">
          <Button
            handleClick={() => setShowModal(true)}
            className="backstage-pass-btn"
            buttonText="Backstage Pass"
          />
          <Button className="Pen-btn" icon={<HiPencil />} />
        </div>
      )}
    </div>
  );
};

export default MiddleDiv;
