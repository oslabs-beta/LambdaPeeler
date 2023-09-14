import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const LinkedLayers = ({
  layerName, 
  layerVersion,
  layerArn, 
  fetch,
  isLoading,
  setIsLoading}) => {


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
    </div>
  )
}

export default LinkedLayers;