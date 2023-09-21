import React from 'react'

const Settings = () => {

  const changeUsername = () => {
    console.log('Hi')
  }
  const changePassword = () => {
    console.log('Hello')
  }
  const changeARN = () => {
    console.log('Hey')
  }

  return (
    <div>
      Settings
    <button onClick={() => changeUsername()}> Change Username</button>
    <button onClick={() => changePassword()}> Change Password</button>
    <button onClick={() => changeARN()}> Change ARN</button>
    </div>
  )
}

export default Settings;