import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import Data from "./Data";
import "./index.css";
// console.log(Data[0].name);

function person(val) {
  console.log(val);
  return (
    <Card imgsrc={val.imgsrc} name={val.name} life={val.life} des={val.des} />
  );
}
ReactDOM.render(
  <>
    <h1 className="heading">
      The top 10 greatest indians who have received the Bharat Ratna
    </h1>
    {Data.map(person)}
  </>,
  document.getElementById("root")
);
