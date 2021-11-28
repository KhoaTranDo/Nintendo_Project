/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styless from "./style.module.scss";
import clsx from "clsx";
import { MdContactSupport, MdAccountCircle } from "react-icons/md";
import { BsFillSuitHeartFill } from "react-icons/bs";

export default function HeaderTabbar() {
  const styles = {
    row: { width: "100%", display: "flex" },
    container: {
      width: "93%",
      display: "flex",
      borderBottom: "1px solid grey",
      height: 53,
    },
    menuRight: { width: "50%", display: "flex", justifyContent: "end" },
    menuLeft: { width: "50%", display: "flex" },
    button: {
      display: "flex",
      border: "none",
      backgroundColor: "transparent",
    },
    searchContainer: {
      width: "32%",
      borderBottom: "1px solid black",
      height: 35,
      margin: "6px 0 0 20px",
    },
    iconSearch: { padding: 10 },
    listContact: { listStyleType: "none", display: "flex" },
    contactItem: { marginRight: 20, marginLeft: 10, textDecoration: "none" },
    iconContact: { marginRight: 0 },
    profile: { margin: 0, display: "flex" },
    profileContainer: { display: "flex" },
    logo: { width: "7%" },
  };

  const classes = clsx(styless.btn, {
    [styless.primary]: false,
  });
  return (
    <div style={styles.row}>
      <Link to={""} style={styles.logo}>
        <img src="https://i.ibb.co/J2MR7p8/logo.png" />
      </Link>
      <div style={styles.container}>
        <div style={styles.menuLeft}>
          <div className="btn--search" style={styles.searchContainer}>
            <button
              onClick={() => {
                console.log("ok");
              }}
              className={classes}
              style={styles.button}
            >
              <FaSearch size={"1.5em"} style={styles.iconSearch} />
              <p>Search games, systems, support, etc.</p>
            </button>
          </div>
        </div>
        <div style={styles.menuRight}>
          <ul style={styles.listContact}>
            <li>
              <MdContactSupport size={"1.2em"} style={styles.iconContact} />
              <Link to={"/"} style={styles.contactItem}>
                Support
              </Link>
            </li>
            <li>
              <BsFillSuitHeartFill size={"1.2em"} style={styles.iconContact} />
              <Link to={"/"} style={styles.contactItem}>
                Wish List
              </Link>
            </li>
            <li style={styles.profileContainer}>
              <MdAccountCircle size={"1.2em"} />
              <p style={{ ...styles.profile, ...styles.contactItem }}>
                Profile
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
