import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import styles from "./NavBar.module.css";
function NavBar(props) {
  const { username } = useContext(AuthContext);

  return (
    <nav>
      <Link to="home" className={styles.home}>
        <li className={styles["logo-nav"]}>Placement Portal</li>
      </Link>
      <ul className={styles.menu}>
        <Link to="statistics" className={styles.cvscorer}>
          <li>Stats</li>
        </Link>
        <Link to="applications" className={styles.applications}>
          <li>Applications</li>
        </Link>
        <Link to="forum" className={styles.notifications}>
          <li>Forum</li>
        </Link>
        <Link to="profile" className={styles.profile}>
          <li>
            <div className={styles.profileIcon}>
              {username ? username[0].toUpperCase() : null}
            </div>
          </li>
        </Link>
      </ul>
      <button onClick={props.onLogout} className={styles.logout}>
        Logout
      </button>
      <button className={`${styles.hamburger} ${styles["is-active"]}`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default NavBar;
