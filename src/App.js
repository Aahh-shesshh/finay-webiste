import React from "react";
import SignUpPage from "./Pages/signuppage/SignUpPageFirst";
import "../src/styling/SignUpPageStyling/App.css";
import { Provider } from "react-redux";

import { store } from "./Store/store";
import LoginPage from "./Pages/Loginpage/LoginPage";
import ForgetPassword from "./Pages/Loginpage/ForgetPassword";
import CheckMail from "./Pages/Loginpage/CheckMail";
import ResetPassword from "./Pages/Loginpage/ResetPassword";
import Successful from "./Pages/Loginpage/Successful";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/CheckMail" element={<CheckMail />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Successful" element={<Successful />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
