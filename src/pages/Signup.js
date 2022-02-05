import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";

function Signup() {
  const handleClick = () => {
    alert("submitted");
  };
  return (
    <div>
      <h1>signup</h1>
      <input type="text" placeholder="username" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <input
        type="checkbox"
        id="newsletter"
        name="newsletter"
        value="newsletter"
      />
      <label for="newsletter">intéressé par la newsletter ?</label>
      <button onClick={handleClick}>s'inscrire</button>
      <Link to="/login" element={<Login />}>
        déjà un compte ?
      </Link>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default Signup;
