import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import Link from '@mui/material/Link';
import EastIcon from '@mui/icons-material/East';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as RouterLink } from 'react-router-dom';
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
              <RouterLink to="/">Home</RouterLink>
              <a href="https://github.com/oslabs-beta/LambdaPeeler">Docs</a>
              <a href="https://www.linkedin.com/in/lambda-peeler/">Contact</a>
            </div>
            <div>
              <RouterLink to="/login">Get Started</RouterLink>
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
        <div className="feature">
          <div className="featureDiscription">
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
        <div className="feature">
          <div className="featureDiscription">
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
        <div className="feature">
          <div className="featureDiscription">
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
        <h1>Meet the Team</h1>
        <div id="people">
          <div className="person">
            <img
              src="/assets/nhat.jpeg"
              style={{ width: '15em', borderRadius: '15px' }}
            ></img>
            Nhat Trinh
            <div id="profileLinks">
              <IconButton href="https://www.linkedin.com/in/nhattrinh/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/Nhat-Trinh1">
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
          <div className="person">
            <img
              src="/assets/greg.jpeg"
              style={{ width: '15em', borderRadius: '15px' }}
            ></img>
            Greg Osborn
            <div id="profileLinks">
              <IconButton href="https://www.linkedin.com/in/gregdosborn/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/greg-osborn">
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
          <div className="person">
            <img
              src="/assets/michael.png"
              style={{ width: '15em', borderRadius: '15px' }}
            ></img>
            Michael Shand
            <div id="profileLinks">
              <IconButton href="https://www.linkedin.com/in/shand-michael/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/shandie231">
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
          <div className="person">
            <img
              src="/assets/zach.png"
              style={{ width: '15em', borderRadius: '15px' }}
            ></img>
            Zach Hamilton
            <div id="profileLinks">
              <IconButton href="https://www.linkedin.com/in/zach-m-hamilton/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/ZachMHamilton">
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
