import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';


const Notification = ( {notificationName, notificationDate}) => {



  return (
    <div className='notifications'>
      <div>
        <ul className='notificationList'>
          <li><span>{`Error Message: ${notificationName}`}
          <br /> 
          {`Date: ${notificationDate}`}</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Notification;