import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import HistoryLog from '../components/HistoryLog';

const HistoryContainer = () => {

  const [associatedHistoryLog, setAssociatedHistoryLog] = useState([]);

  const getHistoryLog = async () => {
    try{
      const HistoryLog = await axios.get('http://localhost:3000/user/historylog', {
        withCredentials: true,
      })
      setAssociatedHistoryLog(HistoryLog.data);
  
    return;
    } catch(err){
      console.log('Error trying to get History log');
    }
  }
  
  useEffect(() => {
    getHistoryLog();
  }, [])

  
  return (
    <div> 
      <h1>In History Log</h1>
      {associatedHistoryLog.map((element) => (
              <HistoryLog
                historyLogMessage={element.message}
                historyLogDate={element.postDate}
              />
            
          ))}
    </div>
  )
}

export default HistoryContainer;