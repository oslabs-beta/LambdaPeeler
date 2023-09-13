import React from 'react';
import Function from '../components/Function.jsx'

const FunctionsContainer = ( {data, lambda} ) => {
  console.log('data: ', data);
  console.log('lambda: ', lambda);
  return (
    <div id='FunctionsContainer'> 
      {lambda.map((element) => (
            <Function functionName = {element.FunctionName}
            ARN = {element.FunctionArn}
            functionLayersARN = {element.Layers}/>
        ))}  
    </div> 
  )
};
      
export default FunctionsContainer;