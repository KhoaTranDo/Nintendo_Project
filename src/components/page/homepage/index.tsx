/** @format */

import React from "react";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";
import ShopGame from "./ShopGame";
import Slider from "../../imageslider";
import MainPoster from "./MainPoster";

const homepage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <MainPoster />
      <Slider>
        <></>
      </Slider>
      <ShopGame />
      <Footer />
    </>
  );
};
export default homepage;
