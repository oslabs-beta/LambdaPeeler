import React from 'react';
import Function from '../components/Function.jsx'

const FunctionsContainer = ( {data, lambda} ) => {
  return (
    // map the array of functions to individual Function components
    // functionLayersARN is the Layers array for a specific function, coming from GetFunction/GetFunctionConfiguration AWS commands
    // layers is the array of all layers coming from Display
    <div id='FunctionsContainer'> 
      {lambda.map((element) => (
            <Function functionName = {element.FunctionName}
            key = {element.FunctionName}
            ARN = {element.FunctionArn}
            functionLayersARN = {element.Layers}
            layers = {data}/>
            
        ))}  
    </div> 
  )
};
      
export default FunctionsContainer;