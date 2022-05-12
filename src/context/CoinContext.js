import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { CoinListApi } from "../config/api";

const CryptoContext = createContext();

const CoinContext = ({ children }) => {
  const [currency, setCurrency] = useState("VND");
  const [symbol, setSymbol] = useState("");
  const [dashBoard, setDashBoard] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currency === "VND") setSymbol("₫");
    else setSymbol("$");
  }, [currency]);

  //Call api danh sách tiền ảo
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let { data } = await axios.get(CoinListApi(currency));
        setDashBoard(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [currency]);

  return (
    <CryptoContext.Provider
      value={{ currency, symbol, setCurrency, setSymbol, dashBoard, loading }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CoinContext;
export const CryptoState = () => {
  return useContext(CryptoContext);
};
