import React, { useState, useContext } from "react";
import AuthContext from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

import {postLogin} from "./apihandler";

function LoginForm() {
  let navigate = useNavigate();

  const { username, setUsername, setSuccess } = useContext(AuthContext);
  const [password, setPassword] = useState("");

  const UsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // console.log(username, password);
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    const datal = {
        username: username,
        password: password,
      }

    postLogin(datal)
      .then(function(response)
        // Process response and
        // Do something with the UI;
         {
        if (response.status === 200) {
          console.log(response);
          console.log(response.data);
        console.log(response.data.access_token);
        sessionStorage.setItem("token", response.data.access_token);
        setSuccess(true);
        navigate("/home");
          return response;
        } else alert("Error!");
      })
      // .then((data) => {
      //   console.log(data);
      //   console.log(data.access_token);
      //   sessionStorage.setItem("token", data.access_token);
      //   setSuccess(true);
      //   navigate("/home");
      // })
      .catch((error) => {
        console.log("", error);
      });

    // http://restapi.adequateshop.com/api/authaccount/login

    // fetch("http://127.0.0.1:5000/api/login", opts)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       console.log(response);
    //       return response.json();
    //     } else alert("Error!");
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     console.log(data.access_token);
    //     sessionStorage.setItem("token", data.access_token);
    //     setSuccess(true);
    //     navigate("/home");
    //   })
    //   .catch((error) => {
    //     console.log("", error);
    //   });
  };

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <h2 className={styles["sign-in"]}> Sign In</h2>
      <label htmlFor="username" className={styles["form-label"]}>
        Username
      </label>
      <input
        type="text"
        className={styles["form-input"]}
        value={username}
        onChange={UsernameHandler}
        placeholder="Username"
        required
      />
      <br />
      <label htmlFor="password" className={styles["form-label"]}>
        Password
      </label>
      <input
        type="password"
        className={styles["form-input"]}
        value={password}
        onChange={PasswordHandler}
        placeholder="Password"
        required
      />
      <br />
      <button type="submit" className={styles["login-button"]}>
        Log In
      </button>
    </form>
  );
}

export default LoginForm;