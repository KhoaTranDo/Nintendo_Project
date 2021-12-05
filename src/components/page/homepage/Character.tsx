import React from "react";
import "./Character.scss";

const dataList = [
  {
    id: "01",
    img: "https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/mario-fg?v=2021120422",
    title: "Mario",
  },
  {
    id: "01",
    img: "https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/zelda-fg?v=2021120422",
    title: "The Legend of Zelda",
  },
  {
    id: "01",
    img: "https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/Animal_Crossing_A_characters?v=2021120422",
    title: "Animal Crossing",
  },
  {
    id: "01",
    img: "https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/Kirby_B_character?v=2021120422",
    title: "Kirby",
  },
];
const Character = (): JSX.Element => {
  const renderData = () => {
    interface itemType {
      id: string;
      img: string;
      title: string;
    }
    return dataList.map((value: itemType) => {
      return (
        <div key={value.id} className="homepage-character__containt--detail">
          <img src={value.img} />
          <h2>
            {value.title}
            <sup>TM</sup>
          </h2>
        </div>
      );
    });
  };
  return (
    <div className="homepage-character">
      <h1>Characters</h1>
      <div className="homepage-character__containt">{renderData()}</div>
      <p>
        *MSRP: Manufacturer&apos;s Retail Price. Actual price may vary. See
        retailer for details.
      </p>
    </div>
  );
};

export default Character;
