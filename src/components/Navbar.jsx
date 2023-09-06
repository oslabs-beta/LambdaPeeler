import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar'> 
    <ul>
      <li><a href="#">
      Profile</a>
      </li>
      <li><a href="#">
      Notifications</a>
      </li>
      <li><a href="#">
      Layer Log</a>
      </li>
      <li><a href="#">
      Settings</a>
      </li>
      <li><a href="#">
      Logout</a>
      </li>
    </ul>
    </div>
  )
}

export default Navbar;