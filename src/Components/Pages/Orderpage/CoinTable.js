import { createTheme, ThemeProvider } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { OrdersHistory } from "../../../config/Api";
import OrderTableRow2 from "./OrderTableRow2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  row: {
    backgroundColor: "16171a",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#131111",
    },
    fontFamily: "Montserrat",
  },
  // pagination: {
  //   "&.MuiPaginationItem-root": {
  //     color: "gold",
  //   },
  // },
}));

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const history = useHistory();
  const classes = useStyles();
  const initialList = [];
  const [tableDatas, setList] = React.useState(initialList);
  const [pagination, setPagination] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [inputName, setName] = useState("");
  const [items, setItems] = useState([]);

  console.log(coins);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  // const handleSearch = () => {
  //   return coins.filter(
  //     (coin) =>
  //       coin.name.toLowerCase().includes(search) ||
  //       coin.symbol.toLowerCase().includes(search)
  //   );
  // };

  const nameEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

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

  const handlePagination = (event, page) => {
    setPagination(page);
    console.log("pagnation: ", page);
  };

  const handleSearch = (event) => {
    console.log("values: ", event.target.value);
    setSearchInput(event.target.value);
  };

  return (
    <ThemeProvider>
      {/* <input type="text" data="name" onChange={nameEvent}></input> */}
      <div>
        <div style={{ marginLeft: "70px", marginRight: "105px" }}>
          <ul id="list" style={{ listStyle: "none" }}>
            {tableDatas
              .filter((currency) => {
                console.log("data=" + currency.name);
                var name = currency.name.toLowerCase();
                return name.startsWith(inputName.toLowerCase());
              })
              .map((value) => {
                return (
                  <li key={value.id}>
                    <OrderTableRow2 data={value}></OrderTableRow2>
                  </li>
                );
              })}
          </ul>
        </div>
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
      </div>
    </ThemeProvider>
  );
};

export default CoinTable;
