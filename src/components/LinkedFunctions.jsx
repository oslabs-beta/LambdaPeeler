import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import FunctionList from './FunctionList.jsx'

const LinkedFunctions = ({ functionName, ARN, fetch }) => {
  // send arn and name back to find the specific func
  const removeFunction = async () => {
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
      fetch();
      return;
    } catch (err) {
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
      <div>
        <button onClick={() => removeFunction()}> Remove Function </button>
      </div>
    </div>
  );
};

export default LinkedFunctions;
