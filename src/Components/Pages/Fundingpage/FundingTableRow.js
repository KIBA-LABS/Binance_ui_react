import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
//import FundingTableNameCell from "./TableNameCell";
//import SmallGraph from "./SmallGraph";
import FundingTableName from "./FundingTableName";

function FundingTablerow(props) {
  const nameData = {
    Title: props.data.Name,
    Image: props.data.image,
    SubTitle: props.data.subTitle,
  };
  return (
    <TableRow
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
        style={{ color: "red", borderBottom: "none", fontSize: "18px" }}
      >
        {props.data.Change}
      </TableCell>
      <TableCell
        align="right"
        style={{ borderBottom: "none", fontSize: "18px" }}
      >
        {props.data.Action}
      </TableCell>
      <TableCell
        align="right"
        style={{ borderBottom: "none", fontSize: "18px" }}
      >
        {props.data.Markets}
      </TableCell>
    </TableRow>
  );
}
export default FundingTablerow;
