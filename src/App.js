import React from "react";
import Login from "./components/Login.js";

function App() {
  return (
    <div>
      <Login />
      <ul className="user-list">
        <li>Username: adm@adm.com | Password:adm</li>
        <li>Username: dev@dev.com | Password:dev</li>
      </ul>
      <footer>
        <p className="attribution">
          Coded by{" "}
          <a href="https://www.linkedin.com/in/gyokota/">Giovana Yokota</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
