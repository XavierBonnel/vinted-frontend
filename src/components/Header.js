import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import Research from "./Research";

function Header({
  logged,
  setLogged,
  token,
  setToken,
  handleTitleChange,
  title,
  setTitle,
  handleSort,
  handlePriceLimit,
  priceLimit,
}) {
  const disconnect = (event) => {
    Cookies.remove("token");
    setToken(null);
  };

  return (
    <div className="header">
      {/* Header Left */}

      <div className="header-left">
        <Link to="/">
          <img src="/logo-vinted.png" alt="logo vinted" />
        </Link>
        <Research
          handleTitleChange={handleTitleChange}
          handleSort={handleSort}
          handlePriceLimit={handlePriceLimit}
          priceLimit={priceLimit}
        />
      </div>

      {/* Header right */}

      <div className="header-right">
        {token ? (
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

        <button>
          {token ? (
            <Link to="/publish">vends tes articles</Link>
          ) : (
            <Link to="/login">vends tes articles</Link>
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
