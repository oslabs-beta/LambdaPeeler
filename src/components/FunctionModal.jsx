import React from 'react';
import { useState, useEffect } from 'react';
import { Modal, Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';

const FunctionModal = ({
  open,
  closeFunction,
  functions,
  onSubmit,
  isLoading,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) return 100;
          return prevProgress + 1;
        })
      }, 100)
    }
  }, [isLoading])

  return (
    <div>
      <Modal open={open}>
        <Box
          sx={{
            p: 3,
            height: 500,
            width: 300,
            border: '1px solid black',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            bgcolor: 'white',
            boxShadow: 24,
            borderRadius: 4,
            textAlign: 'left',
            outline: 'none',
          }}
        >
          <form onSubmit={onSubmit}>
            {functions.map((func) => (
              <FormControlLabel
                control={<Checkbox name={func.FunctionName} />}
                label={func.FunctionName}
              />
            ))}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 10,
              width: '100%',
              position: 'absolute',
              bottom: 20,
              margin: 0,
              padding: 0,
              left: 0,
              }}>
            <Button type="submit" variant="contained" sx={{width: '40%'}} style={{margin: 0}}>
              Link
            </Button>
            <Button onClick={closeFunction} variant="outlined" sx={{width: '40%', m: 0, p:0}} style={{margin: 0}}>
              Close
            </Button>
            </div>
          </form>
          {isLoading && (
            <div
              style={{
                position: 'absolute',
                bottom: 70,
                left: 34,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                zIndex: 10,
                width: '80%',
              }}
            >
              <Typography variant="caption" component="div">
                Testing Compatibility
              </Typography>
              <Box sx={{ width: '100%' }}>
                <LinearProgress variant='determinate' value={progress}/>
              </Box>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default FunctionModal;
