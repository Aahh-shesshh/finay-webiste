import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { setZeroNextBtn } from "../../Store/Slices/NextButtonSlice";
import { setZeroSignUp } from "../../Store/Slices/SignUpBtnSlice";
import { setZero } from "../../Store/Slices/VerifySlice";
import ConstFooter from "../../styling/const-leftpage/ConstFooter";
// import Footer from "../signuppage/Right-bars/Footer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedEmail = localStorage.getItem("email");
    const loggedPassword = localStorage.getItem("password");
    if (email === loggedEmail && loggedPassword === pass) {
      localStorage.setItem("user", true);
      navigate("/ProfilePage");
    } else {
      alert("Account details doest match");
    }
  };

  const back = () => {
    return (
      dispatch(setZeroNextBtn()), dispatch(setZero()), dispatch(setZeroSignUp())
    );
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      navigate("/ProfilePage");
    }
  }, []);

  return (
    <div className="login-page">
      <div className="top-div-login">
        <h3>Welcome Back,</h3>
        <div className="flex flex-row">
          <Link to="/SignUpPage" onClick={back}>
            <p>
              Don't have account?{" "}
              <span>
                Signup <AiOutlineArrowRight className="AiOutlineArrowRight" />
              </span>
            </p>
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Email"
          ></input>
          <input
            type="password"
            value={pass}
            onChange={handlePassChange}
            placeholder="Password"
          ></input>
          <Link to="/ForgetPassword">
            {" "}
            <span>Forgot Password?</span>
          </Link>
        </div>
        <div className="login-button-div">
          {" "}
          {/* <Link to={}> */}
          <Button buttonText="Login" type={"submit"} className="LoginButton" />
          {/* </Link> */}
        </div>
      </form>

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
