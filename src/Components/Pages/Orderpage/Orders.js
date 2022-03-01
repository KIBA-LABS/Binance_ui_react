import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Tabs, Tab } from "@material-ui/core";
import { Row, Rows, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import CoinTable from "./CoinTable";
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

function Orders() {
  const tableRows = [
    {
      Name: "BTC",
      LastPrice: "0.00456963",
      Change: "0.00456963",
      Markets: "0.00000000000",
      id: "111",
      image: "bitcoin.png",
      subTitle: "Bitcoin",
      Action: "Buy/Sell Send Receive ...",
    },
  ];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
            style={{ minWidth: "10px", marginLeft: "100px" }}
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
      <Grid className="Container" style={{ background: "white" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          style={{ color: "black", height: "45px", align: "center" }}
          TabIndicatorProps={{ style: { backgroundColor: "black" } }}
        >
          <Tab
            label="Processing"
            style={{ color: "black", marginLeft: "80px" }}
            // style={value === 0 ? tabStyle.active_tab : tabStyle.default_tab}
            // {...a11yProps(0)}
          />
          <Tab
            label="All Orders"
            style={{ color: "black" }}
            // style={value === 1 ? tabStyle.active_tab : tabStyle.default_tab}
            // {...a11yProps(1)}
          />
        </Tabs>
      </Grid>

      <Row>
        <Row style={{ marginLeft: "90px" }}>
          Coins
          <Col xs={2} style={{ marginLeft: "180px" }}>
            Order Type
          </Col>
          <Col xs={2}>Status</Col>
          <Col xs={2}>Date</Col>
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
            <option>All coins</option>
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
            <option>Buy/Sell</option>
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
            <option>All status</option>
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
            <option>2021-07-31 - 2022-01-31</option>
            <option value="1">INR </option>
          </Form.Select>
        </Col>
      </Row>

      <div
        style={{ marginRight: "105px", marginTop: "40px", marginLeft: "105px" }}
      >
        <div>
          <div
            style={{
              fontSize: "12px",
              backgroundColor: "white",
            }}
          >
            <Row
              style={{
                backgroundColor: "#F4F6F6",
                height: "40px",
                margin: "auto",
              }}
            >
              <Col xs={2} style={{ alignSelf: "center" }}>
                Types/Coins
              </Col>
              <Col xs={2} style={{ alignSelf: "center" }}>
                Flat amount
              </Col>
              <Col xs={2} style={{ alignSelf: "center" }}>
                price
              </Col>
              <Col xs={2} style={{ alignSelf: "center" }}>
                Crypto amount
              </Col>
              <Col xs={2} style={{ alignSelf: "center" }}>
                Counterparty
              </Col>
              <Col xs={1} style={{ alignSelf: "center" }}>
                Status
              </Col>
              <Col xs={1} style={{ alignSelf: "center" }}>
                Operation
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <CoinTable />
    </div>
  );
}
export default Orders;
