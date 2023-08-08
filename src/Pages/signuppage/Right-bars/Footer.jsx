import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import ConstFooter from "../../const-leftpage/ConstFooter";

const Footer = () => {
  return (
    <div className="footer relative right-12">
      <Link to="/">
        <h3>
          Already have an account?
          <span className="cursor-pointer text-orange-600 ml-2">Login</span>
          <AiOutlineArrowRight style={{ color: "#FF8200" }} />
        </h3>
      </Link>
      <ConstFooter />
    </div>
  );
};

export default Footer;
