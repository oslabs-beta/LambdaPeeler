import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Notification from '../components/Notification';

const NotificationContainer = () => {

  const [associatedNotifications, setAssociatedNotifications] = useState([]);

  const getNotification = async () => {
    try{
      const Notifications = await axios.get('http://localhost:3000/api/user/notifications', {
        withCredentials: true,
      })
      const flippedNotification = [];
      const NotifArray = Notifications.data;
      for(let i = NotifArray.length-1; i > 0; i--){
        flippedNotification.push(NotifArray[i]);
      }
      setAssociatedNotifications(flippedNotification);

  
    return;
    } catch(err){
      console.log('Error trying to get Notifications');
    }
  }
  
  useEffect(() => {
    getNotification();
  }, [])


  
  return (
    <div> 
      {associatedNotifications.map((element, index) => (
              <Notification
                key={index}
                notificationName={element.message}
                notificationDate={element.postDate}
              />
            
          ))}
    </div>
  )
}

export default NotificationContainer;