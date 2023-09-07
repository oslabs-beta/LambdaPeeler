import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import FunctionList from './FunctionList.jsx'

const LinkedFunctions = ({functionName, ARN, fetch, functions}) => {

  // send arn and name back to find the specific func
  const removeFunction = async () => {
    try{
      const result = await axios.post('http://localhost:3000/layers/list', 
      {ARN: ARN,
        functionName: functionName}, 
        {
        headers: {
          "Content-Type": "application/json"
        }
      });
      fetch();
      return;
    
    } catch(err){
      console.log('Error in removeFunction call: ', err);
    }
  }

  function popUp(){
    const myPopup = myPopup.classList;
    myPopup.add("show");
  };

  
    

  return (
    <div className='functionDropDown'>
      <div>
        <ul>
          <li>{functionName}</li>
        </ul>
      </div>

        <div>
          <div>
            <button type='button' id="myButton" onClick={() => {
              const myPopup = document.querySelector('#myPopup');
              myPopup.classList.add("show")}}>
              See Functions
            </button>
            <div id="myPopup" className="popup">
              <div className="popup-content">
                <button type='button' id="closePopup" onClick={() => {
                  const myPopup = document.querySelector('#myPopup');
                  myPopup.classList.remove("show")}}>
                    Close
                </button>
                <FunctionList functionName={functionName}/>
              </div>
            </div>
          </div>
 
          <button onClick={() => removeFunction()}> Remove Function </button>
        </div>
    </div>
  )


}

export default LinkedFunctions;