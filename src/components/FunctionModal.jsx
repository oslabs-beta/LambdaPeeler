import React from 'react';
import { useState, useEffect } from 'react';
import { Modal, Box, Button, Checkbox, FormControlLabel } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const FunctionModal = ({
  open,
  closeFunction,
  functions,
  onSubmit,
  isLoading,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <Modal open={open}>
        <Box
          sx={{
            p: 2,
            height: 500,
            width: 300,
            border: '1px solid black',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            bgcolor: 'white',
            boxShadow: 24,
            borderRadius: 4,
            textAlign: 'center',
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
            <Button type="submit" variant="contained">
              {' '}
              Link Function
            </Button>
            <Button onClick={closeFunction} variant="outlined">
              Close
            </Button>
          </form>
          {isLoading && (
            <CircularProgress
              sx={{
                zIndex: 10,
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
              }}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default FunctionModal;
