import React from "react";
import { Row, Rows, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function BuyTableName(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #EDEDED",
      }}
    >
      <Row
        style={{
          backgroundColor: "white",
          height: "80px",
          // margin: "auto",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <Col xs={2}>
          <Row>
            <span style={{ color: "blue" }}>{props.data.Advertiser}</span>
          </Row>
          <Row>
            <span style={{ color: "grey" }}>{props.data.Price} </span>
          </Row>
        </Col>
        <Col xs={3}>
          {props.data.Price} <span style={{ fontSize: "10px" }}>CNY</span>
        </Col>
        <Col xs={3}>
          <Row>
            <Col xs={3}>
              <span style={{ fontSize: "11px" }}>Available</span>
            </Col>
            <Col xs={9}>
              <span style={{ fontSize: "14px" }}>{props.data.Payment}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <span style={{ fontSize: "11px" }}>Limit</span>
            </Col>
            <Col xs={9}>
              <span style={{ fontSize: "14px" }}>{props.data.Trade}</span>
            </Col>
          </Row>
        </Col>

        <Col xs={2}>
          <span
            style={{
              fontSize: "12px",
              backgroundColor: "#FDFAA1",
              color: "grey",
            }}
          >
            Bank Transfer
          </span>
        </Col>
        <Col xs={1}>
          <Button
            variant="success"
            style={{
              width: "130px",
              fontSize: "15px",
              backgroundColor: "#0DD005",
            }}
          >
            Buy BTC
          </Button>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </div>
  );
}
export default BuyTableName;
