import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return <input className={styles.search} placeholder="Search" />;
}

export default SearchBar;
