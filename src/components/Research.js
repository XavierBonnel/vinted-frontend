import React from "react";

function Research({ handleTitleChange, handleSort }) {
  //   const { title } = useParams();
  //   const { skip } = useParams();
  //   const { sort } = useParams();
  //   const { limit } = useParams();
  //     const { price-min } = useParams();
  // const { price-max } = useParams();

  return (
    <div>
      <input onChange={handleTitleChange} />
      <div className="switch-range">
        <label class="switch">
          <input type="checkbox" onClick={handleSort} />
          <span class="slider round"></span>
        </label>
        <input type="range" />
      </div>
    </div>
  );
}

export default Research;
