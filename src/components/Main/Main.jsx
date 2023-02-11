import React, { useState } from "react";
import styles from "./main.css";
import Search from "../Search/Search";
import Card from "../Card/Card";

const Main = () => {
  const [userData, setUserData] = useState(null);
  const getDataUser = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((res) => setUserData(res));
  };
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Search getDataUser={getDataUser} />
        {userData !== null && <Card userData={userData} />}
      </div>
    </div>
  );
};

export default Main;
