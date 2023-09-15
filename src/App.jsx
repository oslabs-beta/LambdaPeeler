import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
      primary: {
        main: '#fad0a0', // beige
        darkmain: '#a68158', 
        dark: '#000000'
      },
      secondary: {
        main: '#3576ba'  // blue
      },

    },
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
