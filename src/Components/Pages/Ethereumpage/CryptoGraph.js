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

function CryptoGraph() {
  const classes = useStyle();
  const options = {
    chart: {
      zoomType: "x",
    },
    title: {
      text: "",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      opposite: true,
      title: {
        text: "USD",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        lineColor: "#f0b90a",
      },
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [[1, Highcharts.color("#f0b90a").setOpacity(0).get("rgba")]],
        },
        marker: {
          radius: 2,
          fillColor: "#f0b90a",
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },

    series: [
      {
        type: "area",
        name: "USD to EUR",
        data: [
          [1167609600000, 0.7537],
          [1167696000000, 0.7537],
          [1167782400000, 0.7559],
          [1167868800000, 0.7631],
          [1167955200000, 0.7644],
          [1168214400000, 0.769],
          [1168300800000, 0.7683],
          [1168387200000, 0.77],
          [1168473600000, 0.7703],
          [1168560000000, 0.7757],
          [1168819200000, 0.7728],
          [1168905600000, 0.7721],
          [1168992000000, 0.7748],
          [1169078400000, 0.774],
          [1169164800000, 0.7718],
          [1169424000000, 0.7731],
          [1169510400000, 0.767],
          [1169596800000, 0.769],
          [1169683200000, 0.7706],
          [1169769600000, 0.7752],
          [1170028800000, 0.774],
          [1170115200000, 0.771],
          [1170201600000, 0.7721],
          [1170288000000, 0.7681],
          [1170374400000, 0.7681],
          [1170633600000, 0.7738],
          [1170720000000, 0.772],
          [1170806400000, 0.7701],
          [1170892800000, 0.7699],
          [1170979200000, 0.7689],
        ],
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
CryptoGraph.propTypes = {};
CryptoGraph.defaultProps = {};

export default CryptoGraph;
