import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import styles from "./NavBar.module.css";
function NavBar() {
  const { username } = useContext(AuthContext);

  return (
    <nav>
      <Link to="home" className={styles.home}>
        <li className={styles["logo-nav"]}>Placement Portal</li>
      </Link>
      <ul className={styles.menu}>
        {/* <Link to="cvscorer" className={styles.cvscorer}>
          <li>CVScorer</li>
        </Link> */}
        <Link to="applications" className={styles.applications}>
          <li>Applications</li>
        </Link>
        {/* <Link to="notifications" className={styles.notifications}>
          <li>Notifications</li>
        </Link> */}
        <Link to="profile" className={styles.profile}>
          <li>
            <div className={styles.profileIcon}>
              {/* {username ? username[0].toUpperCase() : null} */}1
            </div>
          </li>
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

export default NavBar;
