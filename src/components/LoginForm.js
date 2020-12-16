import React, { useState } from "react";

function LoginForm({ login, error }) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(details);
    setDetails({
      email: "",
      password: "",
    });
  };

  const handleEmailChange = (event) => {
    setDetails({ ...details, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setDetails({ ...details, password: event.target.value });
  };

  return (
    <form className="login-section" onSubmit={handleSubmit}>
      <div className="form-login">
        <h1 className="title">Login</h1>
        {error !== "" ? <div className="error">{error}</div> : ""}
      </div>
      <div className="form-section">
        <label htmlFor="email">email:</label>
        <input
          className="input-section"
          type="email"
          name="email"
          id="email"
          onChange={handleEmailChange}
          value={details.email}
        />
        <label htmlFor="password">Password:</label>
        <input
          className="input-section"
          type="password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
          value={details.passsword}
        />
      </div>
      <input className="log-btn" type="submit" value="LOGIN" />
    </form>
  );
}

export default LoginForm;
//9:51
