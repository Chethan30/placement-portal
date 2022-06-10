import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    let alreadyLoggedIn = sessionStorage.getItem("token");
    if (alreadyLoggedIn) {
      setSuccess(true);
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
