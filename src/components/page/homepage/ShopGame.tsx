import React from "react";
import "./ShopGame.scss";
import { BsChevronRight } from "react-icons/bs";

const homepage = (): JSX.Element => {
  return (
    <div className="homepage-ads">
      <div className="homepage-ads__game">
        <img
          className="homepage-ads__game--img"
          src="https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/Game_Store_Switch_Games?v=2021112504"
        />
        <div className="homepage-ads__game-content">
          <p className="homepage-ads__game-content--text">
            Game Store: Buy games and download directly to your system (no code
            required)!
          </p>
          <button className="homepage-ads__game-content--button">
            <span> Shop games</span>
            <BsChevronRight className="homepage-ads__game-content--icon" />
          </button>
        </div>
      </div>
      <div className="homepage-ads__game-system"></div>
      <div className="homepage-ads__game-gift"></div>
    </div>
  );
};
export default homepage;
