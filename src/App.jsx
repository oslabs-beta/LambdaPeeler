import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import Notification from './components/Notification.jsx';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
// theme object created as an input for MUI
const theme = createTheme({
    palette: {
      primary: {
        main: '#fad0a0', // beige
        dark: '#000000'
      },
      secondary: {
        main: '#3576ba'  // blue
      },

    },
});

const App = () => {
  //set state of loggin status - defaults to false
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // conditional rendering for login page or main component
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Main /> : <Navigate replace to={'/login'} />}
        />
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <Login setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate replace to={'/'} />
            )
          }
        />
        <Route
          path="/Notification"
          element={<Notification />}
        />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
