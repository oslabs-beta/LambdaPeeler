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
      console.log('Notifications', Notifications);
  
    return;
    } catch(err){
      console.log('Error trying to get Notifications');
    }
  }
  
  useEffect(() => {
    getNotification();
  }, [])

  console.log('associatedNotifications from container', associatedNotifications);
  
  return (
    <div> 
      <h1>In Notifications</h1>
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