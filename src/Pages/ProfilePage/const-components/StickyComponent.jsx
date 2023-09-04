import React from "react";
import Button from "../../../components/buttons/Button";

const StickyComponent = () => {
  return (
    <div className="sticky-bar absolute top-72 left-16 py-4">
      <div className="rectangle">
        <img src="images/Left.jpg" alt="ia"></img>
        <h3>Ashish Khatri</h3>
        <h5>@ashish_khatri</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A habitant
          commod
        </p>
        <div className="supportors">
          <div className="">
            <h3>423</h3>
            <p>Supporters</p>
          </div>
          <div>
            <h3>100</h3>
            <p>Supporting</p>
          </div>
        </div>
        <Button buttonText="Support" className="Support" />
      </div>
    </div>
  );
};

export default StickyComponent;
