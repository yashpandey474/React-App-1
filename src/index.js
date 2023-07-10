import React from "react";
import ReactDOM from "react-dom";

//VARIABLE TO PUT IN HTML
const fname = "Yash";
const lName = "Pandey";
//RENDER USING REACT [BABEL HELPS TO CONVERT EMBEDDED HTML]
ReactDOM.render(
  //SINGLE ELEMENT ESSENTIALLY
  <div>
    <h1>
      Hello {fname + " " + lName}!
    </h1>
    <p> Your lucky number is {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);
