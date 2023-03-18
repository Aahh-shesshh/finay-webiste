// import React, { useEffect, useState } from "react";

const Button = (props) => {
  return (

      <button
        className={props.className}
        onClick={props.handleClick}
        type={props.type}
      >
        {props.buttonText}
        {props.isLoading ? "Loading" : null}
        {props.icon}
      </button>
   
  );
};

export default Button;
