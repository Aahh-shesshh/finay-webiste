import React from "react";
import Button from "../../components/buttons/Button";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import ConstFooter from "../const-leftpage/ConstFooter";

const Successful = () => {
  return (
    <div className="forget-password-page">
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
          <Button buttonText="Continue" className="button" />
        </Link>
      </div>
        <ConstFooter />

      <div className="purple-blur"></div>
      <div className="orange-blur2"></div>
    </div>
  );
};

export default Successful;
