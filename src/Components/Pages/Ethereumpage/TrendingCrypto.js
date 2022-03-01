import React from "react";
import { Col, Row } from "react-bootstrap";

function TrendingCrypto(props) {
  const listDatas = [
    {
      image: "bitcoin.png",
      title: "BNB",
      subtitle: "BNB",
      price: "$ 123",
      change: "+ 7.8%",
    },
  ];

  return (
    <div>
      <Row style={{ marginTop: "8px", marginBotton: "8px" }}>
        <Col xs={2}>
          <img
            src={props.data.image}
            style={{ height: "30px", width: "30px", alignSelf: "center" }}
          ></img>
        </Col>
        <Col xs={6}>
          <Row>
            <span style={{ fontSize: "12px", fontWeight: "bold" }}>
              {props.data.title}
            </span>
          </Row>
          <Row>
            <span style={{ fontSize: "12px" }}>{props.data.subtitle}</span>
          </Row>
        </Col>
        <Col xs={4}>
          <Row>
            <span
              style={{ fontSize: "12px", fontWeight: "bold", textAlign: "end" }}
            >
              {props.data.price}
            </span>
          </Row>
          <Row>
            <span
              style={{ fontSize: "12px", textAlign: "end", color: "green" }}
            >
              {props.data.change}
            </span>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default TrendingCrypto;
