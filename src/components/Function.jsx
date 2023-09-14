import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LinkedLayers from './LinkedLayers';
import LayerModal from './LayersModal';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, IconButton, Tooltip, Box } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const Function = ({ functionName, ARN, functionLayersARN, layers}) => {
  // isCollapsed is tracked for each displayed Layer. true (default) means the Layer display is collapsed, false means the Layer box has expanded
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [associatedLayers, setAssociatedLayers] = useState([]);
  // isOpened is for the FunctionModal for each displayed Layer. true means the modal is opened, false (default) means the modal is not opened
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const fetchAssociatedLayers = async () => {
    axios
      .post(
        'http://localhost:3000/functions/layers',
        { ARN: ARN,
        layers: layers },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        // console.log('response: ', response);
        // console.log('response.data: ', response.data);
        setAssociatedLayers(response.data);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  useEffect(() => {
    if (!isCollapsed) {
      fetchAssociatedLayers();
    }
  }, [isCollapsed, isOpened]);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };
// console.log('associated layers: ', associatedLayers);

const linkLayers = async (event) => {
  setIsLoading(true);
  event.preventDefault();
  const formResponse = new FormData(event.target);
  const arrayOfCheckedLayers = [];
  for (const key of formResponse.keys()) {
    arrayOfCheckedLayers.push(key);
  }
  try {
    const result = await axios.post(
      'http://localhost:3000/functions/add',
      { ARN: ARN, layerArray: arrayOfCheckedLayers },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    // console.log('result: ', result);
    setIsLoading(false);
    setIsOpened(false);
    return;
  } catch (error) {
    console.log('error: ', error);
    setIsLoading(false);
    setIsOpened(false);
    // console.log('type ', typeof error.response.data);

    const messages = [];

    if (typeof error.response.data === 'string') {
      // push to array
      alert(error.response.data);
    } else {
      const errorArr = error.response.data;
      errorArr.forEach((message) => {
        console.log('error message: ', message);
        // push to array
        alert(message);
      });
    }
  }
};

  return (
    <div id='functions'>
      <button className="collapsible" onClick={() => setIsCollapsed(!isCollapsed)}>
      <span> {' '} Function: {functionName}, ARN: {ARN} </span>
      </button>
      {!isCollapsed && (
        <div>
          <h3>Layers</h3>
          {isLoading && (
            <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress
              sx={{
                zIndex: 10,
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
          )}
          {associatedLayers.map((element) => (
            
            <div>
              <LinkedLayers 
                layerName ={element.LayerName}
                layerVersion={element.LayerVersion}
                layerArn = {element.LayerArn}
                fetch={fetchAssociatedLayers}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </div>
          ))}
          <Box sx={{
            pl: 2.5,
          }}>
          <Tooltip title='Add Layer' placement="top" arrow>
            <IconButton aria-label="add" onClick={() => openModal()}>
              <LibraryAddIcon fontSize='medium' color='info'/>
            </IconButton>
          </Tooltip> 
          </Box>
          <LayerModal
            open={isOpened}
            closeFunction={closeModal}
            layers={layers}
            onSubmit={linkLayers}
            isLoading={isLoading}
          />
      </div>
      )}
    </div>
    )
}

export default Function;

