import React, { useState } from "react";
import LoginForm from "./LoginForm";
import AdminLoginForm from "../Admin/AdminLoginPage/AdminLoginForm";
import LoginLoading from "../../components/LoadingPage/LoadingPage";
import logoBanner from "../../assets/LogoBanner.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log("Is loading status at login page", isLoading);

  const logInContent = isLoading ? (
    <LoginLoading loadMessage="Logging In..." />
  ) : (
    <div className={styles.LoginPage}>
      <div className={styles.logo}>
        <img className={styles.img} src={logoBanner} alt="" />
      </div>

      <div className={styles["login-form"]}>
        {isAdmin ? (
          <AdminLoginForm loadingState={setIsLoading} setIsAdmin={setIsAdmin} />
        ) : (
          <LoginForm loadingState={setIsLoading} setIsAdmin={setIsAdmin} />
        )}
      </div>
    </div>
  );

  return (
    <div className="container">
      {logInContent}
      <div className={styles.footer}>
        <div className={styles["footer-text"]}>Made with ❤️ in India.</div>{" "}
      </div>
    </div>
  );
}

export default LoginPage;
