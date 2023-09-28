import React from 'react';
import { useState, useEffect } from 'react';
import LinkedFunctions from './LinkedFunctions.jsx';
import FunctionModal from './FunctionModal.jsx';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, IconButton, Tooltip, Box, Skeleton } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const Layer = ({ layerName, versionNumber, ARN, functions }) => {
  // isCollapsed is tracked for each displayed Layer. true (default) means the Layer display is collapsed, false means the Layer box has expanded
  const [isCollapsed, setIsCollapsed] = useState(true);
  // associatedFunctions keeps track of which functions are linked to a layer
  const [associatedFunctions, setAssociatedFunctions] = useState([]);
  // isOpened is for the FunctionModal for each displayed Layer. true means the modal is opened, false (default) means the modal is not opened
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // invoked when the state of isCollapsed or isOpened changes
  // post requeset to grab associated functions
  const fetchAssociatedFunctions = async () => {
    axios
      .post(
        'https://lambdapeeler-675999984030.herokuapp.com/layers/functions',
        { ARN: ARN },
        {
          withCredentials: true, 
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

  // this useEffect will be invoked whenever you click on a layer component 
  //or when the pop up for the function is opened or closed
  useEffect(() => {
      // if the layer component is expanded, invoke this function
    if (!isCollapsed) {
      fetchAssociatedFunctions();
    }
  }, [isCollapsed, isOpened]);

  // changes the state for when function Modal opens and closes
  // openModal is passed down to the add function button
  const openModal = () => {
    setIsOpened(true);
  };
// closeModal is passed down to the Function Modal component
  const closeModal = () => {
    setIsOpened(false);
  };

  // function to get the array of function names which have been checked in the FunctionModal for a given Layer
  // passed down to FunctionModal
  const linkFunction = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    // pull form data and store in array to be sent to server
    const formResponse = new FormData(event.target);
    const arrayOfCheckedFunctions = [];
    for (const func of formResponse.keys()) {
      arrayOfCheckedFunctions.push(func);
    }
    try {
      const result = await axios.post(
        'https://lambdapeeler-675999984030.herokuapp.com/layers/add',
        { ARN: ARN, functionArray: arrayOfCheckedFunctions, layerName: layerName },
        {
          withCredentials: true, 
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setIsLoading(false);
      setIsOpened(false);
      return;
    } catch (error) {
      setIsLoading(false);
      setIsOpened(false);

      // alert user of any errors
      const messages = [];
      if (typeof error.response.data === 'string') {
        alert(error.response.data);
      } else {
        const errorArr = error.response.data;
        errorArr.forEach((message) => {
          alert(message);
        });
      }
    }
  };

  return (
    <div className="layer">
      {/* Layer component renders a button that has an onClick,  layer name, ver, ARN */}
      <button
        className="collapsible"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span>
          {' '}
          {layerName}
          <br></br>
          Version: {versionNumber}
          <br></br>
          ARN: {ARN}
        </span>
      </button>
      {/* if isCollapsed is false, show a div of functions*/}
      {!isCollapsed && (
        <div className='dropdown'>
          <h3>Functions</h3>
          {/* if isLoading is true, show the circule progress component from MUI*/}
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
          {/* Takes the functions from the state associatedFunctions and create seperate components called LinkedFunctions*/}
          {associatedFunctions.map((element, index) => (
            <div id={ARN + element + '_div'}>
              <LinkedFunctions
                key={index}
                functionName={element}
                ARN={ARN}
                fetch={fetchAssociatedFunctions}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                layerName={layerName}
              />
            </div>
          ))}
          {/* Renders a Box component from MUI that will contain the "add function" function*/}
          <Box sx={{
            pl: 2.5,
          }}>
          <Tooltip title='Add Function' placement="top" arrow>
            <IconButton aria-label="add" onClick={() => openModal()}>
              <LibraryAddIcon fontSize='medium' color='info'/>
            </IconButton>
          </Tooltip> 
          </Box>
          {/* When add function on the layer tab is clicked, a modal of all functions will pop up*/}
          <FunctionModal
            open={isOpened}
            closeFunction={closeModal}
            functions={functions}
            onSubmit={linkFunction}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default Layer;
