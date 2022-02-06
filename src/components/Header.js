import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <span>logo vinted</span>
      <Link to="/signup">s'inscrire</Link>
      <Link to="/login">se connecter</Link>

      <button>vends tes articles</button>
    </div>
  );
}

export default Header;
