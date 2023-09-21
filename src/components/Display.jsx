import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import LayersContainer from '../containers/LayersContainer.jsx';
import FunctionsContainer from '../containers/FunctionsContainer.jsx';
import NotificationContainer from '../containers/NotificationContainer.jsx';
import { Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Settings from './Settings.jsx'

const Display = ({ setActiveTab, activeTab }) => {
  //initialize state for Layers and Functions
  //active tab state determines if list of Layers or list of Functions is displayed
  const [layers, setLayers] = useState([]);
  const [functions, setFunctions] = useState([]);
  // const [activeTab, setActiveTab] = useState('Notifications');
  const [displayPage, setDisplayPage] = useState(displayPage);
  const theme = useTheme();
  
  // When page first renders, updates layers state and functions state
  useEffect(() => {
      //get to layerRouter.js
    axios.get('http://localhost:3000/layers/list', {
      withCredentials: true,
    })
    .then(response => {
      //update the Layers state with data from get request
      setLayers(response.data);
    })
    .catch(err => {
      console.log('Error:', err)
    })
    
    //get to functionRouter.js
    axios.get('http://localhost:3000/functions/list', {
      withCredentials: true,
    })
    .then(response => {
      //update the Functions state with data from get request
      setFunctions(response.data.Functions);
    })
    .catch(err => {
      console.log('Error:', err)
    })

  }, [])




  return (
    <div id='display'>
      {/* Set styling for layer and function buttons - on button click set the ActiveTab state to which button was pressed */}
      <div style={{ display: 'flex', gap: 5 }}>
        {/* Set activeTab state to 'Layers' to display layer dropdown */}
        <Button onClick={() => setActiveTab('Layers')} size='small' variant='contained' sx={{ 
              backgroundColor: theme.palette.primary.main, '&:hover': {
              backgroundColor: theme.palette.primary.main
            }}}> Layers </Button>
            {/* Set activeTab state to 'Functions' to display layer dropdown */}
        <Button onClick={() => setActiveTab('Functions')} size='small' variant='contained' sx={{ 
              backgroundColor: theme.palette.primary.main, '&:hover': {
              backgroundColor: theme.palette.primary.main
            }}}> Functions </Button>
      </div>
      {/* Send data to LayersContainer or FunctionsContainer depending which button was clicked */}
      {activeTab === 'Layers' && (
        <div>
          {/* Pass Layers and Function data from get requests to LayersContainer component. 'function' variable names creates errors, so lambda used in place */}
          {<LayersContainer 
          data = { layers }
          lambda = { functions }
          />}
        </div>
      )}
      {activeTab === 'Functions' && (
        <div>
           {/* Pass Layers and Function data from get requests to LayersContainer component. 'function' variable names creates errors, so lambda used in place */}
           {<FunctionsContainer 
          lambda = { functions }
          data = { layers }
           />}
        </div>
      )}
      {activeTab === 'Notifications' && (
        <div>
          {<NotificationContainer />}
        </div>
      )}
      {activeTab === 'Settings' && (
        <div>
          {<Settings />}
        </div>
      )}
    </div>
  )
}

export default Display;