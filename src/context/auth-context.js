import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let alreadyLoggedIn = sessionStorage.getItem("token");
    if (alreadyLoggedIn) {
      setSuccess(true);
    }
  }, [setSuccess]);

  const logoutHandler = () => {
    console.log("Button clicked so logging out");
    sessionStorage.removeItem("token");
    setSuccess(false);
  };

  return (
    <AuthContext.Provider
      value={{ username, success, setUsername, setSuccess, logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
