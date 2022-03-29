import React from "react";
import { Row, Rows, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "130px",
    fontSize: "15px",
    backgroundColor: "#98FB98",
    color: "black",
  },
  row: {
    backgroundColor: "white",
    height: "80px",

    marginLeft: "50px",
    marginRight: "50px",
  },
  main: {
    backgroundColor: "white",
    borderBottom: "1px solid #EDEDED",
  },
}));
function BuyTableName(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Row className={classes.row}>
        <Col xs={2}>
          <Row>
            <span style={{ color: "blue" }}>{props.data.Advertiser}</span>
          </Row>
          <Row>
            <span style={{ color: "grey" }}>{props.data.high_24h} </span>
          </Row>
        </Col>
        <Col xs={3}>
          {props.price} <span style={{ fontSize: "10px" }}>CNY</span>
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
              <span style={{ fontSize: "14px" }}>
                {props.data.atl_change_percentage}
              </span>
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
          <Button variant="success" className={classes.button}>
            Buy BTC
          </Button>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </div>
  );
}
export default BuyTableName;
