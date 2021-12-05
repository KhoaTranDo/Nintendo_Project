/** @format */

import React from "react";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";
import ShopGame from "./ShopGame";
import Slider from "../../imageslider";
import MainPoster from "./MainPoster";
import News from "./News";
import Character from "./Character";
import dataDemo from "./fakeData.json";

const homepage = (): JSX.Element => {
  const renderFirstListImage = () => {
    interface typeValue {
      id: string;
      img: string;
      content: string;
    }
    return dataDemo.map((value: typeValue) => {
      return (
        <div key={value.id}>
          <div className="slider slider--image">
            <img src={value.img} />
          </div>
          <div className="slider slider--content">
            <h3>{value.content}</h3>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Navbar />
      <MainPoster />
      <Slider>{renderFirstListImage()}</Slider>
      <ShopGame />
      <News />
      <Slider>{renderFirstListImage()}</Slider>
      <Character />
      <Footer />
    </>
  );
};
export default homepage;
