import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    let alreadyLoggedIn = sessionStorage.getItem("token");
    let usernameRecvd = sessionStorage.getItem("username");
    let roleRecvd = sessionStorage.getItem("role");
    if (alreadyLoggedIn) {
      setSuccess(true);
      setUsername(usernameRecvd);
      setRole(roleRecvd);
    }
  }, [setSuccess]);

  const logoutHandler = () => {
    console.log("Button clicked so logging out");
    sessionStorage.clear();
    setSuccess(false);
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        role,
        success,
        setUsername,
        setSuccess,
        logoutHandler,
        setRole,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
