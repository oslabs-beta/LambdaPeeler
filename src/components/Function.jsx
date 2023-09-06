import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Function = ({ functionName }) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [associatedLayers, setAssociatedLayers] = useState([])


  return (

    <div id='function'>
      <button className="collapsible" onClick={() => setIsCollapsed(!isCollapsed)}>
      <span> Function: {functionName}</span>
      </button>
      {!isCollapsed && (
        <div>
          <ul>
            <li>functions</li>
          </ul>
        </div>
      )}
    </div>
    )
}

export default Function;

