import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import ConstFooter from "../signuppage/const-leftpage/ConstFooter";

const CheckMail = () => {
  return (
    <div className="login-page-mail">
      <div>
        <h3>Check your Mail</h3>
        <p>
          We sent a password reset link to Kedina.smith@gmail.com. Please check
          the email.
        </p>
        <hr />
        <Link to="/LoginPage/ResetPassword">
          <Button buttonText="ResetPassword" className="check-mail" />
        </Link>

        <p className="mt-[30px]">
          Didn’t receive the email? <span>Click to resend</span>
        </p>
      </div>
      <ConstFooter />
      <div className="purple-blur"></div>
      <div className="orange-blur1"></div>
      <div className="orange-blur2"></div>
    </div>
  );
};

export default CheckMail;
