import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//ici faire isloading params recup offre et faire state
function Offer() {
  const { id } = useParams();
  console.log({ id });
  const [data, setData] = useState();
  const [seller, setSeller] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [sellerDetails, setSellerDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my--vinted-backend.herokuapp.com/offer?id=${id}`
      );

      const sellerList = await axios.get(
        "https://my--vinted-backend.herokuapp.com/offers"
      );
      //comment récupérer les caractéristique de l'offre désignée par l'id ?
      setSeller(sellerList.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // for (let i = 0; i < seller.length; i++) {
  //   console.log("dans for");
  //   // est-ce que input est présent dans keywords
  //   if (seller[i].owner._id.includes(data.owner)) {
  //     setSellerDetails.push(
  //       seller[i].owner.account.username,
  //       seller[i].owner.account.avatar
  //     );
  //   }
  // }

  return isLoading ? (
    <p>Loading...</p>
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
              <div className="details-list">
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

        <p>{data.product_description}</p>
        {/* {data.owner === seller.owner._id.map()} */}
        <span>{data.owner}</span>
        {/* <div className="avatar-and-username">
          <img
            className="avatar"
            src={data.owner.account.avatar}
            alt="avatar-image"
          />
          <span>{data.owner.account.username}</span>
        </div> */}
      </div>
    </div>
  );
}

export default Offer;
