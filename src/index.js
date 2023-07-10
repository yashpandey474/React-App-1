import React from "react";
import ReactDOM from "react-dom";

//RENDER USING REACT [BABEL HELPS TO CONVERT EMBEDDED HTML]
ReactDOM.render(
  //SINGLE ELEMENT ESSENTIALLY
  <div>
    <h1> Hello World! </h1>
    <p> This is a paragraph </p>
  </div>,
  document.getElementById("root")
);
