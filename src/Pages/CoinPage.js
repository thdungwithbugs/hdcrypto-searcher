import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import { CryptoState } from "../context/CoinContext";
import axios from "axios";
import { SingleCoinApi } from "../config/api";
import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import CryptoChart from "../Components/CryptoChart";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { moneyInternationalFormat } from "../Components/Carousel";

const useStytes = makeStyles((theme) => ({
  coinDetailContainer: {
    paddingTop: "64px",
    display: "flex",
    // Responsive in md size
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  cryptoMarKetCap: {
    padding: "25px",
    width: "100%",
    alignSelf: "start",
    // Responsive in md size
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    // Responsive in sm size
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    // Responsive in xs size
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
  },
  coinDetailSidebar: {
    color: "black",
    width: "30%",
    background: "#dee2e6",
    // Responsive in md size
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "25px",
  },
  infoHeading: {
    fontWeight: "bold",
    marginBottom: "20px",
    
  },
  cryptoDesc: {
    textAlign: "justify",
    width: "100%",
    padding: "0 25px 15px 25px",
  },
}));

const CoinPage = () => {
  const { id } = useParams();
  //   console.log(id);
  const [cryptoDetail, setCryptoDetail] = useState();
  const { currency, symbol } = CryptoState();
  const classes = useStytes();

  useEffect(() => {
    async function fetchData() {
      try {
        let { data } = await axios.get(SingleCoinApi(id));
        console.log(data);
        setCryptoDetail(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Loading
  if (!cryptoDetail) {
    return <LinearProgress style={{ background: "gold" }} />;
  }

  return (
    <>
      <Header />
      <div className={classes.coinDetailContainer}>
        {/* Crypto desc - Left side */}
        <div className={classes.coinDetailSidebar}>
          <img
            className="logoCoin"
            src={cryptoDetail?.image.large}
            alt={cryptoDetail?.name}
            style={{
              height: "100px",
              marginBottom: "20px",
              objectFit: "cover",
            }}
          />
          <Typography variant="h4" className={classes.infoHeading}>
            {cryptoDetail?.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.cryptoDesc}>
            {ReactHtmlParser(
              cryptoDetail?.description.vi.substr(0, 1000) ||
                cryptoDetail?.description.en.substr(0, 1000)
            )}
            ...
          </Typography>
          <div className={classes.cryptoMarKetCap}>
            <span style={{ display: "flex", justifyContent:'space-between' }}>
              <Typography variant="h6" className={classes.infoHeading}>
                Hạng theo vốn hóa:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                className={classes.infoHeading}
                style={{ fontWeight: "lighter" }}
              >
                {cryptoDetail?.market_cap_rank}
              </Typography>
            </span>
            <span style={{ display: "flex",justifyContent:'space-between' }}>
              <Typography variant="h6" className={classes.infoHeading}>
                Giá mới nhất:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                className={classes.infoHeading}
                style={{ fontWeight: "lighter" }}
              >
                {moneyInternationalFormat(
                  cryptoDetail?.market_data.current_price[
                    currency.toLowerCase()
                  ]
                )}{symbol}
              </Typography>
            </span>
            <span style={{ display: "flex",justifyContent:'space-between' }}>
              <Typography variant="h6" className={classes.infoHeading}>
                Vốn hóa thị trường:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                className={classes.infoHeading}
                style={{ fontWeight: "lighter" }}
              >
                {moneyInternationalFormat(
                  cryptoDetail?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -9)
                )}{" "}
                Tỷ {symbol}
              </Typography>
            </span>
            <span style={{ display: "flex" ,justifyContent:'space-between'}}>
              <Typography variant="h6" className={classes.infoHeading}>
                Điểm quan tâm (PI Score):
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                className={classes.infoHeading}
                style={{ fontWeight: "lighter" }}
              >
                {cryptoDetail?.public_interest_score}
              </Typography>
            </span>
            <span style={{ display: "flex",justifyContent:'space-between'}}>
              <Typography variant="h6" className={classes.infoHeading}>
                Tổng cung:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                className={classes.infoHeading}
                style={{ fontWeight: "lighter" }}
              >
                {cryptoDetail?.market_data?.total_supply}
              </Typography>
            </span>
            <span style={{ display: "flex",justifyContent:'space-between' }}>
              <Typography variant="h6" className={classes.infoHeading}>
                Tỷ lệ tâm lý tiêu cực:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                className={classes.infoHeading}
                style={{ fontWeight: "lighter" }}
              >
                {cryptoDetail?.sentiment_votes_down_percentage}%
              </Typography>
            </span>
            <span style={{ display: "flex",justifyContent:'space-between' }}>
              <Typography variant="h6" className={classes.infoHeading}>
                Điểm thanh khoản:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                className={classes.infoHeading}
                style={{ fontWeight: "lighter" }}
              >
                {cryptoDetail?.liquidity_score}
              </Typography>
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" className={classes.infoHeading}>
                Website liên quan:
              </Typography>
              <Typography
                variant="h5"
                className={classes.infoHeading}
                style={{ fontWeight: "lighter", display:'flex', flexDirection:'column', gap:'5px' }}
              >
                {cryptoDetail?.links?.blockchain_site?.slice(0,5).map((item,index)=>{
                    return <div key={index} style={{display:'flex', flexDirection:'column', fontSize:'1rem', wordWrap:'break-word'}}><a href={item}>{item}</a></div>
                })}
              </Typography>
            </span>
          </div>
        </div>
        {/* Crypto chart time - Right side */}
        <CryptoChart cryptoDetail={cryptoDetail} />
      </div>
    </>
  );
};

export default CoinPage;
