import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home({ logged, setLogged, title }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        `https://my--vinted-backend.herokuapp.com/offers?title=${title}`
      );

      setData(response.data);
      setIsLoading(false);
    };

    fetchdata();
  }, [title]);

  return (
    <div>
      {title ? (
        ""
      ) : (
        <div className="hero-banner">
          <img src="/hero-vinted.jpg" alt="hero-banner-vinted" />
        </div>
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="offers-list">
          {data.map((offer, index) => {
            console.log(offer);
            return (
              <div>
                <Link to={"/offer/" + offer._id}>
                  <div className="offer-card" key={index}>
                    <div className="avatar-and-username">
                      <img
                        className="avatar"
                        src={offer.owner.account.avatar}
                        alt="avatar-image"
                      />
                      <span>{offer.owner.account.username}</span>
                    </div>
                    <div>
                      <img src={offer.product_image} alt={offer.product_name} />
                    </div>
                    <p className="price">{offer.product_price} €</p>
                    <div className="details">
                      {/* faire une ternaire pour cacher les taille et marque quand vide */}
                      <p>{offer.product_details[1].TAILLE}</p>
                      <p>{offer.product_details[0].MARQUE}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
