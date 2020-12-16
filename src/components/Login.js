import React, { useState } from "react";
import { users } from "../users.js";
import LoginForm from "./LoginForm";

function Login() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  //catches if the data are correct
  const [error, setError] = useState("");

  const login = (details) => {
    const boolean = users.filter((item) => {
      return item.email === details.email && item.password === details.password;
    });

    if (boolean.length > 0) {
      setUser({
        name: boolean[0].name,
        email: details.email,
        password: details.password,
      });
    } else {
      setError("Your e-mail or password is wrong");
    }
  };

  const logOut = () => {
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div>
          <h2 className="username">
            Welcome, <span>{user.name}</span>
          </h2>
          <button className="log-btn" onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
  );
}

export default Login;
