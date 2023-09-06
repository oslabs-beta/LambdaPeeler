import React from 'react';
import Function from '../components/Function.jsx'

const FunctionsContainer = ( {data, lambda} ) => {
  return (
    <div id='FunctionsContainer'> 
      {lambda.map((element) => 
        <Function functionName = {element.FunctionName}/>
        )}  
    </div> 
  )
};
      
export default FunctionsContainer;