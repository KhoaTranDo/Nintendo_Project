/** @format */

import React from "react";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";
import ShopGame from "./ShopGame";

const homepage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <h1>Homepage</h1>
      <ShopGame />
      <Footer />
    </>
  );
};
export default homepage;
