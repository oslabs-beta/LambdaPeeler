import React from 'react';

const Layer = ({layerName, versionNumber}) => {
  let coll = document.getElementsByClassName("collapsible");
  
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  return (
    <div id='layer'>
      <button className="collapsible">
      <span> Layer: {layerName}, Ver: {versionNumber}</span>
      </button>
      <div class='content'>
        <p> Hidden information </p>
      </div>
    </div>
  )


}

export default Layer;