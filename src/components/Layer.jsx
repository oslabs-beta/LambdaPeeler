import React from 'react';
import { useState, useEffect } from 'react';
import LinkedFunctions from './LinkedFunctions.jsx';
import FunctionModal from './FunctionModal.jsx';
import axios from 'axios';

const Layer = ({ layerName, versionNumber, ARN, functions }) => {
  // isCollapsed is tracked for each displayed Layer. true (default) means the Layer display is collapsed, false means the Layer box has expanded
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [associatedFunctions, setAssociatedFunctions] = useState([]);

  const fetchAssociatedFunctions = () => {
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
  }, [isCollapsed]);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };


  }





  return (
    <div id="layer">
      <button
        className="collapsible"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span>
          {' '}
          Layer: {layerName}, Ver: {versionNumber}
          <br></br>
          ARN: {ARN}
        </span>
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
  );
};

export default Layer;
