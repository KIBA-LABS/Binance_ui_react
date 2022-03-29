import { Checkbox, TableHead, Typography } from "@material-ui/core";
import React from "react";

import Drawer from "../../Components1/Drawer/drawer";
import { TableContainer } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableBody } from "@material-ui/core";

import { Table } from "@material-ui/core";

import { Row, Col, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Pagination } from "@material-ui/lab";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { TableRow } from "@material-ui/core";
import Tablerow from "../TableviewPage/Tablerow";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  row: {
    backgroundColor: "16171a",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#131111",
    },
    fontFamily: "Montserrat",
  },
  pagination: {
    "&.MuiPaginationItem-root": {
      color: "gold",
    },
  },
}));

function Funding() {
  const classes = useStyles();
  const initialList = [];
  const [tableDatas, setList] = React.useState(initialList);
  const [pagination, setPagination] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [inputName, setName] = useState("");
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState("id_asc");
  const nameEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const fetchHistory = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=${sort}&per_page=10&page=${pagination}&sparkline=false`
    );
    console.log(data);
    setList(data);
  };
  useEffect(() => {
    fetchHistory();
  }, [pagination, searchInput, sort]);
  const handlePagination = (event, page) => {
    setPagination(page);
    console.log("pagnation: ", page);
  };

  const handleSearch = (event) => {
    console.log("values: ", event.target.value);
    setSearchInput(event.target.value);
  };
  const handleSort = () => {
    console.log("Sorting");
    setSort("id_desc");
  };
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
        </Row>
        <Row>
          <Col xs={3}>
            {" "}
            <Box
              style={{
                color: "grat",
                marginLeft: "90px",
              }}
            >
              {/* <Search /> */}
              <input type="text" data="name" onChange={nameEvent}></input>
            </Box>{" "}
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
                style={{ width: "90%", marginTop: "10px", marginLeft: "50px" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        color: "gray",
                        borderBottom: "none",
                        display: "inline",
                      }}
                    >
                      Assets
                      <ArrowDropDownIcon
                        onClick={handleSort}
                      ></ArrowDropDownIcon>
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
                  {tableDatas
                    .filter((currency) => {
                      console.log("data=" + currency.name);
                      var name = currency.name.toLowerCase();
                      return name.startsWith(inputName.toLowerCase());
                    })
                    .map((viewTable) => {
                      return (
                        <Tablerow
                          key={viewTable.id}
                          data={viewTable}
                        ></Tablerow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <div
              style={{
                margin: "20px 0px 40px 0px",
                textAlign: "-webkit-center",
                paddingBottom: "20px",
              }}
            >
              <Pagination
                count={500}
                color="primary"
                style={{ width: "400px" }}
                page={pagination}
                onChange={handlePagination}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default Funding;
