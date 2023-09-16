import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Display from './Display';


const Navbar = () => {

  const [displayedPage, setDisplayedPage] = useState('')


  return (
    <div>
      <div id='navbar'> 
        <ul>
          <li><a href="#"><button id='navbar'>
            Home
            </button></a>
          </li>
          <li><a href="#"><button id='navbar' onClick={() => setDisplayedPage('Notifications')}>
            Notifications</button></a>
          </li>
          <li><a href="#"><button id='navbar'>
            Layer Log</button></a>
          </li>
          <li><a href="#"><button id='navbar'>
            Settings</button></a>
          </li>
          <li><a href="#"><button id='navbar'>
            Logout</button></a>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar;