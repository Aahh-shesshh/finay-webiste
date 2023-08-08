import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import ConstFooter from "../const-leftpage/ConstFooter";

const ResetPassword = () => {
  return (
    <div className="forget-password-page">
      <h3>Reset Your Password</h3>
      <p>Your new password must be different to previously used passwords.</p>

      <div className="input-div">
        <input placeholder="Password"></input>
      </div>
      <p>It should be more than 6+ characters</p>

      <Link to="/Successful">
        <Button className="button" buttonText="Reset" />
      </Link>

      <ConstFooter />

      <div className="purple-blur"></div>
      <div className="orange-blur2"></div>
    </div>
  );
};

export default ResetPassword;
