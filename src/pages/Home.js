import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        "https://my--vinted-backend.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchdata();
  }, []);

  return (
    <div>
      <div className="hero-banner">Hero banner</div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((offer, index) => {
            console.log(offer);
            return (
              <div>
                <Link to={"/offer/" + offer._id}>
                  <div className="offer-card" key={index}>
                    <p>{offer.owner.account.username}</p>
                    <div>
                      <img src={offer.product_image} alt={offer.product_name} />
                    </div>
                    <p>{offer.product_price}</p>
                    <p>{offer.product_details[1].TAILLE}</p>
                    <p>{offer.product_details[0].MARQUE}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}{" "}
    </div>
  );
}

export default Home;
