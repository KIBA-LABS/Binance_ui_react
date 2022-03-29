import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Left from "./Left";

const TradeAnywhere = () => {
  return (
    <>
      <div>
        <Typography
          style={{
            marginLeft: "100px",
            color: "#03B0BE",
            varient: "h1",
            height: "10px",
            marginTop: "20px",
            fontSize: "40px",
          }}
        >
          {" "}
          Trade.Anywhere.
        </Typography>
      </div>
      <div>
        <Typography
          style={{
            marginLeft: "100px",
            color: "#374F8F",
            varient: "h3",
            height: "10px",
            marginTop: "50px",
          }}
        >
          {" "}
          Compatible with multiple device,start tranding with safety and
          convenience.
        </Typography>
      </div>
      <div>
        <Left></Left>
      </div>
    </>
  );
};
export default TradeAnywhere;
