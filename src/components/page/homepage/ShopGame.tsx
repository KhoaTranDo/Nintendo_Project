import React from "react";
import "./ShopGame.scss";
import { BsChevronRight } from "react-icons/bs";

const homepage = (): JSX.Element => {
  return (
    <div className="homepage-ads">
      <div className="homepage-ads__game">
        <div className="homepage-ads__game-content">
          <img
            className="homepage-ads__game--img"
            src="https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/Game_Store_Switch_Games?v=2021112504"
          />
          <div className="homepage-ads__game-content">
            <p className="homepage-ads__game-content--text">
              Game Store: Buy games and download directly to your system (no
              code required)!
            </p>
            <button className="homepage-ads__game-content--button">
              <span> Shop games</span>
              <BsChevronRight
                size={"1.5rem"}
                className="homepage-ads__game-content--icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="homepage-ads__game-explore">
        <h2 className="homepage-ads__game-explore--title">
          Explore gaming systems
        </h2>
        <div className="homepage-ads__game-explore-content">
          <img
            src="https://assets.nintendo.com/image/upload/f_auto,h_680,q_auto,w_2296/ncom/en_US/switch/site-design-update/merchandising/EN/2296x680_ExploreGamingSystems?v=2021112905"
            alt="poster"
            className="homepage-ads__game-explore-content--image"
          />
        </div>
        <div className="homepage-ads__game-explore-under-content">
          <h3 className="homepage-ads__game-explore-under-content--title">
            Nintendo Switch family - Three ways to play
          </h3>
          <button className="homepage-ads__game-explore-under-content--button">
            <span>Starting at $199.99 MSRP*</span>
            <BsChevronRight
              size={"1.5rem"}
              className="homepage-ads__game-content--icon"
            />
          </button>
        </div>
      </div>
      <div className="homepage-ads__game-gift">
        <div className="homepage-ads__game-gift-content">
          <img
            src="https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/Special-Event-Banners/HGG2021/HGG_716x420_CTAminiblade?v=2021112905"
            alt="Mario"
            className="homepage-ads__game-gift-content--image"
          />
          <p className="homepage-ads__game-gift-content--text">
            Holiday Gift Guide: Spark a smile with the perfect present.
          </p>
          <button className="homepage-ads__game-gift-content--button">
            <span> Find gifts</span>
            <BsChevronRight
              size={"1.5rem"}
              className="homepage-ads__game-gift-content--icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default homepage;
