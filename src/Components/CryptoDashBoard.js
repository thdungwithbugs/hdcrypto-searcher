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
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles(() => ({
    tableRow:{
        background: "#edf6f9",
        cursor: "pointer",
        "&:hover":{
            background: "#f7ede2",
        },
    },
    pagination:{
      "& .MuiPaginationItem-root":{
        color: "black",
      }
    }
}));

const CryptoDashBoard = () => {
  const [search, setSearch] = useState("");
  const [page, setPage]= useState(1)

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
          <Typography variant="h5" style={{ margin: "40px", color:'#fb8500', fontWeight:'bold' }}>
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
          <TableContainer>
            {loading ? (
              <LinearProgress style={{ background: "gold" }} />
            ) : (
              <Table style={{borderRadius:'5px'}}>
                <TableHead style={{ background: "#EEBC1D", borderRadius:'5px' }}>
                  <TableRow>
                    {[
                      "Tên đồng tiền",
                      "Giá",
                      "Biến động 24 giờ",
                      "Vốn hóa thị trường",
                    ].map((tableHead, index) => {
                      return (
                        <TableCell
                          key={index}
                          style={{ color: "black", fontWeight: "700" }}
                          align={tableHead === "Tên đồng tiền" ? "center" : "right"}
                        >
                          {tableHead}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {handleSearch().slice(10*(page-1),10*page).map((row, index) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        key={row.name}
                        onClick={() => navigate(`/coins/${row.id}`)}
                        className={classes.tableRow}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ display: "flex", gap: "15px" }}
                        >
                          <img
                            src={row?.image}
                            alt={row?.name}
                            style={{ height: "50px", width:'50px', objectFit:'cover',}}
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
                                textTransform: "uppercase",
                                fontSize: "22px",
                              }}
                            >
                              {row?.symbol}
                            </span>
                            <span style={{ color: "darkgray" }}>
                              {row?.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {moneyInternationalFormat(
                            Number(row?.current_price).toFixed(2)
                          )}{" "}
                          {symbol}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14,203,129)" : "red",
                            fontWeight: "bold",
                          }}
                        >
                          {profit && "+"}
                          {Number(row?.price_change_percentage_24h).toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
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
          <Pagination count={(handleSearch()?.length/10 ).toFixed(0)} style={{
            padding: '20px',
            display: 'flex',
            justifyContent:'center',
            width: '100%',
          }} classes={{ul: classes.pagination}} onChange={(_, value)=>{
            setPage(value);
            window.scroll(0,450);
          }}>
          </Pagination>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default CryptoDashBoard;
