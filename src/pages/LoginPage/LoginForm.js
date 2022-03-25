import React, { useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
// import axios from "../../api/axios";

function LoginForm() {
  let navigate = useNavigate();

  const { username, setUsername, setToken, setSuccess } =
    useContext(LoginContext);

  const [password, setPassword] = useState("");

  // const userRef = useRef();
  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  const UsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setSuccess(true);
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

        navigate("/home");
      })
      .catch((error) => {
        console.log("", error);
      });
  };

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <h2 className="sign-in"> Sign In</h2>
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <input
        type="text"
        className="form-input"
        value={username}
        onChange={UsernameHandler}
        placeholder="Username"
        required
      />
      <br />
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-input"
        value={password}
        onChange={PasswordHandler}
        placeholder="Password"
        required
      />
      <br />
      <button type="submit" className="login-button">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
