import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img src="/logo-vinted.png" alt="logo vinted" />
        </Link>
      </div>
      <div className="header-right">
        <button>
          <Link to="/signup">s'inscrire</Link>
        </button>
        <button>
          <Link to="/login">se connecter</Link>
        </button>
        <button>vends tes articles</button>
      </div>
    </div>
  );
}

export default Header;
