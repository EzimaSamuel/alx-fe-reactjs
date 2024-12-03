import React, { useState } from "react";
import Axios from "axios";

function Movies() {
  // State to store the fetched data
  const [movie, setMovie] = useState("");

  // Function to fetch data when the button is clicked
  const fetchMovie = () => {
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        setMovie(res.data.fact); // Update state with fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="Navbar">
      <button onClick={fetchMovie} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        Generate Movie Fact
      </button>
      {movie && (
        <p className="mt-4 text-lg text-gray-700">{movie}</p>
      )}
    </div>
  );
}

export default Movies;
