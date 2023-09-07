import React from 'react';
import { useState, useEffect } from 'react';
import LinkedFunctions from './LinkedFunctions.jsx';
import axios from 'axios';

const Layer = ({layerName, versionNumber, ARN, functions}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [associatedFunctions, setAssociatedFunctions] = useState([]);
  // isOpened is for the FunctionModal for each displayed Layer. true means the modal is opened, false (default) means the modal is not opened
  const [isOpened, setIsOpened] = useState(false);

  const fetchAssociatedFunctions = async () => {
    axios
      .post(
        'http://localhost:3000/layers/functions',
        { ARN: ARN },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setAssociatedFunctions(response.data);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  useEffect(() => {
    if (!isCollapsed) {
      fetchAssociatedFunctions();
    }
  }, [isCollapsed, isOpened]);

  
  const linkFunction = () => {

  // function to get the array of function names which have been checked in the FunctionModal for a given Layer
  const linkFunction = async (event) => {
    event.preventDefault();
    const formResponse = new FormData(event.target);
    const arrayOfCheckedFunctions = [];
    for (const key of formResponse.keys()) {
      arrayOfCheckedFunctions.push(key);
    }
    try{
      const result = await axios.post('http://localhost:3000/layers/add', 
      {ARN: ARN, functionArray: arrayOfCheckedFunctions}, 
        {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setIsOpened(false)
      fetchAssociatedFunctions();
      return;
    
    } catch(err){
      console.log('Error in addFunction call: ', err);
    }
  };

  return (
    <div id='layer'>
      <button className="collapsible" onClick={() => setIsCollapsed(!isCollapsed)}>
      <span> Layer: {layerName}, Ver: {versionNumber}, ARN: {ARN}</span>
      </button>
      {!isCollapsed && (
        <div>
          
          <h3>Functions</h3>

          {associatedFunctions.map((element) => (
            <div>
              <LinkedFunctions
                functionName={element}
                ARN={ARN}
                fetch={fetchAssociatedFunctions}
              />
            </div>
          ))}

          <button onClick={() => openModal()}>Link Function</button>
          <FunctionModal
            open={isOpened}
            closeFunction={closeModal}
            functions={functions}
            onSubmit={linkFunction}
          />
        </div>

      )}
    </div>
  )
}

export default Layer;