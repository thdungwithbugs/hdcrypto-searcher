import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    background:
      "url(https://images.unsplash.com/photo-1639389016105-2fb11199fb6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop:"64px",
  },
  bannerContainer: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: "25px",
  },
  bannerContent: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContainer}>
        <div className={classes.bannerContent}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            HD Crypto Searcher
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgray",
            }}
          >
            THEO DÕI THÔNG TIN THỊ TRƯỜNG TIỀN ẢO TRỰC TUYẾN
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
