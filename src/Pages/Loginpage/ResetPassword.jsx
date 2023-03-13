import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import ConstFooter from "../signuppage/const-leftpage/ConstFooter";

const ResetPassword = () => {
  return (
    <div className="login-page-reset">
      <div>
        <h3>Reset Your Password</h3>
        <p>Your new password must be different to previously used passwords.</p>
      </div>
      <div className="input-div">
        <input placeholder="Password"></input>
        <p>It should be more than 6+ characters</p>
      </div>
      <div className="mt-[30px]">
        <Link to="/LoginPage/Successful">
          <Button className="Reset" buttonText="Reset" />
        </Link>
      </div>
      <div className="relative left-[20px] mt-[80px]">
        <ConstFooter />
      </div>
      <div className="purple-blur"></div>
      <div className="orange-blur1"></div>
      <div className="orange-blur2"></div>
    </div>
  );
};

export default ResetPassword;
