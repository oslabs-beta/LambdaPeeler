import React from 'react';
import Layer from '../components/Layer.jsx'

const LayersContainer = ( {data, lambda} ) => {
  return (
    <div id='LayersContainer'> 
      {data.map((layer) => (
        layer.versions.map((version, index) => (
          <Layer layerName = {layer.name}
          versionNumber = {layer.version}
          ARN = {layer.ARN[index]}
          functions = {lambda}
          />
        ))
        ))}  
    </div> 
  )
};
      
export default LayersContainer;