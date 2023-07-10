const headingStyle = {
  color: "red",
  fontSize: "50px",
  border: "1px solid black"
};

const fname = "Yash";
const lName = "Pandey";

function Heading() {
  return <h1 style={headingStyle}> Hello {fname + " " + lName}!</h1>;
}

export default Heading;
