import React from "react";
import Button from "../../../components/buttons/Button";
import supportors from "../../../Data/Supportors";

const About = () => {
  return (
    <div className="about">
      <div className="good">
        <h4>Bio</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A habitant
          commod
        </p>
        <h4>Contact</h4>
        <p>ashish@gmail.com</p>
      </div>
      <h4>Supporters</h4>
      <div className="supporters">
        {supportors.map((data, index) => {
          return (
            <div className="supportors-div" key={index}>
              <img src={data.image} alt="img"></img>
              <p>{data.name}</p>
            </div>
          );
        })}
      </div>
      <h4 className="">Supporting</h4>
      <div className="supporters">
        {supportors.map((data, index) => {
          return (
            <div className="supportors-div" key={index}>
              <img src={data.image} alt="img"></img>
              <p>{data.name}</p>
              <Button className="supporters-btn" buttonText="Supporting" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
