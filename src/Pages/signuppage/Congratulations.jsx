import React from "react";
import { createPortal } from "react-dom";
import { BiChevronLeft } from "react-icons/bi";
import Button from "../../components/buttons/Button";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Congratulations = (props) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(
    <div className="congratulations-div h-[100vh]">
      <div className="back-div" onClick={props.goBack}>
        <BiChevronLeft className="BiChevronLeftB" />
        <p>Back</p>
      </div>

      <div className="text-div-congratulations flex items-center content-center flex-col">
        <h4>Congratulations!</h4>
        <p>
          Your email has been successfully verified. Now you can access all the
          features.
        </p>
      </div>
      <div>
        <Link to="/">
          <Button className="dashboard-btn" buttonText="Go to Login Page" />
        </Link>
      </div>
      <div>
        <footer className="mt-[30px]">
          © 2022 Finay. All Rights Reserved.
        </footer>
      </div>
      <div className="blur-3"></div>
    </div>,
    elRef.current
  );
};

export default Congratulations;
