import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import CryptoDashBoard from "../Components/CryptoDashBoard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Banner />
      <CryptoDashBoard />
      <Footer />
    </>
  );
};

export default HomePage;
