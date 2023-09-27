import React from 'react';
import { AppBar, Icon, Toolbar } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Splash = () => {
  const theme = useTheme();

  return (
    <div id="splash">
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
            <div>
              <Link to="/login">Login/Signup</Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div id="hero">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/Lambda_Potato-removebg-preview.png"
            style={{ width: '15em' }}
          ></img>
          <h1 style={{ fontSize: '4.5em' }}>LambdaPeeler</h1>
        </div>
        <p style={{ fontSize: '1.2em' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a
          href="https://github.com/oslabs-beta/LambdaPeeler"
          style={{ display: 'flex', alignItems: 'center', gap: '.1em' }}
        >
          Learn more <EastIcon color="secondary" />
        </a>
      </div>
      <div id="features">
        <h1>Features</h1>
        <div class="feature">
          <div class="featureDiscription">
            <h3>Connecting a function</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img id="gif" src="/assets/connecting.gif"></img>
        </div>
        <div class="feature">
          <div class="featureDiscription">
            <h3>Removing a function</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img id="gif" src="/assets/removing.gif"></img>
        </div>
        <div class="feature">
          <div class="featureDiscription">
            <h3>Failing Compatability</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img id="gif" src="/assets/failing.gif"></img>
        </div>
      </div>
      <div id="team">
        <h1>Meet the team</h1>
        <div id="people">
          <div class="person">Nhat</div>
          <div class="person">Greg</div>
          <div class="person">Michael</div>
          <div class="person">Zach</div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
