import React, { useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import "./LoginForm.css";

function LoginForm() {
  const { username, setUsername, setToken } = useContext(LoginContext);

  const [password, setPassword] = useState("");

  const UsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(username, password);

    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    };

    fetch("http://restapi.adequateshop.com/api/authaccount/login", opts)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else alert("Error!");
      })
      .then((data) => {
        console.log(data);
        console.log(data.data.Token);
        setToken(data.data.Token);
        sessionStorage.setItem("token", data.data.Token);
      })
      .catch((error) => {
        console.log("", error);
      });
  };

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <input
        type="text"
        className="form-input"
        onChange={UsernameHandler}
        required
      />
      <br />
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-input"
        onChange={PasswordHandler}
        required
      />
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
