import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LinkedLayers from './LinkedLayers';
import LayerModal from './LayersModal';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, IconButton, Tooltip, Box } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
//CircularProgress, Button, IconButton, Tooltip, Box, LibraryAddIcon all used for styling

/*functionName(string), 
ARN(string) of Function ARN,
functionLayersArn:(array) of Layer ARNs on functions 
layers(Array or objects) layer data from get request in Display.js
*/
const Function = ({ functionName, ARN, functionLayersARN, layers}) => {
  // isCollapsed is tracked for each displayed Layer. true (default) means the Layer display is collapsed, false means the Layer box has expanded
  const [isCollapsed, setIsCollapsed] = useState(true);
  // associatedLayers is the state variable for tracking which layers are connected to a given Function.
  // it is an array of objects in this format:
  // {
  //   LayerName: layer.name,
  //   LayerVersion: layer.versions[index],
  //   LayerArn: layerARN
  // }
  const [associatedLayers, setAssociatedLayers] = useState([]);
  // isOpened is for the FunctionModal for each displayed Layer. true means the modal is opened, false (default) means the modal is not opened
  const [isOpened, setIsOpened] = useState(false);
  // isLoading is the state variable used to control the CircularProgress loading doodle
  const [isLoading, setIsLoading] = useState(false);

  // post request to fetch layers that are associated with a specific function
  const fetchAssociatedLayers = async () => {
    axios
    //post request to functionRouter.js
      .post(
        '/functions/layers',
        //pass Function ARN and Layers Array to backend
        { ARN: ARN,
        layers: layers },
        {
          withCredentials: true, 
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        // wait for response to update assocatedLayers state with the response.data
        //Response.data is an array of layer objects. Each object contains specific layer information
        setAssociatedLayers(response.data);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  // rerender layers list whenever the state changes
  // isCollapsed/isOpened with be changed on button clicks
  useEffect(() => {
    if (!isCollapsed) {
      //get array of layer objects
      fetchAssociatedLayers();
    }
  }, [isCollapsed, isOpened]);

  // opens and closes modal
  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  // post request to link function and layer
  const linkLayers = async (event) => {
    //start the loading animation by changing isLoading state
    setIsLoading(true);
    event.preventDefault();
    // pull form data and put into arr
    const formResponse = new FormData(event.target);
    const arrayOfCheckedLayers = [];
    //Take keys from fromResponse and push into arrayOfCheckedLayers 
    //arrayOfCheckedLayers will be sent to backend
    for (const key of formResponse.keys()) {
      arrayOfCheckedLayers.push(key);
    }
    try {
      //functionality not yet set up
      const result = await axios.post(
        '/functions/add',
        { ARN: ARN, layerArray: arrayOfCheckedLayers, FunctionName: functionName },
        {
          withCredentials: true, 
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      //update loading states for animation - when post request is receieved end the animation
      setIsLoading(false);
      setIsOpened(false);
      return;
    } catch (error) {
      //update loading states for animation - if post fails end animation
      console.log('error: ', error);
      setIsLoading(false);
      setIsOpened(false);

      // Pop up to alert user of errors
      const messages = [];
      if (typeof error.response.data === 'string') {
        alert(error.response.data);
      } else {
        const errorArr = error.response.data;
        errorArr.forEach((message) => {
          console.log('error message: ', message);
          alert(message);
        });
      }
    }
  };

  return (
    <div className='function'>
      {/* make button to open/close layer information */}
      <button className="collapsible" onClick={() => setIsCollapsed(!isCollapsed)}>
      <span> {' '} 
      {/* Display Each function name and ARN inside the button */}
        Function: {functionName}
        <br></br>
        ARN: {ARN} 
      </span>
      </button>
      {/* When button is clicked isCollapsed state changes - 
      display layer information in dropdown  */}
      {!isCollapsed && (
        <div className="dropdown">
          <h3>Layers</h3>
          {isLoading && (
            <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* loading animation */}
            <CircularProgress
              sx={{
                zIndex: 10,
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
          )}
          {/* iterate through associatedLayers array */}
          {associatedLayers.map((element) => (
            
            <div id={functionName + element.LayerName + '_div'}>
              {/* Pass data to LinkedLayers to display details */}
              <LinkedLayers 
                key = {functionName + element.LayerName}
                layerName ={element.LayerName}
                layerVersion={element.LayerVersion}
                layerArn = {element.LayerArn}
                fetch={fetchAssociatedLayers}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                functionName={functionName}
              />
            </div>
          ))}
          {/* Renders a Box component from MUI that will contain the "add function" function*/}
          <Box sx={{
            pl: 2.5,
          }}>
          {/* <Tooltip title='Add Layer' placement="top" arrow>
            <IconButton aria-label="add" onClick={() => openModal()}>
              <LibraryAddIcon fontSize='medium' color='info'/>
            </IconButton>
          </Tooltip>  */}
          </Box>
          {/* When add function on the layer tab is clicked, a modal of all functions will pop up*/}
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

