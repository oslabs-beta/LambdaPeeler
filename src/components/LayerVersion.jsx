import React from 'react';
import { useState } from 'react';

const LayerVersion = ({functionName}) => {
  console.log('functionName: ', functionName);

  return (
    <div>
        <ul>
          <li>{functionName}</li>
        </ul>
    </div>
  )


}

export default LayerVersion;