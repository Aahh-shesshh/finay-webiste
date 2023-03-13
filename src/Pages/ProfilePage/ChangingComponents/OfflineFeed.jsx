import React from 'react';
import {RiWifiOffLine} from "react-icons/ri"

const OfflineFeed = () => {
  return (
    <div className='offline-feed'>
        <h3>
        It’s looking a little empty around here.
        <RiWifiOffLine className='wifi'/>
        </h3>
    </div>
  )
}

export default OfflineFeed