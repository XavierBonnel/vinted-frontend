import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Signup from "../pages/Signup";
import Login from "../pages/Login";

function Header() {
  return (
    <div>
      <span>logo vinted</span>
      <Link to="/signup" element={<Signup />}>
        s'inscrire
      </Link>
      <Link to="login" element={<Login />}>
        se connecter
      </Link>
      <button>vends tes articles</button>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default Header;
