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
      const flippedHistoryLog = [];
      const historyLogArray = HistoryLog.data;
      for(let i = historyLogArray.length-1; i > 0; i--){
        flippedHistoryLog.push(historyLogArray[i]);
      }
      setAssociatedHistoryLog(flippedHistoryLog);
  
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
      {associatedHistoryLog.map((element) => (
              <HistoryLog
                key={element.postDate}
                historyLogMessage={element.message}
                historyLogDate={element.postDate}
              />
            
          ))}
    </div>
  )
}

export default HistoryContainer;