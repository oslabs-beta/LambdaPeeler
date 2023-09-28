import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import {Button, Tooltip, IconButton } from '@mui/material';
import { LayersClearSharp } from '@mui/icons-material'

// each layer linked to a particular function
const LinkedLayers = ({
  fetch,
  layerName, 
  layerVersion,
  layerArn,
  setIsLoading,
  functionName
}) => {

  const removeLayer = async () => {
    setIsLoading(true);
    try {
      const result = await axios.post(
        'https://lambdapeeler-675999984030.herokuapp.com/functions/remove',
        { ARN: layerArn, LayerName: layerName, layerVersion: layerVersion, functionName: functionName },
        {
          withCredentials: true, 
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setIsLoading(false);
      // refetch list of layers
      fetch();
      return;
    } catch (err) {
      setIsLoading(false);
      console.log(err)
    }
  };
  
  return(
    <div className="layerDropDown">
      <div> 
        <ul>
          <li>Layer: {layerName}, Ver: {layerVersion}
            <br></br>
            ARN: {layerArn}
          </li>
        </ul>
      </div>
      <Tooltip title='Remove Layer' placement="top" arrow>
      <IconButton aria-label="delete" size="small" onClick={() => removeLayer()}>
        <LayersClearSharp color='error' fontSize='small'/>
      </IconButton>
      </Tooltip> 
    </div>
  )
}

export default LinkedLayers;