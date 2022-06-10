import React, { useRef } from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const searchRef = useRef();

  const searhKeywordHandler = () => {
    props.updateSearchTerm(searchRef.current.value);
  };

  return (
    <input
      className={styles.search}
      placeholder="Search"
      ref={searchRef}
      value={props.searchTerm}
      onChange={searhKeywordHandler}
    />
  );
}

export default SearchBar;
