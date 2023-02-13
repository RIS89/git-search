import React, { useState } from "react";
import styles from "./main.css";
import Search from "../Search/Search";
import Card from "../Card/Card";
import Repos from "../Repos/Repos";

const Main = () => {
  const [userData, setUserData] = useState(null);
  const [dataRepos, setDataRepos] = useState([]);
  const getDataUser = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((res) => setUserData(res));
  };
  const getDataRepos = (urlRepos) => {
    fetch(urlRepos)
      .then((res) => res.json())
      .then((res) => setDataRepos(res));
  };
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Search getDataUser={getDataUser} />
        {userData !== null && (
          <Card userData={userData} getDataRepos={getDataRepos} />
        )}
        {dataRepos.length > 0 && <Repos dataRepos={dataRepos} />}
      </div>
    </div>
  );
};

export default Main;
