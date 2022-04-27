import React, { useState } from "react";

function Research({
  handleTitleChange,
  handleSort,
  handlePriceLimit,
  priceLimit,
  setSort,
}) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="research">
      <input placeholder="Que recherchez vous ?" onChange={handleTitleChange} />
      <div className="switch-range">
        <label>ordre décroissant</label>
        <input
          type="checkbox"
          checked={checked}
          onClick={(event) => {
            if (!checked) {
              setChecked(true);
              setSort("price-desc");
            } else {
              setChecked(false);
              setSort("price-asc");
            }
          }}
        />
        {/* Too much calls to backend makes heroku crash, avoid range for the moment */}
        <span>price limit :</span>
        <input
          style={{ width: "60px" }}
          // className="input-range"
          // type="range"
          // min="0"
          // max="2000"
          onChange={handlePriceLimit}
        />
        {/* <span>{priceLimit}</span> */}
      </div>
    </div>
  );
}

export default Research;
