import React from 'react';
import { useState, useEffect } from 'react';
import LinkedFunctions from './LinkedFunctions.jsx';
import axios from 'axios';

const Layer = ({layerName, versionNumber, ARN, functions}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [associatedFunctions, setAssociatedFunctions] = useState([]);

  const fetchAssociatedFunctions = () => {
    axios.post('http://localhost:3000/layers/functions', { ARN: ARN }, {
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
  }

  useEffect(() => {
    if (!isCollapsed) {
      fetchAssociatedFunctions();
    }
  }, [isCollapsed])

  
  const linkFunction = () => {


  }





  return (
    <div id='layer'>
      <button className="collapsible" onClick={() => setIsCollapsed(!isCollapsed)}>
      <span> Layer: {layerName}, Ver: {versionNumber}, ARN: {ARN}</span>
      </button>
      {!isCollapsed && (
        <div>
          
          <h3>Functions</h3>

          {associatedFunctions.map((element) =>
            
            <div >
                <LinkedFunctions functionName = {element}  ARN = {ARN} fetch = {fetchAssociatedFunctions}
                />
            </div>               
          )}

          <input type='text' placeholder='Function Name'></input>  
          <input type='text' placeholder='ARN'></input>  
          <button onClick={() => linkFunction()}>Link Function</button>

        </div>

      )}
    </div>
  )
}

export default Layer;