import React from "react";
import styles from "./repos.css";

const Repos = ({ dataRepos }) => {
  return (
    <div className={styles.repos}>
      {dataRepos.map((item, index) => (
        <div key={index}>
          <a href={item.svn_url} target="_blank">
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Repos;
