import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const FunctionList = ({ functionName }) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [associatedLayers, setAssociatedLayers] = useState([])


  return (
    <div>
      {functionName}
    </div>
    
    )
}

export default FunctionList;