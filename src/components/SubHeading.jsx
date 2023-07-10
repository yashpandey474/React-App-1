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

//SEPARATE COMPONENTS

function SubHeading() {
  return (
    <h1 className="heading" style={subHeadingStyle}>
      {" "}
      Good {termTime}{" "}
    </h1>
  );
}

export default SubHeading;
