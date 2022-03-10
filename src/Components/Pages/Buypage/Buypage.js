import React from "react";
import { Row, Rows, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";

import { Tabs, Tab } from "@material-ui/core";
import { useState } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import BuyTableName from "./BuyTableName";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import axios from "axios";
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
  indicator: {
    backgroundColor: "yellow",
  },
  form: {
    width: "150px",
    height: "30px",
    marginLeft: "20px",
    marginTop: "8px",
  },
  Row: {
    backgroundColor: "#F9F9F9",
    height: "40px",
    marginLeft: "70px",
    marginRight: "50px",
  },
  formSelect: {
    width: "150px",
    height: "30px",
    marginLeft: "90px",
    marginTop: "8px",
  },
}));
const tabStyle = {
  default_tab: {
    color: "yellow",
    width: "33.3%",

    fontSize: 15,
  },
  active_tab: {
    color: "yellow",
    width: "33.3%",

    fontSize: 15,
  },
  active_tab_black: {
    color: "black",
    width: "33.3%",

    fontSize: 15,
  },
};

function Buypage() {
  const classes = useStyles();
  const initialList = [];
  const [tableDatas, setList] = React.useState(initialList);

  const fetchHistory = async () => {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    console.log(data);
    setList(data);
  };

  //const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  useEffect(() => {
    fetchHistory();
  }, []);
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
            style={{ height: "45px", color: "white" }}
            TabIndicatorProps={{
              style: { backgroundColor: "yellow" },
            }}
            classes={{ indicator: classes.indicator }}
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

      <Row>
        <Row style={{ marginLeft: "90px" }}>
          Flat<Col style={{ marginLeft: "180px" }}>Payment</Col>
        </Row>

        <Col xs={2}>
          <Form.Select size="sm" class name="formSelect">
            <option>CNY</option>
            <option value="1">INR </option>
          </Form.Select>
        </Col>
        <Col xs={2}>
          <Form.Select class name="form" size="sm">
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
        <Row class name="Row">
          <Col xs={2}>Advertiser</Col>
          <Col xs={3}>Price</Col>
          <Col xs={3}>Limit/Available</Col>
          <Col xs={2}>Payment</Col>
          <Col xs={2}>Trade</Col>
        </Row>
      </div>
      <ul id="list" style={{ listStyle: "none" }}>
        {tableDatas.map((value) => {
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
