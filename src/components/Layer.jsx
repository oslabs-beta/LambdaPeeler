import React from 'react';
import { useState, useEffect } from 'react';
import LayerVersion from './LayerVersion.jsx';
import axios from 'axios';

const Layer = ({layerName, versionNumber, ARN}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [associatedFunctions, setAssociatedFunctions] = useState([])
  
  useEffect(() => {    
    axios.post('http://localhost:3000/layers/functions', [{ ARN: ARN }], {
      headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'your-rapidapi-key',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
      }})
    .then(response => {
      console.log('layer-functions response: ', response.data)
      setAssociatedFunctions(response.data);
    })
    .catch(err => {
      console.log('Error:', err)
    })
  }, [isCollapsed])

  console.log('associatesFunctoins:', associatedFunctions)

  
  return (
    <div id='layer'>
      <button className="collapsible" onClick={() => setIsCollapsed(!isCollapsed)}>
      <span> Layer: {layerName}, Ver: {versionNumber}, ARN: {ARN}</span>
      </button>
      {!isCollapsed && (
        <div>
          <ul>
            <li>{associatedFunctions.map((element) => 
                <LayerVersion functionName = {element}/>
          )}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Layer;