import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingCoinsApi } from "../config/api";
import { CryptoState } from "../context/CoinContext";
import AliceCarousel from "react-alice-carousel";
import { NavLink } from "react-router-dom";

export const moneyInternationalFormat = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const useStyles = makeStyles(() => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    color:'white',
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color:'#EEBC1D',
  },
}));

const Carousel = () => {
  const [state, setState] = useState([]);
  const { currency, symbol } = CryptoState();
  const classes = useStyles();
  const carouselResponsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  const carouselCoin = state.map((item, index) => {
    let profit = item.price_change_percentage_24h >= 0;
    return (
      <NavLink
        key={item.id}
        className={classes.carouselItem}
        to={`/coins/${item.id}`}
      >
        <img
          src={item?.image}
          alt={item?.name}
          style={{
            height: "80px",
            width: "80px",
            marginBottom: "10px",
            objectFit: "cover",
            color: 'white',
          }}
        />
        <span>
          {item?.symbol} &nbsp;{" "}
          <span
            style={{
              color: profit > 0 ? "rgb(14,203,129)" : "red",
              fontWeight: "bold",
            }}
          >
            {profit && "+"}
            {Number(item?.price_change_percentage_24h).toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: "22px", fontWeight: 500 }}>
          {moneyInternationalFormat(item?.current_price.toFixed(2))}
          {symbol}
        </span>
      </NavLink>
    );
  });
  useEffect(() => {
    async function fetchData() {
      try {
        let { data } = await axios.get(TrendingCoinsApi(currency));
        console.log(data);
        setState(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [currency]);

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={carouselResponsive}
        autoPlay
        items={carouselCoin}
        disableButtonsControls
      />
    </div>
  );
};

export default Carousel;
