import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { setZeroNextBtn } from "../../Store/Slices/NextButtonSlice";
import { setZeroSignUp } from "../../Store/Slices/SignUpBtnSlice";
import { setZero } from "../../Store/Slices/VerifySlice";
import ConstFooter from "../signuppage/const-leftpage/ConstFooter";
// import Footer from "../signuppage/Right-bars/Footer";

const LoginPage = () => {
  const dispatch = useDispatch();

  const back = () => {
    return (
      dispatch(setZeroNextBtn()), dispatch(setZero()), dispatch(setZeroSignUp())
    );
  };
  return (
    <div className="login-page">
      <div className="top-div-login">
        <h3>Welcome Back,</h3>
        <div className="flex flex-row">
          <Link to="/" onClick={back}>
            <p>
              Don't have account?{" "}
            
                {" "}
                <span>
                  Signup <AiOutlineArrowRight className="AiOutlineArrowRight" />
                </span>
              
            </p>
          </Link>
        </div>
      </div>
      <div className="input-div">
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <Link to="/LoginPage/ForgetPassword">
          {" "}
          <span>Forgot Password?</span>
        </Link>
      </div>
      <div className="login-button-div">
        <Link to="/ProfilePage">
          {" "}
          <Button buttonText="Login" className="LoginButton" />
        </Link>
      </div>
      <div className="flex flex-row items-center content-center mt-5">
        <hr />
        <h6>or continue with</h6>
        <hr />
      </div>
      <div className="flex flex-row items-center content-center gap-3 mt-5  mb-3 ">
        <a href="www">
          {" "}
          <img className="google" src="images/google.jpg" alt="google" />
        </a>
        <a href="wwwja">
          <img className="iphone" src="images/iphone.jpg" alt="google" />
        </a>
      </div>
      <div className="login-footer">
        <ConstFooter />
      </div>
      <div className="purple-blur"></div>
      {/* <div className="orange-blur1"></div> */}
      {/* <div className="orange-blur2"></div> */}
    </div>
  );
};

export default LoginPage;
