import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/buttons/Button";
import { decrement } from "../../../Store/Slices/NextButtonSlice";
import { increment } from "../../../Store/Slices/SignUpBtnSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const userNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmPass = e.target.elements.confirmedpass.value;
    if (password.trim() === "") {
      alert("Please enter a password");
    } else if (password !== confirmPass) {
      alert("Passwords do not match");
    } else {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("Username", username);
      
      dispatch(increment())
    }
  };

  return (
    <div className="login-div">
      <div className="login-top">
        <h3>Create an account</h3>
        <p>
          Please fill in the below information to start buying, selling and
          collecting NFTs on Finay.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={emailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordChange}
          ></input>
          <input
            type="password"
            name="confirmedpass"
            placeholder="Confirm Password"
          />
           <input
           value={username}
            type="text"
            onChange={userNameChange}
            name="username"
            placeholder="Username"
          />
        </div>
        <div className="buttons-div">
          <Button
            className="prev-btn"
            buttonText="Previous"
            handleClick={() => dispatch(decrement())}
          />
          <Button className="signup-btn" buttonText="Sign Up" type="submit" />
        </div>
      </form>
      <div className="flex flex-row items-center content-center mt-5">
        <hr />
        <h6>or continue with</h6>
        <hr />
      </div>
      <div className="flex flex-row items-center content-center gap-3 mt-5  mb-3 pl-[80px]">
        <a href="www">
          {" "}
          <img className="google" src="images/google.jpg" alt="google" />
        </a>
        <a href="wwwja">
          <img className="iphone" src="images/iphone.jpg" alt="google" />
        </a>
      </div>
    </div>
  );
};

export default SignUp;
