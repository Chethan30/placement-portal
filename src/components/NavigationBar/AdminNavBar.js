import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import styles from "./NavBar.module.css";
function AdminNavBar(props) {
  const { username } = useContext(AuthContext);
  const [showLinks, setShowLinks] = useState(false);

  const showMenuHandler = () => {
    if (window.innerWidth < 768) {
      setShowLinks(!showLinks);
    } else {
      return;
    }
  };

  return (
    <nav>
      <Link to="adminhome" className={styles.home}>
        <li className={styles["logo-nav"]}>Placement Portal</li>
      </Link>
      <ul className={styles.menu} id={showLinks ? `${styles.show}` : ""}>
        <Link
          to="addjob"
          className={styles.applications}
          onClick={showMenuHandler}
        >
          <li>Add Job</li>
        </Link>
        <Link
          to="addpost"
          className={styles.applications}
          onClick={showMenuHandler}
        >
          <li>Forum</li>
        </Link>
        <Link to="profile" className={styles.profile} onClick={showMenuHandler}>
          <li>{username ? username[0].toUpperCase() : null}</li>
        </Link>
        <button onClick={props.onLogout} className={styles.logout}>
          Logout
        </button>
      </ul>
      <button
        className={
          showLinks
            ? `${styles.hamburger} ${styles["is-active"]}`
            : `${styles.hamburger}`
        }
        onClick={showMenuHandler}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default AdminNavBar;
