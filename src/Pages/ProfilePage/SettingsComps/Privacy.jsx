import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../../components/buttons/Button";
import Discoverability from "./Discoverability";
import SettingsProfile from "./SettingsProfile";

const Privacy = () => {
  const [showAudience, setShowAudience] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [message, setMessage] = useState(false);
  const [live, setLive] = useState(false);
  return (
    <div className="privacy">
      <h4>Privacy</h4>
      <div className="audience">
        <div className="flex flex-row gap-[155px]">
          <h5>Audience and tagging</h5>
          <IoIosArrowDown
            onClick={() => setShowAudience((prev) => !prev)}
            className="downarrow"
            style={{ transform: showAudience ? "rotate(180deg)" : null }}
          />
        </div>
        <hr />
        {showAudience && (
          <div className="flex flex-col">
            <p>
              Manage what information you allow other people on Finay to see.
            </p>
            <div className="checkbox-div">
              <div className="flex flex-row">
                <input name="check" type={"checkbox"}></input>
                {/* <label htmlFor="check">Protect your posts</label> */}

                <p className="text-xs mt-[6px]">Protect your posts</p>
              </div>
            </div>
            <h6 className="ml-[50px]" > Only show your posts to people who follow you.</h6>
          </div>
        )}
      </div>
      <div className="audience">
        <div className="flex flex-row gap-[300px]">
          <h5>Block </h5>
          <IoIosArrowDown
            onClick={() => setShowBlock((prev) => !prev)}
            className="downarrow"
            style={{ transform: showBlock ? "rotate(180deg)" : null }}
          />
        </div>
        <hr />
        {showBlock && (
          <div>
            <p>Manage the accounts the you have blocked.</p>
            <div className="flex w-[300px] flex-row mt-[20px] mb-5">
              <img
                src="/images/drake.jpg"
                className="w-[40px] h-[40px] rounded-full mr-[10px] mt-2"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="name">Yoloti Bailey</h5>
                <span className="handles-name">alfjd@slkdfj</span>
              </div>
              <Button buttonText="Blocked" className="blocked" />
            </div>
            <hr />
            <div className="flex w-[300px] flex-row mt-[20px] mb-5">
              <img
                src="/images/drake.jpg"
                className="w-[40px] h-[40px] rounded-full mr-[10px] mt-2"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="name">Yoloti Bailey</h5>
                <span className="handles-name">alfjd@slkdfj</span>
              </div>
              <Button buttonText="Blocked" className="blocked" />
            </div>
            <hr />
          </div>
        )}
      </div>
      <div className="audience">
        <div className="flex flex-row gap-[270px]">
          <h5>Message</h5>
          <IoIosArrowDown
            onClick={() => setMessage((prev) => !prev)}
            className="downarrow"
            style={{ transform: message ? "rotate(180deg)" : null }}
          />
        </div>
        <hr />
        {message && (
          <div className="flex flex-col">
            <p>Manage who can message you directly</p>
            <div className="checkbox-div">
              <div className="flex flex-row">
                <input name="check" type={"checkbox"}></input>
                {/* <label htmlFor="check">Protect your posts</label> */}
                <div>
                  <p className="text-xs mt-2">
                    Allow message requests from everyone
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <input name="check" type={"checkbox"}></input>
                {/* <label htmlFor="check">Protect your posts</label> */}
                <div>
                  <p className="text-xs mt-2">Show read receipts</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="audience">
        <div className="flex flex-row gap-[310px]">
          <h5>Live</h5>
          <IoIosArrowDown
            onClick={() => setLive((prev) => !prev)}
            className="downarrow"
            style={{ transform: live ? "rotate(180deg)" : null }}
          />
        </div>
        <hr />
        {live && (
          <div className="flex flex-col">
            <p>Manage who can message you directly</p>
            <div className="checkbox-div">
              <div className="flex flex-row">
                <input name="check" type={"checkbox"}></input>
                {/* <label htmlFor="check">Protect your posts</label> */}
                <div>
                  <p className="text-sm mt-2">
                    Save the live stream to the Recorded
                  </p>
                </div>
              </div>
            </div>
            <h6 className="ml-[50px]">
              Save the live stream to the recorded section of Backstage Pass.
              From there who ever have access to backstage password they can see
              the recorded video anytime.
            </h6>
          </div>
        )}
      </div>
      {<SettingsProfile />}
      {<Discoverability />}
    </div>
  );
};

export default Privacy;
