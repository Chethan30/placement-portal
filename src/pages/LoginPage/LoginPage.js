import React from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="container">
      <div className="LoginPage">
        <div className="logo">
          <img src={require("../../logos/LogoBanner.png")} alt="" />
        </div>
        <div className="login-form">
          <LoginForm />
        </div>
      </div>
      <div className="footer">
        <div className="footer-text">Made with ❤️ in India.</div>{" "}
      </div>
    </div>
  );
}

export default LoginPage;
