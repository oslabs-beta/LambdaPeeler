import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, IconButton, Tooltip } from '@mui/material';
import { Delete, LayersClearSharp } from '@mui/icons-material'

// This is rendered when a layer component is clicked
// These are the functions that are linked to a particuler layer
const LinkedFunctions = ({
  functionName,
  ARN,
  fetch,
  setIsLoading,
  layerName
}) => {
  // post req to remove a function from layer
  // sends arn and name back to find the specific func
  // invoked by clicking the 'x' button
  const removeFunction = async () => {
    setIsLoading(true);
    try {
      const result = await axios.post(
        'https://lambdapeeler-675999984030.herokuapp.com/dashboard/layers/remove',
        { ARN: ARN, functionName: functionName, layerName: layerName },
        {
          withCredentials: true, 
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setIsLoading(false);
      // refetch list of funcs
      fetch();
      return;
    } catch (err) {
      setIsLoading(false);
      console.log(err)
    }
  };

  return (
    <div className="functionDropDown">
      <div>
        <ul>
          <li>{functionName}</li>
        </ul>
      </div>
      <Tooltip title='Remove Function' placement="top" arrow>
      <IconButton aria-label="delete" size="small" onClick={() => removeFunction()}>
        <LayersClearSharp color='error' fontSize='small'/>
      </IconButton>
      </Tooltip> 
    </div>
  );
};

export default LinkedFunctions;
