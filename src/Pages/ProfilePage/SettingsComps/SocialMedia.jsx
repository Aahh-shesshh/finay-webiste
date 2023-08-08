import React from "react";
import Button from "../../../components/buttons/Button";

const SocialMedia = () => {
  return (
    <div className="social_media">
      <h4>Social Media</h4>
      <div className="form gap-8">
        <div className="flex flex-col gap-3">
          <div className="input-details">
            <p>Instagram</p>
            <input placeholder=""></input>
          </div>
          <div className="input-details">
            <p>Twitter</p>
            <input placeholder=""></input>
          </div>
          <div className="input-details">
            <p>SoundCloud</p>
            <input placeholder=""></input>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="input-details">
            <p>FaceBook</p>
            <input placeholder=""></input>
          </div>
          <div className="input-details">
            <p>Youtube</p>
            <input placeholder=""></input>
          </div>
          
        </div>
      </div>
      <Button  buttonText="Save" className="Save-btn" />
    </div>
  );
};

export default SocialMedia;
