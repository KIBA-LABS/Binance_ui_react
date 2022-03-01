import React from "react";
import { Row, Rows, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";
//import BuyTableName from "./BuyTableName";
import { Tabs, Tab } from "@material-ui/core";
import { useState } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import BuyTableName from "./BuyTableName";
import Form from "react-bootstrap/Form";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const tabStyle = {
  default_tab: {
    color: "white",
    width: "33.3%",

    fontSize: 15,
  },
  active_tab: {
    color: "white",
    width: "33.3%",

    fontSize: 15,
  },
  active_tab_black: {
    color: "black",
    width: "33.3%",

    fontSize: 15,
  },
};
const tableRows = [
  {
    Advertiser: "BTC",
    Price: "247,0826",
    Limit: "0.00456963",
    Payment: "0.00000000000",
    id: "111",
    Trade: "Bitcoin",
    orders: "35678",
    Available: 457890,
  },
  {
    Advertiser: "BTC",
    Price: "247,0826",
    Limit: "0.00456963",
    Payment: "0.00",
    id: "111",
    Trade: "Bitcoin",
    orders: "35678",
    Available: 457890,
  },
  {
    Advertiser: "BTC",
    Price: "247,0826",
    Limit: "0.00456963",
    Payment: "0.00000000000",
    id: "111",
    Trade: "Bitcoin",
    orders: "35678",
    Available: 457890,
  },
  {
    Advertiser: "BTC",
    Price: "247,0826",
    Limit: "0.00456963",
    Payment: "0.00000000000",
    id: "111",
    Trade: "Bitcoin",
    orders: "35678",
    Available: 457890,
  },
  {
    Advertiser: "BTC",
    Price: "247,0826",
    Limit: "0.00456963",
    Payment: "0.00000000000",
    id: "111",
    Trade: "Bitcoin",
    orders: "35678",
    Available: 457890,
  },
  {
    Advertiser: "BTC",
    Price: "247,0826",
    Limit: "0.00456963",
    Payment: "0.00000000000",
    id: "111",
    Trade: "Bitcoin",
    orders: "35678",
    Available: 457890,
  },
  {
    Advertiser: "BTC",
    Price: "247,0826",
    Limit: "0.00456963",
    Payment: "0.00000000000",
    id: "111",
    Trade: "Bitcoin",
    orders: "35678",
    Available: 457890,
  },
];

function Buypage() {
  console.log("buypage");
  //const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "120px",
      }}
    >
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <span style={{ color: "white" }}>
          Binance P2P:BuySell Your Crypto Locally
        </span>
        <br></br>

        <span style={{ color: "white" }}>
          peer-to-peer Exchang is a market place whwere people can trade crypto
          <br></br> directly with each other with their own terms, in vertually
          any country
        </span>
      </div>

      <div style={{ backgroundColor: "#FF6F6" }}>
        <div style={{ backgroundColor: "black", height: "45px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            style={{ color: "white", height: "45px" }}
            TabIndicatorProps={{ style: { backgroundColor: "yellow" } }}
          >
            <Tab
              label="Express"
              style={value === 0 ? tabStyle.active_tab : tabStyle.default_tab}
              {...a11yProps(0)}
              style={{ minWidth: "10px", marginLeft: "5%" }}
            />
            <Tab
              label="P2P"
              style={value === 1 ? tabStyle.active_tab : tabStyle.default_tab}
              {...a11yProps(1)}
              style={{ minWidth: "10px" }}
            />
            <Tab
              label="Video Tutorial"
              style={value === 2 ? tabStyle.active_tab : tabStyle.default_tab}
              {...a11yProps(2)}
              style={{ minWidth: "10px", marginLeft: "50%" }}
            />
            <Tab
              label="Orders"
              style={value === 2 ? tabStyle.active_tab : tabStyle.default_tab}
              {...a11yProps(2)}
              style={{ minWidth: "10px" }}
            />
            <Tab
              label="P2p UserCenter"
              style={value === 2 ? tabStyle.active_tab : tabStyle.default_tab}
              {...a11yProps(2)}
              style={{ minWidth: "10px" }}
            />
            <Tab
              label="More"
              style={value === 2 ? tabStyle.active_tab : tabStyle.default_tab}
              {...a11yProps(2)}
              style={{ minWidth: "10px" }}
            />
          </Tabs>
        </div>
      </div>
      <div style={{ backgroundColor: "#FF6F6" }}>
        <div style={{ backgroundColor: "white", height: "45px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            style={{ color: "white", height: "45px" }}
            TabIndicatorProps={{ style: { backgroundColor: "yellow" } }}
          >
            <Tab
              label="Buy"
              style={{ color: "black", minWidth: "10px", marginLeft: "8%" }}
              {...a11yProps(0)}
            />
            <Tab
              label="Sell"
              style={{ color: "black", minWidth: "15px" }}
              {...a11yProps(1)}
            />
            <Tab
              label="USDT"
              style={{ color: "black", minWidth: "15px" }}
              {...a11yProps(2)}
            />
            <Tab
              label="BUSD"
              style={{ color: "black", minWidth: "15px" }}
              {...a11yProps(2)}
            />
            <Tab
              label="BNB"
              style={{ color: "black", minWidth: "15px" }}
              {...a11yProps(2)}
            />
            <Tab
              label="ETH"
              style={{ color: "black", minWidth: "15px" }}
              {...a11yProps(2)}
            />
            <Tab
              label="DOGE"
              style={{ color: "black", minWidth: "15px" }}
              {...a11yProps(2)}
            />
            <Tab
              label="DOI"
              style={{ color: "black", minWidth: "15px" }}
              {...a11yProps(2)}
            />
          </Tabs>
        </div>
      </div>
      {/* <div>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value="10"
          style={{ width: "150px", textAlign: "center" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>CNY</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value="10"
          style={{ width: "150px", textAlign: "center" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>All Payments</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div> */}
      <Row>
        <Row style={{ marginLeft: "90px" }}>
          Flat<Col style={{ marginLeft: "180px" }}>Payment</Col>
        </Row>

        <Col xs={2}>
          <Form.Select
            size="sm"
            style={{
              width: "150px",
              height: "30px",
              marginLeft: "90px",
              marginTop: "8px",
            }}
          >
            <option>CNY</option>
            <option value="1">INR </option>
          </Form.Select>
        </Col>
        <Col xs={2}>
          <Form.Select
            size="sm"
            style={{
              width: "150px",
              height: "30px",
              marginLeft: "20px",
              marginTop: "8px",
            }}
          >
            <option>All payments</option>
            <option value="1">INR </option>
          </Form.Select>
        </Col>
      </Row>

      <div
        style={{
          fontSize: "12px",
          backgroundColor: "white",
        }}
      >
        <Row
          style={{
            backgroundColor: "#F9F9F9",
            height: "40px",
            marginLeft: "70px",
            marginRight: "50px",
          }}
        >
          <Col xs={2}>Advertiser</Col>
          <Col xs={3}>Price</Col>
          <Col xs={3}>Limit/Available</Col>
          <Col xs={2}>Payment</Col>
          <Col xs={1}>Trade</Col>
          <Col xs={1}>
            <span style={{ backgroundColor: "lightgreen" }}> o fee</span>
          </Col>
        </Row>
        {/* {/ <BuyTableName></BuyTableName> /} */}
      </div>
      <ul id="list" style={{ listStyle: "none" }}>
        {tableRows.map((value) => {
          return (
            <li key={value.id}>
              <BuyTableName data={value}></BuyTableName>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Buypage;
