import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";
import { BsChat, BsCurrencyBitcoin } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BiWallet, BiChevronRight } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { incrementByOne } from "../../../Store/Slices/ProfileSlice";
import { incrementByOneHome } from "../../../Store/Slices/HomeButtonSlice";
import { setTrue } from "../../../Store/Slices/SettingsSlice";
import { Link } from "react-router-dom";
import Caurosel from "./Caurosel";

const TopNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(incrementByOne());
    return setSelectedOption(1);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("status");
  };
  const handleProfileClick = () => {
    setSelectedOption(0);
    return setShowModal((prev) => !prev);
  };
  const handleSettingsClick = () => {
    setSelectedOption(2);
    return dispatch(setTrue());
  };

  const walletSelection = () => {
    return (
      <div>
        <div className="flex flex-row gap-4 items-center relative   right-8 justify-center ">
          <BiWallet className="text-white w-[30px] h-[30px]" />{" "}
          <h4 className="text-white text-lg">Select a Wallet</h4>
        </div>
        <p className="w-[200px] text-white text-sm mb-3">
          Please create your wallet to start selling songs, events, merchant and
          enable fan to support you.
        </p>
        <div className="create-wallet" onClick={() => setShowWallet(false)}>
          <BsCurrencyBitcoin />
          <h4>Bitcoin</h4>
        </div>
      </div>
    );
  };

  return (
    <div className="navbar px-6">
      {showModal ? (
        <Caurosel>
          <div className="profile-caurosel">
            {showWallet ? (
              <div>{walletSelection()}</div>
            ) : (
              <div>
                <div
                  className="create-wallet"
                  onClick={() => setShowWallet((prev) => !prev)}
                >
                  <BiWallet />
                  <h4>Create your wallet</h4>
                  <BiChevronRight />
                </div>
                <hr />
                <div className="bottom-settings" onClick={handleClick}>
                  <CgProfile
                    style={{
                      color:
                        selectedOption === 1
                          ? "#FF8200"
                          : selectedOption === 2
                          ? "white"
                          : "white",
                    }}
                    className="icons-wallet"
                  />
                  <h4
                    style={{
                      color:
                        selectedOption === 1
                          ? "#FF8200"
                          : selectedOption === 2
                          ? "white"
                          : "white",
                    }}
                  >
                    My Profile
                  </h4>
                </div>
                <div
                  className="bottom-settings"
                  onClick={() => handleSettingsClick()}
                >
                  <FiSettings
                    style={{
                      color:
                        selectedOption === 2
                          ? "#FF8200"
                          : selectedOption === 1
                          ? "white"
                          : "white",
                    }}
                    className="icons-wallet"
                  />
                  <h4
                    style={{
                      color:
                        selectedOption === 2
                          ? "#FF8200"
                          : selectedOption === 1
                          ? "white"
                          : "white",
                    }}
                  >
                    Settings
                  </h4>
                </div>
                <div
                  className="bottom-settings"
                  onClick={() => setSelectedOption(3)}
                >
                  <Link
                    to="/"
                    onClick={clearLocalStorage}
                    className="flex items-center justify-center gap-6"
                  >
                    <AiOutlineLogout
                      style={{
                        color:
                          selectedOption === 3
                            ? "#FF8200"
                            : selectedOption === 2
                            ? "white"
                            : "white",
                      }}
                      className="icons-wallet"
                    />

                    <h4
                      style={{
                        color:
                          selectedOption === 3
                            ? "#FF8200"
                            : selectedOption === 2
                            ? "white"
                            : "white",
                      }}
                    >
                      Sign-out
                    </h4>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Caurosel>
      ) : null}
      <div className="flex flex-row gap-6 items-center">
        <AiOutlineMenu
          color="white"
          onClick={() => dispatch(incrementByOneHome())}
          className=" cursor-pointer"
        />
        <div className="flex flex-row gap-1">
          <div className="icon1 mt-1"></div>
          <div className="icon2"></div>
        </div>
        <input placeholder="Search music, artists, events..."></input>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <BsChat color="white" />
        <IoIosNotificationsOutline color="white" size={20} />
        <div
          onClick={handleProfileClick}
          className=" cursor-pointer flex flex-row gap-2"
        >
          <CgProfile color="white" size={20} />

          <h4>Hi,{localStorage.getItem("Username")} </h4>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
