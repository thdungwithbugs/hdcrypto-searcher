import React, { lazy, useEffect } from "react";

const Banner = lazy(() => import("../Components/Banner"));
const CryptoDashBoard = lazy(() => import("../Components/CryptoDashBoard"));
const Footer = lazy(() => import("../Components/Footer"));
const Header = lazy(() => import("../Components/Header"));
const Event = lazy(() => import("../Components/Event"));
const News = lazy(() => import("../Components/News"));
const HotNft = lazy(() => import("../Components/HotNft"));
const Blog = lazy(() => import("../Components/Blog"));

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Banner />
      <CryptoDashBoard />
      <News />
      <Event />
      <HotNft />
      <Blog />
      <Footer />
    </>
  );
};

export default HomePage;
