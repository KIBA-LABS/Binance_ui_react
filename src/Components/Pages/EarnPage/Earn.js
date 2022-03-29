import React from "react";
import { Row, Rows, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { map } from "highcharts";
import CryptoGraph from "../Ethereumpage/CryptoGraph";
import axios from "axios";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Search from "./Search";
function Earn() {
 const initialList = [];
const [tableDatas, setList] = React.useState(initialList);
 const fetchHistory = async () => {
    const response = await axios
      .get("https://rest.coinapi.io/v1/exchangerate/BTC?invert=false", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "X-CoinAPI-Key": "DFB818A1-D5BC-448A-91DF-60699FD82AE6",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchHistory();
  }, []);

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
                          {value.current_price}
                        </Col>
                        <Col xs={4}>{value.high_24h}</Col>
                        <Col xs={4}>{value.total_supply}</Col>
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
                {tableDatas.map((value) => {
                  return (
                    <li>
                      <Row>
                        <Col xs={4} style={{ color: "green" }}>
                          {value.market_cap_change_percentage_24h}
                        </Col>
                        <Col xs={4}>{value.low_24h}</Col>
                        <Col xs={4}>{value.total_supply}</Col>
                      </Row>
                    </li>
                  );
                })}
              </ul>
            </Row>
          </Col>
          <Col xs={6} style={{ alignSelf: "start", marginTop: "18px" }}>
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
                {tableDatas.map((value) => {
                  return (
                    <li>
                      <Row>
                        <Col xs={4}>{value.ath}</Col>
                        <Col xs={4}>{value.atl}</Col>
                        <Col xs={4} style={{ color: "green" }}>
                          {value.atl_change_percentage}
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
                {tableDatas.map((value) => {
                  return (
                    <li>
                      <Row>
                        <Col xs={4}>{value.low_24h}</Col>
                        <Col xs={4}>{value.ath}</Col>
                        <Col xs={4} style={{ color: "green" }}>
                          {value.last_updated}
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
