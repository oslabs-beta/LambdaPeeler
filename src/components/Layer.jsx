import React from 'react';

const Layer = (props) => {
  const { layerName } = props;
  // also get versions from props and display them


  return (
    <div>
      {layerName}
    </div>
  )


}

export default Layer;