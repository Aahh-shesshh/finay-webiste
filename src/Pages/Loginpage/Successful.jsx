import React from "react";
import Button from "../../components/buttons/Button";
import ConstFooter from "../../styling/const-leftpage/ConstFooter";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const Successful = () => {
  return (
    <div className="login-page-mail">
      <div className="right-mark">
        <TiTick className="tick" />
      </div>
      <div className="shadow"></div>
      <div>
        <h3>Successful</h3>
        <p>
          Your passward has been successfully reset.<br></br> Click below to log
          in.
        </p>
      </div>
      <div className="mt-[20px]">
        <Link to="/">
          <Button buttonText="Continue" className="Reset" />
        </Link>
      </div>
      <div className="relative left-[65px] mt-[80px]">
        <ConstFooter />
      </div>

      <div className="purple-blur"></div>
      <div className="orange-blur1"></div>
      <div className="orange-blur2"></div>
    </div>
  );
};

export default Successful;
