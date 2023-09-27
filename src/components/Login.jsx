import React, { useState } from 'react';
import {
  TextField,
  Box,
  Button,
  IconButton,
  AppBar,
  Toolbar,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [ARN, setARN] = useState();
  const [region, setRegion] = useState();
  const [signUp, setSignUp] = useState(false);
  const [message, setMessage] = useState('');
  const [action, setAction] = useState('Login');
  const theme = useTheme();

  const handleLogin = async (e) => {
    if (signUp) {
      handleSignUp();
    }
    // signup functionality here
    try {
      const result = await axios.post(
        'https://lambda-peeler.onrender.com/api/user/login',
        { username: username, password: password, ARN: ARN },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (result.status === 200) {
        setIsLoggedIn(true);
        return;
      } else {
        console.log('incorrect username or password');
        setMessage('Incorrect username or password. Try again!');
      }
    } catch (error) {
      setMessage('Incorrect username or password. Try again!');
      console.log(message);
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    if (!signUp) {
      setSignUp(true);
      setAction('Sign Up');
      return;
    }
    // signup functionality here
    try {
      const result = await axios.post(
        'https://lambda-peeler.onrender.com/user/signup',
        { username: username, password: password, ARN: ARN, region: region },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (result.status === 200) {
        console.log('result ok');
        setIsLoggedIn(true);
        return;
      } else {
        setMessage('Error signing up. Try again!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="login">
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: 'primary.main',
          top: 0,
          left: 0,
        }}
      >
        <Toolbar>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', gap: '2em' }}>
              <Link to="/">Home</Link>
              <a href="https://github.com/oslabs-beta/LambdaPeeler">Docs</a>
              <Link to="/">Contact</Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div
        id="title"
        style={{
          position: 'absolute',
          left: '50%',
          top: '10%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        {/* <h1>Welcome to LambdaPeeler!</h1>
        <h5
          style={{
            position: 'absolute',
            left: '10%',
            top: '65%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
          }}
        >
          An AWS tool
        </h5> */}
      </div>
      <p
        style={{
          position: 'absolute',
          left: '50%',
          top: '7%',
          transform: 'translate(-50%, -50%)',
          color: 'red',
          visibility: message ? 'visible' : 'hidden',
          zIndex: 10,
        }}
      >
        {message}
      </p>
      <div id="imgid">
        <img src="./assets/Lambda_Potato-removebg-preview.png"></img>
      </div>
      <Box
        component="form"
        sx={{
          border: '1px solid lightgrey',
          borderRadius: 2,
          p: 3,
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: 'white',
          boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, .4)',
          height: action === 'Sign Up' ? '60%' : '45%',
        }}
      >
        <IconButton
          sx={{
            pl: 1,
            pr: 0,
            m: 0,
            left: '4%',
            top: '2.5%',
            position: 'absolute',
            visibility: action === 'Sign Up' ? 'visible' : 'hidden',
          }}
          size="small"
          onClick={() => {
            setSignUp(false);
            setAction('Login');
          }}
        >
          <ArrowBackIosIcon sx={{ p: 0, m: 0 }} fontSize="small" />
        </IconButton>
        <h2>{action}</h2>
        <TextField
          id="outlined-basic1"
          label="Username"
          variant="outlined"
          sx={{
            width: 400,
          }}
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          id="outlined-basic2"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {signUp && (
          <TextField
            id="outlined-basic3"
            label="ARN"
            variant="outlined"
            type="test"
            onChange={(e) => setARN(e.target.value)}
          />
        )}
        {signUp && (
          <TextField
            id="outlined-basic4"
            label="Region"
            variant="outlined"
            type="test"
            onChange={(e) => setRegion(e.target.value)}
          />
        )}
        <div id="loginButtons">
          <Button
            onClick={(e) => handleLogin(e)}
            variant="contained"
            fullWidth={true}
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            {action}
          </Button>
          <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              visibility: action === 'Login' ? 'visible' : 'hidden',
            }}
          >
            Need an account?&nbsp;
            <a id="link" href="#" onClick={(e) => handleSignUp(e)}>
              Sign Up
            </a>
          </span>
        </div>
      </Box>
    </div>
  );
};

export default Login;
