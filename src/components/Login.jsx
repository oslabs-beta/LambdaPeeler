import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [ARN, setARN] = useState();

  const handleLogin = (e) => {
    setIsLoggedIn(true);
  };

  return (
    <div id="login">
      <h1
        style={{
          position: 'absolute',
          left: '50%',
          top: '10%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Welcome to LambdaPeeler!
      </h1>
      <Box
        component="form"
        sx={{
          border: '1px solid lightgrey',
          borderRadius: 2,
          p: 3,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: 'white',
          boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, .4)',
        }}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          sx={{
            width: 400,
          }}
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="ARN"
          variant="outlined"
          type="test"
          onChange={(e) => setARN(e.target.value)}
        />
        <div id="loginButtons">
          <Button
            onClick={(e) => handleLogin(e)}
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '50%' }}
          >
            Sign In
          </Button>
          <Button
            onClick={(e) => handleLogin(e)}
            variant="outlined"
            sx={{ mt: 3, mb: 2, width: '50%' }}
          >
            Sign Up
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
