import React from "react";
import Button from "../../../components/buttons/Button";

const Security = () => {
  return (
    <div className="account">
      <h4>Security</h4>
      <div className="form">
        <div className="flex flex-col gap-3">
          <div className="input-details">
            <p>Current Password</p>
            <input placeholder="********"></input>
          </div>
          <div className="input-details">
            <p>Password</p>
            <input placeholder="*******"></input>
          </div>
         
        </div>
        <div className="flex flex-col gap-3">
          <div className="input-details">
            <p>Repeat Password</p>
            <input placeholder="******"></input>
          </div>
         
        </div>
      </div>
      <Button buttonText="Save" className="Save-btn"/>
    </div>
  );
};

export default Security;
