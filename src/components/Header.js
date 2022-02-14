import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Header({ logged, setLogged }) {
  const disconnect = (event) => {
    Cookies.remove("token");
    setLogged(false);
  };

  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img src="/logo-vinted.png" alt="logo vinted" />
        </Link>
      </div>
      <div className="header-right">
        {logged === true ? (
          <button onClick={disconnect}>Se déconnecter</button>
        ) : (
          <>
            <button>
              <Link to="/signup">s'inscrire</Link>
            </button>
            <button>
              <Link to="/login">se connecter</Link>
            </button>
          </>
        )}

        <button>vends tes articles</button>
      </div>
    </div>
  );
}

export default Header;
