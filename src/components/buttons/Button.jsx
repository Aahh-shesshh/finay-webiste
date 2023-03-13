// import React, { useEffect, useState } from "react";

const Button = (props) => {
  return (

      <button
        className={props.className}
        onClick={props.handleClick}
      >
        {props.buttonText}
        {props.isLoading ? "Loading" : null}
        {props.icon}
      </button>
   
  );
};

export default Button;
