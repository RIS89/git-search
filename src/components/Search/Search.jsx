import React, { useRef } from "react";
import styles from "./search.css";
import SearchIcon from "../../img/search.svg";

const Search = (props) => {
  const name = useRef("");
  return (
    <div className={styles.search}>
      <img src={SearchIcon} alt="" className={styles.svg} />
      <input type="text" placeholder="Search GitHub userName..." ref={name} />
      <button
        onClick={() => {
          if (name.current.value !== null && name.current.value !== "")
            props.getDataUser(name.current.value);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
