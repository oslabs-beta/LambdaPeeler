import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main.jsx";

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route  path="/" element = {<Main />} />
    </Routes>
  </BrowserRouter>
  )};

export default App;