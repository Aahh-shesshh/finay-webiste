import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import ConstFooter from "../const-leftpage/ConstFooter";
// import Footer from "../signuppage/Right-bars/Footer";

const ForgetPassword = () => {
  return (
    <div className="forget-password-page ">
        <h3>Forgot Password?</h3>
        <p>
          Enter your account's email and we'll send you an email to reset the
          password
        </p>
      <div className="input-div">
        <input placeholder="Email"></input>
      </div>
        <Link to="/CheckMail">
          <Button className="button" buttonText="Send Mail" />
        </Link>
        <ConstFooter />
      <div className="purple-blur"></div>
      {/* <div className="orange-blur1"></div> */}
      <div className="orange-blur2"></div>
      <div></div>
    </div>
  );
};

export default ForgetPassword;
