import React from "react";
import LeftBar from "../../styling/const-leftpage/LeftBar";
import EnterCode from "./Right-bars/EnterCode";
import CreateAccout from "./Right-bars/CreateAccoutFirst";
import Footer from "./Right-bars/Footer";
import SignUp from "./Right-bars/SignUp";
import { useSelector } from "react-redux";

const SignUpPage = () => {
  const styleForNonSelectedDivWhite = {
    backgroundColor: "white",
    color: "black",
    fontSize: "10px",
  };
  const styleForNonSelectedDiv = {
    backgroundColor: "black",
    border: "1px solid white",
    color: "white",
    fontSize: "10px",
  };
  const styleForSelectedDiv = {
    backgroundColor: "#FF8200",
    color: "black",
    fontSize: "10px",
  };

  const nextBtnIndex = useSelector((state) => state.next.value);
  const signupBtnIndex = useSelector((state) => state.signup.value);
  const verifyBtnIndex = useSelector((state) => state.verify.value);
  console.log(signupBtnIndex);

  return (
    <div className="sign-up-container">
      <div className="left-bar">
        <LeftBar />
      </div>
      <div className="right-bar">
        <div className="numbers-div">
          <div
            className="div-1"
            style={
              nextBtnIndex === 0
                ? styleForNonSelectedDivWhite
                : styleForSelectedDiv
            }
          >
            <h5>1</h5>
          </div>
          <hr />
          <div
            className="div-2"
            style={
              nextBtnIndex === 0
                ? styleForNonSelectedDiv
                : signupBtnIndex === 0
                ? styleForNonSelectedDivWhite
                : styleForSelectedDiv
            }
          >
            <h5>2</h5>
          </div>
          <hr />
          <div
            className="div-3"
            style={
              signupBtnIndex === 0
                ? styleForNonSelectedDiv
                : verifyBtnIndex === 0
                ? styleForNonSelectedDivWhite
                : styleForSelectedDiv
            }
          >
            <h5>3</h5>
          </div>
        </div>
        {nextBtnIndex === 0 ? (
          <CreateAccout />
        ) : signupBtnIndex === 0 ? (
          <SignUp />
        ) : (
          <EnterCode />
        )}

        <Footer />
        
      </div>
    </div>
  );
};

export default SignUpPage;
