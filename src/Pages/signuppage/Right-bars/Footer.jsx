import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/LoginPage">
        <h3>
          Already have an account?<span>Login</span>
          <AiOutlineArrowRight style={{ color: "#FF8200" }} />
        </h3>
      </Link>

      <footer>© 2022 Finay. All Rights Reserved.</footer>
    </div>
  );
};

export default Footer;
