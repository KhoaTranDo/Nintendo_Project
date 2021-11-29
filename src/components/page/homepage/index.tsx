/** @format */

import React from "react";
import Navbar from "../../layouts/navbar";
import ShopGame from "./ShopGame";

const homepage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <h1>Homepage</h1>
      <ShopGame />
    </>
  );
};
export default homepage;
