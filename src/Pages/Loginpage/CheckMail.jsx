import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import ConstFooter from "../const-leftpage/ConstFooter";

const CheckMail = () => {
  return (
    <div className="forget-password-page">
      <h3>Check your Mail</h3>
      <p>
        We sent a password reset link to Kedina.smith@gmail.com. Please check
        the email.
      </p>
      <hr className="w-72 border" />
      <Link to="/ResetPassword">
        <Button buttonText="ResetPassword" className="button" />
      </Link>
      <p>
        Didn’t receive the email? <span className="cursor-pointer text-orange-500">Click to resend</span>
      </p>

      <ConstFooter />
      <div className="purple-blur"></div>
      <div className="orange-blur2"></div>
    </div>
  );
};

export default CheckMail;
