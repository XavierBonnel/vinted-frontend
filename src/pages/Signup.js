import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        },
        setData(response.data)
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
    //ne pas oublier try catch pour chaque requete axios
  };

  return (
    <div>
      <h1>signup</h1>
      <div>
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
        {/* <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          value="newsletter"
        />
        <label>intéressé par la newsletter ?</label>*/}
        <button onClick={handleSubmit}>s'inscrire</button>
      </div>
      <Link to="/login">déjà un compte ?</Link>
    </div>
  );
}

export default Signup;
