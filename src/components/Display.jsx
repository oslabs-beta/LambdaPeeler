import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import LayersContainer from '../containers/LayersContainer.jsx';
import FunctionsContainer from '../containers/FunctionsContainer.jsx';
import { Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const Display = () => {
  const [layers, setLayers] = useState([]);
  const [functions, setFunctions] = useState([]);
  const [activeTab, setActiveTab] = useState('Layers');
  const theme = useTheme();

  useEffect(() => {
    axios.get('http://localhost:3000/layers/list')
    .then(response => {
      setLayers(response.data);
    })
    .catch(err => {
      console.log('Error:', err)
    })
    
    axios.get('http://localhost:3000/functions/list')
    .then(response => {
      setFunctions(response.data.Functions);
    })
    .catch(err => {
      console.log('Error:', err)
    })

  }, [])


  
  return (
    <div id='display'>
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