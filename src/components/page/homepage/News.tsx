import React from "react";
import dataDemo from "./fakeData.json";
import "./News.scss";
import { BsChevronRight } from "react-icons/bs";

const News = (): JSX.Element => {
  const renderNews = () => {
    interface typeValue {
      id: string;
      img: string;
      title: string;
      content: string;
    }

    return dataDemo.map((value: typeValue, index) => {
      if (index < 6) {
        if (index <= 1) {
          return (
            <div key={value.id} className="homepage-news__big-new">
              <img src={value.img} />
            </div>
          );
        } else
          return (
            <div key={value.id} className="homepage-news__mini-new">
              <img src={value.img} />
            </div>
          );
      }
    });
    return <></>;
  };
  return (
    <div className="homepage-news">
      <h1>News</h1>
      <div className="homepage-news__container">{renderNews()}</div>
      <div className="homepage-news__footer">
        <button className="homepage-news--button">
          <span> See all news articles</span>
          <BsChevronRight size={"1.5rem"} className="homepage-news--icon" />
        </button>
      </div>
    </div>
  );
};

export default News;
