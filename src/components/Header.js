import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  defaultValuePriceLimit,
  setSort,
  setShowSearch,
  showSearch,
}) {
  const disconnect = (event) => {
    Cookies.remove("token");
    setToken(null);
  };

  return (
    <div className="header">
      {/* Header Left */}

      <div className="header-left">
        <Link
          className="bloc-image"
          to="/"
          onClick={(e) => {
            setShowSearch(true);
          }}
        >
          <img src="/logo-vinted.png" alt="logo vinted" />
        </Link>
        {showSearch && (
          <Research
            handleTitleChange={handleTitleChange}
            handleSort={handleSort}
            handlePriceLimit={handlePriceLimit}
            priceLimit={priceLimit}
            setSort={setSort}
          />
        )}
      </div>

      {/* Header right */}

      <div className="header-right">
        {token ? (
          <button onClick={disconnect}>Se déconnecter</button>
        ) : (
          <>
            <button>
              <Link
                to="/signup"
                onClick={(e) => {
                  setShowSearch(false);
                }}
              >
                s'inscrire
              </Link>
            </button>
            <button>
              <Link
                to="/login"
                onClick={(e) => {
                  setShowSearch(false);
                }}
              >
                se connecter
              </Link>
            </button>
          </>
        )}

        <button>
          {token ? (
            <Link
              to="/publish"
              onClick={(e) => {
                setShowSearch(false);
              }}
            >
              vends tes articles
            </Link>
          ) : (
            <Link to="/login">vends tes articles</Link>
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
