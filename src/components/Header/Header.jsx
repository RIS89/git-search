import React from "react";
import styles from "./header.css";
import Github from "../../img/github.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <span>Git search!</span>
      <img src={Github} alt="" />
    </div>
  );
};

export default Header;
