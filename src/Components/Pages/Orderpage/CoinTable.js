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

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const history = useHistory();

  console.log(coins);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
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
  const classes = useStyles();
  const initialList = [];
  const [tableDatas, setList] = React.useState(initialList);

  const fetchHistory = async () => {
    const { data } = await axios.get(
      "https://6207460e92dd6600171c0d48.mockapi.io/api/orders/orders"
    );
    console.log(data);
    setList(data);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ marginLeft: "70px", marginRight: "105px" }}>
        <ul id="list" style={{ listStyle: "none" }}>
          {tableDatas.map((value) => {
            return (
              <li key={value.id}>
                <OrderTableRow2 data={value}></OrderTableRow2>
              </li>
            );
          })}
        </ul>
      </div>
    </ThemeProvider>
  );
};

export default CoinTable;
