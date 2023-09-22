import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Notification from '../components/Notification';

const NotificationContainer = () => {

  const [associatedNotifications, setAssociatedNotifications] = useState([]);

  const getNotification = async () => {
    try{
      const Notifications = await axios.get('http://localhost:3000/user/notifications', {
        withCredentials: true,
      })
      setAssociatedNotifications(Notifications.data);

  
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
      {associatedNotifications.map((element) => (
              <Notification
                notificationName={element.message}
                notificationDate={element.postDate}
              />
            
          ))}
    </div>
  )
}

export default NotificationContainer;