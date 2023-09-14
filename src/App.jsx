import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
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
  );
};

export default App;
