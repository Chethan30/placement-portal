import React, { useState, useContext, useCallback } from "react";
import AuthContext from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { postLogin } from "./apihandler";

function LoginForm(props) {
  let navigate = useNavigate();

  const { username, setUsername, setSuccess } = useContext(AuthContext);
  const [password, setPassword] = useState("");

  const UsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const datal = {
    username: username,
    password: password,
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    props.loadingState(true);

    logInHandler(datal);
    // console.log(username, password);
    // const opts = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // };
    // try {
    //   const response = await postLogin(datal);
    //   if (response.status === 200) {
    //     console.log(response);
    //     console.log(response.data);
    //     console.log(response.data.access_token);
    //     sessionStorage.setItem("token", response.data.access_token);
    //     setSuccess(true);
    //     props.loadingState(false);
    //     navigate("/home");
    //     return response;
    //   } else throw new Error("Something went wrong!");
    // } catch (error) {
    //   console.log("", error);
    // }
  };

  const logInHandler = useCallback(
    async (datal) => {
      try {
        const response = await postLogin(datal);
        if (response.status === 200) {
          props.loadingState(false);
          console.log(response);
          console.log(response.data);
          console.log(response.data.access_token);
          sessionStorage.setItem("token", response.data.access_token);
          setSuccess(true);

          navigate("/home");
          return response;
        } else throw new Error("Something went wrong!");
      } catch (error) {
        console.log("", error);
      }
    },
    [setSuccess, navigate, props]
  );

  return (
    <form className={styles.loginForm} action="" onSubmit={onSubmitHandler}>
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
