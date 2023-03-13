import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/buttons/Button";
import { setZeroNextBtn } from "../../../Store/Slices/NextButtonSlice";
import { setZeroSignUp } from "../../../Store/Slices/SignUpBtnSlice";
import { increment, setZero} from "../../../Store/Slices/VerifySlice";

import Congratulations from "../Congratulations";

const EnterCode = () => {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false);

  const handleButtonClick = () => {
     
      dispatch(increment());
      setShowModal(true);
  
      // return ()=> {
      //   clearTimeout(timeout)
      // }
  };


  const back = () => {
    return(
      dispatch(setZeroNextBtn()),
      setShowModal(false),
      dispatch(setZero()),
      dispatch(setZeroSignUp())
    )
  }

  return (
    <div className="code-div">
      <div className="login-top">
        <h3>Enter your code</h3>
        <p>
          We've emailed you with four-digit code to i***@finay.com. Enter the
          code below to confirm your email address.
        </p>
      </div>
      <div className="otp-number-div">
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </div>
      <div className="resend-div">
        <p>
          Didn't receive code?{" "}
          <a href="www.o">
            <span>Resend</span>
          </a>
        </p>
      </div>
      {showModal ? <Congratulations goBack={back} /> : null}
      <div className="verify-button-div">
        <Button
          className="verify-btn"
          buttonText="Verify"
          handleClick={handleButtonClick}
         
        />
      </div>
    </div>
  );
};

export default EnterCode;
