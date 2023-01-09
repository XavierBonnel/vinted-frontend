import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Login({
  logged,
  setLogged,
  setToken,
  token,
  setShowSearch,
  showSearch,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  //use Effect  donc isLoading
  const handleSubmit = async (event) => {
    event.preventDefault();
    //try catch
    try {
      const response = await axios.post(
        "https://vinted-backend.onrender.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      setData(response.data);
      const token = response.data.token;
      Cookies.set("token", token, { expires: 7 });
      setToken(token);
      setShowSearch(true);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
    //ne pas oublier try catch pour chaque requete axios
  };
  return (
    <form className="login-bloc">
      <h1>Se connecter</h1>
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
      <button onClick={handleSubmit}>se connecter</button>
      <Link to="/signup">pas encore de compte ?</Link>
    </form>
  );
}

export default Login;
