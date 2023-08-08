import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { setZeroNextBtn } from "../../Store/Slices/NextButtonSlice";
import { setZeroSignUp } from "../../Store/Slices/SignUpBtnSlice";
import { setZero } from "../../Store/Slices/VerifySlice";
import ConstFooter from "../const-leftpage/ConstFooter";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUsername = localStorage.getItem("Username");
    const loggedPassword = localStorage.getItem("password");
    if (loggedUsername === username && loggedPassword === pass) {
      localStorage.setItem("status", true);
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
    const loggedStatus = localStorage.getItem("status");
    if (loggedStatus) {
      navigate("/ProfilePage");
    }
  }, []);

  return (
    <div className="login-page flex flex-col gap-2 items-center justify-center  h-[100vh] ">
      <div className="">
        <h3>Welcome Back,</h3>
        <div className="">
          <Link to="/SignUpPage" onClick={back}>
            <p className="flex flex-row gap-6">
              Don't have account?
              <span>
                Signup <AiOutlineArrowRight />
              </span>
            </p>
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <input
            type="text"
            value={username}
            onChange={handleUserChange}
            placeholder="Username"
          ></input>
          <input
            type="password"
            value={pass}
            onChange={handlePassChange}
            placeholder="Password"
          ></input>
          <Link to="/ForgetPassword">
            <span>Forgot Password?</span>
          </Link>
        </div>
        <br />
        <Button buttonText="Login" type={"submit"} className="LoginButton" />
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
    </div>
  );
};

export default LoginPage;
