import React from 'react';
import Layer from '../components/Layer.jsx';

const LayersContainer = ({ data, lambda }) => {
  return (
    // map the array of layers to individual Layer components
    // functions/lambda is the array of all functions coming from Display
    <div id="LayersContainer">
      {data.map((layer) =>
        layer.versions.map((version, index) => (
          <Layer
            layerName={layer.name}
            key={layer.ARN[index]}
            versionNumber={version}
            ARN={layer.ARN[index]}
            functions={lambda}
          />
        ))
      )}
    </div>
  );
};

export default LayersContainer;
