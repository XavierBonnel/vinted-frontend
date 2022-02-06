import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import axios from "axios";

import Login from "../pages/Login";

function Signup() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        "https://my--vinted-backend.herokuapp.com/user/signup"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

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
      <Link to="/login">déjà un compte ?</Link>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default Signup;
