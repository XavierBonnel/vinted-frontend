import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [data, setData] = useState();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    alert("submitted");
    event.preventDefault();
    console.log("coucou");
    try {
      const response = await axios.post(
        "https://my--vinted-backend.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      setData(response.data);
      const token = response.data.token;
      Cookies.set("token", token, { expires: 7 });
    } catch (error) {
      console.log(error.response);
    }
    //ne pas oublier try catch pour chaque requete axios
  };

  return (
    <div className="signup-bloc">
      <h1>S'inscrire</h1>

      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
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

      <button onClick={handleSubmit}>s'inscrire</button>

      <Link to="/login">déjà un compte ?</Link>
    </div>
  );
}

export default Signup;
