import React from "react";
import PropTypes from "prop-types";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  labelStyle: {
    color: "#867D8F",
    fontWeight: "bold",
  },
  firstLabelStyle: {
    "& div:last-child": {
      color: "gray !important",
      fontWeight: "300",
      marginTop: "5px",
    },
  },
  lastLabelStyle: {
    textAlign: "right",
    "& div:last-child": {
      color: "gray !important",
      fontWeight: "300",
      marginTop: "5px",
    },
  },
}));

function SmallGraph(props) {
  const classes = useStyle();
  const options = {
    chart: {
      type: "line",
      textAlign: "right",
      height: 70,
      width: 100,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
      align: "right",
    },
    tooltip: {
      enabled: false,
    },
    xAxis: {
      visible: false,
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      title: {
        text: "",
      },
    },

    yAxis: {
      visible: false,
      min: 0,
      max: 120,
      tickInterval: 0,

      title: {
        text: "",
      },
    },

    plotOptions: {
      line: {
        color: "red",
      },
    },
    series: [
      {
        lineWidth: 2,
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
          },
        },
        name: "Money",
        data: props.data,
      },
    ],
  };
  return (
    <div style={{ width: "100%", textAlign: "-webkit-right" }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        // style={{ marginLeft: "500px" }}
      />
    </div>
  );
}
SmallGraph.propTypes = {};
SmallGraph.defaultProps = {};

export default SmallGraph;
