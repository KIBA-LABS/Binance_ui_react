import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import TableNameCell from "./TableNameCell";
import SmallGraph from "./SmallGraph";
import { useHistory } from "react-router-dom";

function Tablerow(props) {
  const history = useHistory();
  const nameData = {
    Title: props.data.name,
    Image: props.data.image,
    SubTitle: props.data.symbol,
  };
  return (
    <TableRow
      style={{ fontSize: "12px" }}
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
        <spam>$</spam>
        {props.data.market_cap}
      </TableCell>
      <TableCell align="right" style={{ borderBottom: "none" }}>
        {props.data.price_change_24h}
      </TableCell>
      <TableCell align="right" style={{ borderBottom: "none" }}>
        <spam>$</spam>
        {props.data.total_supply}
      </TableCell>
      <TableCell align="right" style={{ borderBottom: "none" }}>
        {props.datahigh_24h}
      </TableCell>
      {/* <TableCell align="right" style={{ borderBottom: "none" }}>
        {props.data.total_supply}
      </TableCell> */}
      <TableCell align="right" style={{ borderBottom: "none" }}>
        <span
          style={{ color: "#324D8A", cursor: "pointer" }}
          onClick={() => {
            history.push("/earn");
          }}
        >
          Buy/Sell Send Receive
        </span>{" "}
        ...
      </TableCell>
    </TableRow>
  );
}
export default Tablerow;
