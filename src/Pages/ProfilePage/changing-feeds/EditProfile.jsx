import React from "react";
import Button from "../../../components/buttons/Button";
import { AiOutlineCloudUpload } from "react-icons/ai";

const EditProfile = () => {
  return (
    <div className="edit-profile pb-5">
      <div className="col-1">
        <h1>Edit Profile</h1>
        <Button buttonText="Profile" className="profile-btn" />
      </div>
      <div className="col-2">
        <div className="top-col">
          <div className="flex flex-col items-center  gap-2 justify-center">
            <h3>Upload a profile picture</h3>
            <p>
              Show people who you are! Recommended size: 400x400px. JPG, PNG or
              GIF.
            </p>
            <Button buttonText="Upload" className="upload" />
          </div>
          <div className="upload-photo">
            <AiOutlineCloudUpload className="h-[80px] text-white w-[80px]" />
            <h3>Drag and drop </h3>
            <p className="pl-[40px] font-light">or select files from device</p>
          </div>
        </div>
        <div className="acc-info">
          <h4>Account Information</h4>
          <p>
            We will use these information to verify your account. We might
            contact you for confirmation.
          </p>
        </div>
        <div className="form gap-4">
          <div className="flex flex-col gap-3">
            <div className="input-details">
              <p>First Name</p>
              <input placeholder="First Name"></input>
              
            </div>
            <div className="input-details">
              <p>Tagline</p>
              <div className="input">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                habitant commod
              </div>
              
              
            </div>
            <div className="input-details">
              <p>Contact</p>
              <input placeholder="asiskhatri123@gmail.com"></input>
             
            </div>
            <Button  buttonText="Update profile" className="update-profile"/> 
          </div>
          <div className="flex flex-col gap-3">
            <div className="input-details">
              <p>Username</p>
              <div className="input">Ashish Khatri</div>
            </div>
            <div className="input-details">
              <p>Bio</p>
              <div className="input">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A habitant commod</div>
            </div>
            <div className="input-details">
              <p>Personal Website</p>
              <div className="input">Ashish Khatri</div>
            </div>
          </div>
        
        </div>
       
      </div>
      <div className="blur-4"></div>
            <div className="blur-5"></div>
    </div>
  );
};

export default EditProfile;
