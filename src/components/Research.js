import React from "react";

function Research({
  handleTitleChange,
  handleSort,
  handlePriceLimit,
  priceLimit,
}) {
  return (
    <div className="research">
      <input onChange={handleTitleChange} />
      <div className="switch-range">
        <label class="switch">
          <input type="checkbox" onClick={handleSort} />
          <span class="slider round"></span>
        </label>
        <input
          className="input-range"
          type="range"
          min="0"
          max="2000"
          onChange={handlePriceLimit}
        />
        <span>{priceLimit}</span>
      </div>
    </div>
  );
}

export default Research;
