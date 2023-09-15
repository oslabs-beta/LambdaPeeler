import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import LayersContainer from '../containers/LayersContainer.jsx';
import FunctionsContainer from '../containers/FunctionsContainer.jsx';
import { Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const Display = () => {
  //initialize state for Layers and Functions
  //active tab state determines if list of Layers or list of Functions is displayed
  const [layers, setLayers] = useState([]);
  const [functions, setFunctions] = useState([]);
  const [activeTab, setActiveTab] = useState('Layers');
  const theme = useTheme();

  useEffect(() => {
    axios.get('http://localhost:3000/layers/list')
    .then(response => {
      //update the Layers state with data from get request
      setLayers(response.data);
    })
    .catch(err => {
      console.log('Error:', err)
    })
    
    axios.get('http://localhost:3000/functions/list')
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
      {/* Set styling for layer and function buttons - on buitton click set the  */}
      <div style={{ display: 'flex', gap: 5 }}>
        <Button onClick={() => setActiveTab('Layers')} size='small' variant='contained' sx={{ 
              backgroundColor: theme.palette.primary.main, '&:hover': {
              backgroundColor: theme.palette.primary.main
            }}}> Layers </Button>
        <Button onClick={() => setActiveTab('Functions')} size='small' variant='contained' sx={{ 
              backgroundColor: theme.palette.primary.main, '&:hover': {
              backgroundColor: theme.palette.primary.main
            }}}> Functions </Button>
      </div>
      
      {activeTab === 'Layers' && (
        <div>
          {<LayersContainer 
          data = { layers }
          lambda = { functions }
          />}
        </div>
      )}
      {activeTab === 'Functions' && (
        <div>
           {<FunctionsContainer 
          lambda = { functions }
          data = { layers }
           />}
        </div>
      )}
    </div>
  )
}

export default Display;