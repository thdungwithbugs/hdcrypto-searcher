import { makeStyles } from "@material-ui/core";
import React from "react";

const Button = ({ children, onClick, selected }) => {
  const useStyles = makeStyles({
    button: {
      border: "1px solid gold",
      borderRadius: "5px",
      padding: "10px 20px",
      textAlign:'center',
      cursor: "pointer",
      width: "22%",
      background: selected ? "gold" : "",
      color:"black",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        background: "gold",
        color: "black",
      },
    },
  });
  const classes = useStyles();
  return (
    <span className={classes.button} onClick={onClick}>
      {children}
    </span>
  );
};

export default Button;
