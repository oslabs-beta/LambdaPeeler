import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Display from './Display';
import axios from 'axios';
import { Badge } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HistoryIcon from '@mui/icons-material/History';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

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
          <li id='listItem'>
          <a href="#" onClick={() => setActiveTab('Layers')} id='listItem'>
            <HomeOutlinedIcon color='secondary'/>
            <span>Home</span>
            </a>
          </li>
          <li id='listItem'>
            <a href="#" onClick={() => setActiveTab('Notifications')} id='listItem'>
              <HistoryIcon color='secondary'/>
            History
            </a>
          </li>
          <li id='listItem'><a href="#" onClick={() => setActiveTab('Settings')} id='listItem'>
            <SettingsOutlinedIcon color='secondary' />
            Settings</a>
          </li>
          <li id='listItem'><a href="#" onClick={() => handleLogout()} id='listItem'>
            <LogoutIcon color='secondary' />
            Logout</a>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar;