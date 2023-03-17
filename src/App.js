import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  //* 1. Set up Loading state and Tours state.
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //* 2. Create a function to remove a tour from the tours state. This function will be passed a prop to the tour component where it is called/used.
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  //* 3. Fetching data from API.
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);
      setLoading(false); // Set loading state to false after fetching data.
      setTours(tours); // Set tours state to fetched data.
    } catch (error) {
      setLoading(false); // Set loading state to false if there is an error.
      console.log(error);
    }
  };

  //* 4. Call fetchTours() function in useEffect().
  useEffect(() => {
    fetchTours();
  }, []);

  //* 5. Render Loading component if loading state is true.
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  //* 6. Render No tours left component if tours state is empty after all tours have been removed from the screen, with a refresh button to restore and render all the tours (by calling the fetchTour function) to the screen.
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />{" "}
      {/* //* 6. Pass tours state containing the tours data and removeTour function as props to Tours component. */}
    </main>
  );
}

export default App;
