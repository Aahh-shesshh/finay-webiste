import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import ConstFooter from "../../styling/const-leftpage/ConstFooter";
// import Footer from "../signuppage/Right-bars/Footer";

const ForgetPassword = () => {
  return (
    <div className="login-page-fp">
      <div className="mb-[10px] flex flex-col gap-4 ">
        <h3>Forgot Password?</h3>
        <p>
          Enter your account's email and we'll send you an email to reset the
          password
        </p>
      </div>
      <div className="input-div">
        <input placeholder="Email"></input>
      </div>
      <div className="mt-[20px]">
        <Link to="/CheckMail">
          <Button className="Send-Mail" buttonText="Send Mail" />
        </Link>
      </div>
      <div className="relative left-8 mt-[30px]">
        <ConstFooter />
      </div>
      <div className="purple-blur"></div>
      <div className="orange-blur1"></div>
      <div className="orange-blur2"></div>
      <div></div>
    </div>
  );
};

export default ForgetPassword;
