import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import axios from "axios";

import Signup from "../pages/Signup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        "https://my--vinted-backend.herokuapp.com/user/login"
      );
      //https://my--vinted-backend.herokuapp.com/
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    alert("submitted");
    event.preventDefault();
    const response = await axios.post(
      "https://my--vinted-backend.herokuapp.com/user/login"
      // ,
      // {
      //   email: email,
      //   password: password,
      // }
    );
  };
  return (
    <div>
      IsLoading ? <p>Loading...</p> :
      <div>
        <h1>login</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="submit" onClick={handleSubmit}>
          se connecter
        </input>
      </div>
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
