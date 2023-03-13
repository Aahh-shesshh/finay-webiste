import React from 'react';
// import {FaHeadphones} from "react-icons/fa";


const Cards = (props) => {


  return (
    <div className={props.className} onClick={props.handleClick}>
        <div className='logo-wrapper'>
          <div className='headphone'>{props.Logo}</div>
        </div>
        <div className='text-div'>
          <h3>{props.h3}</h3>
          <p>{props.p}</p>
        </div>
    </div>
  )
}

export default Cards