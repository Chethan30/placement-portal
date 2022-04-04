import React from "react";
import LoginForm from "./LoginForm";
import logoBanner from "../../assets/LogoBanner.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className="container">
      <div className={styles.LoginPage}>
        <div className={styles.logo}>
          <img src={logoBanner} alt="" />
        </div>
        <div className={styles["login-form"]}>
          <LoginForm />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles["footer-text"]}>Made with ❤️ in India.</div>{" "}
      </div>
    </div>
  );
}

export default LoginPage;
