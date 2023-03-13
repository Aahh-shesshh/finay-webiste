import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FromFinay from "./FromFinay";
import LiveStream from "./LiveStream";
import Messages from "./Messages";
import RadioComp from "./RadioComp";

const Notification = () => {
  const [showBottom, setShowBottom] = useState(false);

  const [selectedCheckbox, setSelectedCheckbox] = useState("");

  function handleCheckboxChange(event) {
    setSelectedCheckbox(event.target.value);
  }

  return (
    <div className="notification">
      <h4>Notification</h4>

      <div className="flex flex-col mb-8">
        <h5>Push notifications</h5>
        <div className="checkbox-div">
          <div className="flex flex-row">
            <input name="check" type="checkbox" />
            <p>Pause all</p>
          </div>
        </div>
      </div>
      <div className="audience">
        <div className="flex flex-row items-center justify-center gap-[180px]">
          <h5>Posts and Comments</h5>
          <IoIosArrowDown
            onClick={() => setShowBottom((prev) => !prev)}
            className="downarrow"
            style={{ transform: showBottom ? "rotate(180deg)" : null }}
          />
        </div>
        <hr />
        {showBottom && (
          <div className="flex flex-col ">
            <h5>Likes</h5>
            <div className="checkbox-div">
              <div className="flex flex-row">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="checkbox1"
                  value="checkbox1"
                  checked={selectedCheckbox === "checkbox1"}
                  onChange={handleCheckboxChange}
                />
                <p>Off</p>
              </div>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="checkbox2"
                  value="checkbox2"
                  checked={selectedCheckbox === "checkbox2"}
                  onChange={handleCheckboxChange}
                />
                <p>From People Support</p>
              </div>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="checkbox3"
                  value="checkbox3"
                  checked={selectedCheckbox === "checkbox3"}
                  onChange={handleCheckboxChange}
                />
                <p>From everyone</p>
              </div>
            </div>
            <br />
            <h5>Comments</h5>
            <div className="checkbox-div">
              <div className="flex flex-row">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="checkbox1"
                  value="checkbox1"
                  checked={selectedCheckbox === "checkbox1"}
                  onChange={handleCheckboxChange}
                />
                <p>Off</p>
              </div>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="checkbox2"
                  value="checkbox2"
                  checked={selectedCheckbox === "checkbox2"}
                  onChange={handleCheckboxChange}
                />
                <p>From People Support</p>
              </div>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="checkbox3"
                  value="checkbox3"
                  checked={selectedCheckbox === "checkbox3"}
                  onChange={handleCheckboxChange}
                />
                <p>From everyone</p>
              </div>
            </div>
            <br />
            <h5>Comments with Mention</h5>
            <div className="checkbox-div">
              <div className="flex flex-row">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="checkbox1"
                  value="checkbox1"
                  checked={selectedCheckbox === "checkbox1"}
                  onChange={handleCheckboxChange}
                />
                <p>Off</p>
              </div>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="checkbox2"
                  value="checkbox2"
                  checked={selectedCheckbox === "checkbox2"}
                  onChange={handleCheckboxChange}
                />
                <p>From People Support</p>
              </div>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="checkbox3"
                  value="checkbox3"
                  checked={selectedCheckbox === "checkbox3"}
                  onChange={handleCheckboxChange}
                />
                <p>From everyone</p>
              </div>
            </div>
            <br />
            <h5>Comments Likes</h5>
            <div className="checkbox-div">
              <div className="flex flex-row">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="checkbox1"
                  value="checkbox1"
                  checked={selectedCheckbox === "checkbox1"}
                  onChange={handleCheckboxChange}
                />
                <p>Off</p>
              </div>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="checkbox2"
                  value="checkbox2"
                  checked={selectedCheckbox === "checkbox2"}
                  onChange={handleCheckboxChange}
                />
                <p>From People Support</p>
              </div>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="checkbox3"
                  value="checkbox3"
                  checked={selectedCheckbox === "checkbox3"}
                  onChange={handleCheckboxChange}
                />
                <p>From everyone</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      {<RadioComp />}
      <br/>
      {<Messages />}
      <br />
      {<LiveStream />}
      <br />
      {<FromFinay />}
    </div>
  );
};

export default Notification;
