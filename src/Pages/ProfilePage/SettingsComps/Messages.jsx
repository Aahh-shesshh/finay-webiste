import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Messages = () => {
  const [showBottom, setShowBottom] = useState(false);
  return (
    <div className="audience">
      <div className="flex flex-row items-center justify-center gap-[250px]">
        <h5>Messages</h5>
        <IoIosArrowDown
          onClick={() => setShowBottom((prev) => !prev)}
          className="downarrow"
          style={{ transform: showBottom ? "rotate(180deg)" : null }}
        />
      </div>
      <hr />
      {showBottom && (
        <div className="radio">
          <h5>Message Requests</h5>
          <div className="mt-[10px]">
            <div className="flex flex-row gap-[10px] mb-2 items-center">
              <div className="input-radio">
                <input type="radio" value="Male" name="gender" />
              </div>
              <p>Off</p>
            </div>
            <div className="flex flex-row gap-[10px] items-center">
              <div className="input-radio">
                <input type="radio" value="Male" name="gender" />
              </div>
              <p>On</p>
            </div>
          </div>
          <br />
          <h5>Message</h5>
          <div className="mt-[10px]">
            <div className="flex flex-row gap-[10px] mb-2 items-center">
              <div className="input-radio">
                <input type="radio" value="Male" name="gender" />
              </div>
              <p>Off</p>
            </div>
            <div className="flex flex-row gap-[10px] items-center">
              <div className="input-radio">
                <input type="radio" value="Male" name="gender" />
              </div>
              <p>On</p>
            </div>
          </div>
          <br/>
          
        </div>
      )}
    </div>
  );
};

export default Messages;
