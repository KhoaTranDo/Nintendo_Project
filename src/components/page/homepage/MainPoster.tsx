/** @format */

import React from "react";
import "./MainPoster.scss";
import { BsChevronRight } from "react-icons/bs";

const MainPoster = (): JSX.Element => {
  return (
    <div className="main-poster">
      <img
        src="https://assets.nintendo.com/image/upload/c_fill,f_auto,h_693,q_auto,w_1920/ncom/en_US/merchandising/center-stage-banner/Big%20Brain%20Academy%20Brain%20vs%20Brain/1366x493_Ncom-Centerstage_BigBrainAcademy-BrainvsBrain_v01"
        alt=""
      />
      <div className="main-poster__content">
        <h2>Available now</h2>
        <button className="main-poster__content--button">
          <span> Learn More</span>
          <BsChevronRight
            size={"1.5rem"}
            className="homepage-ads__game-content--icon"
          />
        </button>
        <div className="main-poster__content--ticknote">
          <img src="https://code.nintendo.com/web-components/esrb-rating/assets/en-e.svg" />
          <div>
            <p>Mild Cartoon Violence</p>
            <hr />
            <p>In-Game Purchases</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPoster;
