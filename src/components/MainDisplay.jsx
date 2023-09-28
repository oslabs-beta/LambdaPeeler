import React from "react";
import Navbar from './Navbar.jsx';
import Display from './Display.jsx';
import {useState} from 'react';

const Main = ({setLogin}) => {
  const [activeTab, setActiveTab] = useState('Layers');
  return (
    <div id="main">
      <Navbar setLogin={setLogin} setActiveTab={setActiveTab} activeTab={activeTab}/>
      <Display setActiveTab={setActiveTab} activeTab={activeTab}/>
    </div>
  );
};

export default Main;