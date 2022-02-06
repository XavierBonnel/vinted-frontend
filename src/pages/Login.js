import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();

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
    alert("submitted");
    event.preventDefault();
    //try catch
    try {
      const response = await axios.post(
        "https://my--vinted-backend.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.response);
    }
    //ne pas oublier try catch pour chaque requete axios
  };
  return (
    <div>
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
        <button onClick={handleSubmit}>se connecter</button>
      </div>
      <Link to="/signup">pas encore de compte ?</Link>
    </div>
  );
}

export default Login;
