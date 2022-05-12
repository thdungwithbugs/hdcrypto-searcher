import {
  Container,
  createTheme,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    letterSpacing: "1px",
  },
}));

const Footer = () => {
  const classes = useStyles();
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
      <div style={{ background: "black", }}>
        <Container>
          <Toolbar style={{ display: "flex", flexDirection: "column", justifyContent:'center', alignItems:'center', padding:'5rem 0', gap:'5px' }}>
            <Typography className={classes.title} variant="h4" style={{color:'#EEBC1D'}}>
              HDCrypto Searcher
            </Typography>
            <p>
              A simple crypto search website was coded by Hoang Dung, using
              ReactJS, Material UI and Coingecko API.
            </p>
            <p>Reference from Piyush Agarwal.</p>
          </Toolbar>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
