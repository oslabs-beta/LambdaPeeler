import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [ARN, setARN] = useState();
  const [signUp, setSignUp] = useState(false)
  const theme = useTheme();

  const handleLogin = async (e) => {
        // signup functionality here
        try {
          const result = await axios.post(
            'http://localhost:3000/user/login',
            { username: username, password: password, ARN: ARN },
            {
              withCredentials: true,
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          setIsLoggedIn(true);
          return;
        } catch (error) {
          console.log(error)
        }
  };


  const handleSignUp = async (e) => {
    if (!signUp) {
      setSignUp(true);
      return;
    }
    // signup functionality here
    try {
      const result = await axios.post(
        'http://localhost:3000/user/signup',
        { username: username, password: password, ARN: ARN },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setIsLoggedIn(true);
      return;
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div id="login">
      <h1
        style={{
          position: 'absolute',
          left: '50%',
          top: '10%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        Welcome to LambdaPeeler!
      </h1>
      <div id='imgid'>
        <img src='/assets/Lambda_Potato-removebg-preview.png'></img>
      </div>
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
        {signUp && (
        <TextField
        id="outlined-basic"
        label="ARN"
        variant="outlined"
        type="test"
        onChange={(e) => setARN(e.target.value)}
          />
        )}
        <div id="loginButtons">
          <Button
            onClick={(e) => handleLogin(e)}
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '50%', backgroundColor: theme.palette.primary.main, '&:hover': {
              backgroundColor: theme.palette.primary.main
            }}}
            
          >
            Sign In
          </Button>
          <Button
            onClick={(e) => handleSignUp(e)}
            variant="outlined"
            sx={{ mt: 3, mb: 2, width: '50%', color: theme.palette.primary.dark, border: .8 }}
          >
            Sign Up
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
