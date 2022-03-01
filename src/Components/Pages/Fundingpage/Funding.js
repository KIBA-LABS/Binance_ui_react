import { Checkbox, TableHead, Typography } from "@material-ui/core";
import React from "react";
//import Drawer from "../../Components1/Drawer/drawer";
//import drawer from "../../Components1/Drawer/drawer";
import Drawer from "../../Components1/Drawer/drawer";
import { TableContainer } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableFooter } from "@material-ui/core";
import { Row, Col, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

import { TableRow } from "@material-ui/core";
import Tablerow from "../TableviewPage/Tablerow";
//import Search from "@material-ui/icons/Search";
import ShopIcon from "@material-ui/icons/Shop";
import Search from "./Search";

function Funding() {
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
    {
      Name: "ETH",
      LastPrice: "0.004579367",
      Change: "0.0006655445567",
      Markets: "0.00000000000",
      id: "112",
      image: "ethereum.png",
      subTitle: "Ethereum",
      Action: "Buy/Sell Send Receive ...",
    },
    {
      Name: "BNB",
      LastPrice: "0.00456963",
      Change: "0.00456963",
      Markets: "0.00000000000",
      id: "113",
      image: "bnb.png",
      subTitle: "BNB",
      Action: "Buy/Sell Send Receive ...",
    },
    {
      Name: "ADA",
      LastPrice: "0.00456963",
      Change: "0.00456963",
      Markets: "0.00000000000",
      id: "114",
      image: "cardano.png",
      subTitle: "Cardano",
      Action: "Buy/Sell Send Receive ...",
    },
    {
      Name: "SOL",
      LastPrice: "0.00456963",
      Change: "0.00456963",
      Markets: "0.00000000000",
      id: "115",
      image: "solana.png",
      subTitle: "Solana",
      Action: "Buy/Sell Send Receive ...",
    },
    {
      Name: "SHIB",
      LastPrice: "0.00456963",
      Change: "0.00456963",
      Markets: "0.00000000000",
      id: "116",
      image: "shiba-inu.png",
      subTitle: "Shib-inu",
      Action: "Buy/Sell Send Receive ...",
    },
    {
      Name: "BTC",
      LastPrice: "0.00456963",
      Change: "0.00456963",
      Markets: "0.00000000000",
      id: "112",
      image: "bitcoin.png",
      subTitle: "Bitcoin",
      Action: "Buy/Sell Send Receive ...",
    },
    {
      Name: "BTC",
      LastPrice: "0.00456963",
      Change: "0.00456963",
      Markets: "0.00000000000",
      id: "112",
      image: "coin.png",
      subTitle: "Bitcoin",
      Action: "Buy/Sell Send Receive ...",
    },
  ];
  return (
    <Row style={{ marginTop: "25px" }}>
      <Col xs={2}>
        <Drawer></Drawer>
      </Col>

      <Col xs={10}>
        <Row
          style={{
            width: "100%",
            marginLeft: "30px",
            marginRght: "30px",
            marginTop: "0px",
            marginBottom: "20px",
          }}
        >
          <Col xs={6}>
            <h2>Funding</h2>
          </Col>
          <Col xs={6}>
            <Button
              variant="warning"
              style={{ width: "100px", marginLeft: "5px", marginRight: "5px" }}
            >
              Deposit
            </Button>
            <Button
              variant="light"
              style={{ width: "100px", marginLeft: "5px", marginRight: "5px" }}
            >
              Withdraw
            </Button>
            <Button
              variant="light"
              style={{ width: "100px", marginLeft: "5px", marginRight: "5px" }}
            >
              Send
            </Button>
            <Button
              variant="light"
              style={{ width: "100px", marginLeft: "5px", marginRight: "5px" }}
            >
              Transfer
            </Button>
            <Button
              variant="light"
              style={{ width: "100px", marginLeft: "5px", marginRight: "5px" }}
            >
              History
            </Button>
          </Col>
        </Row>
        <Row style={{ marginLeft: "30px" }}>
          <Col xs={3}>
            <h6>
              Estimated Balance <VisibilityIcon></VisibilityIcon>
            </h6>
          </Col>
        </Row>
        <br />
        <Row style={{ marginLeft: "30px" }}>
          <Col>
            <h4>
              0.00920487 BTC
              <span style={{ color: "grey" }}> ~ $347.73</span>
            </h4>
          </Col>
          {/* <Col xs={2}>
            <ShopIcon></ShopIcon>
          </Col>
          <Col xs={2}>
            <ShopIcon></ShopIcon>
          </Col>
          <Col xs={2}>
            <ShopIcon></ShopIcon>
          </Col> */}
        </Row>
        <Row>
          <Col xs={3}>
            {" "}
            <box
              style={{
                color: "grat",
                marginLeft: "90px",
              }}
            >
              <Search />
            </box>{" "}
          </Col>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Col xs={3}>
            <Checkbox></Checkbox>
            <span>Hide 0 balance assets</span>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <TableContainer>
              <Table
                // sx={{ minWidth: "650" }}
                //style={{ marginLeft: "17%" }}
                style={{ width: "90%", marginTop: "10px", marginLeft: "50px" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: "gray", borderBottom: "none" }}>
                      Assets
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: "gray",
                        borderBottom: "none",
                      }}
                    >
                      Total Amount
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "gray", borderBottom: "none" }}
                    >
                      Available
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "gray", borderBottom: "none" }}
                    >
                      Frozen
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "gray", borderBottom: "none" }}
                    >
                      BTC value
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "gray", borderBottom: "none" }}
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableRows.map((viewTable) => {
                    return (
                      <Tablerow key={viewTable.id} data={viewTable}></Tablerow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default Funding;
