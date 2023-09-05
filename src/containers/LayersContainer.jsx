import React from 'react';
import Layer from '../components/Layer.jsx'

const LayersContainer = ( {data, lambda} ) => {
  const layerName = data.LayerName;
  const layerNamesArray = [];
  if(data.layer) {
      console.log('raw data: ', data);
      console.log('data:', data.layer)
      console.log('data.layer.Layers: ', data.layer.Layers);
      console.log('data.versions: ', data.versions)

      const layerNames = data.layer.Layers;
      layerNames.forEach(element => {
      layerNamesArray.push(<Layer layerName = {element}/>);
      });

  }
  console.log('names array: ', layerNamesArray);

  // I think the issue is on initial render, the layerNamesArray is empty and rendering an empty array causes an error

  return (
    <div> 
      {layerNamesArray}
    </div> 
  )};

export default LayersContainer;