import {
  Container,
  createTheme,
  LinearProgress,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../context/CoinContext";
import { moneyInternationalFormat } from "./Carousel";
import Pagination from "@material-ui/lab/Pagination";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles(() => ({
  tableRow: {
    background: "#edf6f9",
    cursor: "pointer",
    "&:hover": {
      background: "#f7ede2",
    },
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "black",
    },
  },
}));

const CryptoDashBoard = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol, dashBoard, loading } = CryptoState();
  const navigate = useNavigate();
  const classes = useStyles();

  console.log(dashBoard);
  const handleSearch = () => {
    return dashBoard.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.symbol.toLowerCase().includes(search)
    );
  };
  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
      type: "light",
    },
  });
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <Container style={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            style={{ margin: "40px", color: "#fb8500", fontWeight: "bold" }}
          >
            Tình hình thị trường tiền ảo - CoingeckoAPI
          </Typography>
          <TextField
            label="Tìm đồng tiền ảo của bạn..."
            variant="outlined"
            style={{
              marginBottom: "20px",
              width: "100%",
            }}
            onChange={(event) => setSearch(event.target.value)}
          ></TextField>
          <div className="marquee">
            <p>
              {handleSearch()
                .slice(10 * (page - 1), 10 * page)
                .map((text, index) => {
                  const profit = text.price_change_percentage_24h > 0;
                  return (
                    <span key={text.id} style={{ marginRight: "40px" }}>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        {text?.id}
                      </span>{" "}
                      :{" "}
                      {moneyInternationalFormat(
                        Number(text?.current_price).toFixed(2)
                      )}{" "}
                      {symbol}{" "}
                      <span
                        style={{
                          color: profit > 0 ? "rgb(14,203,129)" : "red",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        {profit && "+"}
                        {Number(text?.price_change_percentage_24h).toFixed(
                          2
                        )}%{" "}
                      </span>
                    </span>
                  );
                })}
            </p>
          </div>
          <TableContainer>
            {loading ? (
              <LinearProgress style={{ background: "gold" }} />
            ) : (
              <Table style={{ borderRadius: "5px" }}>
                <TableHead
                  style={{ background: "#EEBC1D", borderRadius: "5px" }}
                >
                  <TableRow>
                    {[
                      "Tên đồng tiền",
                      "Giá hiện hành",
                      "Biến động 24 giờ",
                      "Tổng cung lưu thông",
                      "Tổng cung",
                      "FDV",
                      "Vốn hóa thị trường",
                    ].map((tableHead, index) => {
                      return (
                        <TableCell
                          key={index}
                          style={{ color: "black", fontWeight: "700" }}
                          align={
                            tableHead === "Tên đồng tiền" ? "left" : "right"
                          }
                        >
                          {tableHead}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {handleSearch()
                    .slice(10 * (page - 1), 10 * page)
                    .map((row, index) => {
                      const profit = row.price_change_percentage_24h > 0;
                      let fdv = row?.fully_diluted_valuation;
                      return (
                        <TableRow
                          key={row.name}
                          onClick={() => navigate(`/coins/${row.id}`)}
                          className={classes.tableRow}
                        >
                          {/* Cột Tên crypto */}
                          <TableCell
                            component="th"
                            scope="row"
                            style={{ display: "flex", gap: "15px" }}
                          >
                            <img
                              src={row?.image}
                              alt={row?.name}
                              style={{
                                height: "50px",
                                width: "50px",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                //   alignItems: "center",
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: "normal",
                                  textTransform: "uppercase",
                                  fontSize: "22px",
                                }}
                              >
                                {row?.symbol}
                              </span>
                              <span style={{ color: "#fb5607" }}>
                                {row?.name}
                              </span>
                            </div>
                          </TableCell>
                          {/* Cột giá hiện hành */}
                          <TableCell
                            align="right"
                            style={{ fontWeight: "bold" }}
                          >
                            {moneyInternationalFormat(
                              Number(row?.current_price).toFixed(2)
                            )}{" "}
                            {symbol}
                          </TableCell>
                          {/* Cột biến động giá trong 24h */}
                          <TableCell
                            align="right"
                            style={{
                              color: profit > 0 ? "rgb(14,203,129)" : "red",
                              fontWeight: "bold",
                            }}
                          >
                            {profit && "+"}
                            {Number(row?.price_change_percentage_24h).toFixed(
                              2
                            )}
                            %
                          </TableCell>
                          {/* Cột tổng cung lưu thông */}
                          <TableCell
                            align="right"
                            style={{
                              color: "#0077b6",
                              fontWeight: "bold",
                            }}
                          >
                            {row?.circulating_supply}
                          </TableCell>
                          {/* Cột tổng cung*/}
                          <TableCell
                            align="right"
                            style={{
                              color: "#9e0059",
                              fontWeight: "bold",
                            }}
                          >
                            {row?.total_supply || (
                              <p style={{ fontWeight: "normal" }}>
                                Đang cập nhật
                              </p>
                            )}
                          </TableCell>
                          {/* Cột FDV */}
                          <TableCell
                            align="right"
                            style={{
                              color: "#ffa200",
                              fontWeight: "bold",
                            }}
                          >
                            {fdv !== null ? (
                              `${
                                moneyInternationalFormat(
                                  fdv.toString().slice(0, -9)
                                ) || "-"
                              }
                          Tỷ ${symbol}`
                            ) : (
                              <p style={{ fontWeight: "normal" }}>
                                Đang cập nhật
                              </p>
                            )}
                          </TableCell>
                          {/* Cột vốn hóa thị trường */}
                          <TableCell
                            align="right"
                            style={{ color: "#9d4edd", fontWeight: "bold" }}
                          >
                            {moneyInternationalFormat(
                              row?.market_cap.toString().slice(0, -9)
                            )}{" "}
                            Tỷ {symbol}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            )}
          </TableContainer>
          <Pagination
            count={(handleSearch()?.length / 10).toFixed(0)}
            style={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
            classes={{ ul: classes.pagination }}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 450);
            }}
          ></Pagination>
        </Container>
      </ThemeProvider>
      <KeyboardArrowUpIcon className="upIcon"
        style={{
          width: "70px",
          height: "70px",
          color: "#EEBC1D",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "black",
          zIndex: "99999",
          borderRadius: "100%",
          cursor: "pointer",
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </div>
  );
};

export default CryptoDashBoard;
