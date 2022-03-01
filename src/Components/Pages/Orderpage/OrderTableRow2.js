import { Grid, Item } from "@material-ui/core";
import React from "react";
import { Row, Rows, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Paper } from "@material-ui/core";

function OrderTableRow2(props) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
        }}
      >
        <Row
          style={{
            backgroundColor: "#F4F6F6",
            height: "50px",
            margin: "auto",
            alignSelf: "center",
          }}
        >
          <Col xs={2} style={{ alignSelf: "center" }}>
            <span style={{ color: "#11B31D" }}>Buy </span>| 2012-10-20
          </Col>
          <Col xs={8}></Col>
          <Col xs={2} style={{ alignSelf: "center" }}>
            2012-10-20
          </Col>
        </Row>
        <Row
          style={{ backgroundColor: "white", height: "70px", margin: "auto" }}
        >
          <Col xs={2} style={{ alignSelf: "center" }}>
            {props.data.coinName}
          </Col>
          <Col xs={2} style={{ alignSelf: "center" }}>
            {props.data.firstAmount} INR
          </Col>
          <Col xs={2} style={{ alignSelf: "center" }}>
            {props.data.price}
          </Col>
          <Col xs={2} style={{ alignSelf: "center" }}>
            {props.data.cryptoAmount} BTC
          </Col>
          <Col xs={2} style={{ alignSelf: "center", color: "#2AA4E7" }}>
            <u>{props.data.cryptoParty}</u>
          </Col>
          <Col xs={1} style={{ alignSelf: "center" }}>
            {props.data.status}
          </Col>
          <Col xs={1} style={{ alignSelf: "center", color: "#EAA91E" }}>
            Contact
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default OrderTableRow2;
