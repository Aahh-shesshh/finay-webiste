import { configureStore } from "@reduxjs/toolkit";
import  homeBtnSlice from "./Slices/HomeButtonSlice";
import counterNextBtnSlice from "./Slices/NextButtonSlice";
import  profileSlice  from "./Slices/ProfileSlice";
import  settingsSlice  from "./Slices/SettingsSlice";
import counterSignUpSlice from "./Slices/SignUpBtnSlice";
import verifySlice from "./Slices/VerifySlice";

export const store = configureStore({
  reducer: {
    next: counterNextBtnSlice,
    verify: verifySlice,
    signup: counterSignUpSlice,
    profile: profileSlice,
    settings: settingsSlice,
    home: homeBtnSlice,
  },
});
