import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import styles from "./NavBar.module.css";
function NavBar(props) {
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
      <Link to="home" className={styles.home}>
        <li className={styles["logo-nav"]}>Placement Portal</li>
      </Link>
      <ul className={styles.menu} id={showLinks ? `${styles.show}` : ""}>
        <Link
          to="statistics"
          className={styles.cvscorer}
          onClick={showMenuHandler}
        >
          <li>Stats</li>
        </Link>
        <Link
          to="applications"
          className={styles.applications}
          onClick={showMenuHandler}
        >
          <li>Applications</li>
        </Link>
        <Link
          to="forum"
          className={styles.notifications}
          onClick={showMenuHandler}
        >
          <li>Forum</li>
        </Link>
        <Link to="profile" className={styles.profile} onClick={showMenuHandler}>
          <li>
            <div className={styles.profileIcon}>
              {username ? username[0].toUpperCase() : null}
            </div>
          </li>
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

export default NavBar;
