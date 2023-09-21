import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Display from './Display';
import axios from 'axios';
import { Badge } from '@mui/material';

const Navbar = ({setLogin, setActiveTab}) => {

  const [displayedPage, setDisplayedPage] = useState('')

  const handleLogout = async () => {
    try {
      // '/logout'
      setLogin(false);
      console.log('changed page')
      await axios.delete('http://localhost:3000/user/logout', {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
    } catch (err) {
      console.log('Error:', err);
    }
  }


  return (
    <div>
      <div id='navbar'> 
        <ul>
          <li><a href="#"><button id='navbar' onClick={() => setActiveTab('Layers')}>
            Home
            </button></a>
          </li>
          <li>
            <Badge badgeContent={1} color="secondary">
            <a href="#" onClick={() => setActiveTab('Notifications')}>
            Notifications
            </a>
            </Badge>
          </li>
          <li><a href="#"><button id='navbar'>
            Layer Log</button></a>
          </li>
          <li><a href="#"><button id='navbar' onClick={() => setActiveTab('Settings')}>
            Settings</button></a>
          </li>
          <li><a href="#"><button id='navbar' onClick={() => handleLogout()}>
            Logout</button></a>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar;