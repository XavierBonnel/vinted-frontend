import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import LoadingSpinner from "../components/LoadingSpinner";

function Offer() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [seller, setSeller] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [sellerDetails, setSellerDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vinted-backend.onrender.com/offer?id=${id}`
      );

      const sellerList = await axios.get(
        "https://vinted-backend.onrender.com/offers"
      );

      setSeller(sellerList.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const research = () => {
    for (let i = 0; i < seller.length; i++) {
      if (seller[i].owner._id.includes(data.owner)) {
        const owner = [
          seller[i].owner.account.username,
          seller[i].owner.account.avatar,
        ];
        return (
          <div className="owner">
            <span className="avatar-individual">
              <img src={owner[1]} alt="avatar image" />
            </span>
            <p>{owner[0]}</p>
          </div>
        );
      }
    }
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="individual-offer">
      <div className="offer-image">
        <img src={data.product_image} alt={data.product_name} />
      </div>
      <div className="right-bloc">
        <p className="price-individual">{data.product_price}€</p>

        <div className="bloc-list">
          {data.product_details.map((elem, index) => {
            const keys = Object.keys(elem);
            return (
              <div className="details-list" key={index}>
                <div key={index} className="detail-titles-individual">
                  {keys[0]}
                </div>
                <div key={index} className="detail-individual">
                  {elem[keys[0]]}
                </div>
              </div>
            );
          })}
        </div>
        <div className="line">
          <hr />
        </div>
        <h1>{data.product_name}</h1>

        <p className="description">{data.product_description}</p>
        <p>{research()}</p>
      </div>
    </div>
  );
}

export default Offer;
