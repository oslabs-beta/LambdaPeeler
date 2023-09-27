import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import LayersContainer from '../containers/LayersContainer.jsx';
import FunctionsContainer from '../containers/FunctionsContainer.jsx';
import NotificationContainer from '../containers/NotificationContainer.jsx';
import HistoryContainer from '../containers/HistoryContainer.jsx';
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Settings from './Settings.jsx';

const Display = ({ setActiveTab, activeTab }) => {
  console.log(activeTab);
  //initialize state for Layers and Functions
  //active tab state determines if list of Layers or list of Functions is displayed
  const [layers, setLayers] = useState([]);
  const [functions, setFunctions] = useState([]);
  // const [activeTab, setActiveTab] = useState('Notifications');
  const [displayPage, setDisplayPage] = useState();
  const theme = useTheme();

  // When page first renders, updates layers state and functions state
  useEffect(() => {
    //get to layerRouter.js
    axios
      .get('https://lambda-peeler.onrender.com/api/layers/list', {
        withCredentials: true,
      })
      .then((response) => {
        //update the Layers state with data from get request
        console.log(response.data);
        setLayers(response.data);
      })
      .catch((err) => {
        console.log('Error:', err);
      });

    //get to functionRouter.js
    axios
      .get('https://lambda-peeler.onrender.com/api/functions/list', {
        withCredentials: true,
      })
      .then((response) => {
        //update the Functions state with data from get request
        console.log('response.data.Functions: ', response.data.Functions);
        setFunctions(response.data.Functions);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);

  return (
    <div id="display">
      {(activeTab === 'Layers' || activeTab === 'Functions') && (
        // <div style={{ display: 'flex', gap: 5 }}>
        //   {/* Set activeTab state to 'Layers' to display layer dropdown */}
        //   <Button onClick={() => setActiveTab('Layers')} size='small' variant='contained' sx={{
        //         backgroundColor: theme.palette.primary.main, '&:hover': {
        //         backgroundColor: theme.palette.primary.main
        //       }}}> Layers </Button>
        //       {/* Set activeTab state to 'Functions' to display layer dropdown */}
        //   <Button onClick={() => setActiveTab('Functions')} size='small' variant='contained' sx={{
        //         backgroundColor: theme.palette.primary.main, '&:hover': {
        //         backgroundColor: theme.palette.primary.main
        //       }}}> Functions </Button>
        // </div>
        <ToggleButtonGroup
          value={activeTab}
          exclusive
          aria-label="active tab"
          color="secondary"
        >
          <ToggleButton
            value="Layers"
            aria-label="Layers"
            onClick={() => setActiveTab('Layers')}
            sx={{
              width: '8em',
              backgroundColor:
                activeTab === 'Layers' ? theme.palette.primary : 'inherit',
            }}
          >
            Layers
          </ToggleButton>
          <ToggleButton
            value="Functions"
            aria-label="Functions"
            onClick={() => setActiveTab('Functions')}
            sx={{
              width: '8em',
              backgroundColor:
                activeTab === 'Functions' ? theme.palette.primary : 'inherit',
            }}
          >
            Functions
          </ToggleButton>
        </ToggleButtonGroup>
      )}
      {/* Send data to LayersContainer or FunctionsContainer depending which button was clicked */}
      {activeTab === 'Layers' && (
        <div>
          {/* Pass Layers and Function data from get requests to LayersContainer component. 'function' variable names creates errors, so lambda used in place */}
          {<LayersContainer data={layers} lambda={functions} />}
        </div>
      )}
      {activeTab === 'Functions' && (
        <div>
          {/* Pass Layers and Function data from get requests to LayersContainer component. 'function' variable names creates errors, so lambda used in place */}
          {<FunctionsContainer lambda={functions} data={layers} />}
        </div>
      )}
      {(activeTab === 'Notifications' || activeTab === 'History') && (
        // <div style={{ display: 'flex', gap: 5 }}>
        //   {/* Set activeTab state to 'Layers' to display layer dropdown */}
        //   <Button onClick={() => setActiveTab('Notifications')} size='small' variant='contained' sx={{
        //         backgroundColor: theme.palette.primary.main, '&:hover': {
        //         backgroundColor: theme.palette.primary.main
        //       }}}> Error Log </Button>
        //       {/* Set activeTab state to 'Functions' to display layer dropdown */}
        //   <Button onClick={() => setActiveTab('History')} size='small' variant='contained' sx={{
        //         backgroundColor: theme.palette.primary.main, '&:hover': {
        //         backgroundColor: theme.palette.primary.main
        //       }}}> Success Log </Button>
        // </div>
        <ToggleButtonGroup
          value={activeTab}
          exclusive
          aria-label="active tab"
          color="secondary"
        >
          <ToggleButton
            value="Notifications"
            aria-label="Notifications"
            onClick={() => setActiveTab('Notifications')}
            sx={{
              width: '10em',
              backgroundColor:
                activeTab === 'Notifications'
                  ? theme.palette.primary
                  : 'inherit',
            }}
          >
            Error Log
          </ToggleButton>
          <ToggleButton
            value="History"
            aria-label="History"
            onClick={() => setActiveTab('History')}
            sx={{
              width: '10em',
              backgroundColor:
                activeTab === 'History' ? theme.palette.primary : 'inherit',
            }}
          >
            Success Log
          </ToggleButton>
        </ToggleButtonGroup>
      )}
      {activeTab === 'Notifications' && (
        <div id="notificationDisplay">{<NotificationContainer />}</div>
      )}
      {activeTab === 'History' && (
        <div id="historyDisplay">{<HistoryContainer />}</div>
      )}
      {activeTab === 'Settings' && <div>{<Settings />}</div>}
    </div>
  );
};

export default Display;
