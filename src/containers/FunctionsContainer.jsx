import React from 'react';
import Function from '../components/Function.jsx'

const FunctionContainer = ( {data, lambda} ) => {
  const functionNamesArray = [];
 if(lambda) {
    // console.log('raw data: ', lambda);
    // console.log('data:', data.layer)
    // console.log('data.layer.Layers: ', data.layer.Layers);
    // console.log('data.versions: ', data.versions)


  }
  //console.log('names array: ', layerNamesArray);

  // I think the issue is on initial render, the layerNamesArray is empty and rendering an empty array causes an error

  return (
    <div> 
      {lambda.map(element => 
        <Function 
        functionName = {element.FunctionName}/>
        )}
      {/* {functionNamesArray} */}
    </div> 
  )};

export default FunctionContainer;


// import React from 'react';


// const FunctionsContainer = ( {lambda, layer} ) => {
//   const lambdaName = lambda.FunctionName;

//   const layerNames = [];
//   layer.forEach(element => {
//     layerNames.push(element.LayerName);
//   });

 



//   return (
//     <div> 
//       {lambdaName}
//       {layerNames}
//     </div> 
//   )};

// export default FunctionsContainer;