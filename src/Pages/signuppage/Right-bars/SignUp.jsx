import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/buttons/Button";
import { decrement } from "../../../Store/Slices/NextButtonSlice";
import { increment } from "../../../Store/Slices/SignUpBtnSlice";


const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <div className="login-div">
      <div className="login-top">
        <h3>Create an account</h3>
        <p>
          Please fill in the below information to start buying, selling and
          collecting NFTs on Finay.
        </p>
      </div>
      <div className="input-div">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password"></input>
        <input type="text" placeholder="Confirm Password" />
      </div>
      <div className="buttons-div">
        <Button 
        className="prev-btn"
         buttonText="Previous"
         handleClick={()=> dispatch(decrement())}
         
         />
        <Button className="signup-btn" buttonText="Sign Up" 
        handleClick={()=> dispatch(increment())}
        />
      </div>
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
