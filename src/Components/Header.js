import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../context/CoinContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
    letterSpacing: "0.5px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();
  console.log(currency);
  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
      type: "light",
    },
  });
  return (
    <ThemeProvider theme={lightTheme}>
      <AppBar style={{ background: "rgb(238, 188, 29)" }} position="fixed">
        <Container>
          <Toolbar>
            <Typography
              className={classes.title}
              onClick={() => {
                navigate("/");
                window.scrollTo(0,0);
              }}
              variant="h5"
              style={{
                display:'flex',
                alignItems:'center',
                gap:'0.8rem'
              }}
            >
              HDCrypto Searcher
              <img
                src="https://images.unsplash.com/photo-1621932953986-15fcf084da0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                alt="logo_img"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                  objectFit: "cover",
                  border:'1px solid black'
                }}
              />
            </Typography>
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginLeft: 15 }}
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <MenuItem value={"VND"}>VND</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
