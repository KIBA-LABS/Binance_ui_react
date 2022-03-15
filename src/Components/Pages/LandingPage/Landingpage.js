import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
//import Coinvaluecomponent from "./LandingPage/Coinvaluecomponent";
//import Imageviewcomponent from "./LandingPage/Imageviewcomponent";
import Tablerow from "../TableviewPage/Tablerow";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
//import { Icon } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Coinvaluecomponent from "./Coinvaluecomponent";
import Imageviewcomponent from "./ImageViewComponent";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { useEffect } from "react";

import {
  TableCell,
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Paper } from "@material-ui/core";
//import TradeAnywhere from "./LandingPage/TradeAnywhere";
import TradeAnywhere from "./TradeAnywhere";
import Search from "../Fundingpage/Search";
function Landingpage() {
  //const classes = useStyles();
  const initialList = [];
  const [tableDatas, setList] = React.useState(initialList);
  const [pagination, setPagination] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  const fetchHistory = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${pagination}&sparkline=false`
    );

    console.log(data);
    setList(data);
  };
  useEffect(() => {
    fetchHistory();
  }, [pagination, searchInput]);

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
  ];

  const handlePagination = (event, page) => {
    setPagination(page);
    console.log("pagnation: ", page);
  };

  const handleSearch = (event) => {
    console.log("values: ", event.target.value);
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <Grid>
        <section>
          <h1 style={{ marginLeft: "100px" }}>Make your first trade</h1>
          <h5 style={{ marginLeft: "100px" }}>
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
            {imageViewPictures.map((view) => {
              return (
                <Imageviewcomponent
                  key={view.id}
                  data={view}
                ></Imageviewcomponent>
              );
            })}
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
                &nbsp; &nbsp; | More
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
              <Typography style={{ color: "#fcd535", display: "inline-block" }}>
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
            <Typography style={{ color: "#fcd535", display: "inline-block" }}>
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
              <Search onChange={handleSearch} />
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "650" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: "gray", borderBottom: "none" }}>
                      Name
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: "gray",
                        borderBottom: "none",
                      }}
                    >
                      Last Price
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "gray", borderBottom: "none" }}
                    >
                      24h Change
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "gray", borderBottom: "none" }}
                    >
                      Markets
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableDatas.map((viewTable) => {
                    return (
                      <Tablerow key={viewTable.alt} data={viewTable}></Tablerow>
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
