import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import TableNameCell from "./TableNameCell";
import SmallGraph from "./SmallGraph";

function Tablerow(props) {
  //const row = { Name: "sonali", LastPrice: "1", Change: "13", Markets: "123" };
  //console.log(props);
  const nameData = {
    Title: props.data.Name,
    Image: props.data.image,
    SubTitle: props.data.subTitle,
  };
  return (
    <TableRow
      style={{fontSize:"12px"}}
      key={props.data.id}
      sx={{
        "&:last-child td, &:last-child th": { border: 0, display: "inline" },
      }}
    >
      <TableCell component="th" scope="row" style={{ borderBottom: "none" }}>
        <TableNameCell data={nameData}></TableNameCell>
      </TableCell>
      <TableCell
        align="right"
        style={{ borderBottom: "none", fontSize: "18px" }}
      >
      {props.data.LastPrice}
      </TableCell>
      <TableCell
        align="right"
      >
        {props.data.Change}
      </TableCell>
      <TableCell align="right" style={{ borderBottom: "none" }}>
      {props.data.Markets}
      </TableCell>
      <TableCell align="right" style={{ borderBottom: "none" }}>
      {props.data.Change}
      </TableCell>
      <TableCell align="right" style={{ borderBottom: "none" }}>
        <span style={{color:"orange"}}>Buy/Sell  Send  Receive</span>  ...
      </TableCell>
    </TableRow>
  );
}
export default Tablerow;
