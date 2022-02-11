import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//ici faire isloading params recup offre et faire state
function Offer() {
  const { id } = useParams();
  console.log({ id });
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my--vinted-backend.herokuapp.com/offer?id=${id}`
      );
      //comment récupérer les caractéristique de l'offre désignée par l'id ?
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="individual-offer">
      <div className="offer-image">
        <img src={data.product_image} alt={data.product_name} />
      </div>
      <div className="right-bloc">
      <p className="price-individual" >{data.product_price}€</p>
        <h1>{data.product_name}</h1>
        <p>{data.product_details[1].TAILLE}</p>
        <p>{data.product_details[0].MARQUE}</p>
        <p>{data.product_details[2].ETAT}</p>
        <p>{data.product_details[3].COULEUR}</p>
        <p>{data.product_details[4].EMPLACEMENT}</p>
        <p>{data.product_description}</p>



      </div>
    </div>
  );
}

export default Offer;
