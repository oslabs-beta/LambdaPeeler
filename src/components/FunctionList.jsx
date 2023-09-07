import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const FunctionList = ({ lambda }) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [associatedLayers, setAssociatedLayers] = useState([])



  return (
    <div>
      {lambda}
    </div>
    
    )
}

export default FunctionList;