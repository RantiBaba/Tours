import React from "react";
import Tour from "./Tour";

//* 1. Destructure tours data and the removeTour function.
const Tours = ({ tours, removeTour }) => {
  //* 1. Destructure tours from props.
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              {...tour}
              //* 2. Pass all the properties of tour object as props to the Tour component.
              // * ...tour simply means that we are passing all the rest of the properties of tour object (except id) as props to the Tour component.

              removeTour={removeTour} //* 3. Pass removeTour function as props to the Tour component.
              data-testid={tour.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
