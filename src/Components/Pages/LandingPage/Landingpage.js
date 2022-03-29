import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";

import Tablerow from "../TableviewPage/Tablerow";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Coinvaluecomponent from "./Coinvaluecomponent";
import Imageviewcomponent from "./ImageViewComponent";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useEffect } from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Slider from "react-styled-carousel";

import {
  TableCell,
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Paper } from "@material-ui/core";

import TradeAnywhere from "./TradeAnywhere";
import { Row, Col } from "react-bootstrap";

function Landingpage() {
  const [isAscending, setAscending] = useState(true);
  //const classes = useStyles();
  const initialList = [];
  const [tableDatas, setList] = React.useState(initialList);
  const [pagination, setPagination] = useState(1);
  const [sort, setSort] = useState("id_asc");
  const [searchInput, setSearchInput] = useState("");
  const [inputName, setName] = useState("");
  const [items, setItems] = useState([]);

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

  const coinValueDatas = [
    {
      title: "BNB/BUSD",
      subTitle: "378.6",
      price: "$378.49",
      id: "1",
    },

    {
      title: "LUNA/BUSD",
      subTitle: "49.59",
      price: "$49.58",
      id: "2",
    },
    {
      title: "ADA/BUSD",
      subTitle: "1.032",
      price: "$1.03",
      id: "3",
    },
    {
      title: "BTC/BUSD",
      subTitle: "37,692.22",
      price: "$37,680.91",
      id: "4",
    },
    {
      title: "ETH/BUSD",
      subTitle: "2,616",
      price: "$2,615.46",
      id: "5",
    },
  ];
  const imageViewPictures = [
    {
      image: "image1.jfif",
      id: "A",
    },
    {
      image: "image2.jfif",
      id: "B",
    },
    {
      image: "image4.jfif",
      id: "C",
    },
    {
      image: "image2.jfif",
      id: "D",
    },
    {
      image: "image2.jfif",
      id: "E",
    },
    {
      image: "image4.jfif",
      id: "F",
    },
    {
      image: "image4.jfif",
      id: "G",
    },
    {
      image: "image4.jfif",
      id: "H",
    },
    {
      image: "image4.jfif",
      id: "I",
    },
  ];

  const handlePagination = (event, page) => {
    setPagination(page);
    console.log("pagnation: ", page);
  };

  const handleSearch = (event) => {
    console.log("values: ", event.target.value);
    setSearchInput(event.target.value);
  };
  const handleSortAsc = () => {
    console.log("Sorting");
    setSort("id_asc");
    setAscending(true);
  };

  const handleSortDesc = () => {
    console.log("Sorting");
    setSort("id_desc");
    setAscending(false);
  };

  return (
    <div>
      <Grid>
        <section>
          <h1 style={{ marginLeft: "100px", color: "#03B0BE" }}>
            Make your first trade
          </h1>
          <h5 style={{ marginLeft: "100px", color: "#334D86" }}>
            Trade more than 750 cryptocurrency and flat pairs,including
            Bitcoin,Ethereum,and BNB with<br></br>Binance Spot
          </h5>

          <Button
            style={{
              backgroundColor: "#fcd535",
              marginLeft: "100px",
            }}
          >
            Trade Now
          </Button>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginRight: "100px",
            }}
          >
            {coinValueDatas.map((coinValue) => {
              return (
                <Coinvaluecomponent
                  key={coinValue.id}
                  data={coinValue}
                ></Coinvaluecomponent>
              );
            })}
          </div>
          <div
            style={{
              marginLeft: "75px",
              marginRight: "75px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Slider cardsToShow="4">
              {imageViewPictures.map((view) => {
                return (
                  <Imageviewcomponent
                    key={view.id}
                    data={view}
                  ></Imageviewcomponent>
                );
              })}
            </Slider>
          </div>
          <div>
            <Typography>
              <Typography
                style={{
                  marginLeft: "100px",
                  color: "gray",
                  varient: "h3",
                  height: "10px",
                  marginTop: "50px",
                }}
              >
                <AccessibilityIcon
                  style={{ verticalAlign: "middle", marginRight: "10px" }}
                />
                Binance Secure Assest Fund for Users(SAFU) Valued at $1BN 01-31
                &nbsp; &nbsp; | <span style={{ color: "#314E88" }}>More</span>
              </Typography>
              <Typography
                style={{
                  display: "inline-block",
                  marginLeft: "100px",
                  color: "gray",
                  varient: "h3",
                  height: "30px",
                  marginTop: "30px",
                  align: "center",
                }}
              >
                <NoteAddIcon
                  style={{ verticalAlign: "middle", marginRight: "10px" }}
                />
                Special Notice about Binance.com in Singapur &nbsp; &nbsp;
              </Typography>
              <Typography style={{ color: "#314E88", display: "inline-block" }}>
                More
              </Typography>
            </Typography>
            <Typography
              //   display="inline"
              style={{
                display: "inline-block",
                marginLeft: "100px",
                color: "gray",
                varient: "h3",
                height: "30px",
                marginTop: "15px",
              }}
            >
              <NoteAddIcon
                style={{ verticalAlign: "middle", marginRight: "10px" }}
              />
              Special Notice about Binance Markets Limited &nbsp; &nbsp;
            </Typography>
            <Typography style={{ color: "#314E88", display: "inline-block" }}>
              More
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                marginLeft: "100px",
                fontSize: "40px",
                marginTop: "40px",
                marginBottom: "40px",
                color: "#03B0C0",
              }}
            >
              Market trend
            </Typography>
          </div>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{ margin: "100px", marginTop: "40px" }}
          >
            <Box mb={3} alignSelf="start" width="400px">
              {/* {/ <Search onChange={handleSearch} /> /} */}
              <input type="text" data="name" onChange={nameEvent}></input>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "650" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        color: "gray",
                        borderBottom: "none",
                        display: "flex",
                      }}
                      Name
                    >
                      <Row>
                        <Col>
                          <span style={{ fontSize: "18px" }}>Name</span>
                        </Col>
                        <Col>
                          <Row>
                            {!isAscending ? (
                              <ArrowDropUpIcon
                                style={{ width: "50px", height: "20px" }}
                                onClick={handleSortAsc}
                              ></ArrowDropUpIcon>
                            ) : null}
                          </Row>
                          <Row>
                            {isAscending ? (
                              <ArrowDropDownIcon
                                style={{ width: "50px", height: "20px" }}
                                disabled={true}
                                onClick={handleSortDesc}
                              ></ArrowDropDownIcon>
                            ) : null}
                          </Row>
                        </Col>
                      </Row>
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: "gray",
                        borderBottom: "none",
                        fontSize: "18px",
                      }}
                    >
                      Last Price
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: "gray",
                        borderBottom: "none",
                        fontSize: "18px",
                      }}
                    >
                      24h Change
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: "gray",
                        borderBottom: "none",
                        fontSize: "18px",
                      }}
                    >
                      Markets
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
                          key={viewTable.alt}
                          data={viewTable}
                        ></Tablerow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <Box mt={3}>
              <Pagination
                count={500}
                color="primary"
                page={pagination}
                onChange={handlePagination}
              />
            </Box>
          </Box>
        </section>
      </Grid>
      <div>
        <TradeAnywhere></TradeAnywhere>
      </div>
    </div>
  );
}
export default Landingpage;
