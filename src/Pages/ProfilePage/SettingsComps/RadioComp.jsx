import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const RadioComp = () => {
  const [showBottom, setShowBottom] = useState(false);
  return (
    <div className="audience">
      <div className="flex flex-row gap-[155px]">
        <h5>Supporters & Supporting</h5>
        <IoIosArrowDown
          onClick={() => setShowBottom((prev) => !prev)}
          className="downarrow"
          style={{ transform: showBottom ? "rotate(180deg)" : null }}
        />
      </div>
      <hr />
      {showBottom && (
        <div className="radio">
          <h5>New Supporter</h5>
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
          <h5>Accepeted Support Requests</h5>
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
          <h5>Accout Suggestions</h5>
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
        </div>
      )}
    </div>
  );
};

export default RadioComp;
