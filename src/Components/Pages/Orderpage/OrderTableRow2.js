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
            {props.data.name}
          </Col>
          <Col xs={2} style={{ alignSelf: "center" }}>
            {props.data.current_price} INR
          </Col>
          <Col xs={2} style={{ alignSelf: "center" }}>
            {props.data.price_change_24h}INR
          </Col>
          <Col xs={2} style={{ alignSelf: "center" }}>
            {props.data.circulating_supply}
          </Col>
          <Col xs={2} style={{ alignSelf: "center", color: "#2AA4E7" }}>
            <u>{props.data.cryptoParty}sonali</u>
          </Col>
          <Col xs={1} style={{ alignSelf: "center" }}>
            {props.data.status}Completed
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
