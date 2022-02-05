import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Signup from "../pages/Signup";

function Login() {
  const handleClick = () => {
    alert("submitted");
  };
  return (
    <div>
      <h1>login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button onClick={handleClick}>se connecter</button>
      <Link to="/signup" element={<Signup />}>
        pas encore de compte ?
      </Link>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default Login;
