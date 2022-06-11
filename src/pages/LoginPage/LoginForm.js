import React, { useState, useContext, useCallback } from "react";
import AuthContext from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { postLogin } from "./apihandler";
import Wrapper from "../../components/UI/Wrapper";

function LoginForm(props) {
  let navigate = useNavigate();

  const { username, setUsername, setSuccess, setRole } =
    useContext(AuthContext);
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

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.loadingState(true);
    logInHandler(datal);
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
          console.log(response.data.role);
          sessionStorage.setItem("token", response.data.access_token);

          setRole(response.data.role);
          setUsername(response.data.username);
          sessionStorage.setItem("username", response.data.username);
          sessionStorage.setItem("role", response.data.role);
          sessionStorage.setItem("department", response.data.dept);
          setSuccess(true);

          navigate("/home");
          return response;
        } else throw new Error("Something went wrong!");
      } catch (error) {
        console.log("", error);
      }
    },
    [setSuccess, navigate, props, setRole, setUsername]
  );

  const changeUserHandler = (event) => {
    props.setIsAdmin(true);
    navigate("/adminlogin");
  };

  return (
    <Wrapper>
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
          autoComplete="on"
          required
        />
        <br />
        <button type="submit" className={styles["login-button"]}>
          Log In
        </button>
      </form>
      <button className={styles.changeUser} onClick={changeUserHandler}>
        Not a Student ?
        <span className={styles.changeHighlight}> Click Here </span>
      </button>
    </Wrapper>
  );
}

export default LoginForm;
