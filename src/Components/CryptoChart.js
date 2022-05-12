import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HistoricalChartApii } from "../config/api";
import { CryptoState } from "../context/CoinContext";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    width: "75%",
    background: 'white',
    padding: "50px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0 20px 20px 20px",
      marginTop: 0,
    },
  },
}));

const chartFollowTimer = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
];

const CryptoChart = ({ cryptoDetail }) => {
  const [chartData, setChartData] = useState();
  const [days, setDays] = useState(1);

  const { symbol, currency } = CryptoState();
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  useEffect(() => {
    async function fetchData() {
      try {
        let { data } = await axios.get(
          HistoricalChartApii(cryptoDetail.id, days, currency)
        );
        setChartData(data.prices);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, days]);
//   console.log(chartData);
  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
      type: "light",
    },
  });
  const classes = useStyles();
  // Line.register(CategoryScale);

  return (
    <ThemeProvider theme={lightTheme}>
      <div className={classes.chartContainer}>
      <Typography variant="h5" style={{color:'#fb8500', fontWeight:'bold'}}>BIỂU ĐỒ BIẾN ĐỘNG GIÁ</Typography>
        {!chartData ? (
          <CircularProgress
            size={250}
            thickness={1}
            style={{ color: "gold" }}
          />
        ) : (
          <>
            <Line
              data={{
                labels: chartData?.map((item, index) => {
                  let date = new Date(item[0]);
                  let timeDate =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()}AM`;
                  return days === 1 ? timeDate : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: chartData.map((item, index) => {
                      return item[1];
                    }),
                    label: `Price ( Past ${days} Days) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              {chartFollowTimer.map((time, index) => {
                return <Button key={time.value} onClick={()=>{setDays(time.value)}} selected={time.value === days}>{time.label}</Button>;
              })}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CryptoChart;
