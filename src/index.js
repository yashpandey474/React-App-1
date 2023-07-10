import React from "react";
import ReactDOM from "react-dom";

//VARIABLE TO PUT IN HTML
const fname = "Yash";
const lName = "Pandey";
const headingStyle = {
  color: "red",
  fontSize: "50px",
  border: "1px solid black"
};

//CHANGE STYLE WITH THE OBJECT
headingStyle.color = "blue";

//TIME OF DAY
const hour = new Date().getHours();
var termTime = "Morning";
var subHeadingStyle = {
  color: "red"
};

if (hour > 12 && hour < 18) {
  termTime = "Afternoon";
  subHeadingStyle.color = "green";
}
if (hour > 18 && hour <= 23) {
  termTime = "Evening";
  subHeadingStyle.color = "blue";
}

//RENDER USING REACT [BABEL HELPS TO CONVERT EMBEDDED HTML]
ReactDOM.render(
  //SINGLE ELEMENT ESSENTIALLY
  <div>
    <h1 style={headingStyle}> Hello {fname + " " + lName}!</h1>
    <h1 style={subHeadingStyle}> Good {termTime} </h1>
    <p> Your lucky number is {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);
