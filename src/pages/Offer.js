import React from "react";

function Offer({ offer }) {
  return (
    <div>
      <h1>{offer.product_name}</h1>
      <div>
        <img src={offer.product_image} alt={offer.product_name} />
      </div>
      <p>{offer.product_price}</p>
      <p>{offer.product_details[1].TAILLE}</p>
      <p>{offer.product_details[0].MARQUE}</p>
    </div>
  );
}

export default Offer;
