import React from "react";
import { Row, Rows, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { map } from "highcharts";

import CryptoGraph from "../Ethereumpage/CryptoGraph";
//import Search from "../Fundingpage/Search";
import Search from "./Search";
function Earn() {
  const tableDatas = [
    {
      Price: "3776031",
      Amount: "0.00132",
      Total: "49.84361",
      id: "1",
    },
    {
      Price: "3776031",
      Amount: "0.00132",
      Total: "49.84361",
      id: "1",
    },
    {
      Price: "3776031",
      Amount: "0.00132",
      Total: "49.84361",
      id: "1",
    },
    {
      Price: "3776031",
      Amount: "0.00132",
      Total: "49.84361",
      id: "1",
    },
    {
      Price: "3776031",
      Amount: "0.00132",
      Total: "49.84361",
      id: "1",
    },
    {
      Price: "3776031",
      Amount: "0.00132",
      Total: "49.84361",
      id: "1",
    },
    {
      Price: "3776031",
      Amount: "0.00132",
      Total: "49.84361",
      id: "1",
    },
    {
      Price: "3776031",
      Amount: "0.00132",
      Total: "49.84361",
      id: "1",
    },
  ];
  const tableDatasTwo = [
    {
      Pair: "3578900",
      Price: "27839300",
      Change: "63637389",
    },
    {
      Pair: "3578900",
      Price: "27839300",
      Change: "63637389",
    },
    {
      Pair: "3578900",
      Price: "27839300",
      Change: "63637389",
    },
    {
      Pair: "3578900",
      Price: "27839300",
      Change: "63637389",
    },
    {
      Pair: "3578900",
      Price: "27839300",
      Change: "63637389",
    },
    {
      Pair: "3578900",
      Price: "27839300",
      Change: "63637389",
    },
    {
      Pair: "3578900",
      Price: "27839300",
      Change: "63637389",
    },
    {
      Pair: "3578900",
      Price: "27839300",
      Change: "63637389",
    },
  ];
  const tableDatasThree = [
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
    {
      list1: "568.678",
      list2: "6788.67",
      More: "25430.6778",
    },
  ];
  const tableDatasFour = [
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
    {
      Price: "567.388399",
      Amount: "648499",
      Time: "21:00:00",
    },
  ];
  return (
    <Row style={{ margin: "20px" }}>
      <Row>
        <Col xs={1}>
          <Row style={{ Varient: "bold" }}> BTC/USED</Row>
          <Row>Bitcoin</Row>
        </Col>
        <Col xs={1}>
          {" "}
          <Row>37,750.00</Row>
          <Row>$12.5786567</Row>
        </Col>
        <Col xs={1}>
          {" "}
          <Row>24th change</Row>
          <Row>38,230.00</Row>
        </Col>
        <Col xs={1}>
          {" "}
          <Row>24h high</Row>
          <Row>38.230.00</Row>
        </Col>
        <Col xs={1}>
          {" "}
          <Row>24h low</Row>
          <Row>36.632455</Row>
        </Col>
        <Col xs={1}>
          {" "}
          <Row>24h volume</Row>
          <Row>357843.68</Row>
        </Col>
        <Col xs={1}>
          {" "}
          <Row>24h volume</Row>
          <Row>68.537900</Row>
        </Col>
        <Col xs={2}></Col>
        <Col xs={2}>
          {" "}
          <Row>
            <Search></Search>
          </Row>
        </Col>
      </Row>
      <Row>
        <Row>
          <Col xs={3} style={{ alignSelf: "start", marginTop: "18px" }}>
            <Row>
              <Col xs={4}>(USTD)</Col>
              <Col xs={4}>Amount</Col>
              <Col xs={4}>Total</Col>
            </Row>
            <Row style={{ paddingRight: "0px" }}>
              <ul style={{ listStyle: "none", paddingRight: "0px" }}>
                {tableDatas.map((value) => {
                  return (
                    <li>
                      <Row>
                        <Col xs={4} style={{ color: "red" }}>
                          {value.Price}
                        </Col>
                        <Col xs={4}>{value.Amount}</Col>
                        <Col xs={4}>{value.Total}</Col>
                      </Row>
                    </li>
                  );
                })}
              </ul>
            </Row>
            <Row>
              <Col xs={4}>34.27334↑</Col>
              <Col xs={4}>34.273</Col>
              <Col xs={4}>More</Col>
            </Row>
            <Row style={{ paddingRight: "0px" }}>
              <ul style={{ listStyle: "none", paddingRight: "0px" }}>
                {tableDatasThree.map((value) => {
                  return (
                    <li>
                      <Row>
                        <Col xs={4} style={{ color: "green" }}>
                          {value.list1}
                        </Col>
                        <Col xs={4}>{value.list2}</Col>
                        <Col xs={4}>{value.More}</Col>
                      </Row>
                    </li>
                  );
                })}
              </ul>
            </Row>
          </Col>
          <Col xs={6}>
            {" "}
            <CryptoGraph></CryptoGraph>
          </Col>

          <Col xs={3} style={{ alignSelf: "start", marginTop: "18px" }}>
            <Row>
              <Col xs={4}>Pair</Col>
              <Col xs={4}>Price</Col>
              <Col xs={4}>Change</Col>
            </Row>
            <Row style={{ paddingRight: "0px" }}>
              <ul style={{ listStyle: "none", paddingRight: "0px" }}>
                {tableDatasTwo.map((value) => {
                  return (
                    <li>
                      <Row>
                        <Col xs={4}>{value.Pair}</Col>
                        <Col xs={4}>{value.Price}</Col>
                        <Col xs={4} style={{ color: "green" }}>
                          {value.Change}
                        </Col>
                      </Row>
                    </li>
                  );
                })}
              </ul>
            </Row>
            <Row>
              <Col xs={6} style={{ color: "orange" }}>
                Market Trades
              </Col>
              <Col xs={4}>My Trades</Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col xs={4}>Price(USDT)</Col>
              <Col xs={4}>Amount(BTC)</Col>
              <Col xs={4}>Time</Col>
            </Row>
            <Row style={{ paddingRight: "0px" }}>
              <ul style={{ listStyle: "none", paddingRight: "0px" }}>
                {tableDatasFour.map((value) => {
                  return (
                    <li>
                      <Row>
                        <Col xs={4}>{value.Price}</Col>
                        <Col xs={4}>{value.Amount}</Col>
                        <Col xs={4} style={{ color: "green" }}>
                          {value.Time}
                        </Col>
                      </Row>
                    </li>
                  );
                })}
              </ul>
            </Row>
          </Col>
        </Row>
      </Row>
    </Row>
  );
}
export default Earn;
