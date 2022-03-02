import React from "react";

function FundingTableName(props) {
  console.log(props);
  return (
    <div>
      <img
        src={props.data.image}
        style={{ height: "30px", width: "30px", verticalAlign: "text-bottom" }}
      ></img>{" "}
      &nbsp; &nbsp;
      <div
        style={{ display: "inline", fontSize: "18px", verticalAlign: "super" }}
      >
        {props.data.Title} &nbsp;
      </div>
      <div
        style={{
          color: "gray",
          display: "inline",
          fontSize: "18px",
          verticalAlign: "super",
        }}
      >
        {props.data.SubTitle}
      </div>
    </div>
  );
}
export default FundingTableName;
