import React from 'react';
import Layer from '../components/Layer.jsx'

const LayersContainer = ( {data, lambda} ) => {
  return (
    <div id='LayersContainer'> 
      {data.map((layer) => (
        layer.versions.map(version => (
          <Layer layerName = {layer.name} versionNumber = {version}/>
        ))
        ))}  
    </div> 
  )
};
      //
export default LayersContainer;