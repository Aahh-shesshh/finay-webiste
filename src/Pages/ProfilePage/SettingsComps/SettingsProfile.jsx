import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SettingsProfile = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="audience">
      <div className="flex flex-row gap-[155px]">
        <h5>Audience and tagging</h5>
        <IoIosArrowDown
          onClick={() => setShowDropDown((prev) => !prev)}
          className="downarrow"
          style={{ transform: showDropDown ? "rotate(180deg)" : null }}
        />
      </div>
      <hr />
      {showDropDown && (
        <div className="flex flex-col gap-4">
          <p>Manage who can see your information</p>
          <p>Who can see your posts</p>
          <select>
            <option value="grapefruit">Public</option>
            <option value="lime">Private</option>
            <option selected value="coconut">
              Mutual
            </option>
            <option value="mango">Friends</option>
          </select>
          <p>Who can see your media?</p>
          <select>
            <option value="grapefruit">Public</option>
            <option value="lime">Private</option>
            <option selected value="coconut">
              Mutual
            </option>
            <option value="mango">Friends</option>
          </select>
          <p>Who can see your supporters list?</p>
          <select>
            <option value="grapefruit">Public</option>
            <option value="lime">Private</option>
            <option selected value="coconut">
              Mutual
            </option>
            <option value="mango">Friends</option>
          </select>
          <p>Manage who can see your contact info?</p>
          <select>
            <option value="grapefruit">Public</option>
            <option value="lime">Private</option>
            <option selected value="coconut">
              Mutual
            </option>
            <option value="mango">Friends</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default SettingsProfile;
