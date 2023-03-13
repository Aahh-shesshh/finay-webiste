import React from "react";
import SignUpPage from "./Pages/signuppage/SignUpPageFirst";
import "../src/styling/SignUpPageStyling/App.css";
import { Provider} from "react-redux";

import { store } from "./Store/store";
import LoginPage from "./Pages/Loginpage/LoginPage";
import ForgetPassword from "./Pages/Loginpage/ForgetPassword";
import CheckMail from "./Pages/Loginpage/CheckMail";
import ResetPassword from "./Pages/Loginpage/ResetPassword";
import Successful from "./Pages/Loginpage/Successful";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

const App = () => {

  // const index = useSelector((state) => state.verify.value)
  
  
  return (
    <div>
     <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/LoginPage/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/LoginPage/CheckMail" element={<CheckMail />} />
            <Route path="/LoginPage/ResetPassword" element={<ResetPassword />} />
            <Route path="/LoginPage/Successful" element={<Successful />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
