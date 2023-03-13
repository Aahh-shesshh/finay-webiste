import { React, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../../components/buttons/Button";

const Discoverability = () => {
  const [showDropDown, setShowDropDown] = useState(true);
  return (
    <div className="audience">
      <div className="flex flex-row gap-[100px]">
        <h5>Discoverability and contacts</h5>
        <IoIosArrowDown
          onClick={() => setShowDropDown((prev) => !prev)}
          className="downarrow"
          style={{ transform: showDropDown ? "rotate(180deg)" : null }}
        />
      </div>
      <hr />
      {showDropDown && (
        <div className="flex flex-col gap-4">
          <p>
            Control your discoverability setting and manage contacts you’ve
            imported.
          </p>
          <div className="checkbox-div">
            <div className="flex flex-row">
              <input name="check" type={"checkbox"}></input>
              {/* <label htmlFor="check">Protect your posts</label> */}
              <div>
                <p className="text-xs mt-2">Anyone can send me a request.</p>
              </div>
            </div>
            <div className="flex flex-row">
              <input name="check" type={"checkbox"}></input>
              {/* <label htmlFor="check">Protect your posts</label> */}
              <div>
                <p className="text-xs mt-2">
                  Only a mitual connection can send me a request.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <input name="check" type={"checkbox"}></input>
              {/* <label htmlFor="check">Protect your posts</label> */}
              <div>
                <p className="text-xs mt-2">Sync address book contacts</p>
              </div>
            </div>
          </div>
          <Button buttonText="Remove all contacts" className="rm-contacts " />
          <p>
            Remove any contacts you’ve previously uploaded and turn off syncing
            with Finay on all devices. Please be aware that this takes a little
            time.
          </p>
        </div>
      )}
    </div>
  );
};

export default Discoverability;
