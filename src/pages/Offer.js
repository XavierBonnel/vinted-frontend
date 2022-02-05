import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//ici faire isloading params recup offre et faire state
function Offer() {
  const { id } = useParams();
  console.log({ id });
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log("coucou");

  useEffect(() => {
    const fetchData = async () => {
      console.log("coucou2");
      const response = await axios(
        `https://my--vinted-backend.herokuapp.com/offers/${id}`
      );
      //comment récupérer les caractéristique de l'offre désignée par l'id ?
      console.log("coucou3");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h1>{data.product_name}</h1>
      <div>
        <img src={data.product_image} alt={data.product_name} />
      </div>
      <p>{data.product_price}</p>
      <p>{data.product_details[1].TAILLE}</p>
      <p>data.product_details[0].MARQUE}</p>
    </div>
  );
}

export default Offer;
