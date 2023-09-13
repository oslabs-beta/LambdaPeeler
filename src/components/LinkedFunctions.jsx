import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, IconButton, Tooltip } from '@mui/material';
import { Delete, LayersClearSharp } from '@mui/icons-material'

const LinkedFunctions = ({
  functionName,
  ARN,
  fetch,
  isLoading,
  setIsLoading,
}) => {
  // send arn and name back to find the specific func
  const removeFunction = async () => {
    setIsLoading(true);
    try {
      const result = await axios.post(
        'http://localhost:3000/layers/remove',
        { ARN: ARN, functionName: functionName },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setIsLoading(false);
      fetch();
      return;
    } catch (err) {
      setIsLoading(false);
      console.log('Error in removeFunction call: ', err);
    }
  };

  return (
    <div className="functionDropDown">
      <div>
        <ul>
          <li>{functionName}</li>
        </ul>
      </div>
      {/* <div>
        <Button variant='outlined' size='small' onClick={() => removeFunction()}> Remove Function </Button>
      </div> */}
      <Tooltip title='Remove Function' placement="top" arrow>
      <IconButton aria-label="delete" size="small" onClick={() => removeFunction()}>
        <LayersClearSharp color='error' fontSize='small'/>
      </IconButton>
      </Tooltip> 
    </div>
  );
};

export default LinkedFunctions;
