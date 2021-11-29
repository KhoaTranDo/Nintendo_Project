/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Support } from "../../../../../constant/types";
import "../footer.scss";

export default function SupportFooter(support: Support) {
  const { routes, title } = support;

  return (
    <div className="about-nintendo">
      <h4>
        <Link to={""} className="about-nintendo__title">
          {title}
        </Link>
      </h4>
      <ul className="about-nintendo__list">
        {routes.map((route, index) => {
          return (
            <li key={index} className="about-nintendo__list-item">
              <Link to={""} className="about-nintendo__list-item-content">
                {route}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
