import React from "react";
import { FaEthereum } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import CryptoGraph from "./CryptoGraph";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import TrendingCrypto from "./TrendingCrypto";

function Ethereum() {
  const listDatas = [
    {
      id: 1,
      image: "bitcoin.png",
      title: "BNB",
      subtitle: "BNB",
      price: "$ 123",
      change: "+ 7.8%",
    },
    {
      id: 2,
      image: "ethereum.png",
      title: "Ethereum",
      subtitle: "ETH",
      price: "$ 123",
      change: "+ 7.8%",
    },
    {
      id: 3,
      image: "bnb.png",
      title: "Bitcoin",
      subtitle: "BTC",
      price: "$ 123",
      change: "+ 7.8%",
    },
    {
      id: 4,
      image: "cardano.png",
      title: "Cardano",
      subtitle: "ADA",
      price: "$ 123",
      change: "+ 7.8%",
    },
    {
      id: 5,
      image: "solana.png",
      title: "Solana",
      subtitle: "SOL",
      price: "$ 123",
      change: "+ 7.8%",
    },
  ];
  return (
    <div style={{ margin: "50px 120px 0px 120px" }}>
      <Row>
        <Col xs={8}>
          <div style={{ display: "flex", float: "left" }}>
            <FaEthereum
              icon="fa-brands fa-ethereum"
              style={{ width: "35px", height: "35px", alignSelf: "center" }}
            />
            <h1 style={{ margin: "auto", marginLeft: "15px" }}>
              Ethereum Price
            </h1>
            <span style={{ marginLeft: "20px", marginTop: "10px" }}>(ETH)</span>
            <span
              style={{
                marginLeft: "45px",
                marginTop: "10px",
                fontSize: "12px",
              }}
            >
              Currency
            </span>
            <Form.Select
              size="sm"
              style={{
                width: "150px",
                height: "30px",
                marginLeft: "20px",
                marginTop: "8px",
              }}
            >
              <option>USD - $</option>
              <option value="1">INR </option>
            </Form.Select>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <div style={{ display: "flex", float: "left" }}>
            <h4 style={{ marginTop: "10px", fontWeight: "bold" }}>
              $ 2,599.98
            </h4>
            <h5
              style={{
                marginTop: "14px",
                marginLeft: "10px",
                fontWeight: "bold",
                color: "red",
              }}
            >
              -42.77 %
            </h5>
          </div>
        </Col>
        <Col xs={4}>
          <h5 style={{ marginTop: "20px" }}>ETH Price Calculator</h5>
        </Col>
      </Row>
      <Row>
        <Col xs={8} style={{ marginTop: "20px" }}>
          <Row>
            <CryptoGraph></CryptoGraph>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <h4>ETH Price Information</h4>
            <span style={{ fontSize: "12px" }}>24h Low & High</span>
            <Row>
              <Col xs={2}>
                <span style={{ fontSize: "12px" }}>High: $ 2,487.03</span>
              </Col>
              <Col xs={2} style={{ padding: "0px" }}>
                <ProgressBar
                  style={{
                    verticalAlign: "center",
                    marginTop: "5px",
                    height: "5px",
                    backgroundColor: "red",
                  }}
                  variant="success"
                  now={50}
                />
              </Col>
              <Col xs={2}>
                <span style={{ fontSize: "12px" }}>Low: $ 2,741.37</span>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col xs={3}>
                <Row>
                  <span style={{ fontSize: "14px" }}>All Time High</span>
                </Row>
                <Row>
                  <span style={{ fontSize: "14px" }}>$ 4,891.70</span>
                </Row>
              </Col>
              <Col xs={3}>
                <Row>
                  <span style={{ fontSize: "14px" }}>Price Change (1h)</span>
                </Row>
                <Row>
                  <span style={{ fontSize: "14px", color: "red" }}>-2.82%</span>
                </Row>
              </Col>
              <Col xs={3}>
                <Row>
                  <span style={{ fontSize: "14px" }}>Price Change (24h)</span>
                </Row>
                <Row>
                  <span style={{ fontSize: "14px", color: "red" }}>-4.37%</span>
                </Row>
              </Col>
              <Col xs={3}>
                <Row>
                  <span style={{ fontSize: "14px" }}>Price Change (7d)</span>
                </Row>
                <Row>
                  <span style={{ fontSize: "14px", color: "red" }}>
                    -20.23%
                  </span>
                </Row>
              </Col>
            </Row>
          </Row>
          <Row style={{ marginTop: "20px", marginBottom: "60px" }}>
            <h4>ETH Market Information</h4>

            <Row style={{ marginTop: "20px" }}>
              <Col xs={3}>
                <Row>
                  <span style={{ fontSize: "14px" }}>Popularity</span>
                </Row>
                <Row>
                  <span style={{ fontSize: "14px" }}>#2</span>
                </Row>
              </Col>
              <Col xs={3}>
                <Row>
                  <span style={{ fontSize: "14px" }}>Market Cap</span>
                </Row>
                <Row>
                  <span style={{ fontSize: "14px" }}>$ 299.18B</span>
                </Row>
              </Col>
              <Col xs={3}>
                <Row>
                  <span style={{ fontSize: "14px" }}>Volume (24hours)</span>
                </Row>
                <Row>
                  <span style={{ fontSize: "14px" }}>$ 14.15B</span>
                </Row>
              </Col>
              <Col xs={3}>
                <Row>
                  <span style={{ fontSize: "14px" }}>Circulation Supply</span>
                </Row>
                <Row>
                  <span style={{ fontSize: "14px" }}>$ 119.71M</span>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col
          xs={3}
          style={{
            marginLeft: "10px",
            alignSelf: "auto",
            backgroundColor: "#f9f9f9",
            height: "60px",
            borderRadius: "10px",
          }}
        >
          <Row>
            <Col>
              <span
                style={{ margin: "auto", fontSize: "12px", fontWeight: "bold" }}
              >
                Buy
              </span>
            </Col>
          </Row>
          <Row>
            <Col style={{ color: "#bdbbbb", marginTop: "0px" }} xs={9}>
              0.00
            </Col>
            <Col xs={3}>
              <Row>
                <Col xs={3}>
                  <FaEthereum
                    icon="fa-brands fa-ethereum"
                    style={{
                      width: "15px",
                      height: "15px",
                      alignSelf: "center",
                    }}
                  />
                </Col>
                <Col xs={7}>
                  <span
                    style={{
                      marginTop: "10px",
                      margin: "auto",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    ETH
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col xs={7}>
              <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                Price
              </span>
            </Col>
            <Col xs={5}>
              <div style={{ width: "100%", float: "right" }}>
                <span
                  style={{
                    float: "right",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  USD $ 0.00
                </span>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Button
              style={{ fontSize: "12px", fontWeight: "bold" }}
              variant="warning"
            >
              Buy ETH
            </Button>
          </Row>
          <Row
            style={{
              marginTop: "20px",
              alignSelf: "auto",
              backgroundColor: "#f9f9f9",
              paddingTop: "10px",
              paddingLeft: "10px",
              borderRadius: "10px",
            }}
          >
            <Row>
              <span style={{ fontSize: "12px" }}>
                Binance has the lowest transaction fee rate amongst all major
                trading platforms.
              </span>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col xs={4}>
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Coinbase
                </span>
              </Col>
              <Col xs={8} style={{ float: "right" }}>
                <ProgressBar label={`1.99%`} variant="danger" now={80} />
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col xs={4}>
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Kraken
                </span>
              </Col>
              <Col xs={8} style={{ float: "right" }}>
                <ProgressBar label={`0.26%`} variant="danger" now={60} />
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col xs={4}>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#FFC007",
                    fontWeight: "bold",
                  }}
                >
                  Binance
                </span>
              </Col>
              <Col xs={8} style={{ float: "right" }}>
                <ProgressBar label={`0.1%`} variant="success" now={40} />
              </Col>
            </Row>
          </Row>
          <Row>
            <Row style={{ marginTop: "50px" }}>
              <h4>Trending cryptos</h4>
            </Row>
            <Row style={{ paddingRight: "0px" }}>
              <ul style={{ listStyle: "none", paddingRight: "0px" }}>
                {listDatas.map((list) => {
                  return (
                    <li>
                      <TrendingCrypto
                        key={list.id}
                        data={list}
                      ></TrendingCrypto>
                    </li>
                  );
                })}
              </ul>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Ethereum;
