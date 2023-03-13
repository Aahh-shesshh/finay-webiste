import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FromFinay = () => {
  const [showBottom, setShowBottom] = useState(false);
  return (
    <div className="audience">
      <div className="flex flex-row items-center justify-center gap-[250px]">
        <h5>From Finay</h5>
        <IoIosArrowDown
          onClick={() => setShowBottom((prev) => !prev)}
          className="downarrow"
          style={{ transform: showBottom ? "rotate(180deg)" : null }}
        />
      </div>
      <hr />
      {showBottom && (
        <div className="radio">
          <h5>Reminders</h5>
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
          <h5>Products Announcement and Feedbacks</h5>
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
          <h5>Support Requests</h5>
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
          <h5>Unrecognized Logins</h5>
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

export default FromFinay;
