import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const LinkedLayers = ({
  layerName, 
  ARN, 
  fetch,
  isLoading,
  setIsLoading}) => {


  return(
    <div className="layerDropDown">
      <div> 
        <ul>
          <li>{layerName}</li>
        </ul>
      </div>
    </div>
  )
}

export default LinkedLayers;