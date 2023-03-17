import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  //* 1. Set up readMore state.
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}{" "}
          {/* // 2. If readMore is true, show the full info. If readMore is false, show the first 200 characters of info. */}
          <button onClick={() => setReadMore(!readMore)}>
            {" "}
            {/* // 3. When the button is clicked, set readMore to the opposite of the boolean value it is currently. */}
            {readMore ? "show less" : "read more"}{" "}
            {/* // 4. If readMore is true, display text "show less". If readMore is false, display text "read more". */}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          {" "}
          {/* // 5. When the button is clicked, call the removeTour function and pass the id of the tour to be removed as an argument. See the function in App.js */}
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
