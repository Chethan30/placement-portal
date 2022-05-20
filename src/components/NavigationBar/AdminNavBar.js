import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import styles from "./NavBar.module.css";
function AdminNavBar() {
  const { username } = useContext(AuthContext);

  return (
    <nav>
      <Link to="adminhome" className={styles.home}>
        <li className={styles["logo-nav"]}>Placement Portal</li>
      </Link>
      <ul className={styles.menu}>
        <Link to="profile" className={styles.profile}>
          <li>{username ? username[0].toUpperCase() : null}</li>
        </Link>
      </ul>
      <button className={`${styles.hamburger} ${styles["is-active"]}`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default AdminNavBar;